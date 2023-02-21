import bigInt from "big-integer";
import { BufferReader } from "../BufferReader";
import { enrichments as enrichmentT } from "./constants";
interface IKey {
    name: string;
    type: number;
}
interface IEvent {
    [key: string | number]: GameEventDescription;
}
export type Result = {
    name: string;
    clientTime?: number;
    keys: {
        [key: string]: string | number | boolean | bigInt.BigInteger;
    };
    [key: string]: any;
};
export declare class GameEventDescription {
    eventId: number;
    eventName: keyof typeof enrichmentT;
    keys: IKey[];
    enrichments: any;
    constructor(bufferReader: BufferReader);
    unserialize(bufferReader: BufferReader): Result;
}
export declare class GameEventUnserializer {
    enrichments: typeof enrichmentT;
    knownEvents: IEvent;
    constructor(enrichments: typeof enrichmentT);
    unserialize(bufferReader: BufferReader): Result;
}
export {};
//# sourceMappingURL=gameEvent.d.ts.map