import { BufferReader } from "../BufferReader";
export declare class UseridEnrichment {
    enrichments: string[];
    constructor();
    unserialize(bufferReader: BufferReader, keyValue: any): {
        value: any;
        xuid: string;
        eyeOrigin: number[];
        eyeAngles: number[];
    };
}
export declare class EntitynumEnrichment {
    enrichments: string[];
    constructor();
    unserialize(bufferReader: BufferReader, keyValue: any): {
        value: any;
        origin: number[];
        angles: number[];
    };
}
//# sourceMappingURL=enrichments.d.ts.map