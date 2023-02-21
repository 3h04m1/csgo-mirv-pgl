import { UseridEnrichment, EntitynumEnrichment } from "./enrichments";
export declare const enrichments: {
    player_death: {
        userid: UseridEnrichment;
        attacker: UseridEnrichment;
        assister: UseridEnrichment;
    };
    other_death: {
        attacker: UseridEnrichment;
    };
    player_hurt: {
        userid: UseridEnrichment;
        attacker: UseridEnrichment;
    };
    item_purchase: {
        userid: UseridEnrichment;
    };
    bomb_beginplant: {
        userid: UseridEnrichment;
    };
    bomb_abortplant: {
        userid: UseridEnrichment;
    };
    bomb_planted: {
        userid: UseridEnrichment;
    };
    bomb_defused: {
        userid: UseridEnrichment;
    };
    bomb_exploded: {
        userid: UseridEnrichment;
    };
    bomb_pickup: {
        userid: UseridEnrichment;
    };
    bomb_dropped: {
        userid: UseridEnrichment;
        entindex: EntitynumEnrichment;
    };
    defuser_dropped: {
        entityid: EntitynumEnrichment;
    };
    defuser_pickup: {
        entityid: EntitynumEnrichment;
        userid: UseridEnrichment;
    };
    bomb_begindefuse: {
        userid: UseridEnrichment;
    };
    bomb_abortdefuse: {
        userid: UseridEnrichment;
    };
    hostage_follows: {
        userid: UseridEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_hurt: {
        userid: UseridEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_killed: {
        userid: UseridEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_rescued: {
        userid: UseridEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_stops_following: {
        userid: UseridEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_call_for_help: {
        hostage: EntitynumEnrichment;
    };
    vip_escaped: {
        userid: UseridEnrichment;
    };
    player_radio: {
        userid: UseridEnrichment;
    };
    bomb_beep: {
        entindex: EntitynumEnrichment;
    };
    weapon_fire: {
        userid: UseridEnrichment;
    };
    weapon_fire_on_empty: {
        userid: UseridEnrichment;
    };
    grenade_thrown: {
        userid: UseridEnrichment;
    };
    weapon_outofammo: {
        userid: UseridEnrichment;
    };
    weapon_reload: {
        userid: UseridEnrichment;
    };
    weapon_zoom: {
        userid: UseridEnrichment;
    };
    silencer_detach: {
        userid: UseridEnrichment;
    };
    inspect_weapon: {
        userid: UseridEnrichment;
    };
    weapon_zoom_rifle: {
        userid: UseridEnrichment;
    };
    player_spawned: {
        userid: UseridEnrichment;
    };
    item_pickup: {
        userid: UseridEnrichment;
    };
    item_pickup_failed: {
        userid: UseridEnrichment;
    };
    item_remove: {
        userid: UseridEnrichment;
    };
    ammo_pickup: {
        userid: UseridEnrichment;
        index: EntitynumEnrichment;
    };
    item_equip: {
        userid: UseridEnrichment;
    };
    enter_buyzone: {
        userid: UseridEnrichment;
    };
    exit_buyzone: {
        userid: UseridEnrichment;
    };
    enter_bombzone: {
        userid: UseridEnrichment;
    };
    exit_bombzone: {
        userid: UseridEnrichment;
    };
    enter_rescue_zone: {
        userid: UseridEnrichment;
    };
    exit_rescue_zone: {
        userid: UseridEnrichment;
    };
    silencer_off: {
        userid: UseridEnrichment;
    };
    silencer_on: {
        userid: UseridEnrichment;
    };
    buymenu_open: {
        userid: UseridEnrichment;
    };
    buymenu_close: {
        userid: UseridEnrichment;
    };
    round_end: {
        winner: UseridEnrichment;
    };
    grenade_bounce: {
        userid: UseridEnrichment;
    };
    hegrenade_detonate: {
        userid: UseridEnrichment;
    };
    flashbang_detonate: {
        userid: UseridEnrichment;
    };
    smokegrenade_detonate: {
        userid: UseridEnrichment;
    };
    smokegrenade_expired: {
        userid: UseridEnrichment;
    };
    molotov_detonate: {
        userid: UseridEnrichment;
    };
    decoy_detonate: {
        userid: UseridEnrichment;
    };
    decoy_started: {
        userid: UseridEnrichment;
    };
    tagrenade_detonate: {
        userid: UseridEnrichment;
    };
    decoy_firing: {
        userid: UseridEnrichment;
    };
    bullet_impact: {
        userid: UseridEnrichment;
    };
    player_footstep: {
        userid: UseridEnrichment;
    };
    player_jump: {
        userid: UseridEnrichment;
    };
    player_blind: {
        userid: UseridEnrichment;
        entityid: EntitynumEnrichment;
    };
    player_falldamage: {
        userid: UseridEnrichment;
    };
    door_moving: {
        entityid: EntitynumEnrichment;
        userid: UseridEnrichment;
    };
    spec_target_updated: {
        userid: UseridEnrichment;
    };
    player_avenged_teammate: {
        avenger_id: UseridEnrichment;
        avenged_player_id: UseridEnrichment;
    };
    round_mvp: {
        userid: UseridEnrichment;
    };
    player_decal: {
        userid: UseridEnrichment;
    };
    player_reset_vote: {
        userid: UseridEnrichment;
    };
    start_vote: {
        userid: UseridEnrichment;
    };
    player_given_c4: {
        userid: UseridEnrichment;
    };
    player_become_ghost: {
        userid: UseridEnrichment;
    };
    jointeam_failed: {
        userid: UseridEnrichment;
    };
    teamchange_pending: {
        userid: UseridEnrichment;
    };
    ammo_refill: {
        userid: UseridEnrichment;
    };
    weaponhud_selection: {
        userid: UseridEnrichment;
    };
};
//# sourceMappingURL=constants.d.ts.map