// export class GameEventDescription {
//   public eventId: number;
//   public eventName: keyof typeof enrichmentT;
//   public keys: IKey[];
//   public enrichments: any;
//   constructor(bufferReader: BufferReader) {
//     this.eventId = bufferReader.readInt32LE();
//     this.eventName = bufferReader.readCString() as keyof typeof enrichmentT;
//     this.keys = [];
//     this.enrichments = null;
//     while (bufferReader.readBoolean()) {
//       const keyName = bufferReader.readCString();
//       const keyType = bufferReader.readInt32LE();
//       this.keys.push({
//         name: keyName,
//         type: keyType,
//       });
//     }
//   }
//   unserialize(bufferReader: BufferReader) {
//     const clientTime = bufferReader.readFloatLE();
//     const result: Result = {
//       name: this.eventName,
//       clientTime: clientTime,
//       keys: {},
//       case: 0,
//     };
//     for (let i = 0; i < this.keys.length; ++i) {
//       const key = this.keys[i];
//       const keyName = key?.name;
//       let keyValue: string | number | boolean | bigInt.BigInteger;
//       let casse: number;
//       switch (key?.type) {
//         case 1:
//           keyValue = bufferReader.readCString();
//           casse = 1;
//           break;
//         case 2:
//           keyValue = bufferReader.readFloatLE();
//           casse = 2;
//           break;
//         case 3:
//           keyValue = bufferReader.readInt32LE();
//           casse = 3;
//           break;
//         case 4:
//           keyValue = bufferReader.readInt16LE();
//           casse = 4;
//           break;
//         case 5:
//           keyValue = bufferReader.readInt8();
//           casse = 5;
//           break;
//         case 6:
//           keyValue = bufferReader.readBoolean();
//           casse = 6;
//           break;
//         case 7:
//           keyValue = bufferReader.readBigUInt64LE();
//           casse = 7;
//           break;
//         default:
//           throw (
//             "GameEventDescription.unserialize: key.type=" + key.type
//           );
//       }
//       if (this.enrichments && keyName && this.enrichments[keyName]) {
//         keyValue = this.enrichments[keyName].unserialize(
//           bufferReader,
//           keyValue
//         );
//       }
//       result.keys[key.name] = keyValue;
//       result.case = casse;
//     }
//     return result;
//   }
// }
// export class GameEventUnserializer {
//   public enrichments: typeof enrichmentT;
//   public knownEvents: IEvent = {};
//   constructor(enrichments: typeof enrichmentT) {
//     this.enrichments = enrichments;
//   }
//   unserialize(bufferReader: BufferReader) {
//     const eventId = bufferReader.readInt32LE();
//     let gameEvent: GameEventDescription | undefined;
//     if (!this.knownEvents[eventId]) {
//       gameEvent = new GameEventDescription(bufferReader);
//       this.knownEvents[gameEvent.eventId] = gameEvent;
//       // @ts-ignore
//       if (this.enrichments[gameEvent.eventName])
//       // @ts-ignore
//         gameEvent.enrichments = this.enrichments[gameEvent.eventName];
//     } else gameEvent = this.knownEvents[eventId];
//     // @ts-ignore
//     if (!enrichmentT[gameEvent.eventName]) {
//       console.log(gameEvent);
//     }
//     if (undefined === gameEvent)
//       throw "GameEventUnserializer.unserialize: eventId=" + eventId;
//     return gameEvent.unserialize(bufferReader);
//   }
// }
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
        this.knownEvents = {}; // id -> description	
    }
    unserialize(bufferReader) {
        var eventId = bufferReader.readInt32LE();
        var gameEvent;
        //wsConsole.print("=> "+eventId);
        if (0 == eventId) {
            gameEvent = new GameEventDescription(bufferReader);
            this.knownEvents[gameEvent.eventId] = gameEvent;
            if (this.enrichments[gameEvent.eventName])
                gameEvent.enrichments = this.enrichments[gameEvent.eventName];
            //wsConsole.print(gameEvent.eventName+" -> "+gameEvent.eventId);
        }
        else
            gameEvent = this.knownEvents[eventId];
        if (undefined === gameEvent)
            throw "GameEventUnserializer.prototype.unserialize: eventId=" + eventId;
        return gameEvent.unserialize(bufferReader);
    }
}
