/* ============================================================
   Will Wood — Interactive Cabinet
   One-page · Mobile-optimized
   ============================================================ */

const I18N = {
  ru: {
    "a11y.skip": "Перейти к содержимому",
    "a11y.menu": "Открыть меню",
    "a11y.close": "Закрыть",
    "a11y.top": "Наверх",
    "a11y.reduceMotion": "Уменьшить анимации",
    "theme.label": "Тема",
    "nav.matcher": "Тест",
    "nav.setlist": "Плейлист",
    "nav.poll": "Голосование",
    "nav.camp": "Лагерь",
    "nav.game": "Игра",
    "hero.eyebrow": "Interactive Cabinet",
    "hero.subtitle": "Театральный кабаре-рок, хаотичная латина, ду-воп, клезмер — всё в одном кабинете.",
    "hero.ctaStart": "Пройти тест",
    "hero.ctaGame": "Играть",
    "widget.quoteOfDay": "Цитата дня",
    "widget.moodOfDay": "Настроение дня",
    "widget.randomTrack": "Случайный трек",
    "page.matcher": "Какая песня тебе подходит?",
    "page.matcherSub": "Ответь на 4 вопроса — кабинет подберёт тебе трек Will Wood.",
    "page.setlist": "Составить плейлист",
    "page.setlistSub": "Кликай на треки — кабинет оценит драматургию плейлиста.",
    "page.poll": "Голосование",
    "page.camp": "Camp Here & There",
    "page.campSub": "Звуки леса и дневник лагеря. Костёр, сверчки, дождь, сова, ветер — всё синтезируется прямо в браузере.",
    "page.game": "Угадай трек по эмодзи",
    "page.gameSub": "8 уровней. Угадай, какая песня зашифрована в эмодзи.",
    "btn.more": "Ещё",
    "btn.expand": "▶︎ Развернуть",
    "btn.collapse": "▾ Свернуть",
    "btn.write": "Записать",
    "btn.listen": "▶︎ Слушать",
    "btn.again": "Ещё раз",
    "btn.rollRandom": "🎲 Бросить кубик",
    "btn.reset": "Очистить",
    "btn.play": "▶ Слушать",
    "setlist.title": "Твой плейлист",
    "setlist.pool": "Пул треков",
    "setlist.hint": "кликни, чтобы добавить",
    "setlist.empty": "Кликни на трек, чтобы добавить его в плейлист.",
    "setlist.score": "Драматургия плейлиста",
    "setlist.avgMood": "Средняя интенсивность",
    "setlist.spread": "разброс",
    "poll.title": "Любимый альбом",
    "songQuotes.title": "Цитаты из песен",
    "camp.sounds": "Звуки леса",
    "camp.soundsHint": "можно включить несколько",
    "camp.diary": "Дневник лагеря",
    "camp.diaryPlaceholder": "Сегодня под костром…",
    "camp.sound.crickets": "🦗 Сверчки",
    "camp.sound.fire": "🔥 Костёр",
    "camp.sound.rain": "🌧 Дождь",
    "camp.sound.owl": "🦉 Сова",
    "camp.sound.wind": "💨 Ветер",
    "matcher.q1": "Как ты себя чувствуешь прямо сейчас?",
    "matcher.q1.a": "Спокойно и созерцательно",
    "matcher.q1.b": "Тревожно и на грани",
    "matcher.q1.c": "Зло и громко",
    "matcher.q1.d": "Меланхолично и тихо",
    "matcher.q2": "Что хочется услышать?",
    "matcher.q2.a": "Кабаре, духовые, театр",
    "matcher.q2.b": "Гитарный рок и крик",
    "matcher.q2.c": "Тёплую акустику",
    "matcher.q2.d": "Латину, ду-воп и хаос",
    "matcher.q3": "О чём песня?",
    "matcher.q3.a": "О любви и нежности",
    "matcher.q3.b": "О смерти и смысле",
    "matcher.q3.c": "О безумии и зеркалах",
    "matcher.q3.d": "О свободе и хаосе",
    "matcher.q4": "Когда?",
    "matcher.q4.a": "Ранний Will Wood (2015–2018)",
    "matcher.q4.b": "The Normal Album (2020)",
    "matcher.q4.c": "In Case I Make It (2022)",
    "matcher.q4.d": "Camp Here & There (2022)",
    "matcher.result": "Тебе подходит",
    "matcher.again": "Пройти ещё раз",
    "game.score": "Очки",
    "game.reset": "Заново",
    "game.question": "Какая песня зашифрована?",
    "game.correct": "Верно! 🎉",
    "game.wrong": "Не угадал 😔 Правильный ответ: ",
    "game.finishedTitle": "Игра окончена!",
    "game.finishedScore": "Ты угадал",
    "game.playAgain": "Играть ещё раз",
    "game.perfect": "Идеально! 🏆",
    "game.great": "Отлично! 🌟",
    "game.good": "Хорошо! 👏",
    "game.ok": "Неплохо 🙂",
    "game.bad": "Попробуй ещё раз 💪",
    "footer.disclaimer": "Фан-проект. Аудио — только официальные эмбеды Spotify/YouTube. Тексты песен не воспроизводятся.",
    "footer.rights": "Interactive Cabinet",
    "quote.copied": "Цитата скопирована"
  },
  en: {
    "a11y.skip": "Skip to content",
    "a11y.menu": "Open menu",
    "a11y.close": "Close",
    "a11y.top": "Back to top",
    "a11y.reduceMotion": "Reduce motion",
    "theme.label": "Theme",
    "nav.matcher": "Quiz",
    "nav.setlist": "Playlist",
    "nav.poll": "Poll",
    "nav.camp": "Camp",
    "nav.game": "Game",
    "hero.eyebrow": "Interactive Cabinet",
    "hero.subtitle": "Theatrical cabaret-rock, chaotic Latin, doo-wop, klezmer — all in one cabinet.",
    "hero.ctaStart": "Take the quiz",
    "hero.ctaGame": "Play",
    "widget.quoteOfDay": "Quote of the day",
    "widget.moodOfDay": "Mood of the day",
    "widget.randomTrack": "Random track",
    "page.matcher": "Which song fits you?",
    "page.matcherSub": "Answer 4 questions — the cabinet will pick a Will Wood track for you.",
    "page.setlist": "Build a playlist",
    "page.setlistSub": "Click tracks — the cabinet rates the dramaturgy.",
    "page.poll": "Poll",
    "page.camp": "Camp Here & There",
    "page.campSub": "Forest sounds and a camp diary. Fire, crickets, rain, owl, wind — all synthesised right in your browser.",
    "page.game": "Guess the track by emoji",
    "page.gameSub": "8 levels. Guess which song is encoded in the emoji.",
    "btn.more": "More",
    "btn.expand": "▶︎ Expand",
    "btn.collapse": "▾ Collapse",
    "btn.write": "Save",
    "btn.listen": "▶︎ Listen",
    "btn.again": "Again",
    "btn.rollRandom": "🎲 Roll the dice",
    "btn.reset": "Clear",
    "btn.play": "▶ Play",
    "setlist.title": "Your playlist",
    "setlist.pool": "Track pool",
    "setlist.hint": "click to add",
    "setlist.empty": "Click a track to add it to your playlist.",
    "setlist.score": "Playlist dramaturgy",
    "setlist.avgMood": "Average intensity",
    "setlist.spread": "spread",
    "poll.title": "Favourite album",
    "songQuotes.title": "Song quotes",
    "camp.sounds": "Forest sounds",
    "camp.soundsHint": "you can enable several",
    "camp.diary": "Camp diary",
    "camp.diaryPlaceholder": "Tonight by the fire…",
    "camp.sound.crickets": "🦗 Crickets",
    "camp.sound.fire": "🔥 Fire",
    "camp.sound.rain": "🌧 Rain",
    "camp.sound.owl": "🦉 Owl",
    "camp.sound.wind": "💨 Wind",
    "matcher.q1": "How do you feel right now?",
    "matcher.q1.a": "Calm and contemplative",
    "matcher.q1.b": "Anxious and on edge",
    "matcher.q1.c": "Angry and loud",
    "matcher.q1.d": "Melancholic and quiet",
    "matcher.q2": "What do you want to hear?",
    "matcher.q2.a": "Cabaret, brass, theatre",
    "matcher.q2.b": "Guitar rock and screaming",
    "matcher.q2.c": "Warm acoustic",
    "matcher.q2.d": "Latin, doo-wop and chaos",
    "matcher.q3": "What is the song about?",
    "matcher.q3.a": "Love and tenderness",
    "matcher.q3.b": "Death and meaning",
    "matcher.q3.c": "Madness and mirrors",
    "matcher.q3.d": "Freedom and chaos",
    "matcher.q4": "When?",
    "matcher.q4.a": "Early Will Wood (2015–2018)",
    "matcher.q4.b": "The Normal Album (2020)",
    "matcher.q4.c": "In Case I Make It (2022)",
    "matcher.q4.d": "Camp Here & There (2022)",
    "matcher.result": "Your track is",
    "matcher.again": "Try again",
    "game.score": "Score",
    "game.reset": "Restart",
    "game.question": "Which song is encoded?",
    "game.correct": "Correct! 🎉",
    "game.wrong": "Wrong 😔 Correct answer: ",
    "game.finishedTitle": "Game over!",
    "game.finishedScore": "You guessed",
    "game.playAgain": "Play again",
    "game.perfect": "Perfect! 🏆",
    "game.great": "Great! 🌟",
    "game.good": "Good! 👏",
    "game.ok": "Not bad 🙂",
    "game.bad": "Try again 💪",
    "footer.disclaimer": "Fan project. Audio — official Spotify/YouTube embeds only. No lyrics reproduced.",
    "footer.rights": "Interactive Cabinet",
    "quote.copied": "Quote copied"
  }
};

