var general_Abilities = 
[ 
        {
          Name: "N/A",
          Type: "N/A",
          Description: "N/A",
          Cost: "N/A",
          Requirement: "N/A"
        },
        {
          Name: "Grit",
          Type: "Passive",
          Description: "Gain +1 defense for every HP you are currently missing (max +4). While at max HP you gain +1 to attack and defense.",
          Cost: "N/A",
          Requirement: "2 Fortitude"
        },
        {
          Name: "Concussion",
          Type: "Active",
          Description: "On a successful hit, stagger your opponent causing them to roll with a negative modifier equal to half your fortitude +1 (rounded up) until after your next turn for both attack and defense rolls.",
          Cost: "1 SP",
          Requirement: "1 Fortitude"
        },
        {
          Name: "Bodyguard",
          Type: "Reactive",
          Description: "When a friendly member is targeted by an attack, you may spend 1 SP to jump in front of them and make yourself the target in their place. Gain +2 to defense rolls for the turn. This must be declared after someone is named a target, and before their defense rolls.",
          Cost: "1 SP",
          Requirement: "1 Fortitude"
        },
        {
          Name: "Divines Light",
          Type: "Reactive",
          Description: "On a successful attack, may heal 2 HP between friendlies for 1 MP.",
          Cost: "1 MP",
          Requirement: "1 Fortitude 1 Judgement"
        },
        {
          Name: "Rejuvenation Expert",
          Type: "Active",
          Description: "Spend 2 MP OR 2 SP to restore 2 points total of MP and/or SP split among chosen friendly targets. Your target(s) also gain +1 to attack on their next turn.",
          Cost: "2 MP or 2 SP",
          Requirement: "1 Judgement"
        },
        {
          Name: "Magickal Healer",
          Type: "Active",
          Description: "Spend 1 MP to heal a friendly target for 2 HP OR Spend 2 MP to revive a friendly from 0 HP to 1 HP",
          Cost: "1 MP or 2 MP",
          Requirement: "1 Judgement"
        },
        {
          Name: "Ward Specialist",
          Type: "Active",
          Description: "Spend 1 MP to give 2 wards split amongst allies, having 1 ward placed on one ally at a time OR Spend 2 MP to give 2 wards to a single target.",
          Cost: "1 MP or 2 MP",
          Requirement: "2 Judgement"
        },
        {
          Name: "Intervention",
          Type: "Reactive",
          Description: "Spend 2 MP to grant 1 ward to a friendly they have been targeted by an attack. Gain your judgement modifier on your next attack roll if you target their attacker. This must be declared after someone is named a target, and before their defense roll.",
          Cost: "2 MP",
          Requirement: "2 Judgement"
        },
        {
          Name: "Blur",
          Type: "Passive",
          Description: "When spending SP and/or MP you gain cunning OR judgement to defense. (max +3)",
          Cost: "N/A",
          Requirement: "1 Cunning 1 Judgement"
        },
        {
          Name: "Foresight",
          Type: "Passive",
          Description: "On a successful attack, gain a stacking +2 to hit once per turn (stacks up to max +4). On a missed attack, lose one stack of Foresight once per turn. The first attack of the turn determines if you gain or lose the bonus for the next round.",
          Cost: "N/A",
          Requirement: "1 Cunning"
        },
        {
          Name: "Tactical Retreat",
          Type: "Reactive",
          Description: "Spend 1 SP and 1 MP to reroll your defense rolls this turn. Must keep the new rolls.",
          Cost: "1 SP and 1 MP",
          Requirement: "2 Cunning"
        },
        {
          Name: "Debilitating Strike",
          Type: "Active",
          Description: "On a successful attack, the target cannot use an active or reactive ability until the beginning of your next turn; they are limited only to passive and basic attacks.",
          Cost: "1 SP and 1 MP",
          Requirement: "1 Cunning"
        },
        {
          Name: "Opportunist",
          Type: "Passive",
          Description: "Gain a +4 to attack against an attacker on your next turn if you avoided ALL of their attacks. If you are not targeted by any attacks since your last turn OR you go before your enemy on the first round, gain a +2 to attack. Gain a +4 to initiative.",
          Cost: "N/A",
          Requirement: "2 Cunning 1 Fortitude"
        },
        {
          Name: "Staggering Blow",
          Type: "Active",
          Description: "Spend 1 SP, on a successful hit -1 damage to all target’s attacks next round.",
          Cost: "1 SP",
          Requirement: "1 Fortitude 1 Cunning"
        },
        {
          Name: "Taunt",
          Type: "Active",
          Description: "Taunt an enemy, requiring they attack you in their next turn, or they take your cunning in damage. In addition, gain 1 ward.",
          Cost: "2 SP",
          Requirement: "1 Judgement 1 Fortitude 1 Cunning"
        },
        {
          Name: "Combat Accuracy",
          Type: "Passive",
          Description: "Gain a +2 to hit on your attacks",
          Cost: "N/A",
          Requirement: "Any"
        },
        {
          Name: "Defensive Stance",
          Type: "Passive",
          Description: "Gain a +2 to defense rolls.",
          Cost: "N/A",
          Requirement: "Any"
        },
        {
          Name: "Magical Accuracy",
          Type: "Active",
          Description: "Gain +3 to hit this turn.",
          Cost: "1 MP",
          Requirement: "Any"
        },
        {
          Name: "Keen Accuracy",
          Type: "Active",
          Description: "Gain +3 to hit this turn.",
          Cost: "1 SP",
          Requirement: "Any"
        },
        {
          Name: "Magical Defense",
          Type: "Active",
          Description: "Gain +3 to defense rolls for one round.",
          Cost: "1 MP",
          Requirement: "Any"
        },
        {
          Name: "Keen Defense",
          Type: "Active",
          Description: "Gain +3 to defense rolls for one round.",
          Cost: "1 SP",
          Requirement: "Any"
        },
        {
          Name: "Magical Damage",
          Type: "Active",
          Description: "Gain +1 damage this turn.",
          Cost: "1 MP",
          Requirement: "Any"
        },
        {
          Name: "Keen Damage",
          Type: "Active",
          Description: "Gain +1 damage this turn.",
          Cost: "1 SP",
          Requirement: "Any"
        }
]

