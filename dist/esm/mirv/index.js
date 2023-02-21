import { BufferReader } from "../BufferReader";
import { enrichments } from "../gameEvents/constants";
import { GameEventUnserializer } from "../gameEvents/gameEvent";
export function sendCommand(ws, command) {
    const text = "exec\0" + command + "\0";
    const commandBuffer = Buffer.from(text, "utf8");
    ws.send(new Uint8Array(commandBuffer), { binary: true });
}
function registerEnrichments(ws) {
    for (const eventName in enrichments) {
        for (const keyName in enrichments[eventName]) {
            const arrEnrich = enrichments[eventName][keyName].enrichments;
            for (let i = 0; i < arrEnrich.length; ++i) {
                sendCommand(ws, `mirv_pgl events enrich eventProperty "${arrEnrich[i]}" "${eventName}" "${keyName}"`);
            }
        }
    }
}
const gameEventUnserializer = new GameEventUnserializer(enrichments);
export function parseMIRV(data, ws) {
    if (!(data instanceof Buffer)) {
        return {
            name: "error",
            keys: {
                message: "Data is not a buffer",
            },
        };
    }
    const bufferReader = new BufferReader(Buffer.from(data));
    let res = {
        name: "",
        clientTime: undefined,
        keys: {},
    };
    try {
        while (!bufferReader.eof()) {
            const cmd = bufferReader.readCString();
            switch (cmd) {
                case "hello":
                    {
                        const version = bufferReader.readUInt32LE();
                        console.log("mirv_pgl connected");
                        sendCommand(ws, 'echo "Connected to websocket"');
                        console.log("version = " + version);
                        if (2 != version)
                            throw "Error: version mismatch";
                        ws.send(new Uint8Array(Buffer.from("transBegin\0", "utf8")), {
                            binary: true,
                        });
                        sendCommand(ws, "mirv_pgl events enrich clientTime 1");
                        registerEnrichments(ws);
                        sendCommand(ws, "mirv_pgl events enabled 1");
                        sendCommand(ws, "mirv_pgl events useCache 1");
                        ws.send(new Uint8Array(Buffer.from("transEnd\0", "utf8")), {
                            binary: true,
                        });
                    }
                    break;
                case "dataStart":
                    res.name = "dataStart";
                    break;
                case "dataStop":
                    res.name = "dataStop";
                    break;
                case "levelInit":
                    const map = bufferReader.readCString();
                    res.name = "levelInit";
                    res.keys = {
                        map: map,
                    };
                    break;
                case "levelShutdown":
                    res.name = "levelShutdown";
                    break;
                case "cam":
                    res = {
                        name: "cam",
                        clientTime: bufferReader.readFloatLE(),
                        keys: {
                            xPosition: bufferReader.readFloatLE(),
                            yPosition: bufferReader.readFloatLE(),
                            zPosition: bufferReader.readFloatLE(),
                            xRotation: bufferReader.readFloatLE(),
                            yRotation: bufferReader.readFloatLE(),
                            zRotation: bufferReader.readFloatLE(),
                            fov: bufferReader.readFloatLE(),
                        },
                    };
                    break;
                case "gameEvent":
                    res = gameEventUnserializer.unserialize(bufferReader);
                    if (res.name === "player_death") {
                        return {
                            name: "player_death",
                            clientTime: res.clientTime,
                            keys: Object.assign({}, res.keys),
                        };
                    }
                    break;
                default:
                    res = {
                        name: "error",
                        keys: {
                            message: "Event not found",
                        },
                    };
            }
        }
    }
    catch (err) {
        res = {
            name: "error",
            keys: {
                message: err.toString(),
            },
        };
    }
    finally {
        return res;
    }
}
//# sourceMappingURL=index.js.map