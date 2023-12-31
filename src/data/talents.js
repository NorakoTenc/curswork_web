export const specNames = {
  41: "Fire",
  61: "Frost",
  81: "Arcane",
  161: "Arms",
  163: "Protection",
  164: "Fury",
  181: "Combat",
  182: "Assassination",
  183: "Subtlety",
  201: "Discipline",
  202: "Holy",
  203: "Shadow",
  261: "Elemental",
  262: "Restoration",
  263: "Enhancement",
  281: "Feral Combat",
  282: "Restoration",
  283: "Balance",
  301: "Destruction",
  302: "Affliction",
  303: "Demonology",
  361: "Beast Mastery",
  362: "Survival",
  363: "Marksmanship",
  381: "Retribution",
  382: "Holy",
  383: "Protection"
}

export const talentsBySpec = {
  41: {
    26: {
      id: 26,
      row: 0,
      col: 1,
      icon: "spell_fire_flamebolt",
      ranks: [11069, 12338, 12339, 12340, 12341],
      requires: []
    },
    30: {
      id: 30,
      row: 0,
      col: 2,
      icon: "spell_fire_meteorstorm",
      ranks: [11103, 12357, 12358, 12359, 12360],
      requires: []
    },
    34: {
      id: 34,
      row: 1,
      col: 0,
      icon: "spell_fire_incinerate",
      ranks: [11119, 11120, 12846, 12847, 12848],
      requires: []
    },
    28: {
      id: 28,
      row: 1,
      col: 1,
      icon: "spell_fire_flare",
      ranks: [11100, 12353],
      requires: []
    },
    27: {
      id: 27,
      row: 1,
      col: 2,
      icon: "spell_fire_fireball",
      ranks: [11078, 11080, 12342],
      requires: []
    },
    1141: {
      id: 1141,
      row: 2,
      col: 0,
      icon: "spell_fire_flameshock",
      ranks: [18459, 18460],
      requires: []
    },
    31: {
      id: 31,
      row: 2,
      col: 1,
      icon: "spell_fire_selfdestruct",
      ranks: [11108, 12349, 12350],
      requires: []
    },
    29: {
      id: 29,
      row: 2,
      col: 2,
      icon: "spell_fire_fireball02",
      ranks: [11366],
      requires: []
    },
    23: {
      id: 23,
      row: 2,
      col: 3,
      icon: "spell_fire_fire",
      ranks: [11083, 12351],
      requires: []
    },
    25: {
      id: 25,
      row: 3,
      col: 0,
      icon: "spell_fire_soulburn",
      ranks: [11095, 12872, 12873],
      requires: []
    },
    24: {
      id: 24,
      row: 3,
      col: 1,
      icon: "spell_fire_firearmor",
      ranks: [11094, 13043],
      requires: []
    },
    1639: {
      id: 1639,
      row: 3,
      col: 3,
      icon: "spell_fire_masterofelements",
      ranks: [29074, 29075, 29076],
      requires: []
    },
    33: {
      id: 33,
      row: 4,
      col: 1,
      icon: "spell_nature_wispheal",
      ranks: [11115, 11367, 11368],
      requires: []
    },
    32: {
      id: 32,
      row: 4,
      col: 2,
      icon: "spell_holy_excorcism_02",
      ranks: [11113],
      requires: [
        {
          id: 29,
          qty: 1
        }
      ]
    },
    35: {
      id: 35,
      row: 5,
      col: 2,
      icon: "spell_fire_immolation",
      ranks: [11124, 12378, 12398, 12399, 12400],
      requires: []
    },
    36: {
      id: 36,
      row: 6,
      col: 1,
      icon: "spell_fire_sealoffire",
      ranks: [11129],
      requires: [
        {
          id: 33,
          qty: 3
        }
      ]
    }
  },
  61: {
    70: {
      id: 70,
      row: 0,
      col: 0,
      icon: "spell_frost_frostward",
      ranks: [11189, 28332],
      requires: []
    },
    37: {
      id: 37,
      row: 0,
      col: 1,
      icon: "spell_frost_frostbolt02",
      ranks: [11070, 12473, 16763, 16765, 16766],
      requires: []
    },
    1649: {
      id: 1649,
      row: 0,
      col: 2,
      icon: "spell_ice_magicdamage",
      ranks: [29438, 29439, 29440],
      requires: []
    },
    73: {
      id: 73,
      row: 1,
      col: 0,
      icon: "spell_frost_iceshard",
      ranks: [11207, 12672, 15047, 15052, 15053],
      requires: []
    },
    38: {
      id: 38,
      row: 1,
      col: 1,
      icon: "spell_frost_frostarmor",
      ranks: [11071, 12496, 12497],
      requires: []
    },
    62: {
      id: 62,
      row: 1,
      col: 2,
      icon: "spell_frost_freezingbreath",
      ranks: [11165, 12475],
      requires: []
    },
    65: {
      id: 65,
      row: 1,
      col: 3,
      icon: "spell_frost_wisp",
      ranks: [11175, 12569, 12571],
      requires: []
    },
    61: {
      id: 61,
      row: 2,
      col: 0,
      icon: "spell_frost_frostbolt",
      ranks: [11151, 12952, 12953],
      requires: []
    },
    69: {
      id: 69,
      row: 2,
      col: 1,
      icon: "spell_frost_wizardmark",
      ranks: [12472],
      requires: []
    },
    63: {
      id: 63,
      row: 2,
      col: 3,
      icon: "spell_frost_icestorm",
      ranks: [11185, 12487, 12488],
      requires: []
    },
    741: {
      id: 741,
      row: 3,
      col: 0,
      icon: "spell_shadow_darkritual",
      ranks: [16757, 16758],
      requires: []
    },
    66: {
      id: 66,
      row: 3,
      col: 1,
      icon: "spell_frost_stun",
      ranks: [11160, 12518, 12519],
      requires: []
    },
    67: {
      id: 67,
      row: 3,
      col: 2,
      icon: "spell_frost_frostshock",
      ranks: [11170, 12982, 12983, 12984, 12985],
      requires: [
        {
          id: 62,
          qty: 2
        }
      ]
    },
    72: {
      id: 72,
      row: 4,
      col: 1,
      icon: "spell_frost_frost",
      ranks: [11958],
      requires: []
    },
    64: {
      id: 64,
      row: 4,
      col: 2,
      icon: "spell_frost_glacier",
      ranks: [11190, 12489, 12490],
      requires: []
    },
    68: {
      id: 68,
      row: 5,
      col: 2,
      icon: "spell_frost_chillingblast",
      ranks: [11180, 28592, 28593, 28594, 28595],
      requires: []
    },
    71: {
      id: 71,
      row: 6,
      col: 1,
      icon: "spell_ice_lament",
      ranks: [11426],
      requires: [
        {
          id: 72,
          qty: 1
        }
      ]
    }
  },
  81: {
    74: {
      id: 74,
      row: 0,
      col: 0,
      icon: "spell_holy_dispelmagic",
      ranks: [11210, 12592],
      requires: []
    },
    76: {
      id: 76,
      row: 0,
      col: 1,
      icon: "spell_holy_devotion",
      ranks: [11222, 12839, 12840, 12841, 12842],
      requires: []
    },
    80: {
      id: 80,
      row: 0,
      col: 2,
      icon: "spell_nature_starfall",
      ranks: [11237, 12463, 12464, 16769, 16770],
      requires: []
    },
    78: {
      id: 78,
      row: 1,
      col: 0,
      icon: "inv_wand_01",
      ranks: [6057, 6085],
      requires: []
    },
    1650: {
      id: 1650,
      row: 1,
      col: 1,
      icon: "spell_nature_astralrecalgroup",
      ranks: [29441, 29444, 29445, 29446, 29447],
      requires: []
    },
    75: {
      id: 75,
      row: 1,
      col: 2,
      icon: "spell_shadow_manaburn",
      ranks: [11213, 12574, 12575, 12576, 12577],
      requires: []
    },
    82: {
      id: 82,
      row: 2,
      col: 0,
      icon: "spell_nature_abolishmagic",
      ranks: [11247, 12606],
      requires: []
    },
    81: {
      id: 81,
      row: 2,
      col: 1,
      icon: "spell_nature_wispsplode",
      ranks: [11242, 12467, 12469],
      requires: []
    },
    85: {
      id: 85,
      row: 2,
      col: 2,
      icon: "spell_arcane_arcaneresilience",
      ranks: [28574],
      requires: []
    },
    83: {
      id: 83,
      row: 3,
      col: 0,
      icon: "spell_shadow_detectlesserinvisibility",
      ranks: [11252, 12605],
      requires: []
    },
    88: {
      id: 88,
      row: 3,
      col: 1,
      icon: "spell_frost_iceshock",
      ranks: [11255, 12598],
      requires: []
    },
    1142: {
      id: 1142,
      row: 3,
      col: 3,
      icon: "spell_shadow_siphonmana",
      ranks: [18462, 18463, 18464],
      requires: []
    },
    86: {
      id: 86,
      row: 4,
      col: 1,
      icon: "spell_nature_enchantarmor",
      ranks: [12043],
      requires: []
    },
    77: {
      id: 77,
      row: 4,
      col: 2,
      icon: "spell_shadow_charm",
      ranks: [11232, 12500, 12501, 12502, 12503],
      requires: [
        {
          id: 85,
          qty: 1
        }
      ]
    },
    421: {
      id: 421,
      row: 5,
      col: 1,
      icon: "spell_shadow_teleport",
      ranks: [15058, 15059, 15060],
      requires: [
        {
          id: 86,
          qty: 1
        }
      ]
    },
    87: {
      id: 87,
      row: 6,
      col: 1,
      icon: "spell_nature_lightning",
      ranks: [12042],
      requires: [
        {
          id: 421,
          qty: 3
        }
      ]
    }
  },
  161: {
    124: {
      id: 124,
      row: 0,
      col: 0,
      icon: "ability_rogue_ambush",
      ranks: [12282, 12663, 12664],
      requires: []
    },
    130: {
      id: 130,
      row: 0,
      col: 1,
      icon: "ability_parry",
      ranks: [16462, 16463, 16464, 16465, 16466],
      requires: []
    },
    127: {
      id: 127,
      row: 0,
      col: 2,
      icon: "ability_gouge",
      ranks: [12286, 12658, 12659],
      requires: []
    },
    126: {
      id: 126,
      row: 1,
      col: 0,
      icon: "ability_warrior_charge",
      ranks: [12285, 12697],
      requires: []
    },
    641: {
      id: 641,
      row: 1,
      col: 1,
      icon: "spell_nature_enchantarmor",
      ranks: [12295, 12676, 12677, 12678, 12679],
      requires: []
    },
    128: {
      id: 128,
      row: 1,
      col: 3,
      icon: "ability_thunderclap",
      ranks: [12287, 12665, 12666],
      requires: []
    },
    131: {
      id: 131,
      row: 2,
      col: 0,
      icon: "inv_sword_05",
      ranks: [12290, 12963],
      requires: []
    },
    137: {
      id: 137,
      row: 2,
      col: 1,
      icon: "spell_holy_blessingofstamina",
      ranks: [12296],
      requires: [
        {
          id: 641,
          qty: 5
        }
      ]
    },
    121: {
      id: 121,
      row: 2,
      col: 2,
      icon: "ability_backstab",
      ranks: [12834, 12849, 12867],
      requires: [
        {
          id: 127,
          qty: 3
        }
      ]
    },
    136: {
      id: 136,
      row: 3,
      col: 1,
      icon: "inv_axe_09",
      ranks: [12163, 12711, 12712, 12713, 12714],
      requires: []
    },
    662: {
      id: 662,
      row: 3,
      col: 2,
      icon: "ability_searingarrow",
      ranks: [16493, 16494],
      requires: [
        {
          id: 121,
          qty: 3
        }
      ]
    },
    132: {
      id: 132,
      row: 4,
      col: 0,
      icon: "inv_axe_06",
      ranks: [12700, 12781, 12783, 12784, 12785],
      requires: []
    },
    133: {
      id: 133,
      row: 4,
      col: 1,
      icon: "ability_rogue_slicedice",
      ranks: [12292],
      requires: []
    },
    125: {
      id: 125,
      row: 4,
      col: 2,
      icon: "inv_mace_01",
      ranks: [12284, 12701, 12702, 12703, 12704],
      requires: []
    },
    123: {
      id: 123,
      row: 4,
      col: 3,
      icon: "inv_sword_27",
      ranks: [12281, 12812, 12813, 12814, 12815],
      requires: []
    },
    134: {
      id: 134,
      row: 5,
      col: 0,
      icon: "inv_weapon_halbard_01",
      ranks: [12165, 12830, 12831, 12832, 12833],
      requires: []
    },
    129: {
      id: 129,
      row: 5,
      col: 2,
      icon: "ability_shockwave",
      ranks: [12289, 12668, 23695],
      requires: []
    },
    135: {
      id: 135,
      row: 6,
      col: 1,
      icon: "ability_warrior_savageblow",
      ranks: [12294],
      requires: [
        {
          id: 133,
          qty: 1
        }
      ]
    }
  },
  163: {
    1601: {
      id: 1601,
      row: 0,
      col: 1,
      icon: "inv_shield_06",
      ranks: [12298, 12724, 12725, 12726, 12727],
      requires: []
    },
    138: {
      id: 138,
      row: 0,
      col: 2,
      icon: "spell_nature_mirrorimage",
      ranks: [12297, 12750, 12751, 12752, 12753],
      requires: []
    },
    142: {
      id: 142,
      row: 1,
      col: 0,
      icon: "ability_racial_bloodrage",
      ranks: [12301, 12818],
      requires: []
    },
    140: {
      id: 140,
      row: 1,
      col: 2,
      icon: "spell_holy_devotion",
      ranks: [12299, 12761, 12762, 12763, 12764],
      requires: []
    },
    141: {
      id: 141,
      row: 1,
      col: 3,
      icon: "spell_magic_magearmor",
      ranks: [12300, 12959, 12960, 12961, 12962],
      requires: []
    },
    153: {
      id: 153,
      row: 2,
      col: 0,
      icon: "spell_holy_ashestoashes",
      ranks: [12975],
      requires: [
        {
          id: 142,
          qty: 2
        }
      ]
    },
    145: {
      id: 145,
      row: 2,
      col: 1,
      icon: "ability_defend",
      ranks: [12945, 12307, 12944],
      requires: [
        {
          id: 1601,
          qty: 5
        }
      ]
    },
    147: {
      id: 147,
      row: 2,
      col: 2,
      icon: "ability_warrior_revenge",
      ranks: [12797, 12799, 12800],
      requires: []
    },
    144: {
      id: 144,
      row: 2,
      col: 3,
      icon: "ability_warrior_innerrage",
      ranks: [12303, 12788, 12789, 12791, 12792],
      requires: []
    },
    146: {
      id: 146,
      row: 3,
      col: 0,
      icon: "ability_warrior_sunder",
      ranks: [12308, 12810, 12811],
      requires: []
    },
    151: {
      id: 151,
      row: 3,
      col: 1,
      icon: "ability_warrior_disarm",
      ranks: [12313, 12804, 12807],
      requires: []
    },
    143: {
      id: 143,
      row: 3,
      col: 2,
      icon: "spell_nature_reincarnation",
      ranks: [12302, 12765],
      requires: []
    },
    150: {
      id: 150,
      row: 4,
      col: 0,
      icon: "ability_warrior_shieldwall",
      ranks: [12312, 12803],
      requires: []
    },
    152: {
      id: 152,
      row: 4,
      col: 1,
      icon: "ability_thunderbolt",
      ranks: [12809],
      requires: []
    },
    149: {
      id: 149,
      row: 4,
      col: 2,
      icon: "ability_warrior_shieldbash",
      ranks: [12311, 12958],
      requires: []
    },
    702: {
      id: 702,
      row: 5,
      col: 2,
      icon: "inv_sword_20",
      ranks: [16538, 16539, 16540, 16541, 16542],
      requires: []
    },
    148: {
      id: 148,
      row: 6,
      col: 1,
      icon: "inv_shield_05",
      ranks: [23922],
      requires: [
        {
          id: 152,
          qty: 1
        }
      ]
    }
  },
  164: {
    158: {
      id: 158,
      row: 0,
      col: 1,
      icon: "spell_nature_purge",
      ranks: [12321, 12835, 12836, 12837, 12838],
      requires: []
    },
    157: {
      id: 157,
      row: 0,
      col: 2,
      icon: "ability_rogue_eviscerate",
      ranks: [12320, 12852, 12853, 12855, 12856],
      requires: []
    },
    161: {
      id: 161,
      row: 1,
      col: 1,
      icon: "ability_warrior_warcry",
      ranks: [12324, 12876, 12877, 12878, 12879],
      requires: []
    },
    159: {
      id: 159,
      row: 1,
      col: 2,
      icon: "spell_nature_stoneclawtotem",
      ranks: [12322, 12999, 13000, 13001, 13002],
      requires: []
    },
    166: {
      id: 166,
      row: 2,
      col: 0,
      icon: "ability_warrior_cleave",
      ranks: [12329, 12950, 20496],
      requires: []
    },
    160: {
      id: 160,
      row: 2,
      col: 1,
      icon: "spell_shadow_deathscream",
      ranks: [12323],
      requires: []
    },
    661: {
      id: 661,
      row: 2,
      col: 2,
      icon: "spell_shadow_summonimp",
      ranks: [16487, 16489, 16492],
      requires: []
    },
    154: {
      id: 154,
      row: 2,
      col: 3,
      icon: "ability_warrior_battleshout",
      ranks: [12318, 12857, 12858, 12860, 12861],
      requires: []
    },
    1581: {
      id: 1581,
      row: 3,
      col: 0,
      icon: "ability_dualwield",
      ranks: [23584, 23585, 23586, 23587, 23588],
      requires: []
    },
    1542: {
      id: 1542,
      row: 3,
      col: 1,
      icon: "inv_sword_48",
      ranks: [20502, 20503],
      requires: []
    },
    155: {
      id: 155,
      row: 3,
      col: 2,
      icon: "spell_shadow_unholyfrenzy",
      ranks: [12317, 13045, 13046, 13047, 13048],
      requires: []
    },
    168: {
      id: 168,
      row: 4,
      col: 0,
      icon: "ability_warrior_decisivestrike",
      ranks: [12862, 12330, 20497, 20498, 20499],
      requires: []
    },
    165: {
      id: 165,
      row: 4,
      col: 1,
      icon: "spell_shadow_deathpact",
      ranks: [12328],
      requires: []
    },
    1543: {
      id: 1543,
      row: 4,
      col: 3,
      icon: "ability_rogue_sprint",
      ranks: [20504, 20505],
      requires: []
    },
    1541: {
      id: 1541,
      row: 5,
      col: 0,
      icon: "spell_nature_ancestralguardian",
      ranks: [20500, 20501],
      requires: []
    },
    156: {
      id: 156,
      row: 5,
      col: 2,
      icon: "ability_ghoulfrenzy",
      ranks: [12319, 12971, 12972, 12973, 12974],
      requires: [
        {
          id: 155,
          qty: 5
        }
      ]
    },
    167: {
      id: 167,
      row: 6,
      col: 1,
      icon: "spell_nature_bloodlust",
      ranks: [23881],
      requires: [
        {
          id: 165,
          qty: 1
        }
      ]
    }
  },
  181: {
    203: {
      id: 203,
      row: 0,
      col: 0,
      icon: "ability_gouge",
      ranks: [13741, 13793, 13792],
      requires: []
    },
    201: {
      id: 201,
      row: 0,
      col: 1,
      icon: "spell_shadow_ritualofsacrifice",
      ranks: [13732, 13863],
      requires: []
    },
    186: {
      id: 186,
      row: 0,
      col: 2,
      icon: "spell_nature_invisibilty",
      ranks: [13712, 13788, 13789, 13790, 13791],
      requires: []
    },
    202: {
      id: 202,
      row: 1,
      col: 0,
      icon: "ability_backstab",
      ranks: [13733, 13865, 13866],
      requires: []
    },
    187: {
      id: 187,
      row: 1,
      col: 1,
      icon: "ability_parry",
      ranks: [13713, 13853, 13854, 13855, 13856],
      requires: []
    },
    181: {
      id: 181,
      row: 1,
      col: 2,
      icon: "ability_marksmanship",
      ranks: [13705, 13832, 13843, 13844, 13845],
      requires: []
    },
    204: {
      id: 204,
      row: 2,
      col: 0,
      icon: "spell_shadow_shadowward",
      ranks: [13742, 13872],
      requires: []
    },
    301: {
      id: 301,
      row: 2,
      col: 1,
      icon: "ability_warrior_challange",
      ranks: [14251],
      requires: [
        {
          id: 187,
          qty: 5
        }
      ]
    },
    222: {
      id: 222,
      row: 2,
      col: 3,
      icon: "ability_rogue_sprint",
      ranks: [13743, 13875],
      requires: []
    },
    206: {
      id: 206,
      row: 3,
      col: 0,
      icon: "ability_kick",
      ranks: [13754, 13867],
      requires: []
    },
    182: {
      id: 182,
      row: 3,
      col: 1,
      icon: "inv_weapon_shortblade_05",
      ranks: [13706, 13804, 13805, 13806, 13807],
      requires: []
    },
    221: {
      id: 221,
      row: 3,
      col: 2,
      icon: "ability_dualwield",
      ranks: [13715, 13848, 13849, 13851, 13852],
      requires: [
        {
          id: 181,
          qty: 5
        }
      ]
    },
    184: {
      id: 184,
      row: 4,
      col: 0,
      icon: "inv_mace_01",
      ranks: [13709, 13800, 13801, 13802, 13803],
      requires: []
    },
    223: {
      id: 223,
      row: 4,
      col: 1,
      icon: "ability_warrior_punishingblow",
      ranks: [13877],
      requires: []
    },
    242: {
      id: 242,
      row: 4,
      col: 2,
      icon: "inv_sword_27",
      ranks: [13960, 13961, 13962, 13963, 13964],
      requires: []
    },
    183: {
      id: 183,
      row: 4,
      col: 3,
      icon: "inv_gauntlets_04",
      ranks: [13707, 13966, 13967, 13968, 13969],
      requires: []
    },
    1703: {
      id: 1703,
      row: 5,
      col: 1,
      icon: "spell_holy_blessingofstrength",
      ranks: [30919, 30920],
      requires: [
        {
          id: 223,
          qty: 1
        }
      ]
    },
    1122: {
      id: 1122,
      row: 5,
      col: 2,
      icon: "ability_racial_avatar",
      ranks: [18427, 18428, 18429],
      requires: []
    },
    205: {
      id: 205,
      row: 6,
      col: 1,
      icon: "spell_shadow_shadowworddominate",
      ranks: [13750],
      requires: []
    }
  },
  182: {
    276: {
      id: 276,
      row: 0,
      col: 0,
      icon: "ability_rogue_eviscerate",
      ranks: [14162, 14163, 14164],
      requires: []
    },
    272: {
      id: 272,
      row: 0,
      col: 1,
      icon: "ability_fiegndead",
      ranks: [14144, 14148],
      requires: []
    },
    270: {
      id: 270,
      row: 0,
      col: 2,
      icon: "ability_racial_bloodrage",
      ranks: [14138, 14139, 14140, 14141, 14142],
      requires: []
    },
    273: {
      id: 273,
      row: 1,
      col: 0,
      icon: "ability_druid_disembowel",
      ranks: [14156, 14160, 14161],
      requires: []
    },
    274: {
      id: 274,
      row: 1,
      col: 1,
      icon: "spell_shadow_deathscream",
      ranks: [14158, 14159],
      requires: []
    },
    277: {
      id: 277,
      row: 1,
      col: 3,
      icon: "ability_rogue_slicedice",
      ranks: [14165, 14166, 14167],
      requires: []
    },
    281: {
      id: 281,
      row: 2,
      col: 0,
      icon: "ability_warrior_decisivestrike",
      ranks: [14179],
      requires: []
    },
    278: {
      id: 278,
      row: 2,
      col: 1,
      icon: "ability_warrior_riposte",
      ranks: [14168, 14169],
      requires: []
    },
    269: {
      id: 269,
      row: 2,
      col: 2,
      icon: "ability_criticalstrike",
      ranks: [14128, 14132, 14135, 14136, 14137],
      requires: [
        {
          id: 270,
          qty: 5
        }
      ]
    },
    682: {
      id: 682,
      row: 3,
      col: 1,
      icon: "ability_rogue_feigndeath",
      ranks: [16513, 16514, 16515, 16719, 16720],
      requires: []
    },
    268: {
      id: 268,
      row: 3,
      col: 2,
      icon: "ability_poisons",
      ranks: [14113, 14114, 14115, 14116, 14117],
      requires: []
    },
    280: {
      id: 280,
      row: 4,
      col: 1,
      icon: "spell_ice_lament",
      ranks: [14177],
      requires: []
    },
    279: {
      id: 279,
      row: 4,
      col: 2,
      icon: "ability_rogue_kidneyshot",
      ranks: [14174, 14175, 14176],
      requires: []
    },
    283: {
      id: 283,
      row: 5,
      col: 1,
      icon: "spell_shadow_chilltouch",
      ranks: [14186, 14190, 14193, 14194, 14195],
      requires: [
        {
          id: 280,
          qty: 1
        }
      ]
    },
    382: {
      id: 382,
      row: 6,
      col: 1,
      icon: "spell_nature_earthbindtotem",
      ranks: [14983],
      requires: []
    }
  },
  183: {
    241: {
      id: 241,
      row: 0,
      col: 1,
      icon: "spell_shadow_charm",
      ranks: [13958, 13970, 13971, 13972, 13973],
      requires: []
    },
    261: {
      id: 261,
      row: 0,
      col: 2,
      icon: "ability_warrior_warcry",
      ranks: [14057, 14072, 14073, 14074, 14075],
      requires: []
    },
    1700: {
      id: 1700,
      row: 1,
      col: 0,
      icon: "ability_rogue_feint",
      ranks: [30892, 30893],
      requires: []
    },
    247: {
      id: 247,
      row: 1,
      col: 1,
      icon: "spell_magic_lesserinvisibilty",
      ranks: [13981, 14066],
      requires: []
    },
    244: {
      id: 244,
      row: 1,
      col: 2,
      icon: "ability_stealth",
      ranks: [13975, 14062, 14063, 14064, 14065],
      requires: []
    },
    245: {
      id: 245,
      row: 2,
      col: 0,
      icon: "spell_shadow_fumble",
      ranks: [13976, 13979, 13980],
      requires: []
    },
    303: {
      id: 303,
      row: 2,
      col: 1,
      icon: "spell_shadow_curse",
      ranks: [14278],
      requires: []
    },
    263: {
      id: 263,
      row: 2,
      col: 2,
      icon: "ability_rogue_ambush",
      ranks: [14079, 14080, 14081],
      requires: []
    },
    246: {
      id: 246,
      row: 3,
      col: 0,
      icon: "spell_nature_mirrorimage",
      ranks: [13983, 14070, 14071],
      requires: []
    },
    262: {
      id: 262,
      row: 3,
      col: 1,
      icon: "ability_sap",
      ranks: [14076, 14094, 14095],
      requires: []
    },
    1123: {
      id: 1123,
      row: 3,
      col: 2,
      icon: "inv_sword_17",
      ranks: [14171, 14172, 14173],
      requires: []
    },
    1701: {
      id: 1701,
      row: 4,
      col: 0,
      icon: "ability_ambush",
      ranks: [30894, 30895],
      requires: []
    },
    284: {
      id: 284,
      row: 4,
      col: 1,
      icon: "spell_shadow_antishadow",
      ranks: [14185],
      requires: []
    },
    265: {
      id: 265,
      row: 4,
      col: 2,
      icon: "spell_shadow_summonsuccubus",
      ranks: [14082, 14083],
      requires: []
    },
    681: {
      id: 681,
      row: 4,
      col: 3,
      icon: "spell_shadow_lifedrain",
      ranks: [16511],
      requires: [
        {
          id: 1123,
          qty: 3
        }
      ]
    },
    1702: {
      id: 1702,
      row: 5,
      col: 2,
      icon: "inv_weapon_crossbow_11",
      ranks: [30902, 30903, 30904, 30905, 30906],
      requires: []
    },
    381: {
      id: 381,
      row: 6,
      col: 1,
      icon: "spell_shadow_possession",
      ranks: [14183],
      requires: [
        {
          id: 284,
          qty: 1
        }
      ]
    }
  },
  201: {
    342: {
      id: 342,
      row: 0,
      col: 1,
      icon: "spell_magic_magearmor",
      ranks: [14522, 14788, 14789, 14790, 14791],
      requires: []
    },
    345: {
      id: 345,
      row: 0,
      col: 2,
      icon: "inv_wand_01",
      ranks: [14524, 14525, 14526, 14527, 14528],
      requires: []
    },
    352: {
      id: 352,
      row: 1,
      col: 0,
      icon: "spell_nature_manaregentotem",
      ranks: [14523, 14784, 14785, 14786, 14787],
      requires: []
    },
    344: {
      id: 344,
      row: 1,
      col: 1,
      icon: "spell_holy_wordfortitude",
      ranks: [14749, 14767],
      requires: []
    },
    343: {
      id: 343,
      row: 1,
      col: 2,
      icon: "spell_holy_powerwordshield",
      ranks: [14748, 14768, 14769],
      requires: []
    },
    321: {
      id: 321,
      row: 1,
      col: 3,
      icon: "spell_nature_tranquility",
      ranks: [14531, 14774],
      requires: []
    },
    348: {
      id: 348,
      row: 2,
      col: 1,
      icon: "spell_frost_windwalkon",
      ranks: [14751],
      requires: []
    },
    347: {
      id: 347,
      row: 2,
      col: 2,
      icon: "spell_nature_sleep",
      ranks: [14521, 14776, 14777],
      requires: []
    },
    346: {
      id: 346,
      row: 3,
      col: 0,
      icon: "spell_holy_innerfire",
      ranks: [14747, 14770, 14771],
      requires: []
    },
    341: {
      id: 341,
      row: 3,
      col: 1,
      icon: "ability_hibernation",
      ranks: [14520, 14780, 14781, 14782, 14783],
      requires: []
    },
    350: {
      id: 350,
      row: 3,
      col: 3,
      icon: "spell_shadow_manaburn",
      ranks: [14750, 14772],
      requires: []
    },
    1201: {
      id: 1201,
      row: 4,
      col: 1,
      icon: "spell_nature_enchantarmor",
      ranks: [18551, 18552, 18553, 18554, 18555],
      requires: []
    },
    351: {
      id: 351,
      row: 4,
      col: 2,
      icon: "spell_holy_divinespirit",
      ranks: [14752],
      requires: [
        {
          id: 347,
          qty: 3
        }
      ]
    },
    1202: {
      id: 1202,
      row: 5,
      col: 2,
      icon: "spell_nature_slowingtotem",
      ranks: [18544, 18547, 18548, 18549, 18550],
      requires: []
    },
    322: {
      id: 322,
      row: 6,
      col: 1,
      icon: "spell_holy_powerinfusion",
      ranks: [10060],
      requires: [
        {
          id: 1201,
          qty: 5
        }
      ]
    }
  },
  202: {
    410: {
      id: 410,
      row: 0,
      col: 0,
      icon: "spell_holy_healingfocus",
      ranks: [14913, 15012],
      requires: []
    },
    406: {
      id: 406,
      row: 0,
      col: 1,
      icon: "spell_holy_renew",
      ranks: [14908, 15020, 17191],
      requires: []
    },
    401: {
      id: 401,
      row: 0,
      col: 2,
      icon: "spell_holy_sealofsalvation",
      ranks: [14889, 15008, 15009, 15010, 15011],
      requires: []
    },
    411: {
      id: 411,
      row: 1,
      col: 1,
      icon: "spell_holy_spellwarding",
      ranks: [27900, 27901, 27902, 27903, 27904],
      requires: []
    },
    1181: {
      id: 1181,
      row: 1,
      col: 2,
      icon: "spell_holy_sealofwrath",
      ranks: [18530, 18531, 18533, 18534, 18535],
      requires: []
    },
    442: {
      id: 442,
      row: 2,
      col: 0,
      icon: "spell_holy_holynova",
      ranks: [15237],
      requires: []
    },
    1636: {
      id: 1636,
      row: 2,
      col: 1,
      icon: "spell_holy_blessedrecovery",
      ranks: [27811, 27815, 27816],
      requires: []
    },
    361: {
      id: 361,
      row: 2,
      col: 3,
      icon: "spell_holy_layonhands",
      ranks: [14892, 15362, 15363],
      requires: []
    },
    1635: {
      id: 1635,
      row: 3,
      col: 0,
      icon: "spell_holy_purify",
      ranks: [27789, 27790],
      requires: []
    },
    408: {
      id: 408,
      row: 3,
      col: 1,
      icon: "spell_holy_heal02",
      ranks: [14912, 15013, 15014],
      requires: []
    },
    403: {
      id: 403,
      row: 3,
      col: 2,
      icon: "spell_holy_searinglightpriest",
      ranks: [14909, 15017],
      requires: [
        {
          id: 1181,
          qty: 5
        }
      ]
    },
    413: {
      id: 413,
      row: 4,
      col: 0,
      icon: "spell_holy_prayerofhealing02",
      ranks: [14911, 15018],
      requires: []
    },
    1561: {
      id: 1561,
      row: 4,
      col: 1,
      icon: "inv_enchant_essenceeternallarge",
      ranks: [20711],
      requires: []
    },
    402: {
      id: 402,
      row: 4,
      col: 2,
      icon: "spell_holy_spiritualguidence",
      ranks: [14901, 15028, 15029, 15030, 15031],
      requires: []
    },
    404: {
      id: 404,
      row: 5,
      col: 2,
      icon: "spell_nature_moonglow",
      ranks: [14898, 15349, 15354, 15355, 15356],
      requires: []
    },
    1637: {
      id: 1637,
      row: 6,
      col: 1,
      icon: "spell_holy_summonlightwell",
      ranks: [724],
      requires: [
        {
          id: 1561,
          qty: 1
        }
      ]
    }
  },
  203: {
    465: {
      id: 465,
      row: 0,
      col: 1,
      icon: "spell_shadow_requiem",
      ranks: [15270, 15335, 15336, 15337, 15338],
      requires: []
    },
    464: {
      id: 464,
      row: 0,
      col: 2,
      icon: "spell_shadow_gathershadows",
      ranks: [15268, 15323, 15324, 15325, 15326],
      requires: []
    },
    466: {
      id: 466,
      row: 1,
      col: 0,
      icon: "spell_shadow_shadowward",
      ranks: [15318, 15272, 15320],
      requires: []
    },
    482: {
      id: 482,
      row: 1,
      col: 1,
      icon: "spell_shadow_shadowwordpain",
      ranks: [15275, 15317],
      requires: []
    },
    463: {
      id: 463,
      row: 1,
      col: 2,
      icon: "spell_shadow_burningspirit",
      ranks: [15260, 15327, 15328, 15329, 15330],
      requires: []
    },
    542: {
      id: 542,
      row: 2,
      col: 0,
      icon: "spell_shadow_psychicscream",
      ranks: [15392, 15448],
      requires: []
    },
    481: {
      id: 481,
      row: 2,
      col: 1,
      icon: "spell_shadow_unholyfrenzy",
      ranks: [15273, 15312, 15313, 15314, 15316],
      requires: []
    },
    501: {
      id: 501,
      row: 2,
      col: 2,
      icon: "spell_shadow_siphonmana",
      ranks: [15407],
      requires: []
    },
    483: {
      id: 483,
      row: 3,
      col: 1,
      icon: "spell_magic_lesserinvisibilty",
      ranks: [15274, 15311],
      requires: []
    },
    881: {
      id: 881,
      row: 3,
      col: 2,
      icon: "spell_shadow_chilltouch",
      ranks: [17322, 17323, 17325],
      requires: []
    },
    461: {
      id: 461,
      row: 3,
      col: 3,
      icon: "spell_shadow_blackplague",
      ranks: [15257, 15331, 15332, 15333, 15334],
      requires: []
    },
    541: {
      id: 541,
      row: 4,
      col: 0,
      icon: "spell_shadow_impphaseshift",
      ranks: [15487],
      requires: [
        {
          id: 542,
          qty: 2
        }
      ]
    },
    484: {
      id: 484,
      row: 4,
      col: 1,
      icon: "spell_shadow_unsummonbuilding",
      ranks: [15286],
      requires: []
    },
    1638: {
      id: 1638,
      row: 4,
      col: 2,
      icon: "spell_shadow_improvedvampiricembrace",
      ranks: [27839, 27840],
      requires: [
        {
          id: 484,
          qty: 1
        }
      ]
    },
    462: {
      id: 462,
      row: 5,
      col: 2,
      icon: "spell_shadow_twilight",
      ranks: [15259, 15307, 15308, 15309, 15310],
      requires: []
    },
    521: {
      id: 521,
      row: 6,
      col: 1,
      icon: "spell_shadow_shadowform",
      ranks: [15473],
      requires: [
        {
          id: 484,
          qty: 1
        }
      ]
    }
  },
  261: {
    564: {
      id: 564,
      row: 0,
      col: 1,
      icon: "spell_nature_wispsplode",
      ranks: [16039, 16109, 16110, 16111, 16112],
      requires: []
    },
    563: {
      id: 563,
      row: 0,
      col: 2,
      icon: "spell_fire_fireball",
      ranks: [16035, 16105, 16106, 16107, 16108],
      requires: []
    },
    572: {
      id: 572,
      row: 1,
      col: 0,
      icon: "spell_nature_stoneclawtotem",
      ranks: [16043, 16130],
      requires: []
    },
    1640: {
      id: 1640,
      row: 1,
      col: 1,
      icon: "spell_nature_spiritarmor",
      ranks: [28996, 28997, 28998],
      requires: []
    },
    561: {
      id: 561,
      row: 1,
      col: 2,
      icon: "spell_fire_immolation",
      ranks: [16038, 16160, 16161],
      requires: []
    },
    574: {
      id: 574,
      row: 2,
      col: 0,
      icon: "spell_shadow_manaburn",
      ranks: [16164],
      requires: []
    },
    575: {
      id: 575,
      row: 2,
      col: 1,
      icon: "spell_frost_frostward",
      ranks: [16040, 16113, 16114, 16115, 16116],
      requires: []
    },
    562: {
      id: 562,
      row: 2,
      col: 2,
      icon: "spell_nature_callstorm",
      ranks: [16041, 16117, 16118, 16119, 16120],
      requires: []
    },
    567: {
      id: 567,
      row: 3,
      col: 0,
      icon: "spell_fire_sealoffire",
      ranks: [16086, 16544],
      requires: []
    },
    1642: {
      id: 1642,
      row: 3,
      col: 1,
      icon: "spell_nature_eyeofthestorm",
      ranks: [29062, 29064, 29065],
      requires: []
    },
    1645: {
      id: 1645,
      row: 3,
      col: 3,
      icon: "spell_fire_elementaldevastation",
      ranks: [30160, 29179, 29180],
      requires: []
    },
    1641: {
      id: 1641,
      row: 4,
      col: 0,
      icon: "spell_nature_stormreach",
      ranks: [28999, 29000],
      requires: []
    },
    565: {
      id: 565,
      row: 4,
      col: 1,
      icon: "spell_fire_volcano",
      ranks: [16089],
      requires: []
    },
    721: {
      id: 721,
      row: 5,
      col: 2,
      icon: "spell_lightning_lightningbolt01",
      ranks: [16578, 16579, 16580, 16581, 16582],
      requires: [
        {
          id: 562,
          qty: 5
        }
      ]
    },
    573: {
      id: 573,
      row: 6,
      col: 1,
      icon: "spell_nature_wispheal",
      ranks: [16166],
      requires: [
        {
          id: 565,
          qty: 1
        }
      ]
    }
  },
  262: {
    586: {
      id: 586,
      row: 0,
      col: 1,
      icon: "spell_nature_magicimmunity",
      ranks: [16182, 16226, 16227, 16228, 16229],
      requires: []
    },
    593: {
      id: 593,
      row: 0,
      col: 2,
      icon: "spell_frost_manarecharge",
      ranks: [16179, 16214, 16215, 16216, 16217],
      requires: []
    },
    589: {
      id: 589,
      row: 1,
      col: 0,
      icon: "spell_nature_reincarnation",
      ranks: [16184, 16209],
      requires: []
    },
    581: {
      id: 581,
      row: 1,
      col: 1,
      icon: "spell_nature_undyingstrength",
      ranks: [16176, 16235, 16240],
      requires: []
    },
    595: {
      id: 595,
      row: 1,
      col: 2,
      icon: "spell_nature_moonglow",
      ranks: [16173, 16222, 16223, 16224, 16225],
      requires: []
    },
    583: {
      id: 583,
      row: 2,
      col: 0,
      icon: "spell_frost_stun",
      ranks: [16180, 16196, 16198],
      requires: []
    },
    587: {
      id: 587,
      row: 2,
      col: 1,
      icon: "spell_nature_healingwavelesser",
      ranks: [16181, 16230, 16232, 16233, 16234],
      requires: []
    },
    582: {
      id: 582,
      row: 2,
      col: 2,
      icon: "spell_nature_nullward",
      ranks: [16189],
      requires: []
    },
    1646: {
      id: 1646,
      row: 2,
      col: 3,
      icon: "spell_nature_healingtouch",
      ranks: [29187, 29189, 29191],
      requires: []
    },
    588: {
      id: 588,
      row: 3,
      col: 1,
      icon: "spell_nature_manaregentotem",
      ranks: [16187, 16205, 16206, 16207, 16208],
      requires: []
    },
    594: {
      id: 594,
      row: 3,
      col: 2,
      icon: "spell_nature_tranquility",
      ranks: [16194, 16218, 16219, 16220, 16221],
      requires: []
    },
    1648: {
      id: 1648,
      row: 4,
      col: 0,
      icon: "spell_nature_healingway",
      ranks: [29206, 29205, 29202],
      requires: []
    },
    591: {
      id: 591,
      row: 4,
      col: 2,
      icon: "spell_nature_ravenform",
      ranks: [16188],
      requires: []
    },
    592: {
      id: 592,
      row: 5,
      col: 2,
      icon: "spell_frost_wizardmark",
      ranks: [16178, 16210, 16211, 16212, 16213],
      requires: []
    },
    590: {
      id: 590,
      row: 6,
      col: 1,
      icon: "spell_frost_summonwaterelemental",
      ranks: [16190],
      requires: [
        {
          id: 588,
          qty: 5
        }
      ]
    }
  },
  263: {
    614: {
      id: 614,
      row: 0,
      col: 1,
      icon: "spell_shadow_grimward",
      ranks: [17485, 17486, 17487, 17488, 17489],
      requires: []
    },
    612: {
      id: 612,
      row: 0,
      col: 2,
      icon: "inv_shield_06",
      ranks: [16253, 16298, 16299, 16300, 16301],
      requires: []
    },
    609: {
      id: 609,
      row: 1,
      col: 0,
      icon: "spell_nature_stoneskintotem",
      ranks: [16258, 16293],
      requires: []
    },
    613: {
      id: 613,
      row: 1,
      col: 1,
      icon: "ability_thunderbolt",
      ranks: [16255, 16302, 16303, 16304, 16305],
      requires: []
    },
    605: {
      id: 605,
      row: 1,
      col: 2,
      icon: "spell_nature_spiritwolf",
      ranks: [16262, 16287],
      requires: []
    },
    607: {
      id: 607,
      row: 1,
      col: 3,
      icon: "spell_nature_lightningshield",
      ranks: [16261, 16290, 16291],
      requires: []
    },
    610: {
      id: 610,
      row: 2,
      col: 0,
      icon: "spell_nature_earthbindtotem",
      ranks: [16259, 16295],
      requires: []
    },
    617: {
      id: 617,
      row: 2,
      col: 2,
      icon: "inv_axe_10",
      ranks: [16269],
      requires: []
    },
    601: {
      id: 601,
      row: 2,
      col: 3,
      icon: "spell_nature_mirrorimage",
      ranks: [16254, 16271, 16272, 16273, 16274],
      requires: []
    },
    602: {
      id: 602,
      row: 3,
      col: 1,
      icon: "ability_ghoulfrenzy",
      ranks: [16256, 16281, 16282, 16283, 16284],
      requires: [
        {
          id: 613,
          qty: 5
        }
      ]
    },
    615: {
      id: 615,
      row: 3,
      col: 2,
      icon: "spell_holy_devotion",
      ranks: [16252, 16306, 16307, 16308, 16309],
      requires: []
    },
    1647: {
      id: 1647,
      row: 4,
      col: 0,
      icon: "spell_fire_enchantweapon",
      ranks: [29192, 29193],
      requires: []
    },
    611: {
      id: 611,
      row: 4,
      col: 1,
      icon: "spell_fire_flametounge",
      ranks: [16266, 29079, 29080],
      requires: []
    },
    616: {
      id: 616,
      row: 4,
      col: 2,
      icon: "ability_parry",
      ranks: [16268],
      requires: []
    },
    1643: {
      id: 1643,
      row: 5,
      col: 2,
      icon: "ability_hunter_swiftstrike",
      ranks: [29082, 29084, 29086, 29087, 29088],
      requires: []
    },
    901: {
      id: 901,
      row: 6,
      col: 1,
      icon: "spell_holy_sealofmight",
      ranks: [17364],
      requires: [
        {
          id: 611,
          qty: 3
        }
      ]
    }
  },
  281: {
    796: {
      id: 796,
      row: 0,
      col: 1,
      icon: "ability_hunter_pet_hyena",
      ranks: [16934, 16935, 16936, 16937, 16938],
      requires: []
    },
    795: {
      id: 795,
      row: 0,
      col: 2,
      icon: "ability_druid_demoralizingroar",
      ranks: [16858, 16859, 16860, 16861, 16862],
      requires: []
    },
    799: {
      id: 799,
      row: 1,
      col: 0,
      icon: "ability_ambush",
      ranks: [16947, 16948, 16949, 16950, 16951],
      requires: []
    },
    797: {
      id: 797,
      row: 1,
      col: 1,
      icon: "ability_druid_bash",
      ranks: [16940, 16941],
      requires: []
    },
    794: {
      id: 794,
      row: 1,
      col: 2,
      icon: "inv_misc_pelt_bear_03",
      ranks: [16929, 16930, 16931, 16932, 16933],
      requires: []
    },
    807: {
      id: 807,
      row: 2,
      col: 0,
      icon: "spell_nature_spiritwolf",
      ranks: [17002, 24866],
      requires: []
    },
    804: {
      id: 804,
      row: 2,
      col: 1,
      icon: "ability_hunter_pet_bear",
      ranks: [16979],
      requires: []
    },
    798: {
      id: 798,
      row: 2,
      col: 2,
      icon: "inv_misc_monsterclaw_04",
      ranks: [16942, 16943, 16944],
      requires: []
    },
    802: {
      id: 802,
      row: 3,
      col: 0,
      icon: "spell_shadow_vampiricaura",
      ranks: [16966, 16968],
      requires: []
    },
    803: {
      id: 803,
      row: 3,
      col: 1,
      icon: "ability_hunter_pet_cat",
      ranks: [16972, 16974, 16975],
      requires: []
    },
    800: {
      id: 800,
      row: 3,
      col: 2,
      icon: "ability_ghoulfrenzy",
      ranks: [16952, 16954],
      requires: [
        {
          id: 798,
          qty: 3
        }
      ]
    },
    801: {
      id: 801,
      row: 3,
      col: 3,
      icon: "ability_racial_cannibalize",
      ranks: [16958, 16961],
      requires: [
        {
          id: 798,
          qty: 3
        }
      ]
    },
    805: {
      id: 805,
      row: 4,
      col: 0,
      icon: "ability_druid_ravage",
      ranks: [16998, 16999],
      requires: []
    },
    1162: {
      id: 1162,
      row: 4,
      col: 2,
      icon: "spell_nature_faeriefire",
      ranks: [16857],
      requires: []
    },
    808: {
      id: 808,
      row: 5,
      col: 1,
      icon: "spell_holy_blessingofagility",
      ranks: [17003, 17004, 17005, 17006, 24894],
      requires: [
        {
          id: 803,
          qty: 3
        }
      ]
    },
    809: {
      id: 809,
      row: 6,
      col: 1,
      icon: "spell_nature_unyeildingstamina",
      ranks: [17007],
      requires: []
    }
  },
  282: {
    821: {
      id: 821,
      row: 0,
      col: 1,
      icon: "spell_nature_regeneration",
      ranks: [17050, 17051, 17053, 17054, 17055],
      requires: []
    },
    822: {
      id: 822,
      row: 0,
      col: 2,
      icon: "spell_holy_blessingofstamina",
      ranks: [17056, 17058, 17059, 17060, 17061],
      requires: []
    },
    824: {
      id: 824,
      row: 1,
      col: 0,
      icon: "spell_nature_healingtouch",
      ranks: [17069, 17070, 17071, 17072, 17073],
      requires: []
    },
    823: {
      id: 823,
      row: 1,
      col: 1,
      icon: "spell_nature_healingwavegreater",
      ranks: [17063, 17065, 17066, 17067, 17068],
      requires: []
    },
    826: {
      id: 826,
      row: 1,
      col: 2,
      icon: "ability_druid_enrage",
      ranks: [17079, 17082],
      requires: []
    },
    829: {
      id: 829,
      row: 2,
      col: 1,
      icon: "spell_frost_windwalkon",
      ranks: [17106, 17107, 17108],
      requires: []
    },
    827: {
      id: 827,
      row: 2,
      col: 2,
      icon: "spell_nature_insectswarm",
      ranks: [5570],
      requires: []
    },
    841: {
      id: 841,
      row: 2,
      col: 3,
      icon: "ability_eyeoftheowl",
      ranks: [17118, 17119, 17120, 17121, 17122],
      requires: []
    },
    843: {
      id: 843,
      row: 3,
      col: 1,
      icon: "spell_holy_elunesgrace",
      ranks: [24968, 24969, 24970, 24971, 24972],
      requires: []
    },
    830: {
      id: 830,
      row: 3,
      col: 3,
      icon: "spell_nature_rejuvenation",
      ranks: [17111, 17112, 17113],
      requires: []
    },
    831: {
      id: 831,
      row: 4,
      col: 0,
      icon: "spell_nature_ravenform",
      ranks: [17116],
      requires: [
        {
          id: 824,
          qty: 5
        }
      ]
    },
    828: {
      id: 828,
      row: 4,
      col: 2,
      icon: "spell_nature_protectionformnature",
      ranks: [17104, 24943, 24944, 24945, 24946],
      requires: [
        {
          id: 827,
          qty: 1
        }
      ]
    },
    842: {
      id: 842,
      row: 4,
      col: 3,
      icon: "spell_nature_tranquility",
      ranks: [17123, 17124],
      requires: []
    },
    825: {
      id: 825,
      row: 5,
      col: 2,
      icon: "spell_nature_resistnature",
      ranks: [17074, 17075, 17076, 17077, 17078],
      requires: []
    },
    844: {
      id: 844,
      row: 6,
      col: 1,
      icon: "inv_relics_idolofrejuvenation",
      ranks: [18562],
      requires: [
        {
          id: 843,
          qty: 5
        }
      ]
    }
  },
  283: {
    762: {
      id: 762,
      row: 0,
      col: 0,
      icon: "spell_nature_abolishmagic",
      ranks: [16814, 16815, 16816, 16817, 16818],
      requires: []
    },
    761: {
      id: 761,
      row: 0,
      col: 1,
      icon: "spell_nature_natureswrath",
      ranks: [16689],
      requires: []
    },
    921: {
      id: 921,
      row: 0,
      col: 2,
      icon: "spell_nature_natureswrath",
      ranks: [17245, 17247, 17248, 17249],
      requires: [
        {
          id: 761,
          qty: 1
        }
      ]
    },
    787: {
      id: 787,
      row: 1,
      col: 0,
      icon: "spell_nature_stranglevines",
      ranks: [16918, 16919, 16920],
      requires: []
    },
    763: {
      id: 763,
      row: 1,
      col: 1,
      icon: "spell_nature_starfall",
      ranks: [16821, 16822, 16823, 16824, 16825],
      requires: []
    },
    791: {
      id: 791,
      row: 1,
      col: 2,
      icon: "inv_staff_01",
      ranks: [16902, 16903, 16904, 16905, 16906],
      requires: []
    },
    781: {
      id: 781,
      row: 1,
      col: 3,
      icon: "spell_nature_wispsplode",
      ranks: [16833, 16834, 16835],
      requires: []
    },
    782: {
      id: 782,
      row: 2,
      col: 0,
      icon: "spell_nature_thorns",
      ranks: [16836, 16839, 16840],
      requires: []
    },
    788: {
      id: 788,
      row: 2,
      col: 2,
      icon: "spell_nature_crystalball",
      ranks: [16864],
      requires: [
        {
          id: 791,
          qty: 5
        }
      ]
    },
    764: {
      id: 764,
      row: 2,
      col: 3,
      icon: "spell_nature_naturetouchgrow",
      ranks: [16819, 16820],
      requires: []
    },
    792: {
      id: 792,
      row: 3,
      col: 1,
      icon: "spell_nature_purge",
      ranks: [16909, 16910, 16911, 16912, 16913],
      requires: [
        {
          id: 763,
          qty: 5
        }
      ]
    },
    784: {
      id: 784,
      row: 3,
      col: 2,
      icon: "spell_arcane_starfire",
      ranks: [16850, 16923, 16924, 16925, 16926],
      requires: []
    },
    789: {
      id: 789,
      row: 4,
      col: 1,
      icon: "spell_nature_naturesblessing",
      ranks: [16880],
      requires: []
    },
    783: {
      id: 783,
      row: 4,
      col: 2,
      icon: "spell_nature_sentinal",
      ranks: [16845, 16846, 16847],
      requires: []
    },
    790: {
      id: 790,
      row: 5,
      col: 1,
      icon: "spell_nature_moonglow",
      ranks: [16896, 16897, 16899, 16900, 16901],
      requires: [
        {
          id: 789,
          qty: 1
        }
      ]
    },
    793: {
      id: 793,
      row: 6,
      col: 1,
      icon: "spell_nature_forceofnature",
      ranks: [24858],
      requires: []
    }
  },
  301: {
    944: {
      id: 944,
      row: 0,
      col: 1,
      icon: "spell_shadow_shadowbolt",
      ranks: [17793, 17796, 17801, 17802, 17803],
      requires: []
    },
    941: {
      id: 941,
      row: 0,
      col: 2,
      icon: "spell_fire_windsofwoe",
      ranks: [17778, 17779, 17780, 17781, 17782],
      requires: []
    },
    943: {
      id: 943,
      row: 1,
      col: 1,
      icon: "spell_shadow_deathpact",
      ranks: [17788, 17789, 17790, 17791, 17792],
      requires: []
    },
    982: {
      id: 982,
      row: 1,
      col: 2,
      icon: "spell_fire_fire",
      ranks: [18119, 18120, 18121, 18122, 18123],
      requires: []
    },
    983: {
      id: 983,
      row: 2,
      col: 0,
      icon: "spell_fire_firebolt",
      ranks: [18126, 18127],
      requires: []
    },
    984: {
      id: 984,
      row: 2,
      col: 1,
      icon: "spell_shadow_curse",
      ranks: [18128, 18129],
      requires: []
    },
    981: {
      id: 981,
      row: 2,
      col: 2,
      icon: "spell_fire_flameshock",
      ranks: [18130, 18131, 18132, 18133, 18134],
      requires: []
    },
    963: {
      id: 963,
      row: 2,
      col: 3,
      icon: "spell_shadow_scourgebuild",
      ranks: [17877],
      requires: []
    },
    985: {
      id: 985,
      row: 3,
      col: 0,
      icon: "spell_fire_lavaspawn",
      ranks: [18135, 18136],
      requires: []
    },
    964: {
      id: 964,
      row: 3,
      col: 1,
      icon: "spell_shadow_corpseexplode",
      ranks: [17917, 17918],
      requires: []
    },
    965: {
      id: 965,
      row: 3,
      col: 3,
      icon: "spell_fire_soulburn",
      ranks: [17927, 17929, 17930, 17931, 17932],
      requires: []
    },
    986: {
      id: 986,
      row: 4,
      col: 0,
      icon: "spell_fire_volcano",
      ranks: [18096, 18073],
      requires: [
        {
          id: 985,
          qty: 2
        }
      ]
    },
    961: {
      id: 961,
      row: 4,
      col: 1,
      icon: "spell_fire_immolation",
      ranks: [17815, 17833, 17834, 17835, 17836],
      requires: []
    },
    967: {
      id: 967,
      row: 4,
      col: 2,
      icon: "spell_shadow_shadowwordpain",
      ranks: [17959],
      requires: [
        {
          id: 981,
          qty: 5
        }
      ]
    },
    966: {
      id: 966,
      row: 5,
      col: 2,
      icon: "spell_fire_selfdestruct",
      ranks: [17954, 17955, 17956, 17957, 17958],
      requires: []
    },
    968: {
      id: 968,
      row: 6,
      col: 1,
      icon: "spell_fire_fireball",
      ranks: [17962],
      requires: [
        {
          id: 961,
          qty: 5
        }
      ]
    }
  },
  302: {
    1005: {
      id: 1005,
      row: 0,
      col: 1,
      icon: "spell_shadow_unsummonbuilding",
      ranks: [18174, 18175, 18176, 18177, 18178],
      requires: []
    },
    1003: {
      id: 1003,
      row: 0,
      col: 2,
      icon: "spell_shadow_abominationexplosion",
      ranks: [17810, 17811, 17812, 17813, 17814],
      requires: []
    },
    1006: {
      id: 1006,
      row: 1,
      col: 0,
      icon: "spell_shadow_curseofmannoroth",
      ranks: [18179, 18180, 18181],
      requires: []
    },
    1101: {
      id: 1101,
      row: 1,
      col: 1,
      icon: "spell_shadow_haunting",
      ranks: [18213, 18372],
      requires: []
    },
    1007: {
      id: 1007,
      row: 1,
      col: 2,
      icon: "spell_shadow_burningspirit",
      ranks: [18182, 18183],
      requires: []
    },
    1004: {
      id: 1004,
      row: 1,
      col: 3,
      icon: "spell_shadow_lifedrain02",
      ranks: [17804, 17805, 17806, 17807, 17808],
      requires: []
    },
    1284: {
      id: 1284,
      row: 2,
      col: 0,
      icon: "spell_shadow_curseofsargeras",
      ranks: [18827, 18829, 18830],
      requires: []
    },
    1001: {
      id: 1001,
      row: 2,
      col: 1,
      icon: "spell_shadow_fingerofdeath",
      ranks: [17783, 17784, 17785, 17786, 17787],
      requires: []
    },
    1061: {
      id: 1061,
      row: 2,
      col: 2,
      icon: "spell_shadow_contagion",
      ranks: [18288],
      requires: []
    },
    1021: {
      id: 1021,
      row: 3,
      col: 0,
      icon: "spell_shadow_callofbone",
      ranks: [18218, 18219],
      requires: []
    },
    1002: {
      id: 1002,
      row: 3,
      col: 1,
      icon: "spell_shadow_twilight",
      ranks: [18094, 18095],
      requires: []
    },
    1121: {
      id: 1121,
      row: 3,
      col: 3,
      icon: "spell_shadow_siphonmana",
      ranks: [17864, 18393],
      requires: []
    },
    1041: {
      id: 1041,
      row: 4,
      col: 1,
      icon: "spell_shadow_requiem",
      ranks: [18265],
      requires: []
    },
    1081: {
      id: 1081,
      row: 4,
      col: 2,
      icon: "spell_shadow_grimward",
      ranks: [18223],
      requires: [
        {
          id: 1061,
          qty: 1
        }
      ]
    },
    1082: {
      id: 1082,
      row: 4,
      col: 3,
      icon: "spell_shadow_grimward",
      ranks: [18310, 18311, 18312, 18313],
      requires: [
        {
          id: 1081,
          qty: 1
        }
      ]
    },
    1042: {
      id: 1042,
      row: 5,
      col: 1,
      icon: "spell_shadow_shadetruesight",
      ranks: [18271, 18272, 18273, 18274, 18275],
      requires: [
        {
          id: 1041,
          qty: 1
        }
      ]
    },
    1022: {
      id: 1022,
      row: 6,
      col: 1,
      icon: "spell_shadow_darkritual",
      ranks: [18220],
      requires: []
    }
  },
  303: {
    1221: {
      id: 1221,
      row: 0,
      col: 0,
      icon: "inv_stone_04",
      ranks: [18692, 18693],
      requires: []
    },
    1222: {
      id: 1222,
      row: 0,
      col: 1,
      icon: "spell_shadow_summonimp",
      ranks: [18694, 18695, 18696],
      requires: []
    },
    1223: {
      id: 1223,
      row: 0,
      col: 2,
      icon: "spell_shadow_metamorphosis",
      ranks: [18697, 18698, 18699, 18700, 18701],
      requires: []
    },
    1224: {
      id: 1224,
      row: 1,
      col: 0,
      icon: "spell_shadow_lifedrain",
      ranks: [18703, 18704],
      requires: []
    },
    1225: {
      id: 1225,
      row: 1,
      col: 1,
      icon: "spell_shadow_summonvoidwalker",
      ranks: [18705, 18706, 18707],
      requires: []
    },
    1242: {
      id: 1242,
      row: 1,
      col: 2,
      icon: "spell_holy_magicalsentry",
      ranks: [18731, 18743, 18744, 18745, 18746],
      requires: []
    },
    1243: {
      id: 1243,
      row: 2,
      col: 0,
      icon: "spell_shadow_summonsuccubus",
      ranks: [18754, 18755, 18756],
      requires: []
    },
    1226: {
      id: 1226,
      row: 2,
      col: 1,
      icon: "spell_nature_removecurse",
      ranks: [18708],
      requires: []
    },
    1241: {
      id: 1241,
      row: 2,
      col: 2,
      icon: "spell_shadow_antishadow",
      ranks: [18748, 18749, 18750, 18751, 18752],
      requires: []
    },
    1227: {
      id: 1227,
      row: 3,
      col: 1,
      icon: "spell_shadow_impphaseshift",
      ranks: [18709, 18710],
      requires: [
        {
          id: 1226,
          qty: 1
        }
      ]
    },
    1262: {
      id: 1262,
      row: 3,
      col: 2,
      icon: "spell_shadow_shadowworddominate",
      ranks: [18769, 18770, 18771, 18772, 18773],
      requires: []
    },
    1283: {
      id: 1283,
      row: 4,
      col: 0,
      icon: "spell_shadow_enslavedemon",
      ranks: [18821, 18822, 18823, 18824, 18825],
      requires: []
    },
    1281: {
      id: 1281,
      row: 4,
      col: 1,
      icon: "spell_shadow_psychicscream",
      ranks: [18788],
      requires: []
    },
    1261: {
      id: 1261,
      row: 4,
      col: 3,
      icon: "inv_ammo_firetar",
      ranks: [18767, 18768],
      requires: []
    },
    1244: {
      id: 1244,
      row: 5,
      col: 2,
      icon: "spell_shadow_shadowpact",
      ranks: [23785, 23822, 23823, 23824, 23825],
      requires: [
        {
          id: 1262,
          qty: 5
        }
      ]
    },
    1282: {
      id: 1282,
      row: 6,
      col: 1,
      icon: "spell_shadow_gathershadows",
      ranks: [19028],
      requires: [
        {
          id: 1281,
          qty: 1
        }
      ]
    },
    1263: {
      id: 1263,
      row: 6,
      col: 2,
      icon: "inv_misc_gem_sapphire_01",
      ranks: [18774, 18775],
      requires: []
    }
  },
  361: {
    1382: {
      id: 1382,
      row: 0,
      col: 1,
      icon: "spell_nature_ravenform",
      ranks: [19552, 19553, 19554, 19555, 19556],
      requires: []
    },
    1389: {
      id: 1389,
      row: 0,
      col: 2,
      icon: "spell_nature_reincarnation",
      ranks: [19583, 19584, 19585, 19586, 19587],
      requires: []
    },
    1624: {
      id: 1624,
      row: 1,
      col: 0,
      icon: "ability_eyeoftheowl",
      ranks: [19557, 19558],
      requires: []
    },
    1381: {
      id: 1381,
      row: 1,
      col: 1,
      icon: "ability_hunter_aspectofthemonkey",
      ranks: [19549, 19550, 19551, 24386, 24387],
      requires: []
    },
    1395: {
      id: 1395,
      row: 1,
      col: 2,
      icon: "inv_misc_pelt_bear_03",
      ranks: [19609, 19610, 19612],
      requires: []
    },
    1625: {
      id: 1625,
      row: 1,
      col: 3,
      icon: "ability_hunter_beastsoothe",
      ranks: [24443, 19575],
      requires: []
    },
    1384: {
      id: 1384,
      row: 2,
      col: 0,
      icon: "ability_mount_jungletiger",
      ranks: [19559, 19560],
      requires: []
    },
    1391: {
      id: 1391,
      row: 2,
      col: 1,
      icon: "ability_druid_dash",
      ranks: [19596],
      requires: []
    },
    1396: {
      id: 1396,
      row: 2,
      col: 2,
      icon: "ability_bullrush",
      ranks: [19616, 19617, 19618, 19619, 19620],
      requires: []
    },
    1385: {
      id: 1385,
      row: 3,
      col: 1,
      icon: "ability_hunter_mendpet",
      ranks: [19572, 19573],
      requires: []
    },
    1393: {
      id: 1393,
      row: 3,
      col: 2,
      icon: "inv_misc_monsterclaw_04",
      ranks: [19598, 19599, 19600, 19601, 19602],
      requires: []
    },
    1388: {
      id: 1388,
      row: 4,
      col: 0,
      icon: "ability_druid_demoralizingroar",
      ranks: [19578, 20895],
      requires: []
    },
    1387: {
      id: 1387,
      row: 4,
      col: 1,
      icon: "ability_devour",
      ranks: [19577],
      requires: []
    },
    1390: {
      id: 1390,
      row: 4,
      col: 3,
      icon: "spell_nature_abolishmagic",
      ranks: [19590, 19592],
      requires: []
    },
    1397: {
      id: 1397,
      row: 5,
      col: 2,
      icon: "inv_misc_monsterclaw_03",
      ranks: [19621, 19622, 19623, 19624, 19625],
      requires: [
        {
          id: 1393,
          qty: 5
        }
      ]
    },
    1386: {
      id: 1386,
      row: 6,
      col: 1,
      icon: "ability_druid_ferociousbite",
      ranks: [19574],
      requires: [
        {
          id: 1387,
          qty: 1
        }
      ]
    }
  },
  362: {
    1623: {
      id: 1623,
      row: 0,
      col: 0,
      icon: "inv_misc_head_dragon_black",
      ranks: [24293, 24294, 24295],
      requires: []
    },
    1301: {
      id: 1301,
      row: 0,
      col: 1,
      icon: "spell_holy_prayerofhealing",
      ranks: [19151, 19152, 19153],
      requires: []
    },
    1311: {
      id: 1311,
      row: 0,
      col: 2,
      icon: "ability_parry",
      ranks: [19295, 19297, 19298, 19301, 19300],
      requires: []
    },
    1304: {
      id: 1304,
      row: 1,
      col: 0,
      icon: "spell_nature_stranglevines",
      ranks: [19184, 19387, 19388, 19389, 19390],
      requires: []
    },
    1621: {
      id: 1621,
      row: 1,
      col: 1,
      icon: "ability_racial_bloodrage",
      ranks: [19159, 19160],
      requires: []
    },
    1305: {
      id: 1305,
      row: 1,
      col: 2,
      icon: "ability_rogue_trip",
      ranks: [19228, 19232, 19233, 19234, 19235],
      requires: []
    },
    1306: {
      id: 1306,
      row: 2,
      col: 0,
      icon: "spell_nature_timestop",
      ranks: [19239, 19245],
      requires: []
    },
    1622: {
      id: 1622,
      row: 2,
      col: 1,
      icon: "spell_shadow_twilight",
      ranks: [19255, 19256, 19257, 19258, 19259],
      requires: []
    },
    1308: {
      id: 1308,
      row: 2,
      col: 2,
      icon: "ability_whirlwind",
      ranks: [19263],
      requires: []
    },
    1322: {
      id: 1322,
      row: 3,
      col: 0,
      icon: "ability_ensnare",
      ranks: [19376, 19377],
      requires: []
    },
    1310: {
      id: 1310,
      row: 3,
      col: 1,
      icon: "ability_kick",
      ranks: [19290, 19294, 24283],
      requires: []
    },
    1309: {
      id: 1309,
      row: 3,
      col: 3,
      icon: "ability_rogue_feigndeath",
      ranks: [19286, 19287],
      requires: []
    },
    1321: {
      id: 1321,
      row: 4,
      col: 1,
      icon: "spell_holy_blessingofstamina",
      ranks: [19370, 19371, 19373],
      requires: []
    },
    1312: {
      id: 1312,
      row: 4,
      col: 2,
      icon: "ability_warrior_challange",
      ranks: [19306],
      requires: [
        {
          id: 1308,
          qty: 1
        }
      ]
    },
    1303: {
      id: 1303,
      row: 5,
      col: 2,
      icon: "spell_nature_invisibilty",
      ranks: [19168, 19180, 19181, 24296, 24297],
      requires: []
    },
    1325: {
      id: 1325,
      row: 6,
      col: 1,
      icon: "inv_spear_02",
      ranks: [19386],
      requires: [
        {
          id: 1321,
          qty: 3
        }
      ]
    }
  },
  363: {
    1341: {
      id: 1341,
      row: 0,
      col: 1,
      icon: "spell_frost_stun",
      ranks: [19407, 19412, 19413, 19414, 19415],
      requires: []
    },
    1342: {
      id: 1342,
      row: 0,
      col: 2,
      icon: "spell_frost_wizardmark",
      ranks: [19416, 19417, 19418, 19419, 19420],
      requires: []
    },
    1343: {
      id: 1343,
      row: 1,
      col: 1,
      icon: "ability_hunter_snipershot",
      ranks: [19421, 19422, 19423, 19424, 19425],
      requires: []
    },
    1344: {
      id: 1344,
      row: 1,
      col: 2,
      icon: "ability_searingarrow",
      ranks: [19426, 19427, 19429, 19430, 19431],
      requires: []
    },
    1345: {
      id: 1345,
      row: 2,
      col: 0,
      icon: "inv_spear_07",
      ranks: [19434],
      requires: []
    },
    1346: {
      id: 1346,
      row: 2,
      col: 1,
      icon: "ability_impalingbolt",
      ranks: [19454, 19455, 19456, 19457, 19458],
      requires: []
    },
    1352: {
      id: 1352,
      row: 2,
      col: 3,
      icon: "ability_townwatch",
      ranks: [19498, 19499, 19500],
      requires: []
    },
    1348: {
      id: 1348,
      row: 3,
      col: 1,
      icon: "ability_hunter_quickshot",
      ranks: [19464, 19465, 19466, 19467, 19468],
      requires: []
    },
    1349: {
      id: 1349,
      row: 3,
      col: 2,
      icon: "ability_piercedamage",
      ranks: [19485, 19487, 19488, 19489, 19490],
      requires: [
        {
          id: 1344,
          qty: 5
        }
      ]
    },
    1353: {
      id: 1353,
      row: 4,
      col: 0,
      icon: "ability_golemstormbolt",
      ranks: [19503],
      requires: []
    },
    1347: {
      id: 1347,
      row: 4,
      col: 1,
      icon: "ability_upgrademoonglaive",
      ranks: [19461, 19462, 24691],
      requires: []
    },
    1351: {
      id: 1351,
      row: 4,
      col: 2,
      icon: "ability_hunter_criticalshot",
      ranks: [19491, 19493, 19494],
      requires: []
    },
    1362: {
      id: 1362,
      row: 5,
      col: 2,
      icon: "inv_weapon_rifle_06",
      ranks: [19507, 19508, 19509, 19510, 19511],
      requires: []
    },
    1361: {
      id: 1361,
      row: 6,
      col: 1,
      icon: "ability_trueshot",
      ranks: [19506],
      requires: [
        {
          id: 1347,
          qty: 3
        }
      ]
    }
  },
  381: {
    1401: {
      id: 1401,
      row: 0,
      col: 1,
      icon: "spell_holy_fistofjustice",
      ranks: [20042, 20045, 20046, 20047, 20048],
      requires: []
    },
    1407: {
      id: 1407,
      row: 0,
      col: 2,
      icon: "spell_frost_windwalkon",
      ranks: [20101, 20102, 20103, 20104, 20105],
      requires: []
    },
    1631: {
      id: 1631,
      row: 1,
      col: 0,
      icon: "spell_holy_righteousfury",
      ranks: [25956, 25957],
      requires: []
    },
    1464: {
      id: 1464,
      row: 1,
      col: 1,
      icon: "spell_holy_holysmite",
      ranks: [20335, 20336, 20337],
      requires: []
    },
    1403: {
      id: 1403,
      row: 1,
      col: 2,
      icon: "ability_parry",
      ranks: [20060, 20061, 20062, 20063, 20064],
      requires: []
    },
    1633: {
      id: 1633,
      row: 2,
      col: 0,
      icon: "spell_holy_vindication",
      ranks: [9452, 26016, 26021],
      requires: []
    },
    1411: {
      id: 1411,
      row: 2,
      col: 1,
      icon: "spell_holy_retributionaura",
      ranks: [20117, 20118, 20119, 20120, 20121],
      requires: []
    },
    1481: {
      id: 1481,
      row: 2,
      col: 2,
      icon: "ability_warrior_innerrage",
      ranks: [20375],
      requires: []
    },
    1634: {
      id: 1634,
      row: 2,
      col: 3,
      icon: "spell_holy_persuitofjustice",
      ranks: [26022, 26023],
      requires: []
    },
    1632: {
      id: 1632,
      row: 3,
      col: 0,
      icon: "spell_holy_eyeforaneye",
      ranks: [9799, 25988],
      requires: []
    },
    1405: {
      id: 1405,
      row: 3,
      col: 2,
      icon: "spell_holy_auraoflight",
      ranks: [20091, 20092],
      requires: []
    },
    1410: {
      id: 1410,
      row: 4,
      col: 0,
      icon: "inv_hammer_04",
      ranks: [20111, 20112, 20113],
      requires: []
    },
    1409: {
      id: 1409,
      row: 4,
      col: 2,
      icon: "spell_holy_mindvision",
      ranks: [20218],
      requires: []
    },
    1402: {
      id: 1402,
      row: 5,
      col: 1,
      icon: "ability_racial_avatar",
      ranks: [20049, 20056, 20057, 20058, 20059],
      requires: [
        {
          id: 1411,
          qty: 5
        }
      ]
    },
    1441: {
      id: 1441,
      row: 6,
      col: 1,
      icon: "spell_holy_prayerofhealing",
      ranks: [20066],
      requires: []
    }
  },
  382: {
    1450: {
      id: 1450,
      row: 0,
      col: 1,
      icon: "ability_golemthunderclap",
      ranks: [20262, 20263, 20264, 20265, 20266],
      requires: []
    },
    1449: {
      id: 1449,
      row: 0,
      col: 2,
      icon: "spell_nature_sleep",
      ranks: [20257, 20258, 20259, 20260, 20261],
      requires: []
    },
    1432: {
      id: 1432,
      row: 1,
      col: 1,
      icon: "spell_arcane_blink",
      ranks: [20205, 20206, 20207, 20209, 20208],
      requires: []
    },
    1463: {
      id: 1463,
      row: 1,
      col: 2,
      icon: "ability_thunderbolt",
      ranks: [20224, 20225, 20330, 20331, 20332],
      requires: []
    },
    1444: {
      id: 1444,
      row: 2,
      col: 0,
      icon: "spell_holy_holybolt",
      ranks: [20237, 20238, 20239],
      requires: []
    },
    1435: {
      id: 1435,
      row: 2,
      col: 1,
      icon: "spell_holy_innerfire",
      ranks: [26573],
      requires: []
    },
    1443: {
      id: 1443,
      row: 2,
      col: 2,
      icon: "spell_holy_layonhands",
      ranks: [20234, 20235],
      requires: []
    },
    1628: {
      id: 1628,
      row: 2,
      col: 3,
      icon: "spell_holy_unyieldingfaith",
      ranks: [9453, 25836],
      requires: []
    },
    1461: {
      id: 1461,
      row: 3,
      col: 1,
      icon: "spell_holy_greaterheal",
      ranks: [20210, 20212, 20213, 20214, 20215],
      requires: []
    },
    1446: {
      id: 1446,
      row: 3,
      col: 2,
      icon: "spell_holy_sealofwisdom",
      ranks: [20244, 20245],
      requires: []
    },
    1433: {
      id: 1433,
      row: 4,
      col: 1,
      icon: "spell_holy_heal",
      ranks: [20216],
      requires: [
        {
          id: 1461,
          qty: 5
        }
      ]
    },
    1465: {
      id: 1465,
      row: 4,
      col: 2,
      icon: "spell_holy_healingaura",
      ranks: [20359, 20360, 20361],
      requires: []
    },
    1627: {
      id: 1627,
      row: 5,
      col: 2,
      icon: "spell_holy_power",
      ranks: [5923, 5924, 5925, 5926, 25829],
      requires: []
    },
    1502: {
      id: 1502,
      row: 6,
      col: 1,
      icon: "spell_holy_searinglight",
      ranks: [20473],
      requires: [
        {
          id: 1433,
          qty: 1
        }
      ]
    }
  },
  383: {
    1422: {
      id: 1422,
      row: 0,
      col: 1,
      icon: "spell_holy_devotionaura",
      ranks: [20138, 20139, 20140, 20141, 20142],
      requires: []
    },
    1421: {
      id: 1421,
      row: 0,
      col: 2,
      icon: "ability_defend",
      ranks: [20127, 20130, 20135, 20136, 20137],
      requires: []
    },
    1630: {
      id: 1630,
      row: 1,
      col: 0,
      icon: "ability_rogue_ambush",
      ranks: [20189, 20192, 20193],
      requires: []
    },
    1425: {
      id: 1425,
      row: 1,
      col: 1,
      icon: "spell_holy_sealofprotection",
      ranks: [20174, 20175],
      requires: []
    },
    1423: {
      id: 1423,
      row: 1,
      col: 3,
      icon: "spell_holy_devotion",
      ranks: [20143, 20144, 20145, 20146, 20147],
      requires: []
    },
    1442: {
      id: 1442,
      row: 2,
      col: 0,
      icon: "spell_magic_magearmor",
      ranks: [20217],
      requires: []
    },
    1501: {
      id: 1501,
      row: 2,
      col: 1,
      icon: "spell_holy_sealoffury",
      ranks: [20468, 20469, 20470],
      requires: []
    },
    1424: {
      id: 1424,
      row: 2,
      col: 2,
      icon: "inv_shield_06",
      ranks: [20148, 20149, 20150],
      requires: [
        {
          id: 1421,
          qty: 5
        }
      ]
    },
    1629: {
      id: 1629,
      row: 2,
      col: 3,
      icon: "spell_magic_lesserinvisibilty",
      ranks: [20096, 20097, 20098, 20099, 20100],
      requires: []
    },
    1521: {
      id: 1521,
      row: 3,
      col: 1,
      icon: "spell_holy_sealofmight",
      ranks: [20487, 20488, 20489],
      requires: []
    },
    1626: {
      id: 1626,
      row: 3,
      col: 2,
      icon: "spell_holy_mindsooth",
      ranks: [20254, 20255, 20256],
      requires: []
    },
    1431: {
      id: 1431,
      row: 4,
      col: 1,
      icon: "spell_nature_lightningshield",
      ranks: [20911],
      requires: []
    },
    1426: {
      id: 1426,
      row: 4,
      col: 2,
      icon: "spell_holy_blessingofstrength",
      ranks: [20177, 20179, 20181, 20180, 20182],
      requires: []
    },
    1429: {
      id: 1429,
      row: 5,
      col: 2,
      icon: "inv_sword_20",
      ranks: [20196, 20197, 20198, 20199, 20200],
      requires: []
    },
    1430: {
      id: 1430,
      row: 6,
      col: 1,
      icon: "spell_holy_blessingofprotection",
      ranks: [20925],
      requires: [
        {
          id: 1431,
          qty: 1
        }
      ]
    }
  }
}

export const talentsById = {}
export const talentsBySpecArray = {}
export const talentToSpec = {}

for (let specId in talentsBySpec) {
  for (let talentId in talentsBySpec[specId]) {
    talentsById[talentId] = talentsBySpec[specId][talentId]
    talentsBySpecArray[specId] = Object.values(talentsBySpec[specId])
    talentToSpec[talentId] = parseInt(specId, 10)
  }
}