var calling_Abilities = 
[
        {
          Name: "N/A",
          Type: "N/A",
          Description: "N/A",
          Cost: "N/A",
          Requirement: "N/A"
        },
        {
          Name: "Wall of Steel",
          Type: "Reactive",
          Description: "Reduce damage a target receives from an attack by 2.  The target that you negated damage for also receives +4 defense for a full round.",
          Cost: "2 SP",
          Requirement: "Knight"
        },
        {
          Name: "Resolute Smite",
          Type: "Active",
          Description: "Spend 1 SP to add +2 damage to your attack OR Spend 2 SP to add +3 damage and +1 to hit to your attack.",
          Cost: "1 SP or 2 SP",
          Requirement: "Crusader"
        },
        {
          Name: "Elemental Barrage",
          Type: "Active",
          Description: "Spend 1 MP to gain +2 dmg OR spend 2 MP to gain  two additional targets. Each target is rolled separately.",
          Cost: "1 MP or 2 MP",
          Requirement: "Warlock"
        },
        {
          Name: "Mara's Touch",
          Type: "Active",
          Description: "Spend 1 MP to cleanse any negative effects from a target. OR Spend 2 MP to restore 5 HP split among friendly targets as you choose. OR Spend 2 MP to revive a target from 0 HP to 3 HP.",
          Cost: "1 MP or 2 MP",
          Requirement: "Mystic"
        },
        {
          Name: "Enchanted Weapon",
          Type: "Active",
          Description: "Spend 1 MP to gain +1 damage and deal 1 irreducible damage at the start of your next turn. OR Spend 2 MP to gain +3 to attack, +1 damage, and deal 1 irredecible damage at the start of your next turn.",
          Cost: "1 MP or 2 MP",
          Requirement: "Spellblade"
        },
        {
          Name: "Shadow Siphon",
          Type: "Active",
          Description: "On a successful hit, your target takes 1 additional damage and loses 1 point of a resource of your choice. A friendly target of your choosing gains 1 point of that resource. The resource must be chosen at the time of your declare.",
          Cost: "1 SP and 1 MP",
          Requirement: "Shadowdancer"
        },
        {
          Name: "Rapid Strikes",
          Type: "Active",
          Description: "Activate this ability to attack 4 times. Attacks may be split between multiple enemies. ALL your attacks this turn deal only 1 dmg. For each hit to target(s) they gain a stacking penalty of -1 to attack to their next attack.",
          Cost: "1 SP and 1 MP",
          Requirement: "Duelist"
        },
        {
          Name: "Tactician",
          Type: "Active",
          Description: "Spend 1SP to give a friendly target a +6 to hit OR spend 1 SP & 1 MP to mark a target enemy giving all friendly rolls a +4 to hit against the target for one round.",
          Cost: "1 SP or 1 SP and 1 MP",
          Requirement: "Infiltrator"
        },
        {
          Name: "Divine Fury",
          Type: "Active",
          Description: "Spend 2SP to gain 2 extra attacks that do 1dmg to a single target. All attacks gain a bonus to hit based on your missing HP. Alternatively, you may spend 2HP, but you cannot be healed until the start of your next turn",
          Cost: "2 SP or 2 HP",
          Requirement: "Zealot"
        }

]

