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

 type Result = {
  name: string;
  clientTime?: number;
  keys: {
      [key: string]: string | number | boolean | bigInt.BigInteger;
  }
 } | {
    name: string;
    message: string;
    [key: string]: any;
  };

export class GameEventDescription {
    public eventId: number;
    public eventName: keyof typeof enrichmentT;
    public keys: IKey[];
    public enrichments: any;
    constructor(bufferReader: BufferReader) {
      this.eventId = bufferReader.readInt32LE();
      this.eventName = bufferReader.readCString() as keyof typeof enrichmentT ;
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
  
    unserialize(bufferReader : BufferReader) {
      const clientTime = bufferReader.readFloatLE();
  
      const result: Result = {
        name: this.eventName,
        clientTime: clientTime,
        keys: {},
      };
  
      for (let i = 0; i < this.keys.length; ++i) {
        const key = this.keys[i];
  
        const keyName = key?.name;
  
        let keyValue: string | number | boolean | bigInt.BigInteger;
  
        switch (key?.type) {
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
            throw (
              "GameEventDescription.prototype.unserialize: key.type=" + key?.type
            );
        }
  
        if (this.enrichments && keyName && this.enrichments[keyName]) {
          keyValue = this.enrichments[keyName].unserialize(
            bufferReader,
            keyValue
          );
        }
  
        result.keys[key.name] = keyValue;
      }
  
      return result;
    }
  }

export class GameEventUnserializer {
    public enrichments: typeof enrichmentT;
    public knownEvents:  IEvent = {};
  
    constructor(enrichments: typeof enrichmentT) {
      this.enrichments = enrichments;
    }
  
    unserialize(bufferReader: BufferReader) {
      const eventId = bufferReader.readInt32LE();
      let gameEvent: GameEventDescription | undefined;
  
      if (0 == eventId) {
        gameEvent = new GameEventDescription(bufferReader);
        this.knownEvents[gameEvent.eventId] = gameEvent;
  
        if (this.enrichments[gameEvent.eventName])
          gameEvent.enrichments = this.enrichments[gameEvent.eventName];
  
      } else gameEvent = this.knownEvents[eventId];
  
      if (undefined === gameEvent)
        throw "GameEventUnserializer.unserialize: eventId=" + eventId;
  
      return gameEvent.unserialize(bufferReader);
    }
  }