function t(key) { return (I18N[state.lang] && I18N[state.lang][key]) || I18N.ru[key] || key; }
function L(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[state.lang] || obj.ru || obj.en || "";
}

/* ---------------- DATA ---------------- */

const ALBUMS = [
  { id: "everything-is-a-lot", title: "Everything is a Lot", artist: "Will Wood and the Tapeworms", year: 2015,
    tracks: [
      { id: "6up-5oh-copout", title: "6up 5oh Cop-Out (Pro/Con)", dur: "3:42", mood: 40, youtube: "w63orOykrsU" },
      { id: "skeleton-appreciation-day", title: "Skeleton Appreciation Day", dur: "3:12", mood: 55, youtube: "5PLN9xzmUSU" },
      { id: "front-street", title: "Front Street", dur: "3:28", mood: 65, youtube: "1esJFm4X8IQ" },
      { id: "aikido", title: "¡Aikido! (Neurotic / Erotic)", dur: "4:05", mood: 75, youtube: "WTBcm2ZhjuY" },
      { id: "white-knuckle-jerk", title: "White Knuckle Jerk", dur: "3:50", mood: 80, youtube: "lUrUTIIrOBo" },
      { id: "cover-this-song", title: "(Cover This Song) A Little Bit Mine", dur: "4:10", mood: 45, youtube: "CMgkgZRy9N8" },
      { id: "thermodynamic-lawyer", title: "Thermodynamic Lawyer, Esq.", dur: "3:33", mood: 60, youtube: "PEUJBNDJbq4" },
      { id: "red-moon", title: "Red Moon", dur: "3:18", mood: 50, youtube: "iOAj4pXWUX0" },
      { id: "lysergide-daydream", title: "Lysergide Daydream", dur: "4:01", mood: 55, youtube: "KndD5SQxFy4" },
      { id: "the-first-step", title: "The First Step", dur: "3:23", mood: 35, youtube: "anQpiHHij-k" },
      { id: "jimmy-mushrooms", title: "Jimmy Mushrooms' Last Drink", dur: "3:55", mood: 70, youtube: "2C7joP3MikE" },
      { id: "chemical-overreaction", title: "Chemical Overreaction", dur: "4:40", mood: 85, youtube: "Zl6d35_1FXY" }
    ]
  },
  { id: "self-ish", title: "Self-Ish", artist: "Will Wood and the Tapeworms", year: 2018,
    tracks: [
      { id: "self", title: "Self-", dur: "2:35", mood: 50, youtube: "pXWGzusJsOo" },
      { id: "2012", title: "2012", dur: "4:04", mood: 75, youtube: "B9wePPxOkLI" },
      { id: "cotards-solution", title: "Cotard's Solution", dur: "5:06", mood: 90, youtube: "Qt5DzjzyEJo" },
      { id: "mr-capgras", title: "Mr. Capgras Encounters a Secondhand Vanity", dur: "4:12", mood: 80, youtube: "3Dd3dl7W8rM" },
      { id: "song-with-five-names", title: "The Song With Five Names", dur: "4:30", mood: 65, youtube: "lst1NGKHQHk" },
      { id: "hand-me-my-shovel", title: "Hand Me My Shovel, I'm Going In!", dur: "5:12", mood: 85, youtube: "AvYfjmM7ww" },
      { id: "dr-sunshine-is-dead", title: "Dr. Sunshine Is Dead", dur: "4:46", mood: 88, youtube: "isZbEoAzvLg" },
      { id: "-ish", title: "-Ish", dur: "2:15", mood: 40, youtube: "J4LszXxnhM0" }
    ]
  },
  { id: "the-normal-album", title: "The Normal Album", artist: "Will Wood", year: 2020,
    tracks: [
      { id: "suburbia-overture", title: "Suburbia Overture", dur: "6:12", mood: 60, youtube: "ui2kW-OvtkA" },
      { id: "2econd-2ight-2eer", title: "2econd 2ight 2eer", dur: "3:28", mood: 75, youtube: "UixvDKIhDU8" },
      { id: "laplaces-angel", title: "Laplace's Angel", dur: "3:45", mood: 55, youtube: "g4UGCaLg2SY" },
      { id: "i-me-myself", title: "I / Me / Myself", dur: "3:55", mood: 50, youtube: "SgnSMftcFN0" },
      { id: "well-better-than-the-alternative", title: "…Well, Better Than the Alternative", dur: "3:30", mood: 45, youtube: "86nwbt0BxbM" },
      { id: "outliars-and-hyppocrates", title: "Outliars and Hyppocrates", dur: "3:22", mood: 65, youtube: "DvueppU31fM" },
      { id: "black-box-warrior", title: "Black Box Warrior - OKULTRA", dur: "4:08", mood: 78, youtube: "zbUgoqu-tb4" },
      { id: "marsha-thankk-you", title: "Marsha, Thankk You for the Dialects", dur: "3:40", mood: 60, youtube: "nyIKBT7-a9M" },
      { id: "love-me-normally", title: "Love, Me Normally", dur: "4:44", mood: 40, youtube: "IgBL4SS9uRo" },
      { id: "memento-mori", title: "Memento Mori", dur: "5:10", mood: 35, youtube: "MX9LreOigJ8" }
    ]
  },
  { id: "in-case-i-make-it", title: "In Case I Make It", artist: "Will Wood", year: 2022,
    tracks: [
      { id: "tomcat-disposables", title: "Tomcat Disposables", dur: "5:58", mood: 30, youtube: "zIIUejDC6xE" },
      { id: "becoming-the-lastnames", title: "Becoming the Lastnames", dur: "7:41", mood: 25, youtube: "AoIhaAL3EQI" },
      { id: "cicada-days", title: "Cicada Days", dur: "4:10", mood: 30, youtube: "owJD0Iimnes" },
      { id: "euthanasia", title: "Euthanasia", dur: "4:37", mood: 20, youtube: "4G0SHlkJhlA" },
      { id: "falling-up", title: "Falling Up", dur: "4:47", mood: 45, youtube: "-7tQds-Th9s" },
      { id: "thats-enough", title: "That's Enough, Let's Get You Home", dur: "3:53", mood: 35, youtube: "iVK8jzLLuDg" },
      { id: "um-i-mean-its-kind-of-a-lot", title: "Um, I Mean, It's Kind of a Lot", dur: "5:21", mood: 40, youtube: "idvMKvnz5Mk" },
      { id: "half-decade-hangover", title: "Half-Decade Hangover", dur: "4:50", mood: 55, youtube: "WeVWxx0-sik" },
      { id: "vampire-reference", title: "Vampire Reference in a Minor Key", dur: "4:38", mood: 45, youtube: "VutE_9wpd-c" },
      { id: "you-liked-this", title: "You Liked This (Okay, Computer!)", dur: "3:15", mood: 50, youtube: "H0lm5WN848s" },
      { id: "the-main-character", title: "The Main Character", dur: "4:25", mood: 42, youtube: "RkHMKUhsBtU" },
      { id: "against-the-kitchen-floor", title: "Against the Kitchen Floor", dur: "4:20", mood: 45, youtube: "xIoXE4q-Jes" }
    ]
  },
  { id: "camp-here-and-there", title: "Camp Here & There", artist: "Will Wood", year: 2022,
    tracks: [
      { id: "welcome-to-camp", title: "Welcome to Camp Here & There", dur: "0:48", mood: 20, youtube: "8QpGqWuqBwE" },
      { id: "morning-announcements", title: "Morning Announcements", dur: "0:20", mood: 15, youtube: "_s9kdivGAlg" },
      { id: "venetian-blind-man", title: "Venetian Blind Man (Song)", dur: "4:04", mood: 45, youtube: "UxSVJ0ldp44" },
      { id: "good-morning-campers", title: "Good Morning, Campers!", dur: "2:15", mood: 30, youtube: "-PrGVh6ViyI" },
      { id: "rumba-of-death", title: "The Rumba of Death", dur: "3:36", mood: 60, youtube: "m6uYWtnDxnY" },
      { id: "yes-to-err", title: "Yes, to Err is Human", dur: "2:45", mood: 40, youtube: "iwv2MJLPyDo" },
      { id: "under-a-technicolor-sky", title: "Under a Technicolor Sky", dur: "3:41", mood: 35, youtube: "jntkjltAxT4" },
      { id: "afternoon-announcements", title: "Afternoon Announcements", dur: "0:25", mood: 15, youtube: "2tm5fw_C_Rc" },
      { id: "your-body-my-temple", title: "Your Body, My Temple", dur: "4:18", mood: 55, youtube: "PzWe6hYtXdQ" }
    ]
  }
];

