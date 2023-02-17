/// <reference types="node" />
import { WebSocket } from "ws";
export declare function parseMIRV(data: Buffer, ws: WebSocket): {
    name: string;
    clientTime?: number | undefined;
    keys: {
        [key: string]: string | number | boolean | import("big-integer").BigInteger;
    };
} | {
    name: string;
    message: string;
} | undefined;
