"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEventUnserializer = exports.GameEventDescription = void 0;
class GameEventDescription {
    constructor(bufferReader) {
        this.eventId = bufferReader.readInt32LE();
        this.eventName = bufferReader.readCString();
        this.keys = [];
        this.enrichments = null;
        while (bufferReader.readBoolean()) {
            const keyName = bufferReader.readCString();
            const keyType = bufferReader.readInt32LE();
            this.keys.push({
                name: keyName,
                type: keyType,
            });
        }
    }
    unserialize(bufferReader) {
        const clientTime = bufferReader.readFloatLE();
        const result = {
            name: this.eventName,
            clientTime: clientTime,
            keys: {},
        };
        for (let i = 0; i < this.keys.length; ++i) {
            const key = this.keys[i];
            const keyName = key === null || key === void 0 ? void 0 : key.name;
            let keyValue;
            switch (key === null || key === void 0 ? void 0 : key.type) {
                case 1:
                    keyValue = bufferReader.readCString();
                    break;
                case 2:
                    keyValue = bufferReader.readFloatLE();
                    break;
                case 3:
                    keyValue = bufferReader.readInt32LE();
                    break;
                case 4:
                    keyValue = bufferReader.readInt16LE();
                    break;
                case 5:
                    keyValue = bufferReader.readInt8();
                    break;
                case 6:
                    keyValue = bufferReader.readBoolean();
                    break;
                case 7:
                    keyValue = bufferReader.readBigUInt64LE();
                    break;
                default:
                    throw ("GameEventDescription.prototype.unserialize: key.type=" + (key === null || key === void 0 ? void 0 : key.type));
            }
            if (this.enrichments && keyName && this.enrichments[keyName]) {
                keyValue = this.enrichments[keyName].unserialize(bufferReader, keyValue);
            }
            result.keys[key.name] = keyValue;
        }
        return result;
    }
}
exports.GameEventDescription = GameEventDescription;
class GameEventUnserializer {
    constructor(enrichments) {
        this.knownEvents = {};
        this.enrichments = enrichments;
    }
    unserialize(bufferReader) {
        const eventId = bufferReader.readInt32LE();
        let gameEvent;
        if (0 == eventId) {
            gameEvent = new GameEventDescription(bufferReader);
            this.knownEvents[gameEvent.eventId] = gameEvent;
            if (this.enrichments[gameEvent.eventName])
                gameEvent.enrichments = this.enrichments[gameEvent.eventName];
        }
        else
            gameEvent = this.knownEvents[eventId];
        if (undefined === gameEvent)
            throw "GameEventUnserializer.unserialize: eventId=" + eventId;
        return gameEvent.unserialize(bufferReader);
    }
}
exports.GameEventUnserializer = GameEventUnserializer;