const TRACKS = [];
ALBUMS.forEach(function (a) {
  a.tracks.forEach(function (tr) {
    TRACKS.push(Object.assign({}, tr, { albumId: a.id, albumTitle: a.title, albumYear: a.year }));
  });
});

const QUOTES = [
  { ru: "Театр начинается там, где заканчивается удобство.", en: "Theatre begins where comfort ends." },
  { ru: "Я не пишу хиты — я пишу маленькие спектакли на три минуты.", en: "I don't write hits — I write tiny three-minute plays." },
  { ru: "Если песня не пугает автора — она не готова.", en: "If a song doesn't scare its author, it isn't finished." },
  { ru: "Кабаре — это когда честно и с блёстками.", en: "Cabaret is when it's honest — and glittery." },
  { ru: "Однажды я решил, что тишина — тоже жанр.", en: "Once I decided silence is a genre too." }
];

const SONG_QUOTES = [
  { text: { ru: "Думаешь, идеи распространяются, потому что они хороши? Нет — потому что людям они нравятся.", en: "What, you think ideas spread because they're good? No, they spread because people like them." },
    song: "BlackBoxWarrior", album: "The Normal Album", trackId: "black-box-warrior" },
  { text: { ru: "Нормальному человеку не нужно притворяться нормальным, чтобы быть нормальным.", en: "'Cause a normal human being wouldn't need to pretend to be normal, to be normal." },
    song: "Love, Me Normally", album: "The Normal Album", trackId: "love-me-normally" },
  { text: { ru: "Визжи, как колесо троллейбуса, плачь, как ребёнок с аутизмом, привязанным к потолочному вентилятору.", en: "So squeal like a trolley wheel, cry like a baby with autism strapped to a ceiling fan." },
    song: "Thermodynamic Lawyer, Esq.", album: "Everything is a Lot", trackId: "thermodynamic-lawyer" },
  { text: { ru: "Плохие вещи случаются с хорошими людьми. Хорошие — со мной.", en: "Bad things happen to good people. Good things happen to me." },
    song: "Chemical Overreaction", album: "Everything is a Lot", trackId: "chemical-overreaction" },
  { text: { ru: "Не боюсь умереть — боюсь того, что может случиться раньше.", en: "But I'll tell you what, I'm not afraid to die. I'm more afraid of what might happen first." },
    song: "Jimmy Mushrooms' Last Drink", album: "Everything is a Lot", trackId: "jimmy-mushrooms" },
  { text: { ru: "Я бы забыл их имена — зачем тебе помнить меня?", en: "I'd have forgotten all their names, so why should you remember me?" },
    song: "Becoming the Lastnames", album: "In Case I Make It", trackId: "becoming-the-lastnames" },
  { text: { ru: "Тот случай, когда даже компания меня не лечит, и чем больше ты успокаиваешь, тем меньше я верю.", en: "That morbid sort where even company can't cure me, and the more you reassure, the less I trust." },
    song: "Against the Kitchen Floor", album: "In Case I Make It", trackId: "against-the-kitchen-floor" },
  { text: { ru: "О, я так сильно тебя люблю, что это пугает меня до полусмерти. Другую половину, наверное, отдаю тебе.", en: "Oh, I love you so much it scares me half to death. The other half, I guess I'm giving to you." },
    song: "Um, I Mean, It's Kind of a Lot", album: "In Case I Make It", trackId: "um-i-mean-its-kind-of-a-lot" },
  { text: { ru: "И я написал книгу о том, чтобы швырнуть книгой в тех, кто не следует ей.", en: "And I wrote the book about throwing the book at those who don't do it by it." },
    song: "The Main Character", album: "In Case I Make It", trackId: "the-main-character" },
  { text: { ru: "Ты не твои мысли, ты не твой мозг — ты просто персонаж, которого ты создал.", en: "You're not your thoughts, you're not your brain, you're just the character you've made." },
    song: "Marsha, Thankk You for the Dialects", album: "The Normal Album", trackId: "marsha-thankk-you" },
  { text: { ru: "И если сны сбываются — что это говорит о кошмарах? Я останусь сегодня без сна.", en: "And if dreams can come true, what does that say about nightmares? I'll stay awake tonight." },
    song: "Dr. Sunshine Is Dead", album: "Self-Ish", trackId: "dr-sunshine-is-dead" },
  { text: { ru: "Смотрю вверх — можно сказать, что небо послало меня. Дайте мне лопату, я иду внутрь.", en: "Looking up I could say Heaven sent me. Hand me my shovel, I'm going in." },
    song: "Hand Me My Shovel, I'm Going In!", album: "Self-Ish", trackId: "hand-me-my-shovel" }
];

