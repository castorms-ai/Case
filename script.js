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

// ==== РАНГИ DOTA 2 ====
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
