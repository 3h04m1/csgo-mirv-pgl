"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const http_1 = __importDefault(require("http"));
const _1 = require(".");
const server = http_1.default.createServer();
const wss = new ws_1.default.Server({ server, path: "/mirv" });
let mirvWS;
const knowEvents = [];
wss.on("connection", (ws) => {
    if (mirvWS) {
        mirvWS.close();
    }
    mirvWS = ws;
    mirvWS.send("hello");
    mirvWS.on("message", (data) => {
        const mirv = (0, _1.parseMIRV)(data, mirvWS);
        console.log(mirv.name);
        if (mirv.name === "player_death") {
            console.log("Found player_death event\n\n\n\n");
            console.log(JSON.stringify(mirv, null, 2));
            console.log("\n\n\n\n");
            (0, _1.sendCommand)(mirvWS, "demo_pause");
        }
        if (!knowEvents.includes(mirv.name)) {
            knowEvents.push(mirv.name);
        }
    });
});
server.listen(3000, () => console.log("Listening on port 3000"));
process.on('SIGINT', () => {
    console.log(`\n\n\n${'_'.repeat(10)}Known events:`);
    const events = knowEvents.sort();
    console.log(events.join("\n"));
    server.close();
    mirvWS.close();
    process.exit();
});
//# sourceMappingURL=test.js.map