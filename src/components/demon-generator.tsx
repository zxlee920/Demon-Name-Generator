"use client"

import { useState, useEffect, useCallback } from "react"
import { RefreshCw, Copy, Zap, Crown, Eye, Swords, Users, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"

// 基于真实的Ars Goetia和西方恶魔学传统的男性恶魔前缀
const maleDemonPrefixes = [
  // Ars Goetia中的著名恶魔
  "Baal", "Agares", "Vassago", "Samigina", "Marbas", "Valefor", "Amon", "Barbatos",
  "Paimon", "Buer", "Gusion", "Sitri", "Beleth", "Leraje", "Eligos", "Zepar",
  "Botis", "Bathin", "Sallos", "Purson", "Marax", "Ipos", "Aim", "Naberius",
  "Glasya", "Bune", "Ronove", "Berith", "Astaroth", "Forneus", "Foras", "Asmoday",
  "Gaap", "Furfur", "Marchosias", "Stolas", "Phenex", "Halphas", "Malphas", "Raum",
  "Focalor", "Vepar", "Sabnock", "Shax", "Vine", "Bifrons", "Vual", "Haagenti",
  "Crocell", "Furcas", "Balam", "Alloces", "Caim", "Murmur", "Orobas", "Gremory",
  "Ose", "Amy", "Orias", "Vapula", "Zagan", "Valac", "Andras", "Flauros",
  "Andrealphus", "Kimaris", "Amdusias", "Belial", "Decarabia", "Seere", "Dantalion", "Andromalius",
  // 其他著名恶魔和堕落天使
  "Lucifer", "Satan", "Beelzebub", "Mephistopheles", "Abaddon", "Apollyon", "Mammon", "Leviathan",
  "Asmodeus", "Belphegor", "Azazel", "Samael", "Moloch", "Dagon", "Baphomet", "Belzebuth",
  // 各种文化中的恶魔和黑暗存在
  "Ahriman", "Angra", "Iblis", "Shaitan", "Mara", "Ravana", "Kali", "Shiva",
  "Set", "Apep", "Typhon", "Medusa", "Minotaur", "Cerberus", "Charon", "Hades",
  // 现代流行文化中的恶魔
  "Crowley", "Constantine", "Hellboy", "Spawn", "Ghost", "Rider", "Dante", "Vergil",
  // 原创恶魔名字 - 基于拉丁语、希腊语和古代语言元素
  "Vorthak", "Maltheus", "Xerion", "Drakonis", "Vexaroth", "Morteus", "Shadowbane", "Grimlock",
  "Thalorin", "Voidheart", "Necrosius", "Bloodfang", "Darkstorm", "Ironwrath", "Soulreaper", "Nightbringer",
  "Pyrothane", "Venomous", "Terroris", "Maleficus", "Devastor", "Corruptor", "Tormentor", "Destroyer",
  "Vorthex", "Malthazar", "Xerophage", "Dracul", "Vexillum", "Mortifer", "Shadowmere", "Grimwald",
  "Thalassic", "Voidwalker", "Necrarch", "Bloodmoon", "Darkbane", "Ironclad", "Soulblight", "Nightfall",
  // 更多原创恶魔名字 - 基于古代语言词根和黑暗主题
  "Zephyros", "Korthain", "Valdris", "Threnody", "Morghast", "Vexthorn", "Shadowtide", "Grimthane",
  "Vorthul", "Malthorn", "Xerathis", "Drakthul", "Vexmoor", "Mortgrim", "Shadowvex", "Grimvoid",
  "Thalgrim", "Voidthorn", "Necrovex", "Bloodthorn", "Darkvex", "Ironvoid", "Soulthorn", "Nightvex",
  "Pyrothul", "Venomthorn", "Terrorvex", "Malethane", "Devasthorn", "Corruptvex", "Tormenthane", "Destroyvex",
  // 基于元素和自然力量的原创名字
  "Stormrend", "Flameheart", "Frostbane", "Earthshaker", "Windripper", "Thunderclaw", "Lightbane", "Shadowflame",
  "Voidstorm", "Bloodfire", "Soulice", "Nightwind", "Darkthunder", "Grimlight", "Deathflame", "Chaoswind",
  // 基于武器和战争的原创名字
  "Bladestorm", "Axegrind", "Spearpoint", "Swordbreaker", "Shieldcrusher", "Hammerfall", "Bowstring", "Daggerheart",
  "Warbringer", "Battlecry", "Siegebreaker", "Fortressbane", "Castlestorm", "Knightfall", "Lordslayer", "Kingbane",
  // 基于时间和空间概念的原创名字
  "Timebane", "Spacerend", "Voidrift", "Dimensplit", "Realmbane", "Planewalk", "Cosmicvoid", "Stellarbane",
  "Chronos", "Tempus", "Aeternum", "Infinitus", "Eternus", "Momentus", "Instantus", "Perpetuus"
]

// 基于西方神话、文学和流行文化中的女性恶魔
const femaleDemonPrefixes = [
  // 经典女性恶魔和堕落天使
  "Lilith", "Lamia", "Succub", "Jezebel", "Hecate", "Medusa", "Circe", "Morgana",
  "Banshee", "Siren", "Harpy", "Fury", "Valkyrie", "Witch", "Sorceress", "Enchantress",
  // 但丁神曲和文学中的女性恶魔形象
  "Beatrice", "Francesca", "Cleopatra", "Helen", "Dido", "Semiramis",
  // 现代流行文化中的女性恶魔名字
  "Raven", "Scarlett", "Crimson", "Violet", "Ruby", "Amber", "Jade", "Onyx",
  "Luna", "Stella", "Nova", "Vega", "Lyra", "Aria", "Seraphina", "Evangeline",
  "Belladonna", "Nightshade", "Hemlock", "Oleander", "Foxglove", "Mandrake",
  // 哥特和黑暗浪漫主义风格
  "Morticia", "Elvira", "Vampira", "Ophelia", "Cordelia", "Desdemona", "Portia",
  "Miranda", "Titania", "Oberon", "Puck", "Ariel", "Caliban", "Prospero",
  // 现代女巫和神秘学风格
  "Salem", "Wicca", "Tarot", "Crystal", "Mystic", "Oracle", "Sibyl", "Pythia",
  // 更多神话和民间传说中的女性恶魔
  "Astaroth", "Agrat", "Naamah", "Eisheth", "Mahalath", "Rahab", "Empusa", "Mormo",
  "Gello", "Abyzou", "Alabasandria", "Anamalech", "Baalberith", "Caacrinolaas", "Dantalion",
  // 原创女性恶魔名字 - 基于优雅和黑暗的结合
  "Vexandra", "Morticia", "Shadowlynn", "Grimhilda", "Thalosia", "Voidessa", "Necromira", "Bloodwyn",
  "Darklynn", "Ironessa", "Soulwyn", "Nightessa", "Pyrothea", "Venomira", "Terrorwyn", "Malefica",
  "Devastra", "Corruptia", "Tormentess", "Destroya", "Vorthessa", "Maltessa", "Xeraphine", "Drakessa",
  // 基于自然元素的原创女性恶魔名字
  "Stormwyn", "Flameara", "Frostina", "Earthwyn", "Windessa", "Thundera", "Lightbane", "Shadowara",
  "Voidwyn", "Bloodara", "Soulina", "Nightara", "Darkwyn", "Grimara", "Deathina", "Chaoswyn",
  // 基于宝石和珍贵材料的原创名字
  "Obsidiana", "Onyxara", "Rubyna", "Sapphira", "Emeralda", "Diamonda", "Pearlwyn", "Crystalina",
  "Amethysta", "Topazara", "Garnetwyn", "Opalina", "Jadewyn", "Turquoisa", "Coralina", "Amberwyn",
  // 基于月相和星座的原创名字
  "Lunara", "Stellwyn", "Novara", "Vegara", "Lyrawyn", "Ariaessa", "Seraphwyn", "Evangelina",
  "Celestia", "Astraea", "Galaxia", "Nebulara", "Cometwyn", "Meteorina", "Pulsara", "Quasarwyn",
  // 基于花朵和植物但带有黑暗色彩的名字
  "Thornwyn", "Poisonara", "Nightshade", "Hemlockwyn", "Oleandara", "Foxglovina", "Mandrakewyn", "Belladonara",
  "Rosethorne", "Lilywyn", "Violetara", "Iriswyn", "Orchidara", "Jasminewyn", "Lavendarara", "Rosewyn",
  // 各国神话中的女性恶魔存在
  "Kali", "Durga", "Tiamat", "Ereshkigal", "Inanna", "Ishtar", "Astarte", "Anat",
  "Sekhmet", "Nephthys", "Apep", "Ammit", "Baba", "Yaga", "Rusalka", "Vila",
  // 现代恐怖文学和电影中的女性恶魔
  "Carrie", "Regan", "Samara", "Sadako", "Kayako", "Ju-on", "Annabelle", "Valak",
  "Bathory", "Countess", "Carmilla", "Dracula", "Selene", "Akasha", "Lestat", "Claudia",
  // 更多哥特风格名字
  "Ravenna", "Bellatrix", "Narcissa", "Andromeda", "Cassiopeia", "Vega", "Altair", "Sirius",
  "Draco", "Scorpius", "Orion", "Rigel", "Betelgeuse", "Antares", "Aldebaran", "Capella"
]

const demonSuffixes = [
  "deus", "moth", "goth", "ziel", "baal", "thar", "grim", "nox", "vex", "rex",
  "ius", "oth", "eth", "ash", "esh", "osh", "ush", "ych", "ack", "ock",
  "ael", "iel", "uel", "yon", "ron", "ton", "gon", "mon", "zon", "phon",
  "ara", "ira", "ora", "ura", "ath", "ith", "oth", "uth", "axx", "ixx",
  "oxx", "uxx", "ahn", "ihn", "ohn", "uhn", "ael", "iel", "oel", "uel",
  "ath", "eth", "ith", "oth", "uth", "yx", "ax", "ex", "ix", "ox",
  "ux", "yn", "an", "en", "in", "on", "un", "yr", "ar", "er",
  "ir", "or", "ur", "ys", "as", "es", "is", "os", "us", "yt",
  "at", "et", "it", "ot", "ut", "yz", "az", "ez", "iz", "oz", "uz"
]

// 基于西方恶魔学传统的等级制度
const maleDemonTypes = [
  // Ars Goetia传统等级
  "Duke", "Prince", "President", "Earl", "Marquis", "King", "Great Duke", "Great Prince",
  // 但丁神曲中的恶魔类型
  "Fallen Angel", "Arch-Demon", "Lesser Demon", "Infernal Lord", "Hell Knight",
  // 基督教恶魔学
  "Tempter", "Deceiver", "Destroyer", "Corruptor", "Seducer", "Tormentor",
  // 现代流行文化中的恶魔类型
  "Shadow Demon", "Fire Demon", "Ice Demon", "Storm Demon", "Earth Demon",
  "Soul Collector", "Dream Walker", "Mind Bender", "Reality Shifter", "Time Wraith",
  // 哥特文学风格
  "Dark Lord", "Nightmare King", "Void Master", "Chaos Bringer", "Death Herald",
  // 更多传统恶魔类型
  "Incubus", "Cambion", "Nephilim", "Djinn", "Ifrit", "Marid", "Ghoul", "Rakshasa",
  "Asura", "Oni", "Yokai", "Tengu", "Kappa", "Bakhtak", "Div", "Peri",
  // 西方民间传说中的恶魔类型
  "Gargoyle", "Imp", "Fiend", "Wraith", "Specter", "Phantom", "Poltergeist", "Revenant",
  "Lich", "Necromancer", "Warlock", "Sorcerer", "Cultist", "Heretic", "Apostate", "Blasphemer",
  // 现代恐怖文化中的恶魔类型
  "Possessor", "Exorcist", "Demonologist", "Occultist", "Satanist", "Ritualist", "Summoner", "Conjurer"
]

// 基于西方文化中的女性恶魔和超自然存在
const femaleDemonTypes = [
  // 经典女性恶魔类型
  "Succubus", "Banshee", "Siren", "Harpy", "Lamia", "Witch", "Sorceress", "Enchantress",
  // 但丁和文学传统
  "Fallen Angel", "Dark Seraph", "Infernal Duchess", "Hell Maiden", "Demon Queen",
  // 神话中的女性恶魔
  "Fury", "Valkyrie", "Medusa", "Gorgon", "Sphinx", "Chimera", "Dryad", "Naiad",
  // 现代流行文化
  "Vampire", "Shadow Witch", "Blood Countess", "Night Hag", "Dream Weaver",
  "Soul Temptress", "Mind Enchantress", "Reality Bender", "Time Witch", "Void Empress",
  // 哥特和浪漫主义
  "Dark Lady", "Phantom Bride", "Cursed Princess", "Nightmare Maiden", "Death Goddess",
  // 更多女性超自然存在
  "Banshee", "Bean Sidhe", "White Lady", "Grey Lady", "Weeping Woman", "La Llorona",
  "Rusalka", "Vila", "Undine", "Nixie", "Kelpie", "Selkie", "Mermaid", "Nereid",
  // 各国神话中的女性恶魔
  "Rakshasi", "Churel", "Asurin", "Pishacha", "Vetala", "Bhuta", "Preta", "Hungry Ghost",
  "Jiangshi", "Kumiho", "Gumiho", "Kitsune", "Yuki-onna", "Onryo", "Yurei", "Jorogumo",
  // 现代恐怖文化
  "Poltergeist", "Wraith", "Specter", "Phantom", "Apparition", "Manifestation", "Entity", "Presence",
  "Psychic", "Medium", "Oracle", "Seer", "Prophetess", "Sibyl", "Pythia", "Priestess"
]

// 基于西方恶魔学和流行文化中的恶魔能力
const maleDemonPowers = [
  // Ars Goetia中记录的恶魔能力
  "Teaching Sciences", "Revealing Hidden Treasures", "Commanding Legions", "Granting Titles",
  "Building Towers", "Destroying Cities", "Causing Wars", "Making Peace",
  "Answering Questions", "Revealing Secrets", "Finding Lost Things", "Predicting Future",
  // 基督教恶魔学中的能力
  "Temptation", "Deception", "Corruption", "Possession", "Exorcism Resistance",
  "Soul Bargaining", "Contract Making", "Sin Amplification", "Faith Destruction",
  // 现代流行文化中的恶魔能力
  "Fire Manipulation", "Shadow Control", "Mind Reading", "Illusion Casting", "Shapeshifting",
  "Teleportation", "Time Distortion", "Reality Bending", "Dream Invasion", "Fear Inducement",
  "Necromancy", "Blood Magic", "Curse Casting", "Plague Spreading", "Weather Control",
  // 更多传统恶魔能力
  "Soul Harvesting", "Life Draining", "Energy Absorption", "Spiritual Corruption", "Moral Decay",
  "Madness Inducement", "Insanity Spreading", "Mental Breakdown", "Psychological Torture", "Emotional Manipulation",
  "Memory Erasure", "Identity Theft", "Personality Alteration", "Behavioral Control", "Will Domination",
  // 元素和自然控制能力
  "Lightning Summoning", "Thunder Control", "Storm Creation", "Earthquake Generation", "Volcano Eruption",
  "Flood Summoning", "Drought Creation", "Famine Spreading", "Pestilence Control", "Disease Manipulation",
  // 超自然战斗能力
  "Superhuman Strength", "Demonic Speed", "Infernal Endurance", "Hellish Regeneration", "Immortality",
  "Invulnerability", "Phase Shifting", "Dimensional Travel", "Portal Creation", "Void Manipulation"
]

// 基于西方文化中女性恶魔和超自然存在的能力
const femaleDemonPowers = [
  // 经典女性恶魔能力（Succubus, Lilith等）
  "Seduction", "Charm", "Enchantment", "Temptation", "Lust Inducement",
  "Dream Manipulation", "Sleep Control", "Nightmare Creation", "Desire Amplification",
  // 女巫和巫术传统
  "Potion Brewing", "Curse Casting", "Spell Weaving", "Divination", "Scrying",
  "Herbalism", "Crystal Magic", "Lunar Rituals", "Blood Magic", "Bone Reading",
  // 神话中的女性超自然能力
  "Prophecy", "Oracle Vision", "Death Sight", "Soul Sight", "Spirit Communication",
  "Banshee Wail", "Siren Song", "Medusa Gaze", "Harpy Flight", "Fury Rage",
  // 现代流行文化
  "Mind Control", "Emotional Manipulation", "Memory Alteration", "Reality Distortion",
  "Shapeshifting", "Invisibility", "Telekinesis", "Psychic Powers", "Astral Projection",
  // 更多女性超自然能力
  "Soul Binding", "Spirit Summoning", "Ghost Communication", "Ancestor Calling", "Death Whisper",
  "Life Force Manipulation", "Fertility Control", "Childbirth Influence", "Maternal Protection", "Family Curse",
  "Beauty Enhancement", "Age Manipulation", "Youth Preservation", "Appearance Alteration", "Glamour Weaving",
  // 自然和元素控制
  "Moon Control", "Tide Manipulation", "Plant Growth", "Animal Communication", "Weather Weaving",
  "Storm Calling", "Rain Dancing", "Wind Whispering", "Earth Singing", "Fire Dancing",
  // 情感和心理能力
  "Love Manipulation", "Heartbreak Inducement", "Jealousy Amplification", "Passion Control", "Desire Weaving",
  "Fear Projection", "Anxiety Creation", "Depression Spreading", "Madness Weaving", "Sanity Stealing",
  // 治疗和毒害能力
  "Healing Touch", "Poison Kiss", "Deadly Embrace", "Life Stealing", "Vitality Draining",
  "Disease Curing", "Plague Creating", "Health Restoration", "Sickness Spreading", "Recovery Acceleration"
]

// 基于Ars Goetia和西方恶魔学的真实等级制度
const demonRanks = [
  // Ars Goetia传统等级
  "Earl", "Duke", "Prince", "President", "Marquis", "King", "Great Earl", "Great Duke",
  "Great Prince", "Great President", "Great Marquis", "Great King",
  // 基督教恶魔学等级
  "Lesser Demon", "Greater Demon", "Arch-Demon", "Fallen Angel", "Seraph", "Cherub",
  // 但丁神曲中的等级概念
  "Damned Soul", "Guardian", "Tormentor", "Judge", "Ruler"
]

// 基于西方文学、神话和宗教传统的地狱和恶魔起源地
const demonOrigins = [
  // 但丁神曲中的地狱层次
  "Limbo", "Lust Circle", "Gluttony Circle", "Greed Circle", "Wrath Circle",
  "Heresy Circle", "Violence Circle", "Fraud Circle", "Treachery Circle",
  // 基督教传统中的地狱概念
  "Hell", "Hades", "Sheol", "Gehenna", "Tartarus", "Purgatory", "Inferno",
  // 失乐园和其他文学作品
  "Pandemonium", "The Abyss", "The Pit", "Lake of Fire", "Outer Darkness",
  // 北欧神话
  "Helheim", "Niflheim", "Muspelheim", "Jotunheim",
  // 希腊神话
  "Underworld", "Elysium", "Asphodel Fields", "Fields of Punishment",
  // 现代流行文化中的地狱概念
  "Shadow Realm", "Void Dimension", "Dark Dimension", "Nightmare Realm",
  "Burning Abyss", "Frozen Wasteland", "Chaos Realm", "Blood Plains",
  // 更多神话和宗教传统中的地狱
  "Netherworld", "Shadowlands", "Death Realm", "Spirit World", "Astral Plane",
  "Ethereal Plane", "Negative Energy Plane", "Plane of Shadow", "Demiplane of Dread",
  // 各国神话中的地狱概念
  "Naraka", "Diyu", "Yomi", "Duat", "Irkalla", "Kur", "Annwn", "Mag Mell",
  "Tír na nÓg", "Otherworld", "Fairyland", "Shadowfell", "Feywild", "Dreamlands",
  // 现代恐怖文学中的恶魔起源地
  "Silent Hill", "Raccoon City", "Arkham", "Dunwich", "Kingsport", "Innsmouth",
  "Blackwater Falls", "Centralia", "Pripyat", "Chernobyl", "Area 51", "Bermuda Triangle",
  // 更多神秘和超自然地点
  "Stonehenge", "Nazca Lines", "Easter Island", "Machu Picchu", "Angkor Wat", "Petra",
  "Mount Vesuvius", "Yellowstone", "Death Valley", "Sahara Desert", "Amazon Rainforest", "Antarctic Wasteland"
]

interface GeneratedDemon {
  id: string
  name: string
  gender: 'male' | 'female'
  type: string
  power: string
  rank: string
  origin: string
  description: string
}

// 动态生成预设恶魔池，使用所有可用的恶魔数据
const generatePresetDemonPool = (): GeneratedDemon[] => {
  const presetDemons: GeneratedDemon[] = []
  
  // 为了SEO和性能，生成一个固定的预设池（30个恶魔）
  for (let i = 0; i < 30; i++) {
    const gender: 'male' | 'female' = i % 2 === 0 ? 'male' : 'female'
    
    const prefixes = gender === 'male' ? maleDemonPrefixes : femaleDemonPrefixes
    const types = gender === 'male' ? maleDemonTypes : femaleDemonTypes
    const powers = gender === 'male' ? maleDemonPowers : femaleDemonPowers
    
    const prefix = prefixes[i % prefixes.length]
    const suffix = demonSuffixes[i % demonSuffixes.length]
    const type = types[i % types.length]
    const power = powers[i % powers.length]
    const rank = demonRanks[i % demonRanks.length]
    const origin = demonOrigins[i % demonOrigins.length]
    
    const demon: GeneratedDemon = {
      id: `preset-${i + 1}`,
      name: `${prefix}${suffix}`,
      gender,
      type,
      power,
      rank,
      origin,
      description: ''
    }
    
    // 生成描述
    const malePersonalityTraits = [
      'ruthless', 'commanding', 'fierce', 'dominating', 'brutal', 'cunning', 'wrathful',
      'merciless', 'tyrannical', 'savage', 'relentless', 'vindictive', 'malevolent', 'sinister',
      'intimidating', 'menacing', 'formidable', 'terrifying', 'bloodthirsty', 'vengeful', 'destructive'
    ]
    
    const femalePersonalityTraits = [
      'seductive', 'manipulative', 'enchanting', 'mysterious', 'alluring', 'calculating', 'bewitching',
      'beguiling', 'captivating', 'mesmerizing', 'hypnotic', 'enthralling', 'spellbinding', 'fascinating',
      'treacherous', 'devious', 'cunning', 'wicked', 'sultry', 'ethereal', 'haunting'
    ]
    
    const maleDescriptionTemplates = [
      `A ${malePersonalityTraits[i % malePersonalityTraits.length]} ${rank.toLowerCase()} demon from ${origin}, wielding the power of ${power.toLowerCase()}. His presence strikes fear into the hearts of mortals.`,
      `This ${malePersonalityTraits[i % malePersonalityTraits.length]} ${rank.toLowerCase()} emerged from ${origin} with mastery over ${power.toLowerCase()}. He commands respect through terror and dominance.`,
      `Born in the depths of ${origin}, this ${malePersonalityTraits[i % malePersonalityTraits.length]} ${rank.toLowerCase()} has perfected the art of ${power.toLowerCase()}. His wrath knows no bounds.`,
      `A ${rank.toLowerCase()} of ${origin} known for his ${malePersonalityTraits[i % malePersonalityTraits.length]} nature and control over ${power.toLowerCase()}. He leaves destruction in his wake.`
    ]
    
    const femaleDescriptionTemplates = [
      `A ${femalePersonalityTraits[i % femalePersonalityTraits.length]} ${rank.toLowerCase()} demon from ${origin}, wielding the power of ${power.toLowerCase()}. Her beauty conceals deadly intentions.`,
      `This ${femalePersonalityTraits[i % femalePersonalityTraits.length]} ${rank.toLowerCase()} emerged from ${origin} with mastery over ${power.toLowerCase()}. She ensnares victims with her otherworldly charm.`,
      `Born in the shadows of ${origin}, this ${femalePersonalityTraits[i % femalePersonalityTraits.length]} ${rank.toLowerCase()} has perfected the art of ${power.toLowerCase()}. Her whispers can drive mortals to madness.`,
      `A ${rank.toLowerCase()} of ${origin} known for her ${femalePersonalityTraits[i % femalePersonalityTraits.length]} nature and control over ${power.toLowerCase()}. She weaves spells that corrupt the soul.`
    ]
    
    const templates = gender === 'male' ? maleDescriptionTemplates : femaleDescriptionTemplates
    demon.description = templates[i % templates.length]
    
    presetDemons.push(demon)
  }
  
  return presetDemons
}

// 预设恶魔池（在模块加载时生成一次）
const presetDemonPool = generatePresetDemonPool()

// 基于当前日期选择6个恶魔（24小时更新一次）
const getDailyPresetDemons = (): GeneratedDemon[] => {
  // 获取当前日期作为种子，确保同一天内服务端和客户端一致
  const today = new Date()
  const dateString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
  
  // 简单的哈希函数，基于日期字符串生成确定性的数字
  let hash = 0
  for (let i = 0; i < dateString.length; i++) {
    const char = dateString.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // 转换为32位整数
  }
  
  // 使用哈希值生成6个不同的索引
  const selectedIndices: number[] = []
  const poolSize = presetDemonPool.length
  
  for (let i = 0; i < 6; i++) {
    // 基于哈希值和索引生成确定性的选择
    const index = Math.abs((hash + i * 7) % poolSize)
    // 避免重复选择
    if (!selectedIndices.includes(index)) {
      selectedIndices.push(index)
    } else {
      // 如果重复，使用备选索引
      selectedIndices.push((index + i + 1) % poolSize)
    }
  }
  
  return selectedIndices.map(index => presetDemonPool[index])
}

export function DemonGenerator() {
  // 设置最大生成数量为20
  const maxDemons = 20
  
  const [generatedDemons, setGeneratedDemons] = useState<GeneratedDemon[]>(getDailyPresetDemons())
  const [customPrefix, setCustomPrefix] = useState("")
  const [generateCount, setGenerateCount] = useState(6)
  const [selectedGender, setSelectedGender] = useState<'all' | 'male' | 'female'>('all')
  const [isGenerating, setIsGenerating] = useState(false)
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const generateDescription = (demon: GeneratedDemon): string => {
    const malePersonalityTraits = [
      'ruthless', 'commanding', 'fierce', 'dominating', 'brutal', 'cunning', 'wrathful',
      'merciless', 'tyrannical', 'savage', 'vindictive', 'malevolent', 'sinister', 'menacing',
      'treacherous', 'vicious', 'relentless', 'barbaric', 'diabolical', 'malicious', 'cruel',
      'vengeful', 'destructive', 'terrifying', 'intimidating', 'fearsome', 'bloodthirsty'
    ]
    
    const femalePersonalityTraits = [
      'seductive', 'manipulative', 'enchanting', 'mysterious', 'alluring', 'calculating', 'bewitching',
      'beguiling', 'mesmerizing', 'captivating', 'hypnotic', 'enticing', 'tempting', 'charming',
      'spellbinding', 'fascinating', 'intoxicating', 'magnetic', 'irresistible', 'sultry', 'graceful',
      'elegant', 'ethereal', 'haunting', 'enigmatic', 'alluring', 'sophisticated'
    ]
    
    const malePresenceTraits = [
      'intimidating presence', 'terrifying aura', 'commanding authority', 'fearsome reputation',
      'overwhelming power', 'dark charisma', 'menacing demeanor', 'brutal efficiency',
      'ruthless tactics', 'savage nature', 'destructive force', 'merciless judgment'
    ]
    
    const femalePresenceTraits = [
      'captivating allure', 'mesmerizing beauty', 'enchanting grace', 'hypnotic charm',
      'irresistible magnetism', 'bewitching elegance', 'mysterious aura', 'seductive power',
      'haunting presence', 'ethereal beauty', 'spellbinding charisma', 'intoxicating appeal'
    ]
    
    const descriptionTemplates = [
      `A {trait} {rank} demon from {origin}, wielding the power of {power}. Known for {pronoun} {presence} and mastery over dark forces.`,
      `An {trait} {rank} demon who rules from {origin}, commanding the power of {power}. {Pronoun} {presence} strikes fear into the hearts of mortals.`,
      `This {trait} {rank} demon emerges from {origin}, blessed with the ability of {power}. {Pronoun} {presence} is legendary among the damned.`,
      `A {trait} {rank} demon born in {origin}, gifted with {power}. {Pronoun} {presence} has conquered countless souls.`,
      `From the depths of {origin} comes this {trait} {rank} demon, master of {power}. {Pronoun} {presence} is both feared and revered.`
    ]
    
    const personalityTraits = demon.gender === 'male' ? malePersonalityTraits : femalePersonalityTraits
    const presenceTraits = demon.gender === 'male' ? malePresenceTraits : femalePresenceTraits
    
    const trait = personalityTraits[Math.floor(Math.random() * personalityTraits.length)]
    const presence = presenceTraits[Math.floor(Math.random() * presenceTraits.length)]
    const template = descriptionTemplates[Math.floor(Math.random() * descriptionTemplates.length)]
    
    const pronoun = demon.gender === 'male' ? 'his' : 'her'
    const Pronoun = demon.gender === 'male' ? 'His' : 'Her'
    
    return template
      .replace('{trait}', trait)
      .replace('{rank}', demon.rank.toLowerCase())
      .replace('{origin}', demon.origin)
      .replace('{power}', demon.power.toLowerCase())
      .replace('{pronoun}', pronoun)
      .replace('{Pronoun}', Pronoun)
      .replace('{presence}', presence)
  }

  const generateDemonNames = useCallback(() => {
    setIsGenerating(true)
    
    setTimeout(() => {
      const newDemons: GeneratedDemon[] = []
      
      for (let i = 0; i < generateCount; i++) {
        let gender: 'male' | 'female'
        
        if (selectedGender === 'all') {
          gender = Math.random() > 0.5 ? 'male' : 'female'
        } else {
          gender = selectedGender
        }
        
        const prefixes = gender === 'male' ? maleDemonPrefixes : femaleDemonPrefixes
        const types = gender === 'male' ? maleDemonTypes : femaleDemonTypes
        const powers = gender === 'male' ? maleDemonPowers : femaleDemonPowers
        
        const prefix = customPrefix || prefixes[Math.floor(Math.random() * prefixes.length)]
        const suffix = demonSuffixes[Math.floor(Math.random() * demonSuffixes.length)]
        const type = types[Math.floor(Math.random() * types.length)]
        const power = powers[Math.floor(Math.random() * powers.length)]
        const rank = demonRanks[Math.floor(Math.random() * demonRanks.length)]
        const origin = demonOrigins[Math.floor(Math.random() * demonOrigins.length)]
        
        const demon: GeneratedDemon = {
          id: `demon-${Date.now()}-${i}`,
          name: `${prefix}${suffix}`,
          gender,
          type,
          power,
          rank,
          origin,
          description: ''
        }
        
        demon.description = generateDescription(demon)
        newDemons.push(demon)
      }
      
      setGeneratedDemons(newDemons)
      setIsGenerating(false)
    }, 1500)
  }, [generateCount, selectedGender, customPrefix])


  const showCopySuccess = (message: string) => {
    setCopySuccess(message)
    setTimeout(() => setCopySuccess(null), 2000)
  }

  const copyAllDemons = async () => {
    try {
      const allDemonsText = generatedDemons.map(demon => demon.name).join('\n')
      await navigator.clipboard.writeText(allDemonsText)
      showCopySuccess(`Copied all ${generatedDemons.length} demon names!`)
    } catch (err) {
      showCopySuccess('Failed to copy')
    }
  }

  const copyDemon = async (demon: GeneratedDemon) => {
    try {
      await navigator.clipboard.writeText(demon.name)
      showCopySuccess(`Copied ${demon.name}!`)
    } catch (err) {
      showCopySuccess('Failed to copy')
    }
  }

  return (
    <>
      {/* Copy Success Toast - Outside main container */}
      {copySuccess && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="bg-black text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2 animate-in fade-in-0 zoom-in-95 duration-200">
            <Copy className="h-4 w-4" />
            <span>{copySuccess}</span>
          </div>
        </div>
      )}

      <div className="space-y-20">
        {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-3">
          <h1 className="text-4xl font-bold tracking-tight">Advanced Demon Name Generator</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Summon powerful demon names with rich backstories, gender distinctions, and detailed attributes. Perfect for fantasy games, stories, and creative projects.
        </p>
      </div>

      {/* Main Content - Left/Right Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Side - Configuration */}
        <div className="xl:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Crown className="h-5 w-5" />
                <span>Summoning Configuration</span>
              </CardTitle>
              <CardDescription>
                Customize your demon generation settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prefix">Custom Prefix (Optional)</Label>
                  <Input
                    id="prefix"
                    placeholder="Enter demon prefix..."
                    value={customPrefix}
                    onChange={(e) => setCustomPrefix(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="count">Number of Demons per Generation (Max: 20)</Label>
                  <Input
                    id="count"
                    type="number"
                    min="1"
                    max="20"
                    value={generateCount}
                    onChange={(e) => setGenerateCount(Math.max(1, Math.min(20, parseInt(e.target.value) || 1)))}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Gender Selection</Label>
                  <div className="grid grid-cols-1 gap-2">
                    <Button
                      variant={selectedGender === 'all' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedGender('all')}
                      className="justify-start"
                    >
                      <Users className="h-4 w-4 mr-2" />
                      All Genders
                    </Button>
                    <Button
                      variant={selectedGender === 'male' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedGender('male')}
                      className="justify-start"
                    >
                      <Shield className="h-4 w-4 mr-2" />
                      Male Only
                    </Button>
                    <Button
                      variant={selectedGender === 'female' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedGender('female')}
                      className="justify-start"
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Female Only
                    </Button>
                  </div>
                </div>
              </div>

              <Button 
                onClick={generateDemonNames}
                disabled={isGenerating}
                size="lg"
                className="w-full"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Summoning...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Summon {generateCount} Demon{generateCount > 1 ? 's' : ''}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Results */}
        <div className="xl:col-span-2">
          {generatedDemons.length > 0 ? (
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight flex items-center space-x-2">
                  <Eye className="h-6 w-6" />
                  <span>Summoned Demons</span>
                </h2>
                <Button onClick={copyAllDemons} variant="outline">
                  <Copy className="mr-2 h-4 w-4" />
                  Copy All
                </Button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {generatedDemons.map((demon, index) => (
                  <Card key={demon.id} className="relative group hover:shadow-lg transition-all duration-500 animate-in slide-in-from-bottom-4 fade-in"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animationDuration: '600ms'
                    }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{demon.rank}</Badge>
                          <Badge variant={demon.gender === 'male' ? 'default' : 'outline'}>
                            {demon.gender === 'male' ? '♂' : '♀'} {demon.gender.charAt(0).toUpperCase() + demon.gender.slice(1)}
                          </Badge>
                        </div>
                        <Button
                          onClick={() => copyDemon(demon)}
                          variant="ghost"
                          size="sm"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardTitle className="text-2xl">{demon.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center space-x-2">
                          <Swords className="h-4 w-4" />
                          <span className="text-sm font-medium">Type:</span>
                          <Badge variant="outline">{demon.type}</Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Zap className="h-4 w-4" />
                          <span className="text-sm font-medium">Power:</span>
                          <Badge variant="outline">{demon.power}</Badge>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm font-medium">Origin:</span>
                          <Badge variant="outline">{demon.origin}</Badge>
                        </div>
                      </div>

                      <div className="pt-2 border-t">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {demon.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96 border-2 border-dashed border-muted-foreground/25 rounded-lg">
              <div className="text-center space-y-4">
                <Eye className="h-16 w-16 mx-auto text-muted-foreground/50" />
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-muted-foreground">No Demons Summoned Yet</h3>
                  <p className="text-muted-foreground">Configure your settings and click &quot;Summon&quot; to generate demons</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  )
}