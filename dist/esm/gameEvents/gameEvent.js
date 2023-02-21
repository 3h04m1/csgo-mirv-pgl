export class GameEventDescription {
    constructor(bufferReader) {
        this.eventId = bufferReader.readInt32LE();
        this.eventName = bufferReader.readCString();
        this.keys = [];
        this.enrichments = null;
        while (bufferReader.readBoolean()) {
            var keyName = bufferReader.readCString();
            var keyType = bufferReader.readInt32LE();
            this.keys.push({
                name: keyName,
                type: keyType
            });
        }
    }
    unserialize(bufferReader) {
        var clientTime = bufferReader.readFloatLE();
        var result = {
            name: this.eventName,
            clientTime: clientTime,
            keys: {}
        };
        for (var i = 0; i < this.keys.length; ++i) {
            var key = this.keys[i];
            var keyName = key.name;
            var keyValue;
            switch (key.type) {
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
                    throw "GameEventDescription.prototype.unserialize: key.type=" + key.type;
            }
            if (this.enrichments && this.enrichments[keyName]) {
                keyValue = this.enrichments[keyName].unserialize(bufferReader, keyValue);
            }
            result.keys[key.name] = keyValue;
        }
        return result;
    }
}
export class GameEventUnserializer {
    constructor(enrichments) {
        this.knownEvents = {};
        this.enrichments = enrichments;
        this.knownEvents = {};
    }
    unserialize(bufferReader) {
        var eventId = bufferReader.readInt32LE();
        var gameEvent;
        if (0 == eventId) {
            gameEvent = new GameEventDescription(bufferReader);
            this.knownEvents[gameEvent.eventId] = gameEvent;
            if (this.enrichments[gameEvent.eventName])
                gameEvent.enrichments = this.enrichments[gameEvent.eventName];
        }
        else
            gameEvent = this.knownEvents[eventId];
        if (undefined === gameEvent)
            throw "GameEventUnserializer.prototype.unserialize: eventId=" + eventId;
        return gameEvent.unserialize(bufferReader);
    }
}
//# sourceMappingURL=gameEvent.js.map