var mundus_Abilities= [
    {
      Name: "N/A",
      Effect: "N/A"
    },
    {
      Name: "The Warrior",
      Effect: "Gain +2 SP"
    },
    {
      Name: "The Lord",
      Effect: "Gain +1 HP"
    },
    {
      Name: "The Lady",
      Effect: "Your holy artifact procs on its assigned number and next highest number. If the Holy number is 20, then your holy artifact procs on a 19 as well. This effect can only be applied to the first defense roll in a turn"
    },
    {
      Name: "The Steed",
      Effect: "Gain +4 to initiative and +1 defense"
    },
    {
      Name: "The Mage",
      Effect: "Gain +2 MP"
    },
    {
      Name: "The Apprentice",
      Effect: "Deal +1 damage when spending MP with an ability. If used with an ability with multiple attacks, it only affects the first attack roll"
    },
    {
      Name: "The Atronach",
      Effect: "Every successful hit gains +1 MP, max 1 a turn"
    },
    {
      Name: "The Ritual",
      Effect: "Upon a successful defense you may heal a friendly target for +1 HP. This passive can only be used once per turn"
    },
    {
      Name: "The Thief",
      Effect: "Gain +1 to SP and MP"
    },
    {
      Name: "The Shadow",
      Effect: "Your holy artifact procs on its assigned number and next highest number. If the Holy number is 20, then your holy artifact procs on a 19 as well. This effect can only be applied to the first attack roll in a turn"
    },
    {
      Name: "The Lover",
      Effect: "Gain +1 to hit and the first point of damage is irreducible"
    },
    {
      Name: "The Tower",
      Effect: "Deal +1 damage when spending SP with an ability. If used with an ability with multiple attacks, it only affects the first attack roll"
    },
    {
      Name: "The Serpent",
      Effect: "Every successful hit you regain +1 SP, max 1 a turn"
    }
   ]

var forge_Abilities= [
    {
      Name: "N/A",
      Effect: "N/A",
      Proc: "[N/A]"
    },
    {
      Name: "SMITE",
      Effect: "+1 irreducible damage",
      Proc: "[a]"
    },
    {
      Name: "HINDER",
      Effect: "-2 to defending opponent's next attack roll",
      Proc: "[a]"
    },
    {
      Name: "SLOW",
      Effect: "-2 to defending opponent's next defense roll",
      Proc: "[a]"
    },
    {
      Name: "BURN",
      Effect: "+2 damage over 2 turns (1 per turn). This damage is reducible/blockable. If the FIRST point is reduced / blocked, the effect fails/fizzles",
      Proc: "[a]"
    },
    {
      Name: "INSPIRE",
      Effect: "add 4 to current attack roll",
      Proc: "[a]"
    },
    {
      Name: "PROTECT",
      Effect: "add 4 to current defense roll",
      Proc: "[d]"
    },
    {
      Name: "HEAL",
      Effect: "Heal self for 2 HP (may not exceed current HP cap)",
      Proc: "[a]"
    },
    {
      Name: "REVEAL",
      Effect: "Reroll current attack roll",
      Proc: "[a]"
    },
    {
      Name: "DODGE",
      Effect: "Reroll current defense roll",
      Proc: "[d]"
    },
    {
      Name: "WARD",
      Effect: "1 point stackable ward created on self",
      Proc: "[d]"
    },
    {
      Name: "SILENCE",
      Effect: "Defender cannot use an ability until your next turn",
      Proc: "[a]"
    },
    {
      Name: "VICIOUS",
      Effect: "+2 damage, attacker takes 1 irreducible damage",
      Proc: "[a]"
    },
    {
      Name: "GLORIOUS",
      Effect: "+1 HP to friendly target (may not exceed HP cap)",
      Proc: "[d]"
    },
    {
      Name: "COUNTER",
      Effect: "+1 irreducible damage",
      Proc: "[d]"
    }
   ]

function getAllGeneralAbilitiesNames()
    {
        var listNames = [];
        general_Abilities.forEach( x  =>  {
        listNames.push(x.Name);  
    });
    return listNames;
    }

    function getAllCallingAbilitiesNames()
    {
        var listNames = [];
        calling_Abilities.forEach( x  =>  {
        listNames.push(x.Name);  
    });
    return listNames;
    }

    function getAllMundusAbilitiesNames()
    {
        var listNames = [];
        mundus_Abilities.forEach( x  =>  {
        listNames.push(x.Name);  
    });
    return listNames;
    }

    function getAllForgeAbilitiesNames()
    {
        var listNames = [];
        forge_Abilities.forEach( x  =>  {
        listNames.push(x.Name);  
    });
    return listNames;
    }

    function getAbilityInfo (finder, type)
    {
        var texto = "";
        switch (type)
        {
            case "general": texto= general_Abilities.find(x => x.Name === finder); break;
            
            case "calling": texto= calling_Abilities.find(x => x.Name === finder); break;

            case "mundus": texto= mundus_Abilities.find(x => x.Name === finder); break;

            case "forge": texto= forge_Abilities.find(x => x.Name === finder); break;
            
           
        }
        return texto;
    }