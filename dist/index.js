"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const http_1 = __importDefault(require("http"));
const mirv_1 = require("./mirv");
let ws;
const server = http_1.default.createServer();
let wss = new ws_1.default.Server({ server: server });
wss.on("connection", function (newWs) {
    if (ws) {
        ws.close();
    }
    ws = newWs;
    console.log("New client connected");
    ws.on("message", (data) => console.log((0, mirv_1.parseMIRV)(data, ws)));
    ws.on("close", () => console.log("Connection closed!"));
    ws.on("error", (err) => console.log("Error: " + err));
});
server.listen(3001);
console.log("Listening on port 31337, path /mirv ...");