const FAN_POLL = ["The Normal Album", "Self-Ish", "In Case I Make It", "Camp Here & There"];

/* ---------------- GAME DATA ---------------- */

const GAME_LEVELS = [
  { emoji: "🌙🔴", answer: "red-moon", options: ["red-moon", "cotards-solution", "front-street", "2012"] },
  { emoji: "☀️💀", answer: "dr-sunshine-is-dead", options: ["memento-mori", "dr-sunshine-is-dead", "chemical-overreaction", "self"] },
  { emoji: "💀⏳", answer: "memento-mori", options: ["-ish", "memento-mori", "skeleton-appreciation-day", "front-street"] },
  { emoji: "🏕️🔥🌲", answer: "welcome-to-camp", options: ["under-a-technicolor-sky", "welcome-to-camp", "good-morning-campers", "your-body-my-temple"] },
  { emoji: "🏠🛏️💔", answer: "against-the-kitchen-floor", options: ["against-the-kitchen-floor", "i-me-myself", "thats-enough", "euthanasia"] },
  { emoji: "🧠🧟", answer: "cotards-solution", options: ["mr-capgras", "cotards-solution", "hand-me-my-shovel", "2012"] },
  { emoji: "💀🎩", answer: "skeleton-appreciation-day", options: ["skeleton-appreciation-day", "hand-me-my-shovel", "memento-mori", "white-knuckle-jerk"] },
  { emoji: "🎪🎭", answer: "suburbia-overture", options: ["suburbia-overture", "venetian-blind-man", "laplaces-angel", "rumba-of-death"] }
];

/* ---------------- MATCHER DATA ---------------- */

const MATCHER_QUESTIONS = [
  { q: "matcher.q1", options: [{ key: "a", tag: "calm" }, { key: "b", tag: "anxious" }, { key: "c", tag: "angry" }, { key: "d", tag: "melancholic" }] },
  { q: "matcher.q2", options: [{ key: "a", tag: "cabaret" }, { key: "b", tag: "rock" }, { key: "c", tag: "acoustic" }, { key: "d", tag: "latin" }] },
  { q: "matcher.q3", options: [{ key: "a", tag: "love" }, { key: "b", tag: "death" }, { key: "c", tag: "madness" }, { key: "d", tag: "freedom" }] },
  { q: "matcher.q4", options: [{ key: "a", tag: "early" }, { key: "b", tag: "normal" }, { key: "c", tag: "incase" }, { key: "d", tag: "camp" }] }
];

const MATCHER_MAP = {
  "calm+acoustic+love+incase": "euthanasia",
  "calm+acoustic+love+early": "the-first-step",
  "calm+cabaret+love+normal": "love-me-normally",
  "calm+cabaret+death+incase": "memento-mori",
  "calm+acoustic+death+camp": "under-a-technicolor-sky",
  "calm+acoustic+death+incase": "becoming-the-lastnames",
  "anxious+rock+madness+early": "chemical-overreaction",
  "anxious+rock+madness+normal": "black-box-warrior",
  "anxious+rock+death+normal": "outliars-and-hyppocrates",
  "anxious+latin+freedom+early": "aikido",
  "anxious+cabaret+madness+normal": "2econd-2ight-2eer",
  "angry+rock+madness+normal": "cotards-solution",
  "angry+rock+freedom+normal": "hand-me-my-shovel",
  "angry+latin+love+normal": "mr-capgras",
  "angry+rock+madness+early": "white-knuckle-jerk",
  "angry+rock+death+normal": "dr-sunshine-is-dead",
  "melancholic+acoustic+love+incase": "tomcat-disposables",
  "melancholic+acoustic+death+incase": "cicada-days",
  "melancholic+cabaret+love+normal": "i-me-myself",
  "melancholic+acoustic+death+camp": "good-morning-campers",
  "melancholic+cabaret+death+camp": "venetian-blind-man",
  "melancholic+cabaret+freedom+normal": "memento-mori",
  "cabaret+cabaret+madness+early": "skeleton-appreciation-day",
  "latin+latin+freedom+early": "front-street",
  "acoustic+acoustic+love+camp": "your-body-my-temple"
};

/* ---------------- STATE ---------------- */

const store = {
  get: function (key, fallback) {
    try { const v = localStorage.getItem("ww:" + key); return v ? JSON.parse(v) : fallback; }
    catch (e) { return fallback; }
  },
  set: function (key, value) {
    try { localStorage.setItem("ww:" + key, JSON.stringify(value)); } catch (e) {}
  }
};

const state = {
  lang: store.get("lang", "ru"),
  theme: store.get("theme", "normal"),
  reducedMotion: store.get("reducedMotion", false),
  setlist: store.get("setlist", []),
  votes: store.get("votes", {}),
  diary: store.get("diary", []),
  matcherStep: 0,
  matcherAnswers: [],
  gameStep: 0,
  gameScore: 0,
  gameLocked: false
};

let currentTrack = null;
let songQuoteIndex = 0;

/* ---------------- HELPERS ---------------- */

function $(sel, root) { return (root || document).querySelector(sel); }
function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

function el(tag, attrs) {
  const node = document.createElement(tag);
  attrs = attrs || {};
  Object.keys(attrs).forEach(function (k) {
    const v = attrs[k];
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.indexOf("on") === 0 && typeof v === "function") node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v !== false && v != null) node.setAttribute(k, v);
  });
  const children = Array.prototype.slice.call(arguments, 2);
  children.forEach(function (c) {
    if (Array.isArray(c)) {
      c.forEach(function (cc) { if (cc != null) node.append(cc.nodeType ? cc : document.createTextNode(cc)); });
    } else if (c != null) {
      node.append(c.nodeType ? c : document.createTextNode(c));
    }
  });
  return node;
}

