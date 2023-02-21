/// <reference types="node" />
import bigInt from "big-integer";
export declare class BufferReader {
    buffer: Buffer;
    index: number;
    constructor(buffer: Buffer);
    readBigUInt64LE(): bigInt.BigInteger;
    readUInt32LE(): number;
    readInt32LE(): number;
    readInt16LE(): number;
    readInt8(): number;
    readUInt8(): number;
    readBoolean(): boolean;
    readFloatLE(): number;
    readCString(): string;
    eof(): boolean;
}
//# sourceMappingURL=BufferReader.d.ts.map