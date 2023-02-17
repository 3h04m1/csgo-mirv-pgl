import WebSocketServer from "ws";
import http from "http";
// @ts-ignore
import { parseMIRV } from "mirv";

let ws: WebSocketServer;
const server = http.createServer();
let wss = new WebSocketServer.Server({ server: server });

wss.on("connection", function (newWs) {
  if (ws) {
    ws.close();
  }
  ws = newWs;

  console.log("New client connected");

  ws.on("message", (data:Buffer) => console.log(parseMIRV(data, ws)));
  ws.on("close", () => console.log("Connection closed!"));
  ws.on("error", (err) => console.log("Error: " + err));
});
server.listen(3001);
console.log("Listening on port 31337, path /mirv ...");