function seededRandom(seed) { const x = Math.sin(seed) * 10000; return x - Math.floor(x); }
function todaySeed() {
  const d = new Date();
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
}

function findTrack(id) { return TRACKS.find(function (x) { return x.id === id; }); }

/* ---------------- i18n ---------------- */

function updateStaticUI() {
  document.documentElement.lang = state.lang;
  $$("[data-i18n]").forEach(function (node) { node.textContent = t(node.dataset.i18n); });
  $$("[data-i18n-placeholder]").forEach(function (node) { node.placeholder = t(node.dataset.i18nPlaceholder); });
  $$("[data-i18n-aria-label]").forEach(function (node) { node.setAttribute("aria-label", t(node.dataset.i18nAriaLabel)); });
  $$("[data-i18n-title]").forEach(function (node) { node.title = t(node.dataset.i18nTitle); });
  const langBtn = $("#lang-switch");
  if (langBtn) langBtn.textContent = state.lang === "ru" ? "EN" : "RU";
}

function applyLang(lang) {
  state.lang = lang;
  store.set("lang", lang);
  updateStaticUI();
  renderQuoteOfDay();
  renderMoodOfDay();
  renderRandomTrack();
  renderMatcher();
  renderSetlist();
  renderTrackPool();
  renderPoll();
  renderSongQuotes();
  renderCampSounds();
  renderDiary();
  renderGame();
}

/* ---------------- THEME / MOTION ---------------- */

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  const switcher = $("#theme-switcher");
  if (switcher) switcher.value = theme;
  store.set("theme", theme);
}

function applyReducedMotion(flag) {
  state.reducedMotion = flag;
  document.body.classList.toggle("reduce-motion", flag);
  const btn = $("#reduce-motion");
  if (btn) btn.setAttribute("aria-pressed", String(flag));
  store.set("reducedMotion", flag);
}

/* ---------------- QUOTE OF DAY ---------------- */

function renderQuoteOfDay() {
  const wrap = $("#quote-of-day");
  if (!wrap) return;
  wrap.innerHTML = "";
  const idx = Math.floor(seededRandom(todaySeed()) * QUOTES.length);
  wrap.append(
    el("blockquote", {}, "«" + L(QUOTES[idx]) + "»"),
    el("time", {}, new Date().toLocaleDateString(state.lang === "ru" ? "ru-RU" : "en-US", {
      weekday: "long", day: "numeric", month: "long"
    }))
  );
}

/* ---------------- MOOD OF DAY ---------------- */

const MOODS = [
  { ru: "Спокойствие", en: "Calm", min: 15, max: 35 },
  { ru: "Меланхолия", en: "Melancholy", min: 30, max: 45 },
  { ru: "Ностальгия", en: "Nostalgia", min: 40, max: 55 },
  { ru: "Тревога", en: "Anxiety", min: 50, max: 70 },
  { ru: "Азарт", en: "Thrill", min: 60, max: 80 },
  { ru: "Ярость", en: "Rage", min: 75, max: 95 }
];

function renderMoodOfDay() {
  const wrap = $("#mood-of-day");
  if (!wrap) return;
  wrap.innerHTML = "";
  const val = Math.round(seededRandom(todaySeed() * 3) * 80) + 15;
  let mood = MOODS[3];
  for (let i = 0; i < MOODS.length; i++) {
    if (val >= MOODS[i].min && val <= MOODS[i].max) { mood = MOODS[i]; break; }
  }
  wrap.append(
    el("div", { class: "mood-of-day__label" }, L(mood)),
    el("div", { class: "mood-of-day__bar" },
      el("div", { class: "mood-of-day__fill", style: "width:" + val + "%" })
    ),
    el("div", { class: "muted", style: "font-size:11px;" }, val + "/100")
  );
}

/* ---------------- RANDOM TRACK ---------------- */

function renderRandomTrack() {
  const wrap = $("#random-track");
  if (!wrap) return;
  wrap.innerHTML = "";
  const result = el("div", { class: "random-track__result muted" }, "🎲");
  const btn = el("button", {
    class: "random-track__btn", type: "button",
    onclick: function () {
      const tr = TRACKS[Math.floor(Math.random() * TRACKS.length)];
      result.innerHTML = "";
      result.append(
        el("strong", {}, tr.title),
        el("span", { class: "muted", style: "display:block;font-size:11px;margin-top:2px;" }, tr.albumTitle)
      );
      result.style.cursor = "pointer";
      result.onclick = function () { openPlayer(tr); };
    }
  }, t("btn.rollRandom"));
  wrap.append(btn, result);
}

/* ---------------- MATCHER ---------------- */

function renderMatcher() {
  const wrap = $("#matcher-box");
  if (!wrap) return;
  wrap.innerHTML = "";
  const step = state.matcherStep;

  if (step >= MATCHER_QUESTIONS.length) {
    const key = state.matcherAnswers.join("+");
    let trackId = MATCHER_MAP[key];
    if (!trackId) trackId = TRACKS[Math.floor(Math.random() * TRACKS.length)].id;
    let tr = findTrack(trackId);
    if (!tr) tr = TRACKS[0];

    wrap.append(
      el("div", { class: "matcher__result" },
        el("div", { class: "matcher__result-label" }, t("matcher.result")),
        el("div", { class: "matcher__result-title" }, tr.title),
        el("div", { class: "matcher__result-album" }, tr.albumTitle + " · " + tr.albumYear),
        el("div", { class: "matcher__actions" },
          el("button", { class: "btn btn--primary", type: "button", onclick: function () { openPlayer(tr); } }, t("btn.listen")),
          el("button", {
            class: "btn btn--ghost", type: "button",
            onclick: function () { state.matcherStep = 0; state.matcherAnswers = []; renderMatcher(); }
          }, t("matcher.again"))
        )
      )
    );
    return;
  }

  const q = MATCHER_QUESTIONS[step];
  wrap.append(
    el("div", { class: "matcher__progress" },
      el("div", { class: "matcher__progress-bar", style: "width:" + ((step / MATCHER_QUESTIONS.length) * 100) + "%" })
    ),
    el("h3", { class: "matcher__q" }, t(q.q)),
    el("div", { class: "matcher__options" },
      q.options.map(function (o) {
        return el("button", {
          class: "matcher__opt", type: "button",
          onclick: function () {
            state.matcherAnswers.push(o.tag);
            state.matcherStep += 1;
            renderMatcher();
          }
        }, t(q.q + "." + o.key));
      })
    )
  );
}

/* ---------------- SETLIST ---------------- */

function renderSetlist() {
  const box = $("#setlist-box");
  if (!box) return;
  box.innerHTML = "";
  state.setlist.forEach(function (id, i) {
    const tr = findTrack(id);
    if (!tr) return;
    box.append(
      el("div", {
        class: "setlist__item", "data-id": id,
        onclick: function (e) {
          if (e.target.tagName === "BUTTON") return;
          openPlayer(tr);
        }
      },
        el("span", { class: "muted" }, String(i + 1).padStart(2, "0")),
        el("span", {}, tr.title),
        el("button", {
          type: "button",
          onclick: function (e) {
            e.stopPropagation();
            state.setlist.splice(i, 1);
            store.set("setlist", state.setlist);
            renderSetlist();
          },
          "aria-label": "Удалить"
        }, "✕")
      )
    );
  });
  renderSetlistScore();
}

