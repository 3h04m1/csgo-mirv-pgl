"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMIRV = void 0;
const BufferReader_1 = require("../BufferReader");
const constants_1 = require("../gameEvents/constants");
const gameEvent_1 = require("../gameEvents/gameEvent");
function sendCommand(ws, command) {
    const text = "exec\0" + command + "\0";
    const commandBuffer = Buffer.from(text, "utf8");
    ws.send(new Uint8Array(commandBuffer), { binary: true });
}
function registerEnrichments(ws) {
    for (const eventName in constants_1.enrichments) {
        // @ts-ignore
        for (const keyName in constants_1.enrichments[eventName]) {
            // @ts-ignore
            const arrEnrich = constants_1.enrichments[eventName][keyName].enrichments;
            for (let i = 0; i < arrEnrich.length; ++i) {
                sendCommand(ws, `mirv_pgl events enrich eventProperty "${arrEnrich[i]}" "${eventName}" "${keyName}"`);
            }
        }
    }
}
const gameEventUnserializer = new gameEvent_1.GameEventUnserializer(constants_1.enrichments);
function parseMIRV(data, ws) {
    if (!(data instanceof Buffer)) {
        return {
            name: "error",
            message: "data is not a buffer",
        };
    }
    const bufferReader = new BufferReader_1.BufferReader(Buffer.from(data));
    try {
        while (!bufferReader.eof()) {
            const cmd = bufferReader.readCString();
            switch (cmd) {
                case "hello":
                    {
                        const version = bufferReader.readUInt32LE();
                        console.log("mirv_pgl connected");
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
                    break;
                case "dataStop":
                    break;
                case "levelInit":
                    const map = bufferReader.readCString();
                    return {
                        name: "levelInit",
                        keys: {
                            map: map,
                        }
                    };
                case "levelShutdown":
                    break;
                case "cam":
                    return {
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
                        }
                    };
                case "gameEvent":
                    return gameEventUnserializer.unserialize(bufferReader);
                default:
                    return {
                        name: "error",
                        message: "Event not found",
                    };
            }
        }
    }
    catch (err) {
        return {
            name: "error",
            message: `err.toString()`
        };
    }
}
exports.parseMIRV = parseMIRV;
