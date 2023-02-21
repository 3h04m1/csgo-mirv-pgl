"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichments = void 0;
const enrichments_1 = require("./enrichments");
const useridEnrichment = new enrichments_1.UseridEnrichment();
const entitynumEnrichment = new enrichments_1.EntitynumEnrichment();
exports.enrichments = {
    player_death: {
        userid: useridEnrichment,
        attacker: useridEnrichment,
        assister: useridEnrichment,
    },
    other_death: {
        attacker: useridEnrichment,
    },
    player_hurt: {
        userid: useridEnrichment,
        attacker: useridEnrichment,
    },
    item_purchase: {
        userid: useridEnrichment,
    },
    bomb_beginplant: {
        userid: useridEnrichment,
    },
    bomb_abortplant: {
        userid: useridEnrichment,
    },
    bomb_planted: {
        userid: useridEnrichment,
    },
    bomb_defused: {
        userid: useridEnrichment,
    },
    bomb_exploded: {
        userid: useridEnrichment,
    },
    bomb_pickup: {
        userid: useridEnrichment,
    },
    bomb_dropped: {
        userid: useridEnrichment,
        entindex: entitynumEnrichment,
    },
    defuser_dropped: {
        entityid: entitynumEnrichment,
    },
    defuser_pickup: {
        entityid: entitynumEnrichment,
        userid: useridEnrichment,
    },
    bomb_begindefuse: {
        userid: useridEnrichment,
    },
    bomb_abortdefuse: {
        userid: useridEnrichment,
    },
    hostage_follows: {
        userid: useridEnrichment,
        hostage: entitynumEnrichment,
    },
    hostage_hurt: {
        userid: useridEnrichment,
        hostage: entitynumEnrichment,
    },
    hostage_killed: {
        userid: useridEnrichment,
        hostage: entitynumEnrichment,
    },
    hostage_rescued: {
        userid: useridEnrichment,
        hostage: entitynumEnrichment,
    },
    hostage_stops_following: {
        userid: useridEnrichment,
        hostage: entitynumEnrichment,
    },
    hostage_call_for_help: {
        hostage: entitynumEnrichment,
    },
    vip_escaped: {
        userid: useridEnrichment,
    },
    player_radio: {
        userid: useridEnrichment,
    },
    bomb_beep: {
        entindex: entitynumEnrichment,
    },
    weapon_fire: {
        userid: useridEnrichment,
    },
    weapon_fire_on_empty: {
        userid: useridEnrichment,
    },
    grenade_thrown: {
        userid: useridEnrichment,
    },
    weapon_outofammo: {
        userid: useridEnrichment,
    },
    weapon_reload: {
        userid: useridEnrichment,
    },
    weapon_zoom: {
        userid: useridEnrichment,
    },
    silencer_detach: {
        userid: useridEnrichment,
    },
    inspect_weapon: {
        userid: useridEnrichment,
    },
    weapon_zoom_rifle: {
        userid: useridEnrichment,
    },
    player_spawned: {
        userid: useridEnrichment,
    },
    item_pickup: {
        userid: useridEnrichment,
    },
    item_pickup_failed: {
        userid: useridEnrichment,
    },
    item_remove: {
        userid: useridEnrichment,
    },
    ammo_pickup: {
        userid: useridEnrichment,
        index: entitynumEnrichment,
    },
    item_equip: {
        userid: useridEnrichment,
    },
    enter_buyzone: {
        userid: useridEnrichment,
    },
    exit_buyzone: {
        userid: useridEnrichment,
    },
    enter_bombzone: {
        userid: useridEnrichment,
    },
    exit_bombzone: {
        userid: useridEnrichment,
    },
    enter_rescue_zone: {
        userid: useridEnrichment,
    },
    exit_rescue_zone: {
        userid: useridEnrichment,
    },
    silencer_off: {
        userid: useridEnrichment,
    },
    silencer_on: {
        userid: useridEnrichment,
    },
    buymenu_open: {
        userid: useridEnrichment,
    },
    buymenu_close: {
        userid: useridEnrichment,
    },
    round_end: {
        winner: useridEnrichment,
    },
    grenade_bounce: {
        userid: useridEnrichment,
    },
    hegrenade_detonate: {
        userid: useridEnrichment,
    },
    flashbang_detonate: {
        userid: useridEnrichment,
    },
    smokegrenade_detonate: {
        userid: useridEnrichment,
    },
    smokegrenade_expired: {
        userid: useridEnrichment,
    },
    molotov_detonate: {
        userid: useridEnrichment,
    },
    decoy_detonate: {
        userid: useridEnrichment,
    },
    decoy_started: {
        userid: useridEnrichment,
    },
    tagrenade_detonate: {
        userid: useridEnrichment,
    },
    decoy_firing: {
        userid: useridEnrichment,
    },
    bullet_impact: {
        userid: useridEnrichment,
    },
    player_footstep: {
        userid: useridEnrichment,
    },
    player_jump: {
        userid: useridEnrichment,
    },
    player_blind: {
        userid: useridEnrichment,
        entityid: entitynumEnrichment,
    },
    player_falldamage: {
        userid: useridEnrichment,
    },
    door_moving: {
        entityid: entitynumEnrichment,
        userid: useridEnrichment,
    },
    spec_target_updated: {
        userid: useridEnrichment,
    },
    player_avenged_teammate: {
        avenger_id: useridEnrichment,
        avenged_player_id: useridEnrichment,
    },
    round_mvp: {
        userid: useridEnrichment,
    },
    player_decal: {
        userid: useridEnrichment,
    },
    player_reset_vote: {
        userid: useridEnrichment,
    },
    start_vote: {
        userid: useridEnrichment,
    },
    player_given_c4: {
        userid: useridEnrichment,
    },
    player_become_ghost: {
        userid: useridEnrichment,
    },
    jointeam_failed: {
        userid: useridEnrichment,
    },
    teamchange_pending: {
        userid: useridEnrichment,
    },
    ammo_refill: {
        userid: useridEnrichment,
    },
    weaponhud_selection: {
        userid: useridEnrichment,
    },
};
//# sourceMappingURL=constants.js.map