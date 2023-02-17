import { UserIdEnrichment, EntitynumEnrichment } from "./enrichments";
export declare const enrichments: {
    player_death: {
        userid: UserIdEnrichment;
        attacker: UserIdEnrichment;
        assister: UserIdEnrichment;
    };
    other_death: {
        attacker: UserIdEnrichment;
    };
    player_hurt: {
        userid: UserIdEnrichment;
        attacker: UserIdEnrichment;
    };
    item_purchase: {
        userid: UserIdEnrichment;
    };
    bomb_beginplant: {
        userid: UserIdEnrichment;
    };
    bomb_abortplant: {
        userid: UserIdEnrichment;
    };
    bomb_planted: {
        userid: UserIdEnrichment;
    };
    bomb_defused: {
        userid: UserIdEnrichment;
    };
    bomb_exploded: {
        userid: UserIdEnrichment;
    };
    bomb_pickup: {
        userid: UserIdEnrichment;
    };
    bomb_dropped: {
        userid: UserIdEnrichment;
        entindex: EntitynumEnrichment;
    };
    defuser_dropped: {
        entityid: EntitynumEnrichment;
    };
    defuser_pickup: {
        entityid: EntitynumEnrichment;
        userid: UserIdEnrichment;
    };
    bomb_begindefuse: {
        userid: UserIdEnrichment;
    };
    bomb_abortdefuse: {
        userid: UserIdEnrichment;
    };
    hostage_follows: {
        userid: UserIdEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_hurt: {
        userid: UserIdEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_killed: {
        userid: UserIdEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_rescued: {
        userid: UserIdEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_stops_following: {
        userid: UserIdEnrichment;
        hostage: EntitynumEnrichment;
    };
    hostage_call_for_help: {
        hostage: EntitynumEnrichment;
    };
    vip_escaped: {
        userid: UserIdEnrichment;
    };
    player_radio: {
        userid: UserIdEnrichment;
    };
    bomb_beep: {
        entindex: EntitynumEnrichment;
    };
    weapon_fire: {
        userid: UserIdEnrichment;
    };
    weapon_fire_on_empty: {
        userid: UserIdEnrichment;
    };
    grenade_thrown: {
        userid: UserIdEnrichment;
    };
    weapon_outofammo: {
        userid: UserIdEnrichment;
    };
    weapon_reload: {
        userid: UserIdEnrichment;
    };
    weapon_zoom: {
        userid: UserIdEnrichment;
    };
    silencer_detach: {
        userid: UserIdEnrichment;
    };
    inspect_weapon: {
        userid: UserIdEnrichment;
    };
    weapon_zoom_rifle: {
        userid: UserIdEnrichment;
    };
    player_spawned: {
        userid: UserIdEnrichment;
    };
    item_pickup: {
        userid: UserIdEnrichment;
    };
    item_pickup_failed: {
        userid: UserIdEnrichment;
    };
    item_remove: {
        userid: UserIdEnrichment;
    };
    ammo_pickup: {
        userid: UserIdEnrichment;
        index: EntitynumEnrichment;
    };
    item_equip: {
        userid: UserIdEnrichment;
    };
    enter_buyzone: {
        userid: UserIdEnrichment;
    };
    exit_buyzone: {
        userid: UserIdEnrichment;
    };
    enter_bombzone: {
        userid: UserIdEnrichment;
    };
    exit_bombzone: {
        userid: UserIdEnrichment;
    };
    enter_rescue_zone: {
        userid: UserIdEnrichment;
    };
    exit_rescue_zone: {
        userid: UserIdEnrichment;
    };
    silencer_off: {
        userid: UserIdEnrichment;
    };
    silencer_on: {
        userid: UserIdEnrichment;
    };
    buymenu_open: {
        userid: UserIdEnrichment;
    };
    buymenu_close: {
        userid: UserIdEnrichment;
    };
    round_end: {
        winner: UserIdEnrichment;
    };
    grenade_bounce: {
        userid: UserIdEnrichment;
    };
    hegrenade_detonate: {
        userid: UserIdEnrichment;
    };
    flashbang_detonate: {
        userid: UserIdEnrichment;
    };
    smokegrenade_detonate: {
        userid: UserIdEnrichment;
    };
    smokegrenade_expired: {
        userid: UserIdEnrichment;
    };
    molotov_detonate: {
        userid: UserIdEnrichment;
    };
    decoy_detonate: {
        userid: UserIdEnrichment;
    };
    decoy_started: {
        userid: UserIdEnrichment;
    };
    tagrenade_detonate: {
        userid: UserIdEnrichment;
    };
    decoy_firing: {
        userid: UserIdEnrichment;
    };
    bullet_impact: {
        userid: UserIdEnrichment;
    };
    player_footstep: {
        userid: UserIdEnrichment;
    };
    player_jump: {
        userid: UserIdEnrichment;
    };
    player_blind: {
        userid: UserIdEnrichment;
        entityid: EntitynumEnrichment;
    };
    player_falldamage: {
        userid: UserIdEnrichment;
    };
    door_moving: {
        entityid: EntitynumEnrichment;
        userid: UserIdEnrichment;
    };
    spec_target_updated: {
        userid: UserIdEnrichment;
    };
    player_avenged_teammate: {
        avenger_id: UserIdEnrichment;
        avenged_player_id: UserIdEnrichment;
    };
    round_mvp: {
        userid: UserIdEnrichment;
    };
    player_decal: {
        userid: UserIdEnrichment;
    };
    player_reset_vote: {
        userid: UserIdEnrichment;
    };
    start_vote: {
        userid: UserIdEnrichment;
    };
    player_given_c4: {
        userid: UserIdEnrichment;
    };
    player_become_ghost: {
        userid: UserIdEnrichment;
    };
    jointeam_failed: {
        userid: UserIdEnrichment;
    };
    teamchange_pending: {
        userid: UserIdEnrichment;
    };
    ammo_refill: {
        userid: UserIdEnrichment;
    };
    weaponhud_selection: {
        userid: UserIdEnrichment;
    };
};
