import { BufferReader } from "../BufferReader";

export class EntitynumEnrichment {
  public enrichments: string[];
  constructor() {
    this.enrichments = ["entnumWithOrigin", "entnumWithAngles"];
  }
  unserialize(bufferReader:BufferReader, keyValue:any) {
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

export class UserIdEnrichment {
  public enrichments: string[];
  constructor() {
    this.enrichments = [
      "useridWithSteamId",
      "useridWithEyePosition",
      "useridWithEyeAngles",
    ];
  }

  unserialize(bufferReader:BufferReader , keyValue:any) {
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