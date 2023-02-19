import { RawData, WebSocket } from "ws";
import { Result } from "../gameEvents/gameEvent";
/**
 * @param ws - The websocket where mirv_pgl is listening
 * @param {string} command - The command to send to the game console
 * @description
 * Sends a command to the game Console, it will be executed on the next tick
 * @example sendCommand(ws, "echo \"Hello World\"");
 * sendCommand(ws, "demo_pause");
*/
export declare function sendCommand(ws: WebSocket, command: string): void;
/**
 * Returns a Result object with the name of the event and the keys of the event
 * @param data - The data to parse
 * @param ws - The websocket to send commands to the game
 *
*/
export declare function parseMIRV(data: RawData, ws: WebSocket): Result;
