import bigInt from "big-integer";
import { BufferReader } from "../BufferReader";
import { enrichments as enrichmentT } from "./constants";
interface IKey {
    name: string;
    type: number;
}
interface IEvent {
    [key: string]: GameEventDescription;
}
export declare class GameEventDescription {
    eventId: number;
    eventName: keyof typeof enrichmentT;
    keys: IKey[];
    enrichments: any;
    constructor(bufferReader: BufferReader);
    unserialize(bufferReader: BufferReader): {
        name: string;
        clientTime?: number | undefined;
        keys: {
            [key: string]: string | number | boolean | bigInt.BigInteger;
        };
    };
}
export declare class GameEventUnserializer {
    enrichments: typeof enrichmentT;
    knownEvents: IEvent;
    constructor(enrichments: typeof enrichmentT);
    unserialize(bufferReader: BufferReader): {
        name: string;
        clientTime?: number | undefined;
        keys: {
            [key: string]: string | number | boolean | bigInt.BigInteger;
        };
    };
}
export {};
