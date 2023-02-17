import { BufferReader } from "../BufferReader";
export declare class EntitynumEnrichment {
    enrichments: string[];
    constructor();
    unserialize(bufferReader: BufferReader, keyValue: any): {
        value: any;
        origin: number[];
        angles: number[];
    };
}
export declare class UserIdEnrichment {
    enrichments: string[];
    constructor();
    unserialize(bufferReader: BufferReader, keyValue: any): {
        value: any;
        xuid: string;
        eyeOrigin: number[];
        eyeAngles: number[];
    };
}
