"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserIdEnrichment = exports.EntitynumEnrichment = void 0;
class EntitynumEnrichment {
    constructor() {
        this.enrichments = ["entnumWithOrigin", "entnumWithAngles"];
    }
    unserialize(bufferReader, keyValue) {
        const origin = [
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
        ];
        const angles = [
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
        ];
        return {
            value: keyValue,
            origin: origin,
            angles: angles,
        };
    }
}
exports.EntitynumEnrichment = EntitynumEnrichment;
class UserIdEnrichment {
    constructor() {
        this.enrichments = [
            "useridWithSteamId",
            "useridWithEyePosition",
            "useridWithEyeAngles",
        ];
    }
    unserialize(bufferReader, keyValue) {
        const xuid = bufferReader.readBigUInt64LE().toString();
        const eyeOrigin = [
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
        ];
        const eyeAngles = [
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
            bufferReader.readFloatLE(),
        ];
        return {
            value: keyValue,
            xuid: xuid,
            eyeOrigin: eyeOrigin,
            eyeAngles: eyeAngles,
        };
    }
}
exports.UserIdEnrichment = UserIdEnrichment;