function renderSetlistScore() {
  const score = $("#setlist-score");
  if (!score) return;
  if (!state.setlist.length) { score.textContent = t("setlist.empty"); return; }
  const moods = state.setlist.map(function (id) {
    const tr = findTrack(id);
    return tr ? tr.mood : 50;
  });
  const avg = moods.reduce(function (a, b) { return a + b; }, 0) / moods.length;
  const variance = moods.reduce(function (a, b) { return a + (b - avg) * (b - avg); }, 0) / moods.length;
  const drama = Math.min(100, Math.round(avg * 0.6 + Math.sqrt(variance) * 1.4));
  score.innerHTML = "<strong>" + t("setlist.score") + ": " + drama + "/100</strong><br>" +
    "<span class=\"muted\">" + t("setlist.avgMood") + " " + Math.round(avg) +
    ", " + t("setlist.spread") + " " + Math.round(Math.sqrt(variance)) + ".</span>";
}

function renderTrackPool() {
  const pool = $("#track-pool");
  if (!pool) return;
  pool.innerHTML = "";
  TRACKS.forEach(function (tr) {
    pool.append(
      el("button", {
        class: "chip", type: "button",
        onclick: function () {
          state.setlist.push(tr.id);
          store.set("setlist", state.setlist);
          renderSetlist();
        }
      }, tr.title + " · " + tr.albumTitle)
    );
  });
}

/* ---------------- POLL ---------------- */

function renderPoll() {
  const wrap = $("#poll-box");
  if (!wrap) return;
  wrap.innerHTML = "";
  let total = 0;
  Object.keys(state.votes).forEach(function (k) { total += state.votes[k]; });
  if (total === 0) total = 1;
  FAN_POLL.forEach(function (opt) {
    const v = state.votes[opt] || 0;
    const pct = Math.round((v / total) * 100);
    wrap.append(
      el("div", { style: "margin-bottom:10px" },
        el("button", {
          class: "chip", type: "button", style: "width:100%;text-align:left",
          onclick: function () {
            state.votes[opt] = (state.votes[opt] || 0) + 1;
            store.set("votes", state.votes);
            renderPoll();
          }
        }, opt + " — " + pct + "% (" + v + ")"),
        el("div", { class: "genre-bar__track", style: "margin-top:4px" },
          el("div", { class: "genre-bar__fill", style: "width:" + pct + "%" })
        )
      )
    );
  });
}

/* ---------------- SONG QUOTES ---------------- */

function renderSongQuotes() {
  const wrap = $("#song-quotes");
  if (!wrap) return;
  wrap.innerHTML = "";
  for (let i = 0; i < 3; i++) {
    const q = SONG_QUOTES[(songQuoteIndex + i) % SONG_QUOTES.length];
    const tr = findTrack(q.trackId);
    wrap.append(
      el("div", { class: "song-quote" },
        el("p", { class: "song-quote__text" }, "«" + L(q.text) + "»"),
        el("div", { class: "song-quote__meta" },
          el("span", { class: "song-quote__song" }, q.song),
          el("span", { class: "song-quote__album" }, "· " + q.album),
          tr ? el("button", {
            class: "chip", type: "button",
            style: "margin-left:auto;font-size:11px;padding:4px 10px;min-height:32px;",
            onclick: function () { openPlayer(tr); }
          }, t("btn.play")) : null
        )
      )
    );
  }
}

function nextSongQuote() {
  songQuoteIndex = (songQuoteIndex + 1) % SONG_QUOTES.length;
  renderSongQuotes();
}

/* ============================================================
   CAMP SOUNDS — Web Audio API
   ============================================================ */

const campSoundsState = { ctx: null, active: {}, nodes: {} };

function getAudioCtx() {
  if (!campSoundsState.ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    campSoundsState.ctx = new AC();
  }
  if (campSoundsState.ctx.state === "suspended") campSoundsState.ctx.resume();
  return campSoundsState.ctx;
}

function createNoiseBuffer(ctx, seconds) {
  const bufferSize = ctx.sampleRate * (seconds || 2);
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function startCrickets(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  const nodes = [];
  [{ freq: 4200, period: 0.28, dur: 0.035 }, { freq: 4600, period: 0.34, dur: 0.03 },
   { freq: 3900, period: 0.42, dur: 0.04 }, { freq: 5100, period: 0.55, dur: 0.025 }].forEach(function (c) {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "triangle"; osc.frequency.value = c.freq; g.gain.value = 0;
    osc.connect(g).connect(master); osc.start();
    nodes.push({ osc: osc, gain: g, cfg: c });
  });
  let running = true;
  const startTime = ctx.currentTime;
  function schedule() {
    if (!running) return;
    const now = ctx.currentTime;
    nodes.forEach(function (n) {
      const phase = ((now - startTime) % n.cfg.period) / n.cfg.period;
      n.gain.gain.setTargetAtTime(phase < (n.cfg.dur / n.cfg.period) ? 0.08 : 0, now, 0.005);
    });
    requestAnimationFrame(schedule);
  }
  schedule();
  master.gain.setTargetAtTime(0.35, ctx.currentTime, 0.3);
  return { stop: function () {
    running = false;
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
    setTimeout(function () {
      nodes.forEach(function (n) { try { n.osc.stop(); } catch (e) {} });
      try { master.disconnect(); } catch (e) {}
    }, 500);
  }};
}

function startFire(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 2); noise.loop = true;
  const nf = ctx.createBiquadFilter();
  nf.type = "lowpass"; nf.frequency.value = 800; nf.Q.value = 0.7;
  const ng = ctx.createGain(); ng.gain.value = 0.25;
  noise.connect(nf).connect(ng).connect(master); noise.start();
  let running = true;
  function crackle() {
    if (!running) return;
    const src = ctx.createBufferSource();
    src.buffer = createNoiseBuffer(ctx, 0.05);
    const f = ctx.createBiquadFilter();
    f.type = "bandpass"; f.frequency.value = 1200 + Math.random() * 2500; f.Q.value = 2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.4, ctx.currentTime + 0.005);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
    src.connect(f).connect(g).connect(master);
    src.start(); src.stop(ctx.currentTime + 0.1);
    setTimeout(crackle, 80 + Math.random() * 600);
  }
  crackle();
  master.gain.setTargetAtTime(0.5, ctx.currentTime, 0.4);
  return { stop: function () {
    running = false;
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    setTimeout(function () { try { noise.stop(); } catch (e) {} try { master.disconnect(); } catch (e) {} }, 600);
  }};
}

