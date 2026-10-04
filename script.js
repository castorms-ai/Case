// ==== НАСТРОЙКИ ====
const PRIVILEGE_CASE_PRICE_DIAMONDS = 100;
const ITEMS_CASE_PRICE_DIAMONDS = 50;
const ITEMS_CASE_PRICE_COINS = 150;
const ARCANA_CASE_PRICE_COINS = 1000;
const START_BALANCE = 150;
const START_DIAMONDS = 100;
const ITEM_WIDTH = 150;
const SPIN_DURATION = 15000;
const EXTRA_ITEMS = 50;
const GIFT_SECRET = 'dota-cases-gift-secret-2026';

// ==== РАНГИ (XP) ====
const XP_RANKS = [
  { name: 'Калибровка', xpToNext: 2,    img: '⭐' },
  { name: 'Рекрут',     xpToNext: 20,   img: 'https://ru.dota2changer.com/assets/img/rank/rank1_192.webp' },
  { name: 'Страж',      xpToNext: 30,   img: 'https://ru.dota2changer.com/assets/img/rank/rank2_192.webp' },
  { name: 'Рыцарь',     xpToNext: 50,   img: 'https://ru.dota2changer.com/assets/img/rank/rank3_192.webp' },
  { name: 'Герой',      xpToNext: 70,   img: 'https://ru.dota2changer.com/assets/img/rank/rank4_192.webp' },
  { name: 'Легенда',    xpToNext: 100,  img: 'https://ru.dota2changer.com/assets/img/rank/rank5_192.webp' },
  { name: 'Властелин',  xpToNext: 200,  img: 'https://ru.dota2changer.com/assets/img/rank/rank6_192.webp' },
  { name: 'Божество',   xpToNext: 300,  img: 'https://ru.dota2changer.com/assets/img/rank/rank7_192.webp' },
  { name: 'Титан',      xpToNext: 9999, img: 'https://ru.dota2changer.com/assets/img/rank/rank8d_192.webp' },
];

