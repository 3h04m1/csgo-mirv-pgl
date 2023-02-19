import ws from "ws";
import http from "http";
import { parseMIRV, sendCommand } from ".";
const server = http.createServer();
const wss = new ws.Server({ server, path: "/mirv" });
let mirvWS;
const knowEvents = [];
wss.on("connection", (ws) => {
    if (mirvWS) {
        mirvWS.close();
        // sendCommand(ws, "echo \"Connected to websocket\"")
    }
    mirvWS = ws;
    mirvWS.send("hello");
    mirvWS.on("message", (data) => {
        const mirv = parseMIRV(data, mirvWS);
        console.log(mirv.name);
        if (mirv.name === "player_death") {
            console.log("Found player_death event\n\n\n\n");
            console.log(JSON.stringify(mirv, null, 2));
            console.log("\n\n\n\n");
            sendCommand(mirvWS, "demo_pause");
        }
        if (!knowEvents.includes(mirv.name)) {
            knowEvents.push(mirv.name);
        }
    });
});
server.listen(3000, () => console.log("Listening on port 3000"));
// on ctrl+c close the server and the websocket and print known events
process.on('SIGINT', () => {
    console.log(`\n\n\n${'_'.repeat(10)}Known events:`);
    // sort events alphabetically
    const events = knowEvents.sort();
    console.log(events.join("\n"));
    server.close();
    mirvWS.close();
    process.exit();
});