function startRain(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 3); noise.loop = true;
  const hp = ctx.createBiquadFilter(); hp.type = "highpass"; hp.frequency.value = 400;
  const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 8000;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 0.15;
  const lg = ctx.createGain(); lg.gain.value = 0.08;
  const mg = ctx.createGain(); mg.gain.value = 0.22;
  lfo.connect(lg).connect(mg.gain); lfo.start();
  noise.connect(hp).connect(lp).connect(mg).connect(master); noise.start();
  master.gain.setTargetAtTime(0.5, ctx.currentTime, 0.4);
  return { stop: function () {
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.3);
    setTimeout(function () {
      try { noise.stop(); } catch (e) {}
      try { lfo.stop(); } catch (e) {}
      try { master.disconnect(); } catch (e) {}
    }, 600);
  }};
}

function startOwl(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  let running = true;
  function hoot() {
    if (!running) return;
    const now = ctx.currentTime;
    const o = ctx.createOscillator(); o.type = "sine";
    o.frequency.setValueAtTime(280, now);
    o.frequency.linearRampToValueAtTime(320, now + 0.15);
    o.frequency.linearRampToValueAtTime(260, now + 0.5);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.35, now + 0.1);
    g.gain.linearRampToValueAtTime(0.25, now + 0.35);
    g.gain.linearRampToValueAtTime(0, now + 0.6);
    o.connect(g).connect(master); o.start(now); o.stop(now + 0.7);
    setTimeout(function () {
      if (!running) return;
      const n2 = ctx.currentTime;
      const o2 = ctx.createOscillator(); o2.type = "sine";
      o2.frequency.setValueAtTime(300, n2);
      o2.frequency.linearRampToValueAtTime(270, n2 + 0.4);
      const g2 = ctx.createGain();
      g2.gain.setValueAtTime(0, n2);
      g2.gain.linearRampToValueAtTime(0.32, n2 + 0.08);
      g2.gain.linearRampToValueAtTime(0, n2 + 0.5);
      o2.connect(g2).connect(master); o2.start(n2); o2.stop(n2 + 0.6);
    }, 750);
    setTimeout(hoot, 5000 + Math.random() * 7000);
  }
  setTimeout(hoot, 1500);
  master.gain.setTargetAtTime(0.6, ctx.currentTime, 0.4);
  return { stop: function () {
    running = false;
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.2);
    setTimeout(function () { try { master.disconnect(); } catch (e) {} }, 400);
  }};
}

function startWind(ctx) {
  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);
  const noise = ctx.createBufferSource();
  noise.buffer = createNoiseBuffer(ctx, 4); noise.loop = true;
  const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 600; lp.Q.value = 1.2;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 0.08;
  const lg = ctx.createGain(); lg.gain.value = 300;
  lfo.connect(lg).connect(lp.frequency); lfo.start();
  const ampLfo = ctx.createOscillator(); ampLfo.frequency.value = 0.12;
  const ag = ctx.createGain(); ag.gain.value = 0.15;
  const bg = ctx.createGain(); bg.gain.value = 0.2;
  ampLfo.connect(ag).connect(bg.gain); ampLfo.start();
  noise.connect(lp).connect(bg).connect(master); noise.start();
  master.gain.setTargetAtTime(0.55, ctx.currentTime, 0.5);
  return { stop: function () {
    master.gain.setTargetAtTime(0, ctx.currentTime, 0.4);
    setTimeout(function () {
      try { noise.stop(); } catch (e) {}
      try { lfo.stop(); } catch (e) {}
      try { ampLfo.stop(); } catch (e) {}
      try { master.disconnect(); } catch (e) {}
    }, 700);
  }};
}

const CAMP_SOUND_STARTERS = {
  "camp.sound.crickets": startCrickets,
  "camp.sound.fire": startFire,
  "camp.sound.rain": startRain,
  "camp.sound.owl": startOwl,
  "camp.sound.wind": startWind
};

const CAMP_SOUNDS = Object.keys(CAMP_SOUND_STARTERS);

function stopCampSound(key) {
  const handle = campSoundsState.nodes[key];
  if (handle && typeof handle.stop === "function") {
    try { handle.stop(); } catch (e) {}
  }
  delete campSoundsState.nodes[key];
  delete campSoundsState.active[key];
}

function toggleCampSound(key, btn) {
  const isOn = !!campSoundsState.active[key];
  if (isOn) {
    stopCampSound(key);
    btn.setAttribute("aria-pressed", "false");
  } else {
    const ctx = getAudioCtx();
    if (!ctx) { alert("Web Audio API не поддерживается"); return; }
    const starter = CAMP_SOUND_STARTERS[key];
    if (!starter) return;
    campSoundsState.nodes[key] = starter(ctx);
    campSoundsState.active[key] = true;
    btn.setAttribute("aria-pressed", "true");
  }
}

function renderCampSounds() {
  const wrap = $("#camp-sounds");
  if (!wrap) return;
  const previous = Object.assign({}, campSoundsState.active);
  CAMP_SOUNDS.forEach(function (key) { stopCampSound(key); });
  wrap.innerHTML = "";
  CAMP_SOUNDS.forEach(function (key) {
    const btn = el("button", {
      class: "chip", type: "button", "aria-pressed": "false",
      "data-sound": key,
      onclick: function (e) {
        e.preventDefault();
        toggleCampSound(key, e.currentTarget);
      }
    }, t(key));
    wrap.append(btn);
  });
  Object.keys(previous).forEach(function (key) {
    const btn = wrap.querySelector('[data-sound="' + key + '"]');
    if (btn) toggleCampSound(key, btn);
  });
}

function stopAllCampSounds() {
  CAMP_SOUNDS.forEach(function (key) { stopCampSound(key); });
}

function renderDiary() {
  const list = $("#diary-list");
  if (!list) return;
  list.innerHTML = "";
  state.diary.slice().reverse().forEach(function (entry) {
    list.append(
      el("li", {},
        el("time", {}, new Date(entry.ts).toLocaleString(state.lang === "ru" ? "ru-RU" : "en-US")),
        entry.text
      )
    );
  });
}

/* ---------------- GAME ---------------- */

function renderGame() {
  const stage = $("#game-stage");
  if (!stage) return;
  stage.innerHTML = "";

  const total = GAME_LEVELS.length;
  $("#game-total").textContent = String(total);
  $("#game-score").textContent = String(state.gameScore);

  const progress = $("#game-progress");
  if (progress) progress.style.width = ((state.gameStep / total) * 100) + "%";

  if (state.gameStep >= total) {
    const pct = state.gameScore / total;
    let msgKey = "game.bad";
    if (pct >= 1) msgKey = "game.perfect";
    else if (pct >= 0.75) msgKey = "game.great";
    else if (pct >= 0.5) msgKey = "game.good";
    else if (pct >= 0.25) msgKey = "game.ok";

    stage.append(
      el("div", { class: "game__finished" },
        el("div", { class: "game__finished-title" }, t("game.finishedTitle")),
        el("div", { class: "game__finished-score" },
          t("game.finishedScore") + " ",
          el("strong", {}, state.gameScore + " / " + total)
        ),
        el("p", { style: "font-size:16px;margin-bottom:16px;" }, t(msgKey)),
        el("button", { class: "btn btn--primary", type: "button", onclick: resetGame }, t("game.playAgain"))
      )
    );
    if (progress) progress.style.width = "100%";
    return;
  }

  const level = GAME_LEVELS[state.gameStep];
  stage.append(
    el("div", { class: "game__emojis" }, level.emoji),
    el("h3", { class: "game__question" }, t("game.question")),
    el("div", { class: "game__options" },
      level.options.map(function (id) {
        const tr = findTrack(id);
        const label = tr ? tr.title : id;
        return el("button", {
          class: "game__opt", type: "button", "data-id": id,
          onclick: function (e) { onGameAnswer(id, level.answer, e.currentTarget); }
        }, label);
      })
    )
  );
}

