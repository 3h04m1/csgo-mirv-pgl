export class UseridEnrichment {
    constructor() {
        this.enrichments = [
            'useridWithSteamId',
            'useridWithEyePosition',
            'useridWithEyeAngles'
        ];
    }
    unserialize(bufferReader, keyValue) {
        var xuid = bufferReader.readBigUInt64LE().toString();
        var eyeOrigin = [bufferReader.readFloatLE(), bufferReader.readFloatLE(), bufferReader.readFloatLE()];
        var eyeAngles = [bufferReader.readFloatLE(), bufferReader.readFloatLE(), bufferReader.readFloatLE()];
        return {
            value: keyValue,
            xuid: xuid,
            eyeOrigin: eyeOrigin,
            eyeAngles: eyeAngles,
        };
    }
}
export class EntitynumEnrichment {
    constructor() {
        this.enrichments = [
            'entnumWithOrigin',
            'entnumWithAngles'
        ];
    }
    unserialize(bufferReader, keyValue) {
        var origin = [bufferReader.readFloatLE(), bufferReader.readFloatLE(), bufferReader.readFloatLE()];
        var angles = [bufferReader.readFloatLE(), bufferReader.readFloatLE(), bufferReader.readFloatLE()];
        return {
            value: keyValue,
            origin: origin,
            angles: angles,
        };
    }
}