// ==== РАНГИ DOTA 2 (кейс) ====
const PRIVILEGES = [
  { name: 'Рекрут', chance: 40, color: '#8B7355', emoji: '🛡️', type: 'privilege', points: 2, onlineIncome: 10, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank1_192.webp' },
  { name: 'Страж', chance: 25, color: '#4caf50', emoji: '🟢', type: 'privilege', points: 5, onlineIncome: 15, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank2_192.webp' },
  { name: 'Рыцарь', chance: 15, color: '#2196f3', emoji: '🔵', type: 'privilege', points: 10, onlineIncome: 20, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank3_192.webp' },
  { name: 'Герой', chance: 10, color: '#00bcd4', emoji: '🌀', type: 'privilege', points: 20, onlineIncome: 30, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank4_192.webp' },
  { name: 'Легенда', chance: 5, color: '#9c27b0', emoji: '🟣', type: 'privilege', points: 40, onlineIncome: 50, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank5_192.webp' },
  { name: 'Властелин', chance: 3, color: '#f44336', emoji: '🔴', type: 'privilege', points: 75, onlineIncome: 70, onlineDiamondIncome: 5, img: 'https://ru.dota2changer.com/assets/img/rank/rank6_192.webp' },
  { name: 'Божество', chance: 1.5, color: '#ffd700', emoji: '👑', type: 'privilege', points: 120, onlineIncome: 90, onlineDiamondIncome: 10, img: 'https://ru.dota2changer.com/assets/img/rank/rank7_192.webp' },
  { name: 'Титан', chance: 0.5, color: '#ff5722', emoji: '🔥', type: 'privilege', points: 200, onlineIncome: 120, onlineDiamondIncome: 15, img: 'https://ru.dota2changer.com/assets/img/rank/rank8d_192.webp' },
];

// ==== ПРЕДМЕТЫ DOTA 2 ====
const ITEMS = [
  { name: 'Танго', chance: 6.667, color: '#ffffff', emoji: '🍃', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/tango.webp?1790601790' },
  { name: 'Фласка', chance: 6.667, color: '#ffffff', emoji: '🧪', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/healing_salve.webp?1790598615' },
  { name: 'Кларетка', chance: 6.667, color: '#ffffff', emoji: '💧', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/clarity.webp?1790596388' },
  { name: 'Туфельки ловкости', chance: 6.667, color: '#ffffff', emoji: '👟', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/slippers_of_agility.webp?1760186292' },
  { name: 'Ветка', chance: 6.667, color: '#ffffff', emoji: '🌿', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/iron_branch.webp?1765966647' },
  { name: 'Топор', chance: 6.665, color: '#ffffff', emoji: '🪓', type: 'item', points: 1, sellPriceCoins: 50, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/quelling_blade.webp?1790827788' },
  { name: 'Корона', chance: 3.333, color: '#4fc3f7', emoji: '👑', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/crown.webp?1760188468' },
  { name: 'Диадема', chance: 3.333, color: '#4fc3f7', emoji: '♾️', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/diadem.webp?1760191925' },
  { name: 'Ботл', chance: 3.333, color: '#4fc3f7', emoji: '🍶', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/bottle.webp?1790599268' },
  { name: 'Силовые ботинки', chance: 3.333, color: '#4fc3f7', emoji: '🥾', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/power_treads.webp?1760616223' },
  { name: 'Плащ', chance: 3.333, color: '#4fc3f7', emoji: '🧥', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/cloak.webp?1774410457' },
  { name: 'Клинок проворства', chance: 3.333, color: '#4fc3f7', emoji: '🗡️', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/blade_of_alacrity.webp?1760189027' },
  { name: 'Ветряные шнурки', chance: 3.333, color: '#4fc3f7', emoji: '🎐', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/wind_lace.webp?1760429000' },
  { name: 'Магическая палочка', chance: 3.333, color: '#4fc3f7', emoji: '🪄', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/magic_stick.webp?1760427442' },
  { name: 'Ботинки скорости', chance: 3.336, color: '#4fc3f7', emoji: '👢', type: 'item', points: 3, sellPriceCoins: 70, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/boots_of_speed.webp?1760429728' },
  { name: 'Энергетический ускоритель', chance: 2.5, color: '#1565c0', emoji: '⚡', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/energy_booster.webp?1730368679' },
  { name: 'Точечный ускоритель', chance: 2.5, color: '#1565c0', emoji: '🔵', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/point_booster.webp?1673180350' },
  { name: 'Кольцо здоровья', chance: 2.5, color: '#1565c0', emoji: '💍', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/ring_of_health.webp?1774411450' },
  { name: 'Кольчужная броня', chance: 2.5, color: '#1565c0', emoji: '🛡️', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/blade_mail.webp?1774418229' },
  { name: 'Спокойные ботинки', chance: 2.5, color: '#1565c0', emoji: '🥿', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/tranquil_boots.webp?1761119428' },
  { name: 'Кольцо Базилиуса', chance: 2.5, color: '#1565c0', emoji: '💠', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/ring_of_basilius.webp?1761111541' },
  { name: 'Шляпа волшебника', chance: 2.5, color: '#1565c0', emoji: '🎩', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/wizard_hat.webp?1777549129' },
  { name: 'Кольцо регенерации', chance: 2.5, color: '#1565c0', emoji: '💍', type: 'item', points: 8, sellPriceCoins: 100, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/ring_of_regen.webp?1760425063' },
  { name: 'Blink Dagger', chance: 0.475, color: '#9c27b0', emoji: '🗡️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/blink_dagger.webp?1760612665' },
  { name: 'Сатаник', chance: 0.475, color: '#9c27b0', emoji: '🩸', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/satanic.webp?1789724783' },
  { name: 'Кираса агрессии', chance: 0.475, color: '#9c27b0', emoji: '🛡️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/assault_cuirass.webp?1762419606' },
  { name: 'Сердце Тарраска', chance: 0.475, color: '#9c27b0', emoji: '❤️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/heart_of_tarrasque.webp?1789724208' },
  { name: 'Black King Bar', chance: 0.475, color: '#9c27b0', emoji: '🖤', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/black_king_bar.webp?1775717555' },
  { name: 'Aegis of the Immortal', chance: 0.475, color: '#9c27b0', emoji: '🛡️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/aegis_of_the_immortal.webp?1732972128' },
  { name: 'Маска безумия', chance: 0.475, color: '#9c27b0', emoji: '🎭', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/mask_of_madness.webp?1789724565' },
  { name: 'Рука Мидаса', chance: 0.475, color: '#9c27b0', emoji: '🖐️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/hand_of_midas.webp?1785732566' },
  { name: 'Boots of Travel 2', chance: 0.475, color: '#9c27b0', emoji: '🥾', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/boots_of_travel_2.webp?1760621821' },
  { name: 'Boots of Travel', chance: 0.475, color: '#9c27b0', emoji: '👢', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/boots_of_travel.webp?1760621840' },
  { name: 'Дагон', chance: 0.475, color: '#9c27b0', emoji: '🔴', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/dagon.webp?1780646642' },
  { name: 'Refresher Orb', chance: 0.475, color: '#9c27b0', emoji: '🔮', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/refresher_orb.webp?1774427226' },
  { name: 'Eul\'s Scepter', chance: 0.475, color: '#9c27b0', emoji: '🌪️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/euls_scepter_of_divinity.webp?1761488037' },
  { name: 'Daedalus', chance: 0.475, color: '#9c27b0', emoji: '⚔️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/daedalus.webp?1789724052' },
  { name: 'Butterfly', chance: 0.475, color: '#9c27b0', emoji: '🦋', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/butterfly.webp?1785731455' },
  { name: 'Radiance', chance: 0.475, color: '#9c27b0', emoji: '☀️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/radiance.webp?1765981229' },
  { name: 'Bloodthorn', chance: 0.475, color: '#9c27b0', emoji: '🌹', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/bloodthorn.webp?1774425908' },
  { name: 'Sange and Yasha', chance: 0.475, color: '#9c27b0', emoji: '⚔️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/sange_and_yasha.webp?1775718024' },
  { name: 'Kaya and Sange', chance: 0.475, color: '#9c27b0', emoji: '⚔️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/kaya_and_sange.webp?1785733728' },
  { name: 'Yasha and Kaya', chance: 0.475, color: '#9c27b0', emoji: '⚔️', type: 'item', points: 20, sellPriceCoins: 160, sellPriceDiamonds: 0, passiveIncomeCoins: 0, passiveIncomeDiamonds: 0, img: 'https://dota2.ru/img/items/yasha_and_kaya.webp?1785733989' },
  { name: 'Refresher Shard', chance: 0.1667, color: '#f44336', emoji: '💠', type: 'item', points: 50, sellPriceCoins: 250, sellPriceDiamonds: 50, passiveIncomeCoins: 0, passiveIncomeDiamonds: 2, img: 'https://dota2.ru/img/items/refresher_shard.webp?1785735293' },
  { name: 'Сыр', chance: 0.1667, color: '#f44336', emoji: '🧀', type: 'item', points: 50, sellPriceCoins: 250, sellPriceDiamonds: 50, passiveIncomeCoins: 0, passiveIncomeDiamonds: 2, img: 'https://dota2.ru/img/items/cheese.webp?1730712335' },
  { name: 'Aghanim\'s Blessing', chance: 0.1666, color: '#f44336', emoji: '🔮', type: 'item', points: 50, sellPriceCoins: 250, sellPriceDiamonds: 50, passiveIncomeCoins: 0, passiveIncomeDiamonds: 2, img: 'https://dota2.ru/img/items/aghanims_blessing_rosan.webp?1732972302' },
];

// ==== АРКАНЫ DOTA 2 ====
const ARCANAS = [
  { name: 'Flockheart\'s Gamble', hero: 'Ogre Magi', chance: 11.25, color: '#ffffff', emoji: '🎲', type: 'arcana', points: 100, sellPriceCoins: 500, sellPriceDiamonds: 250, passiveIncomeCoins: 50, passiveIncomeDiamonds: 0 },
  { name: 'The One True King', hero: 'Wraith King', chance: 11.25, color: '#ffffff', emoji: '👑', type: 'arcana', points: 100, sellPriceCoins: 500, sellPriceDiamonds: 250, passiveIncomeCoins: 50, passiveIncomeDiamonds: 0 },
  { name: 'Dread Retribution', hero: 'Drow Ranger', chance: 11.25, color: '#ffffff', emoji: '🏹', type: 'arcana', points: 100, sellPriceCoins: 500, sellPriceDiamonds: 250, passiveIncomeCoins: 50, passiveIncomeDiamonds: 0 },
  { name: 'Voidstorm Asylum', hero: 'Faceless Void', chance: 11.25, color: '#ffffff', emoji: '🌀', type: 'arcana', points: 100, sellPriceCoins: 500, sellPriceDiamonds: 250, passiveIncomeCoins: 50, passiveIncomeDiamonds: 0 },
  { name: 'Frost Avalanche', hero: 'Crystal Maiden', chance: 8.75, color: '#1565c0', emoji: '❄️', type: 'arcana', points: 250, sellPriceCoins: 700, sellPriceDiamonds: 350, passiveIncomeCoins: 70, passiveIncomeDiamonds: 0 },
  { name: 'Manifold Paradox', hero: 'Phantom Assassin', chance: 8.75, color: '#1565c0', emoji: '🗡️', type: 'arcana', points: 250, sellPriceCoins: 700, sellPriceDiamonds: 350, passiveIncomeCoins: 70, passiveIncomeDiamonds: 0 },
  { name: 'Great Sage\'s Reckoning', hero: 'Monkey King', chance: 8.75, color: '#1565c0', emoji: '🐒', type: 'arcana', points: 250, sellPriceCoins: 700, sellPriceDiamonds: 350, passiveIncomeCoins: 70, passiveIncomeDiamonds: 0 },
  { name: 'Benevolent Companion', hero: 'Io', chance: 8.75, color: '#1565c0', emoji: '✨', type: 'arcana', points: 250, sellPriceCoins: 700, sellPriceDiamonds: 350, passiveIncomeCoins: 70, passiveIncomeDiamonds: 0 },
  { name: 'Blades of Voth Domosh', hero: 'Legion Commander', chance: 3.75, color: '#9c27b0', emoji: '⚔️', type: 'arcana', points: 400, sellPriceCoins: 1000, sellPriceDiamonds: 500, passiveIncomeCoins: 100, passiveIncomeDiamonds: 0 },
  { name: 'Fractal Horns of Inner Abysm', hero: 'Terrorblade', chance: 3.75, color: '#9c27b0', emoji: '😈', type: 'arcana', points: 400, sellPriceCoins: 1000, sellPriceDiamonds: 500, passiveIncomeCoins: 100, passiveIncomeDiamonds: 0 },
  { name: 'Swine of the Sunken Galley', hero: 'Pudge', chance: 3.75, color: '#9c27b0', emoji: '🐷', type: 'arcana', points: 400, sellPriceCoins: 1000, sellPriceDiamonds: 500, passiveIncomeCoins: 100, passiveIncomeDiamonds: 0 },
  { name: 'Feast of Abscession', hero: 'Pudge', chance: 3.75, color: '#9c27b0', emoji: '🪝', type: 'arcana', points: 400, sellPriceCoins: 1000, sellPriceDiamonds: 500, passiveIncomeCoins: 100, passiveIncomeDiamonds: 0 },
  { name: 'The Eminence of Ristul', hero: 'Queen of Pain', chance: 1.225, color: '#f44336', emoji: '💜', type: 'arcana', points: 700, sellPriceCoins: 1500, sellPriceDiamonds: 750, passiveIncomeCoins: 150, passiveIncomeDiamonds: 0 },
  { name: 'Phantom Advent', hero: 'Phantom Assassin', chance: 1.225, color: '#f44336', emoji: '🦋', type: 'arcana', points: 700, sellPriceCoins: 1500, sellPriceDiamonds: 750, passiveIncomeCoins: 150, passiveIncomeDiamonds: 0 },
  { name: 'Claszian Apostasy', hero: 'Faceless Void', chance: 1.225, color: '#f44336', emoji: '🌑', type: 'arcana', points: 700, sellPriceCoins: 1500, sellPriceDiamonds: 750, passiveIncomeCoins: 150, passiveIncomeDiamonds: 0 },
  { name: 'Fiery Soul of the Slayer', hero: 'Lina', chance: 1.225, color: '#f44336', emoji: '🔥', type: 'arcana', points: 700, sellPriceCoins: 1500, sellPriceDiamonds: 750, passiveIncomeCoins: 150, passiveIncomeDiamonds: 0 },
  { name: 'Demon Eater', hero: 'Shadow Fiend', chance: 0.1, color: '#ff9800', emoji: '😈', type: 'arcana', points: 1500, sellPriceCoins: 5000, sellPriceDiamonds: 2500, passiveIncomeCoins: 500, passiveIncomeDiamonds: 0 },
];
const ALL_ITEMS = [...PRIVILEGES, ...ITEMS, ...ARCANAS];
const RARITY_ORDER = ['Рекрут', 'Страж', 'Рыцарь', 'Герой', 'Легенда', 'Властелин', 'Божество', 'Титан'];

const MINE_REWARDS = [
  { minutes: 5, type: 'itemsCase', label: '🎁 Кейс с предметами' },
  { minutes: 10, type: 'coins', value: 200, label: '200 ⚜️' },
  { minutes: 30, type: 'diamonds', value: 50, label: '50 ♾️' },
  { minutes: 60, type: 'rankCase', label: '🎁 Кейс рангов' },
  { minutes: 120, type: 'arcanCase', label: '🎁 Кейс с арканами' },
];
const MINE_HOURLY_REWARD = 500;

// ==== СОСТОЯНИЕ ====
let balance = START_BALANCE;
let diamonds = START_DIAMONDS;
let isOpening = false;
let bestTitle = null;
let playerNick = '';
let privilegeInventory = [];
let itemInventory = [];
let currentFilter = 'all';
let isOnline = true;
let totalOpened = 0;
let totalSpentDiamonds = 0;
let totalSpentCoins = 0;
let upgraderYourItem = null;
let upgraderTargetItem = null;
let upgraderSpinning = false;
let mineSecondsToday = 0;
let mineClaimed = [];
let mineLastHourlyClaimed = 0;
let mineDate = '';
let mineTickHandle = null;
let giftSelectedType = 'item';
let giftSelectedItem = null;
let giftPendingTrade = null;
let xp = 0;
let rankIndex = 0;

// ==== ЭЛЕМЕНТЫ ====
const trackEl = document.getElementById('rouletteTrack');
const wrapEl = document.getElementById('rouletteWrap');
const modalResult = document.getElementById('modalResult');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const priceChoice = document.getElementById('priceChoice');
const payDiamonds = document.getElementById('payDiamonds');
const payCoins = document.getElementById('payCoins');
const balanceEl = document.getElementById('balance');
const diamondsEl = document.getElementById('diamonds');
const openBtn = document.getElementById('openBtn');
const openItemsBtn = document.getElementById('openItemsBtn');
const playerNickEl = document.getElementById('playerNick');
const playerTitleEl = document.getElementById('playerTitle');
const nicknameOverlay = document.getElementById('nicknameOverlay');
const nicknameInput = document.getElementById('nicknameInput');
const passwordInput = document.getElementById('passwordInput');
const nicknameBtn = document.getElementById('nicknameBtn');
const nicknameError = document.getElementById('nicknameError');
const inventoryGrid = document.getElementById('inventoryGrid');
const sortBtn = document.getElementById('sortBtn');
const sortMenu = document.getElementById('sortMenu');
const sortLabel = document.getElementById('sortLabel');
const statOpenedEl = document.getElementById('statOpened');
const statSpentDiamondsEl = document.getElementById('statSpentDiamonds');
const statSpentCoinsEl = document.getElementById('statSpentCoins');
const tradeBtn = document.getElementById('tradeBtn');
const leadersCoinsEl = document.getElementById('leadersCoins');
const leadersDiamondsEl = document.getElementById('leadersDiamonds');
const upgraderBtn = document.getElementById('upgraderBtn');
const upgraderOverlay = document.getElementById('upgraderOverlay');
const upgraderYourList = document.getElementById('upgraderYourList');
const upgraderTargetList = document.getElementById('upgraderTargetList');
const upgraderChance = document.getElementById('upgraderChance');
const upgraderResult = document.getElementById('upgraderResult');
const upgraderSpinBtn = document.getElementById('upgraderSpinBtn');
const upgraderCloseBtn = document.getElementById('upgraderCloseBtn');
const upgraderWheelWrap = document.getElementById('upgraderWheelWrap');
const upgraderTrack = document.getElementById('upgraderTrack');
const mineBtn = document.getElementById('mineBtn');
const mineOverlay = document.getElementById('mineOverlay');
const mineCloseBtn = document.getElementById('mineCloseBtn');
const mineList = document.getElementById('mineList');
const mineTime = document.getElementById('mineTime');
const giftOverlay = document.getElementById('giftOverlay');
const giftCloseBtn = document.getElementById('giftCloseBtn');
const giftTabs = document.querySelectorAll('.gift-tab');
const giftSendSection = document.getElementById('gift-send');
const giftReceiveSection = document.getElementById('gift-receive');
const giftNick = document.getElementById('giftNick');
const giftTypes = document.querySelectorAll('.gift-type');
const giftItemList = document.getElementById('giftItemList');
const giftAmountWrap = document.getElementById('giftAmountWrap');
const giftAmount = document.getElementById('giftAmount');
const giftSendError = document.getElementById('giftSendError');
const giftCreateBtn = document.getElementById('giftCreateBtn');
const giftCodeWrap = document.getElementById('giftCodeWrap');
const giftCode = document.getElementById('giftCode');
const giftCopyBtn = document.getElementById('giftCopyBtn');
const giftCodeInput = document.getElementById('giftCodeInput');
const giftReceiveError = document.getElementById('giftReceiveError');
const giftReceiveBtn = document.getElementById('giftReceiveBtn');
const giftPreviewWrap = document.getElementById('giftPreviewWrap');
const giftPreview = document.getElementById('giftPreview');
const giftAcceptBtn = document.getElementById('giftAcceptBtn');
const giftDeclineBtn = document.getElementById('giftDeclineBtn');

// ==== XP ФУНКЦИИ ====
function updateXPBar() {
  const fill = document.getElementById('xpBarFill');
  const text = document.getElementById('xpBarText');
  const rankEl = document.getElementById('xpRank');
  if (!fill || !text) return;
  const cur = XP_RANKS[rankIndex];
  const need = cur.xpToNext;
  const percent = Math.min(100, (xp / need) * 100);
  fill.style.width = percent + '%';
  text.textContent = `${xp} / ${need}`;
  if (rankEl) {
    const isEmoji = cur.img.length <= 4;
    rankEl.innerHTML = isEmoji
      ? `<span>${cur.img}</span>`
      : `<img src="${cur.img}" alt="${cur.name}">`;
  }
}

function addXP(amount) {
  if (rankIndex >= XP_RANKS.length - 1) {
    xp += amount;
    updateXPBar();
    saveAccount();
    return;
  }
  xp += amount;
  let changed = false;
  while (rankIndex < XP_RANKS.length - 1 && xp >= XP_RANKS[rankIndex].xpToNext) {
    xp -= XP_RANKS[rankIndex].xpToNext;
    rankIndex++;
    changed = true;
  }
  if (changed) {
    showRankUpPopup(XP_RANKS[rankIndex].name, XP_RANKS[rankIndex].img);
  }
  updateXPBar();
  saveAccount();
}

function showRankUpPopup(name, img) {
  const popup = document.createElement('div');
  popup.className = 'rankup-popup';
  const isEmoji = img.length <= 4;
  popup.innerHTML = `
    <div class="rankup-title">🎉 Новый ранг!</div>
    <div class="rankup-icon">${isEmoji ? `<span style="font-size:60px">${img}</span>` : `<img src="${img}">`}</div>
    <div class="rankup-name">${name}</div>
  `;
  document.body.appendChild(popup);
  setTimeout(() => popup.classList.add('show'), 50);
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 400);
  }, 3000);
}

// ==== ОБЩИЕ ФУНКЦИИ ====
function updateBalance() {
  balanceEl.textContent = Math.floor(balance);
  diamondsEl.textContent = Math.floor(diamonds);
  statOpenedEl.textContent = totalOpened;
  statSpentDiamondsEl.textContent = totalSpentDiamonds;
  statSpentCoinsEl.textContent = totalSpentCoins;
}

function updateTitle() {
  if (bestTitle) {
    playerTitleEl.textContent = `« ${bestTitle.name} »`;
    playerTitleEl.style.color = bestTitle.color;
  } else playerTitleEl.textContent = '';
}

function rollPrize(list) {
  const roll = Math.random() * 100;
  let sum = 0;
  for (const p of list) { sum += p.chance; if (roll < sum) return p; }
  return list[0];
}

function createItem(prize) {
  const div = document.createElement('div');
  div.className = 'roulette-item';
  div.style.color = prize.color;
  let icon = prize.img
    ? `<img class="prize-img" src="${prize.img}" alt="${prize.name}">`
    : `<div class="emoji">${prize.emoji}</div>`;
  const heroLine = prize.hero ? `<div style="font-size:12px; color:#aaa; margin-top:2px;">${prize.hero}</div>` : '';
  div.innerHTML = `${icon}<div>${prize.name}</div>${heroLine}`;
  return div;
}

function addPrivilegeToInventory(prize) {
  if (privilegeInventory.some(p => p.name === prize.name)) return false;
  privilegeInventory.push({ ...prize, count: 1 });
  return true;
}

function addItemToInventory(prize) {
  const existing = itemInventory.find(p => p.name === prize.name);
  if (existing) existing.count++;
  else itemInventory.push({ ...prize, count: 1 });
  return true;
}

function renderInventory() {
  let filteredPriv = [];
  let filteredItems = [];
  if (currentFilter === 'all' || currentFilter === 'privileges') filteredPriv = privilegeInventory;
  if (currentFilter === 'all' || currentFilter === 'items') filteredItems = itemInventory;
  inventoryGrid.innerHTML = '';
  if (filteredPriv.length === 0 && filteredItems.length === 0) return;

  const sortedPriv = [...filteredPriv].sort((a, b) =>
    RARITY_ORDER.indexOf(b.name) - RARITY_ORDER.indexOf(a.name));
  sortedPriv.forEach(prize => {
    const card = document.createElement('div');
    card.className = 'inv-card';
    let icon = prize.img
      ? `<img src="${prize.img}" alt="${prize.name}">`
      : `<div class="inv-emoji">${prize.emoji}</div>`;
    card.innerHTML = `
      ${icon}
      <div class="inv-name" style="color: ${prize.color}">${prize.name}</div>
      <button class="trade-btn" data-name="${prize.name}">Обмен</button>
    `;
    inventoryGrid.appendChild(card);
  });

  const sortedItems = [...filteredItems].sort((a, b) => (b.points || 0) - (a.points || 0));
  sortedItems.forEach(prize => {
    const card = document.createElement('div');
    card.className = 'inv-card';
    let icon = prize.img
      ? `<img src="${prize.img}" alt="${prize.name}">`
      : `<div class="inv-emoji">${prize.emoji}</div>`;
    const heroLine = prize.hero ? `<div style="font-size:14px; color:#aaa; margin-bottom:8px;">${prize.hero}</div>` : '';
    let sellButtons = '';
    if (prize.sellPriceDiamonds > 0) {
      sellButtons = `
        <button class="sell-btn" data-name="${prize.name}" data-currency="coins">Продать (${prize.sellPriceCoins} ⚜️)</button>
        <button class="sell-btn" data-name="${prize.name}" data-currency="diamonds" style="margin-top:8px; background:#4fc3f7; color:#000;">Продать (${prize.sellPriceDiamonds} ♾️)</button>
      `;
    } else {
      sellButtons = `<button class="sell-btn" data-name="${prize.name}" data-currency="coins">Продать (${prize.sellPriceCoins} ⚜️)</button>`;
    }
    card.innerHTML = `
      ${icon}
      <div class="inv-name" style="color: ${prize.color}">${prize.name}</div>
      ${heroLine}
      <div class="inv-count">x${prize.count}</div>
      ${sellButtons}
    `;
    inventoryGrid.appendChild(card);
  });

  inventoryGrid.querySelectorAll('.trade-btn').forEach(btn => {
    btn.addEventListener('click', () => alert('Обмен пока в разработке: ' + btn.dataset.name));
  });
  inventoryGrid.querySelectorAll('.sell-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      const currency = btn.dataset.currency;
      const item = itemInventory.find(p => p.name === name);
      if (!item) return;
      if (currency === 'coins') balance += item.sellPriceCoins;
      else diamonds += item.sellPriceDiamonds;
      item.count--;
      if (item.count <= 0) itemInventory = itemInventory.filter(p => p.name !== name);
      updateBalance();
      renderInventory();
      renderLeaders();
      saveAccount();
    });
  });
}

function renderLeaders() {
  const accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
  const players = Object.keys(accounts).map(nick => ({
    nick: nick,
    balance: accounts[nick].balance || 0,
    diamonds: accounts[nick].diamonds || 0
  }));
  const sortedCoins = [...players].sort((a, b) => b.balance - a.balance).slice(0, 5);
  leadersCoinsEl.innerHTML = '';
  sortedCoins.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'leader-row';
    if (i === 0) row.classList.add('top-1');
    if (i === 1) row.classList.add('top-2');
    if (i === 2) row.classList.add('top-3');
    row.innerHTML = `<span class="place">${i + 1}.</span><span class="name">${p.nick}</span><span class="value">${Math.floor(p.balance)} ⚜️</span>`;
    leadersCoinsEl.appendChild(row);
  });
  const sortedDiamonds = [...players].sort((a, b) => b.diamonds - a.diamonds).slice(0, 5);
  leadersDiamondsEl.innerHTML = '';
  sortedDiamonds.forEach((p, i) => {
    const row = document.createElement('div');
    row.className = 'leader-row';
    if (i === 0) row.classList.add('top-1');
    if (i === 1) row.classList.add('top-2');
    if (i === 2) row.classList.add('top-3');
    row.innerHTML = `<span class="place">${i + 1}.</span><span class="name">${p.nick}</span><span class="value">${Math.floor(p.diamonds)} ♾️</span>`;
    leadersDiamondsEl.appendChild(row);
  });
}

function showIncomePopup(amount, currency) {
  const popup = document.createElement('div');
  popup.textContent = `+${amount} ${currency}`;
  popup.style.cssText = `position:fixed;top:150px;right:25px;background:#000;border:3px solid #ffd700;border-radius:12px;padding:10px 20px;color:#ffd700;font-weight:bold;font-size:22px;z-index:300;box-shadow:0 0 25px #ffd70088;transition:opacity 1s,transform 1s;opacity:1;`;
  document.body.appendChild(popup);
  setTimeout(() => { popup.style.opacity = '0'; popup.style.transform = 'translateY(-30px)'; }, 2000);
  setTimeout(() => popup.remove(), 3200);
}

function startIncome() {
  setInterval(() => {
    if (!isOnline) return;
    let incomeCoins = 0, incomeDiamonds = 0;
    if (bestTitle) {
      incomeCoins += bestTitle.onlineIncome;
      if (bestTitle.onlineDiamondIncome > 0) incomeDiamonds += bestTitle.onlineDiamondIncome;
    }
    itemInventory.forEach(item => {
      if (item.passiveIncomeCoins > 0) incomeCoins += item.passiveIncomeCoins * item.count;
      if (item.passiveIncomeDiamonds > 0) incomeDiamonds += item.passiveIncomeDiamonds * item.count;
    });
    if (incomeCoins > 0) { balance += incomeCoins; showIncomePopup(incomeCoins, '⚜️'); }
    if (incomeDiamonds > 0) { diamonds += incomeDiamonds; showIncomePopup(incomeDiamonds, '♾️'); }
    if (incomeCoins > 0 || incomeDiamonds > 0) { updateBalance(); saveAccount(); renderLeaders(); }
  }, 60 * 1000);
}

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function saveAccount() {
  if (!playerNick) return;
  const accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
  accounts[playerNick] = {
    password: accounts[playerNick]?.password || '',
    balance: balance, diamonds: diamonds,
    privilegeInventory: privilegeInventory.map(p => p.name),
    itemInventory: itemInventory.map(p => ({ name: p.name, count: p.count })),
    bestTitle: bestTitle ? bestTitle.name : null,
    totalOpened: totalOpened, totalSpentDiamonds: totalSpentDiamonds, totalSpentCoins: totalSpentCoins,
    mineSecondsToday: mineSecondsToday, mineClaimed: mineClaimed,
    mineLastHourlyClaimed: mineLastHourlyClaimed, mineDate: mineDate,
    xp: xp, rankIndex: rankIndex
  };
  localStorage.setItem('accounts', JSON.stringify(accounts));
  renderLeaders();
}

function loadAccount(nick, password) {
  const accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
  if (!accounts[nick]) return 'new';
  if (accounts[nick].password !== password) return 'wrongpass';
  const a = accounts[nick];
  balance = a.balance ?? START_BALANCE;
  diamonds = a.diamonds ?? START_DIAMONDS;
  privilegeInventory = (a.privilegeInventory || []).map(name => {
    const p = PRIVILEGES.find(x => x.name === name);
    return p ? { ...p, count: 1 } : null;
  }).filter(Boolean);
  itemInventory = (a.itemInventory || []).map(obj => {
    const p = ITEMS.find(x => x.name === obj.name) || ARCANAS.find(x => x.name === obj.name);
    return p ? { ...p, count: obj.count } : null;
  }).filter(Boolean);
  bestTitle = a.bestTitle ? PRIVILEGES.find(p => p.name === a.bestTitle) : null;
  totalOpened = a.totalOpened || 0;
  totalSpentDiamonds = a.totalSpentDiamonds || 0;
  totalSpentCoins = a.totalSpentCoins || 0;
  xp = a.xp ?? 0;
  rankIndex = a.rankIndex ?? 0;
  mineDate = a.mineDate || todayStr();
  mineSecondsToday = a.mineSecondsToday || 0;
  mineClaimed = a.mineClaimed || [];
  mineLastHourlyClaimed = a.mineLastHourlyClaimed || 0;
  if (mineDate !== todayStr()) {
    mineDate = todayStr(); mineSecondsToday = 0; mineClaimed = []; mineLastHourlyClaimed = 0;
  }
  return 'ok';
                                            }
let currentPrizeList = PRIVILEGES;
let currentCaseType = 'privileges';

function showOpenModal(caseType, free = false) {
  currentCaseType = caseType;
  if (caseType === 'privileges') currentPrizeList = PRIVILEGES;
  else if (caseType === 'arcanas') currentPrizeList = ARCANAS;
  else currentPrizeList = ITEMS;

  modalTitle.textContent = caseType === 'privileges' ? 'КЕЙС РАНГОВ' :
                            caseType === 'arcanas' ? 'КЕЙС С АРКАНАМИ' :
                            'КЕЙС С ПРЕДМЕТАМИ';
  modalOverlay.classList.add('active');
  modalResult.textContent = '';
  modalClose.classList.remove('active');
  priceChoice.style.display = 'none';
  wrapEl.style.display = 'none';

  if (free) {
    startSpin('free');
  } else if (caseType === 'items') {
    priceChoice.style.display = 'flex';
  } else if (caseType === 'arcanas') {
    if (balance < ARCANA_CASE_PRICE_COINS) {
      modalResult.textContent = 'Недостаточно монет!';
      modalResult.style.color = '#f44336';
      return;
    }
    balance -= ARCANA_CASE_PRICE_COINS;
    totalSpentCoins += ARCANA_CASE_PRICE_COINS;
    startSpin('coins');
  } else {
    startSpin('diamonds');
  }
}

payDiamonds.addEventListener('click', () => {
  if (diamonds < ITEMS_CASE_PRICE_DIAMONDS) { modalResult.textContent = 'Недостаточно алмазов!'; modalResult.style.color = '#f44336'; return; }
  diamonds -= ITEMS_CASE_PRICE_DIAMONDS;
  totalSpentDiamonds += ITEMS_CASE_PRICE_DIAMONDS;
  startSpin('diamonds');
});

payCoins.addEventListener('click', () => {
  if (balance < ITEMS_CASE_PRICE_COINS) { modalResult.textContent = 'Недостаточно монет!'; modalResult.style.color = '#f44336'; return; }
  balance -= ITEMS_CASE_PRICE_COINS;
  totalSpentCoins += ITEMS_CASE_PRICE_COINS;
  startSpin('coins');
});

function startSpin(currency) {
  if (isOpening) return;
  isOpening = true;
  if (currency === 'diamonds' && currentCaseType === 'privileges') {
    if (diamonds < PRIVILEGE_CASE_PRICE_DIAMONDS) {
      modalResult.textContent = 'Недостаточно алмазов!';
      modalResult.style.color = '#f44336';
      isOpening = false;
      return;
    }
    diamonds -= PRIVILEGE_CASE_PRICE_DIAMONDS;
    totalSpentDiamonds += PRIVILEGE_CASE_PRICE_DIAMONDS;
  }
  totalOpened++;
  updateBalance();
  priceChoice.style.display = 'none';
  wrapEl.style.display = 'block';
  openBtn.disabled = true;
  openItemsBtn.disabled = true;
  const winPrize = rollPrize(currentPrizeList);
  trackEl.innerHTML = '';
  trackEl.style.transition = 'none';
  trackEl.style.transform = 'translateX(0)';
  const items = [];
  for (let i = 0; i < 30; i++) items.push(currentPrizeList[Math.floor(Math.random() * currentPrizeList.length)]);
  items.push(winPrize);
  for (let i = 0; i < EXTRA_ITEMS; i++) items.push(currentPrizeList[Math.floor(Math.random() * currentPrizeList.length)]);
  const winIndex = 30;
  items.forEach(p => trackEl.appendChild(createItem(p)));
  const wrapWidth = wrapEl.offsetWidth;
  const centerOffset = wrapWidth / 2;
  const targetX = -(winIndex * ITEM_WIDTH + ITEM_WIDTH / 2 - centerOffset);
  requestAnimationFrame(() => {
    trackEl.style.transition = `transform ${SPIN_DURATION}ms cubic-bezier(0.15, 0.85, 0.3, 1)`;
    trackEl.style.transform = `translateX(${targetX}px)`;
  });
  setTimeout(() => {
    modalResult.textContent = winPrize.name;
    modalResult.style.color = winPrize.color;
    if (winPrize.type === 'privilege') {
      const currentIdx = bestTitle ? RARITY_ORDER.indexOf(bestTitle.name) : -1;
      const newIdx = RARITY_ORDER.indexOf(winPrize.name);
      if (newIdx > currentIdx) { bestTitle = winPrize; updateTitle(); }
      const added = addPrivilegeToInventory(winPrize);
      if (!added) modalResult.textContent = winPrize.name + ' (уже есть)';
    } else addItemToInventory(winPrize);

    if (currentCaseType === 'privileges') addXP(2);
    else if (currentCaseType === 'items') addXP(2);
    else if (currentCaseType === 'arcanas') addXP(15);

    renderInventory();
    saveAccount();
    modalClose.classList.add('active');
    isOpening = false;
    openBtn.disabled = false;
    openItemsBtn.disabled = false;
  }, SPIN_DURATION + 100);
}

function closeModal() { modalOverlay.classList.remove('active'); }

openBtn.addEventListener('click', () => showOpenModal('privileges'));
openItemsBtn.addEventListener('click', () => showOpenModal('items'));
const openArcanaBtn = document.getElementById('openArcanaBtn');
if (openArcanaBtn) openArcanaBtn.addEventListener('click', () => showOpenModal('arcanas'));

// ==== АПГРЕЙДЕР ====
function openUpgrader() {
  upgraderYourItem = null;
  upgraderTargetItem = null;
  upgraderChance.textContent = 'Выбери предметы';
  upgraderResult.textContent = '';
  upgraderResult.style.color = '#ffd700';
  upgraderWheelWrap.classList.remove('active');
  upgraderTrack.innerHTML = '';
  upgraderSpinBtn.disabled = true;
  upgraderSpinBtn.textContent = 'Крутить';
  upgraderOverlay.classList.add('active');
  renderUpgraderLists();
}

function closeUpgrader() { upgraderOverlay.classList.remove('active'); }

function renderUpgraderLists() {
  upgraderYourList.innerHTML = '';
  const allMine = [];
  privilegeInventory.forEach(p => allMine.push({ ...p, count: 1 }));
  itemInventory.forEach(p => allMine.push({ ...p, count: p.count }));
  allMine.forEach(item => {
    const div = document.createElement('div');
    div.className = 'upgrader-item';
    let disabled = item.type === 'privilege' && privilegeInventory.length === 1;
    if (disabled) div.classList.add('disabled');
    if (upgraderYourItem && upgraderYourItem.name === item.name) div.classList.add('selected');
    let icon = item.img ? `<img src="${item.img}" alt="${item.name}">` : `<div class="emoji">${item.emoji}</div>`;
    div.innerHTML = `${icon}<div class="item-name" style="color:${item.color}">${item.name}</div><div class="item-count">${item.count > 1 ? 'x' + item.count : ''}</div>`;
    if (!disabled) div.addEventListener('click', () => {
      if (upgraderSpinning) return;
      upgraderYourItem = item;
      renderUpgraderLists();
      updateUpgraderChance();
    });
    upgraderYourList.appendChild(div);
  });
  upgraderTargetList.innerHTML = '';
  ALL_ITEMS.forEach(item => {
    const div = document.createElement('div');
    div.className = 'upgrader-item';
    let disabled = false;
    if (upgraderYourItem && upgraderYourItem.name === item.name) disabled = true;
    if (item.type === 'privilege' && privilegeInventory.some(p => p.name === item.name)) disabled = true;
    if (disabled) div.classList.add('disabled');
    if (upgraderTargetItem && upgraderTargetItem.name === item.name) div.classList.add('selected');
    let icon = item.img ? `<img src="${item.img}" alt="${item.name}">` : `<div class="emoji">${item.emoji}</div>`;
    div.innerHTML = `${icon}<div class="item-name" style="color:${item.color}">${item.name}</div>`;
    if (!disabled) div.addEventListener('click', () => {
      if (upgraderSpinning) return;
      upgraderTargetItem = item;
      renderUpgraderLists();
      updateUpgraderChance();
    });
    upgraderTargetList.appendChild(div);
  });
}

function calcUpgradeChance(yourPoints, targetPoints) {
  if (!yourPoints || !targetPoints) return 0;
  let chance = (yourPoints / targetPoints) * 100;
  if (chance > 90) chance = 90;
  if (chance < 0.1) chance = 0.1;
  return Math.round(chance);
}

function updateUpgraderChance() {
  if (!upgraderYourItem || !upgraderTargetItem) {
    upgraderChance.textContent = 'Выбери предметы';
    upgraderSpinBtn.disabled = true;
    return;
  }
  const chance = calcUpgradeChance(upgraderYourItem.points, upgraderTargetItem.points);
  upgraderChance.textContent = `Шанс: ${chance}%`;
  upgraderSpinBtn.disabled = false;
}

function startUpgrade() {
  if (upgraderSpinning) return;
  if (!upgraderYourItem || !upgraderTargetItem) return;
  upgraderSpinning = true;
  upgraderSpinBtn.disabled = true;
  upgraderResult.textContent = '';
  const chance = calcUpgradeChance(upgraderYourItem.points, upgraderTargetItem.points);
  const success = Math.random() * 100 < chance;
  applyUpgradeResult(success);
  upgraderTrack.innerHTML = '';
  upgraderTrack.style.transition = 'none';
  upgraderTrack.style.transform = 'translateX(0)';
  upgraderWheelWrap.classList.add('active');
  const items = [];
  for (let i = 0; i < 20; i++) items.push(Math.random() < 0.5 ? 'win' : 'lose');
  items.push(success ? 'win' : 'lose');
  for (let i = 0; i < 20; i++) items.push(Math.random() < 0.5 ? 'win' : 'lose');
  const winIndex = 20;
  const ITEM_W = 120;
  items.forEach(type => {
    const div = document.createElement('div');
    div.className = 'upgrader-wheel-item';
    if (type === 'win') { div.style.color = '#4fc3f7'; div.innerHTML = `<div class="emoji">♾️</div><div>УСПЕХ</div>`; }
    else { div.style.color = '#f44336'; div.innerHTML = `<div class="emoji">💔</div><div>ПРОВАЛ</div>`; }
    upgraderTrack.appendChild(div);
  });
  const wrapWidth = upgraderWheelWrap.offsetWidth;
  const centerOffset = wrapWidth / 2;
  const targetX = -(winIndex * ITEM_W + ITEM_W / 2 - centerOffset);
  setTimeout(() => {
    upgraderTrack.style.transition = 'transform 7000ms cubic-bezier(0.15, 0.85, 0.3, 1)';
    upgraderTrack.style.transform = `translateX(${targetX}px)`;
  }, 50);
  setTimeout(() => {
    if (success) {
      upgraderResult.textContent = `✅ УСПЕХ! Получен: ${upgraderTargetItem ? upgraderTargetItem.name : '—'}`;
      upgraderResult.style.color = '#4caf50';
    } else {
      upgraderResult.textContent = `❌ ПРОВАЛ. Предмет потерян`;
      upgraderResult.style.color = '#f44336';
    }
    upgraderYourItem = null;
    upgraderTargetItem = null;
    upgraderChance.textContent = 'Выбери предметы';
    renderUpgraderLists();
    upgraderSpinning = false;
    upgraderSpinBtn.disabled = true;
    upgraderSpinBtn.textContent = 'Крутить';
  }, 7200);
}

function applyUpgradeResult(success) {
  if (success) {
    removeFromInventory(upgraderYourItem);
    if (upgraderTargetItem.type === 'privilege') addPrivilegeToInventory(upgraderTargetItem);
    else addItemToInventory(upgraderTargetItem);
  } else removeFromInventory(upgraderYourItem);
  recalcBestTitle();
  renderInventory();
  renderLeaders();
  saveAccount();
}

function removeFromInventory(item) {
  if (item.type === 'privilege') {
    privilegeInventory = privilegeInventory.filter(p => p.name !== item.name);
  } else {
    const found = itemInventory.find(p => p.name === item.name);
    if (found) {
      found.count--;
      if (found.count <= 0) itemInventory = itemInventory.filter(p => p.name !== item.name);
    }
  }
}

function recalcBestTitle() {
  if (privilegeInventory.length === 0) { bestTitle = null; updateTitle(); return; }
  let best = null, bestIdx = -1;
  privilegeInventory.forEach(p => {
    const idx = RARITY_ORDER.indexOf(p.name);
    if (idx > bestIdx) { bestIdx = idx; best = p; }
  });
  bestTitle = best;
  updateTitle();
}

upgraderBtn.addEventListener('click', openUpgrader);
upgraderCloseBtn.addEventListener('click', closeUpgrader);
upgraderSpinBtn.addEventListener('click', startUpgrade);
upgraderOverlay.addEventListener('click', (e) => {
  if (e.target === upgraderOverlay && !upgraderSpinning) closeUpgrader();
});

// ==== ПОДАРОК ====
function giftHash(str) {
  let hash = 0;
  const full = str + GIFT_SECRET;
  for (let i = 0; i < full.length; i++) {
    hash = ((hash << 5) - hash) + full.charCodeAt(i);
    hash = hash | 0;
  }
  return Math.abs(hash).toString(16).toUpperCase();
}

function openGift() {
  giftOverlay.classList.add('active');
  giftNick.value = '';
  giftSelectedItem = null;
  giftSelectedType = 'item';
  giftAmount.value = '';
  giftSendError.textContent = '';
  giftCodeWrap.style.display = 'none';
  giftCodeInput.value = '';
  giftReceiveError.textContent = '';
  giftPreviewWrap.style.display = 'none';
  giftPendingTrade = null;
  giftTypes.forEach(t => t.classList.remove('active'));
  document.querySelector('.gift-type[data-type="item"]').classList.add('active');
  renderGiftItemList();
  giftAmountWrap.style.display = 'none';
}

function closeGift() { giftOverlay.classList.remove('active'); }

function switchGiftTab(tab) {
  giftTabs.forEach(t => t.classList.remove('active'));
  document.querySelector(`.gift-tab[data-gift-tab="${tab}"]`).classList.add('active');
  if (tab === 'send') {
    giftSendSection.classList.add('active');
    giftReceiveSection.classList.remove('active');
  } else {
    giftReceiveSection.classList.add('active');
    giftSendSection.classList.remove('active');
  }
}

function renderGiftItemList() {
  giftItemList.innerHTML = '';
  if (giftSelectedType === 'coins' || giftSelectedType === 'diamonds') {
    giftAmountWrap.style.display = 'block';
    giftItemList.style.display = 'none';
    return;
  }
  giftAmountWrap.style.display = 'none';
  giftItemList.style.display = 'block';
  let list = [];
  if (giftSelectedType === 'item') list = itemInventory.map(p => ({ ...p, type: 'item' }));
  else if (giftSelectedType === 'privilege') list = privilegeInventory.map(p => ({ ...p, type: 'privilege' }));
  if (list.length === 0) {
    giftItemList.innerHTML = '<div style="padding:20px; text-align:center; color:#888;">Пусто</div>';
    return;
  }
  list.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gift-item';
    if (giftSelectedItem && giftSelectedItem.name === item.name) div.classList.add('selected');
    let icon = item.img ? `<img src="${item.img}" alt="${item.name}">` : `<div class="emoji">${item.emoji}</div>`;
    div.innerHTML = `${icon}<div class="item-name" style="color:${item.color}">${item.name}</div><div class="item-count">${item.count > 1 ? 'x' + item.count : ''}</div>`;
    div.addEventListener('click', () => { giftSelectedItem = item; renderGiftItemList(); });
    giftItemList.appendChild(div);
  });
}

giftTypes.forEach(typeBtn => {
  typeBtn.addEventListener('click', () => {
    giftTypes.forEach(t => t.classList.remove('active'));
    typeBtn.classList.add('active');
    giftSelectedType = typeBtn.dataset.type;
    giftSelectedItem = null;
    renderGiftItemList();
  });
});

giftCreateBtn.addEventListener('click', () => {
  giftSendError.textContent = '';
  const nick = giftNick.value.trim();
  if (!nick) { giftSendError.textContent = 'Введи ник!'; return; }
  if (nick === playerNick) { giftSendError.textContent = 'Нельзя дарить себе!'; return; }
  let itemName = '';
  let amount = 0;
  if (giftSelectedType === 'item' || giftSelectedType === 'privilege') {
    if (!giftSelectedItem) { giftSendError.textContent = 'Выбери предмет!'; return; }
    itemName = giftSelectedItem.name;
  } else {
    amount = parseInt(giftAmount.value);
    if (!amount || amount <= 0) { giftSendError.textContent = 'Введи сумму!'; return; }
    if (giftSelectedType === 'coins' && amount > balance) { giftSendError.textContent = 'Недостаточно монет!'; return; }
    if (giftSelectedType === 'diamonds' && amount > diamonds) { giftSendError.textContent = 'Недостаточно алмазов!'; return; }
  }
  const ts = Math.floor(Date.now() / 1000);
  const payload = `${playerNick}|${nick}|${giftSelectedType}|${itemName || amount}|${ts}`;
  const hash = giftHash(payload);
  const code = `GIFT|${payload}|${hash}`;
  if (giftSelectedType === 'item') {
    const found = itemInventory.find(p => p.name === itemName);
    if (found) { found.count--; if (found.count <= 0) itemInventory = itemInventory.filter(p => p.name !== itemName); }
  } else if (giftSelectedType === 'privilege') {
    privilegeInventory = privilegeInventory.filter(p => p.name !== itemName);
    recalcBestTitle();
  } else if (giftSelectedType === 'coins') {
    balance -= amount;
  } else if (giftSelectedType === 'diamonds') {
    diamonds -= amount;
  }
  updateBalance();
  renderInventory();
  saveAccount();
  giftCode.value = code;
  giftCodeWrap.style.display = 'block';
});

giftCopyBtn.addEventListener('click', () => {
  giftCode.select();
  document.execCommand('copy');
  giftCopyBtn.textContent = '✅ Скопировано!';
  setTimeout(() => { giftCopyBtn.textContent = '📋 Скопировать'; }, 1500);
});

giftReceiveBtn.addEventListener('click', () => {
  giftReceiveError.textContent = '';
  giftPreviewWrap.style.display = 'none';
  const code = giftCodeInput.value.trim();
  if (!code) { giftReceiveError.textContent = 'Вставь код!'; return; }
  const parts = code.split('|');
  if (parts.length !== 7 || parts[0] !== 'GIFT') { giftReceiveError.textContent = 'Неверный код!'; return; }
  const [_, from, to, type, value, ts, hash] = parts;
  const payload = `${from}|${to}|${type}|${value}|${ts}`;
  const expectedHash = giftHash(payload);
  if (hash !== expectedHash) { giftReceiveError.textContent = 'Код подделан!'; return; }
  if (to !== playerNick) { giftReceiveError.textContent = 'Подарок не для тебя!'; return; }
  const usedCodes = JSON.parse(localStorage.getItem('usedGiftCodes') || '[]');
  if (usedCodes.includes(code)) { giftReceiveError.textContent = 'Этот код уже использован!'; return; }
  giftPendingTrade = { code, from, to, type, value };
  let previewText = '';
  if (type === 'item') previewText = `📦 Предмет: <b>${value}</b>`;
  else if (type === 'privilege') previewText = `🏆 Ранг: <b>${value}</b>`;
  else if (type === 'coins') previewText = `⚜️ Монеты: <b>${value}</b>`;
  else if (type === 'diamonds') previewText = `♾️ Алмазы: <b>${value}</b>`;
  giftPreview.innerHTML = `<div class="gift-from">🎁 Подарок от игрока "${from}"</div><div class="gift-what">${previewText}</div>`;
  giftPreviewWrap.style.display = 'block';
});

giftAcceptBtn.addEventListener('click', () => {
  if (!giftPendingTrade) return;
  const { code, type, value } = giftPendingTrade;
  if (type === 'item') {
    const found = ITEMS.find(i => i.name === value) || ARCANAS.find(i => i.name === value);
    if (found) addItemToInventory(found);
  } else if (type === 'privilege') {
    const found = PRIVILEGES.find(p => p.name === value);
    if (found) addPrivilegeToInventory(found);
  } else if (type === 'coins') {
    balance += parseInt(value);
  } else if (type === 'diamonds') {
    diamonds += parseInt(value);
  }
  const usedCodes = JSON.parse(localStorage.getItem('usedGiftCodes') || '[]');
  usedCodes.push(code);
  localStorage.setItem('usedGiftCodes', JSON.stringify(usedCodes));
  updateBalance();
  renderInventory();
  recalcBestTitle();
  saveAccount();
  giftReceiveError.textContent = '';
  giftPreviewWrap.style.display = 'none';
  giftCodeInput.value = '';
  giftPendingTrade = null;
  alert('🎁 Подарок получен!');
});

giftDeclineBtn.addEventListener('click', () => {
  giftPreviewWrap.style.display = 'none';
  giftPendingTrade = null;
});

tradeBtn.addEventListener('click', openGift);
giftCloseBtn.addEventListener('click', closeGift);
giftOverlay.addEventListener('click', (e) => { if (e.target === giftOverlay) closeGift(); });
giftTabs.forEach(tab => {
  tab.addEventListener('click', () => switchGiftTab(tab.dataset.giftTab));
});

// ==== РУДНИК ====
function renderMine() {
  const totalMinutes = Math.floor(mineSecondsToday / 60);
  mineTime.textContent = `Сегодня: ${totalMinutes} мин`;
  mineList.innerHTML = '';
  MINE_REWARDS.forEach((reward, idx) => {
    const row = document.createElement('div');
    row.className = 'mine-row';
    const claimed = mineClaimed.includes(idx);
    const available = totalMinutes >= reward.minutes;
    if (claimed) row.classList.add('claimed');
    else if (available) row.classList.add('available');
    row.innerHTML = `
      <span class="mine-time-label">${reward.minutes} мин</span>
      <span class="mine-reward">${reward.label}</span>
      <button class="mine-claim-btn" data-idx="${idx}" ${claimed || !available ? 'disabled' : ''}>${claimed ? '✓' : 'Забрать'}</button>
    `;
    mineList.appendChild(row);
  });
  if (totalMinutes >= 120) {
    const hoursAfter = Math.floor((totalMinutes - 120) / 60);
    const available = Math.max(0, hoursAfter - mineLastHourlyClaimed);
    const row = document.createElement('div');
    row.className = 'mine-row';
    if (available > 0) row.classList.add('available');
    row.innerHTML = `
      <span class="mine-time-label">+1 час</span>
      <span class="mine-reward">+500 ⚜️ (доступно: ${available})</span>
      <button class="mine-claim-btn" data-hourly="1" ${available <= 0 ? 'disabled' : ''}>${available > 0 ? 'Забрать' : '—'}</button>
    `;
    mineList.appendChild(row);
  }
  mineList.querySelectorAll('.mine-claim-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.dataset.hourly) claimHourly();
      else claimMineReward(parseInt(btn.dataset.idx));
    });
  });
}

function claimMineReward(idx) {
  if (mineClaimed.includes(idx)) return;
  const reward = MINE_REWARDS[idx];
  if (Math.floor(mineSecondsToday / 60) < reward.minutes) return;
  mineClaimed.push(idx);
  if (reward.type === 'itemsCase') closeMineAndOpenCase('items');
  else if (reward.type === 'rankCase') closeMineAndOpenCase('privileges');
  else if (reward.type === 'coins') { balance += reward.value; showIncomePopup(reward.value, '⚜️'); updateBalance(); }
  else if (reward.type === 'diamonds') { diamonds += reward.value; showIncomePopup(reward.value, '♾️'); updateBalance(); }
  else if (reward.type === 'arcanCase') closeMineAndOpenCase('arcanas');
  saveAccount();
  renderMine();
}

function claimHourly() {
  const totalMinutes = Math.floor(mineSecondsToday / 60);
  const hoursAfter = Math.floor((totalMinutes - 120) / 60);
  const available = Math.max(0, hoursAfter - mineLastHourlyClaimed);
  if (available <= 0) return;
  mineLastHourlyClaimed += 1;
  balance += MINE_HOURLY_REWARD;
  showIncomePopup(MINE_HOURLY_REWARD, '⚜️');
  updateBalance();
  saveAccount();
  renderMine();
}

function closeMineAndOpenCase(caseType) {
  mineOverlay.classList.remove('active');
  setTimeout(() => showOpenModal(caseType, true), 200);
}

function startMineTick() {
  if (mineTickHandle) clearInterval(mineTickHandle);
  mineTickHandle = setInterval(() => {
    if (!playerNick) return;
    if (document.hidden) return;
    if (mineDate !== todayStr()) {
      mineDate = todayStr(); mineSecondsToday = 0; mineClaimed = []; mineLastHourlyClaimed = 0;
    }
    mineSecondsToday++;
    if (mineOverlay.classList.contains('active')) renderMine();
    if (mineSecondsToday % 30 === 0) saveAccount();
  }, 1000);
}

function openMine() {
  if (mineDate !== todayStr()) {
    mineDate = todayStr(); mineSecondsToday = 0; mineClaimed = []; mineLastHourlyClaimed = 0;
  }
  renderMine();
  mineOverlay.classList.add('active');
}

function closeMine() { mineOverlay.classList.remove('active'); }

mineBtn.addEventListener('click', openMine);
mineCloseBtn.addEventListener('click', closeMine);
mineOverlay.addEventListener('click', (e) => { if (e.target === mineOverlay) closeMine(); });

// ==== ВВОД НИКА И ПАРОЛЯ ====
function checkInputs() {
  if (!nicknameBtn || !nicknameInput || !passwordInput) return;
  const ok = nicknameInput.value.trim().length > 0 && passwordInput.value.length > 0;
  nicknameBtn.disabled = !ok;
}
nicknameInput.addEventListener('input', checkInputs);
nicknameInput.addEventListener('keyup', checkInputs);
nicknameInput.addEventListener('change', checkInputs);
passwordInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('keyup', checkInputs);
passwordInput.addEventListener('change', checkInputs);
nicknameInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !nicknameBtn.disabled) nicknameBtn.click(); });
passwordInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !nicknameBtn.disabled) nicknameBtn.click(); });

nicknameBtn.addEventListener('click', () => {
  const nick = nicknameInput.value.trim();
  const pass = passwordInput.value;
  if (!nick || !pass) return;
  const result = loadAccount(nick, pass);
  if (result === 'wrongpass') { nicknameError.textContent = 'Неверный пароль!'; return; }
  if (result === 'new') {
    const accounts = JSON.parse(localStorage.getItem('accounts') || '{}');
    accounts[nick] = {
      password: pass, balance: START_BALANCE, diamonds: START_DIAMONDS,
      privilegeInventory: [], itemInventory: [], bestTitle: null,
      totalOpened: 0, totalSpentDiamonds: 0, totalSpentCoins: 0,
      mineSecondsToday: 0, mineClaimed: [], mineLastHourlyClaimed: 0, mineDate: todayStr(),
      xp: 0, rankIndex: 0
    };
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
  playerNick = nick;
  playerNickEl.textContent = playerNick;
  nicknameOverlay.classList.add('hidden');
  nicknameError.textContent = '';
  updateBalance();
  updateTitle();
  updateXPBar();
  renderInventory();
  renderLeaders();
  startMineTick();
});

checkInputs();

// ==== ВКЛАДКИ ====
const hotbarBtns = document.querySelectorAll('.hotbar-btn');
const tabSections = document.querySelectorAll('.tab-section');
hotbarBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    hotbarBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabSections.forEach(s => s.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
  });
});

// ==== СОРТИРОВКА ====
sortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  sortMenu.classList.toggle('open');
  sortBtn.classList.toggle('open');
});
sortMenu.querySelectorAll('.sort-menu-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const filter = item.dataset.filter;
    sortMenu.querySelectorAll('.sort-menu-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    sortLabel.textContent = item.textContent;
    currentFilter = filter;
    renderInventory();
    sortMenu.classList.remove('open');
    sortBtn.classList.remove('open');
  });
});
document.addEventListener('click', () => {
  sortMenu.classList.remove('open');
  sortBtn.classList.remove('open');
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

// ==== СТАРТ ====
updateBalance();
updateTitle();
updateXPBar();
renderInventory();
renderLeaders();
startIncome();