function onGameAnswer(selected, correct, btn) {
  if (state.gameLocked) return;
  state.gameLocked = true;
  const allBtns = $$(".game__opt");
  allBtns.forEach(function (b) { b.disabled = true; });

  const isCorrect = selected === correct;
  if (isCorrect) { btn.classList.add("is-correct"); state.gameScore += 1; }
  else {
    btn.classList.add("is-wrong");
    allBtns.forEach(function (b) { if (b.dataset.id === correct) b.classList.add("is-correct"); });
  }

  $("#game-score").textContent = String(state.gameScore);

  const tr = findTrack(correct);
  const fb = el("div", { class: "game__feedback " + (isCorrect ? "is-correct" : "is-wrong") },
    isCorrect ? t("game.correct") : (t("game.wrong") + (tr ? tr.title : correct)));

  const stage = $("#game-stage");
  if (stage) stage.append(fb);

  setTimeout(function () {
    state.gameLocked = false;
    state.gameStep += 1;
    renderGame();
  }, 1400);
}

function resetGame() {
  state.gameStep = 0;
  state.gameScore = 0;
  state.gameLocked = false;
  renderGame();
}

/* ---------------- AUDIO PLAYER ---------------- */

function openPlayer(track) {
  currentTrack = track;
  const audioBar = $("#audio-bar");
  $("#audio-title").textContent = track.title;
  $("#audio-sub").textContent = track.albumTitle;
  $("#audio-embed").innerHTML = "";
  const hasYouTube = track.youtube && track.youtube.indexOf("YOUTUBE_ID_") !== 0;
  if (hasYouTube) {
    $("#audio-embed").append(
      el("iframe", {
        src: "https://www.youtube.com/embed/" + track.youtube + "?autoplay=1&rel=0&modestbranding=1",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        referrerpolicy: "strict-origin-when-cross-origin",
        allowfullscreen: "true", loading: "lazy", title: "YouTube: " + track.title
      })
    );
  } else {
    const query = encodeURIComponent("Will Wood " + track.title);
    $("#audio-embed").append(
      el("p", { class: "muted", style: "padding:12px;text-align:center;" },
        "Ссылка недоступна. ",
        el("a", {
          href: "https://www.youtube.com/results?search_query=" + query,
          target: "_blank", rel: "noopener",
          style: "text-decoration:underline;color:var(--accent);"
        }, "Найти на YouTube ↗")
      )
    );
  }
  audioBar.hidden = false;
  $("#audio-embed").hidden = false;
  $("#audio-expand").setAttribute("aria-expanded", "true");
  $("#audio-expand").textContent = t("btn.collapse");
}

/* ---------------- BACK TO TOP ---------------- */

function updateBackToTopVisibility() {
  const btn = $("#back-to-top");
  if (!btn) return;
  btn.hidden = window.scrollY <= 400;
}

/* ---------------- INIT ---------------- */

function init() {
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  applyTheme(state.theme);
  applyReducedMotion(state.reducedMotion);
  updateStaticUI();

  renderQuoteOfDay();
  renderMoodOfDay();
  renderRandomTrack();
  renderMatcher();
  renderSetlist();
  renderTrackPool();
  renderPoll();
  renderSongQuotes();
  renderCampSounds();
  renderDiary();
  renderGame();

  // Тема
  const ts = $("#theme-switcher");
  if (ts) ts.addEventListener("change", function (e) { applyTheme(e.target.value); });

  // Reduce motion
  const rm = $("#reduce-motion");
  if (rm) rm.addEventListener("click", function () { applyReducedMotion(!state.reducedMotion); });

  // Язык
  const ls = $("#lang-switch");
  if (ls) ls.addEventListener("click", function () { applyLang(state.lang === "ru" ? "en" : "ru"); });

  // Мобильное меню + плавная прокрутка
  const mn = $("#mobile-nav");
  if (mn) mn.innerHTML = $$(".navbar__nav a").map(function (a) { return a.outerHTML; }).join("");
  const mt = $("#menu-toggle");
  if (mt && mn) {
    mt.addEventListener("click", function () {
      const open = mn.hidden;
      mn.hidden = !open;
      mt.setAttribute("aria-expanded", String(open));
    });
    mn.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        const href = e.target.getAttribute("href");
        if (href && href.charAt(0) === "#") {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: state.reducedMotion ? "auto" : "smooth", block: "start" });
            try { history.replaceState(null, "", href); } catch (err) {}
          }
        }
        mn.hidden = true;
        mt.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Сброс плейлиста
  const rs = $("#reset-setlist");
  if (rs) rs.addEventListener("click", function () {
    state.setlist = []; store.set("setlist", []); renderSetlist();
  });

  // Сброс голосов
  const rv = $("#reset-votes");
  if (rv) rv.addEventListener("click", function () {
    const msg = state.lang === "ru" ? "Сбросить все голоса?" : "Reset all votes?";
    if (confirm(msg)) { state.votes = {}; store.set("votes", {}); renderPoll(); }
  });

  // Следующая цитата
  const sq = $("#song-quote-next");
  if (sq) sq.addEventListener("click", nextSongQuote);

  // Рестарт игры
  const gr = $("#game-reset");
  if (gr) gr.addEventListener("click", resetGame);

  // Сброс дневника
  const rd = $("#reset-diary");
  if (rd) rd.addEventListener("click", function () {
    const msg = state.lang === "ru" ? "Очистить дневник лагеря?" : "Clear the camp diary?";
    if (confirm(msg)) { state.diary = []; store.set("diary", []); renderDiary(); }
  });

  // Дневник
  const df = $("#diary-form");
  if (df) df.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = $("#diary-input");
    const text = input.value.trim();
    if (!text) return;
    state.diary.push({ text: text, ts: Date.now() });
    store.set("diary", state.diary);
    input.value = "";
    renderDiary();
  });

  // Наверх
  const btt = $("#back-to-top");
  if (btt) btt.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: state.reducedMotion ? "auto" : "smooth" });
  });
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });

  // Плеер: развернуть/свернуть
  const ae = $("#audio-expand");
  if (ae) ae.addEventListener("click", function (e) {
    const emb = $("#audio-embed");
    const open = emb.hidden;
    emb.hidden = !open;
    e.currentTarget.setAttribute("aria-expanded", String(open));
    e.currentTarget.textContent = open ? t("btn.collapse") : t("btn.expand");
  });

  // Плеер: закрыть
  const ac = $("#audio-close");
  if (ac) ac.addEventListener("click", function () {
    $("#audio-bar").hidden = true;
    $("#audio-embed").innerHTML = "";
    currentTrack = null;
  });

  // Стоп звуков при уходе
  window.addEventListener("beforeunload", stopAllCampSounds);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) stopAllCampSounds();
  });

  updateBackToTopVisibility();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}