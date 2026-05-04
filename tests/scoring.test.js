// Cascadia scoring tests — run with: node tests/scoring.test.js
//
// Loads js/data.js and js/scripts.js into a stubbed browser-ish environment,
// then drives calculate*TokenScoring against synthetic boards.
//
// Adding tests: append new entries to the `tests` array. Each test sets:
//   { name, decks, tokens, expected }
// where `tokens` is { 'row-R-column-C': 'wildlife', ... }.

const fs = require('fs');
const path = require('path');

// ---- Stubs so the script files load under Node ----
global.window = { innerWidth: 1500, addEventListener: function () {} };
global.document = {};
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
const jq = function () {
    return {
        ready: () => {}, resize: () => {}, keydown: () => {}, on: () => {},
        html: () => {}, find: () => jq(), each: () => {}, attr: () => {},
        addClass: () => {}, removeClass: () => {}, hide: () => {}, show: () => {},
        fadeOut: () => {}, fadeIn: () => {}, click: () => {}, append: () => {},
        parent: () => jq(), prepend: () => {}, data: () => {}, css: () => {},
        text: () => jq(), length: 0, val: () => {}, trigger: () => {},
        parentToAnimate: () => {}
    };
};
jq.fn = { extend: function () {} };
jq.extend = function () {};
global.$ = jq;
global.jQuery = jq;
Object.defineProperties(Array.prototype, {
    count: {
        value: function (v) { return this.filter(x => x === v).length; },
        configurable: true
    }
});

// ---- Compose the harness in a single eval scope so `let` bindings are visible ----
const REPO = path.resolve(__dirname, '..');
const dataSrc = fs.readFileSync(path.join(REPO, 'js/data.js'), 'utf8');
const scriptSrc = fs.readFileSync(path.join(REPO, 'js/scripts.js'), 'utf8');

// Test scenarios. Each test sets `decks`, places `tokens`, runs scoring, asserts `expected`.
//   expected is a partial map: { bear: 11 } only checks bear's totalScore.
const tests = [
    // ---------- BEAR ----------
    {
        name: 'Bear-A: 2 mating pairs → 11',
        decks: { bear: 'A' },
        tokens: { 'row-20-column-20': 'bear', 'row-20-column-21': 'bear', 'row-22-column-18': 'bear', 'row-22-column-19': 'bear' },
        expected: { bear: 11 }
    },
    {
        name: 'Bear-B: 1 group of exactly 3 (triangle) → 10',
        decks: { bear: 'B' },
        tokens: { 'row-20-column-20': 'bear', 'row-20-column-21': 'bear', 'row-21-column-20': 'bear' },
        expected: { bear: 10 }
    },
    {
        name: 'Bear-C: 1+2+3 with all-3 bonus → 18',
        decks: { bear: 'C' },
        tokens: {
            'row-20-column-20': 'bear',
            'row-22-column-20': 'bear', 'row-22-column-21': 'bear',
            'row-24-column-20': 'bear', 'row-24-column-21': 'bear', 'row-25-column-20': 'bear'
        },
        expected: { bear: 18 }
    },
    {
        name: 'Bear-D: group of 2 only scores → 5',
        decks: { bear: 'D' },
        tokens: { 'row-20-column-20': 'bear', 'row-20-column-21': 'bear', 'row-25-column-25': 'bear' },
        expected: { bear: 5 }
    },

    // ---------- ELK ----------
    {
        name: 'Elk-A: line of 4 → 13',
        decks: { elk: 'A' },
        tokens: { 'row-20-column-20': 'elk', 'row-20-column-21': 'elk', 'row-20-column-22': 'elk', 'row-20-column-23': 'elk' },
        expected: { elk: 13 }
    },
    {
        name: 'Elk-B: triangle (3) → 9',
        decks: { elk: 'B' },
        tokens: { 'row-19-column-20': 'elk', 'row-20-column-20': 'elk', 'row-20-column-21': 'elk' },
        expected: { elk: 9 }
    },
    {
        name: 'Elk-B: diamond (4) → 13',
        decks: { elk: 'B' },
        tokens: { 'row-19-column-20': 'elk', 'row-20-column-20': 'elk', 'row-20-column-21': 'elk', 'row-21-column-20': 'elk' },
        expected: { elk: 13 }
    },
    {
        name: 'Elk-C: herd of 5 → 14',
        decks: { elk: 'C' },
        tokens: { 'row-20-column-20': 'elk', 'row-20-column-21': 'elk', 'row-20-column-22': 'elk', 'row-20-column-23': 'elk', 'row-20-column-24': 'elk' },
        expected: { elk: 14 }
    },
    {
        name: 'Elk-D: lone + pair → 2 + 5 = 7',
        decks: { elk: 'D' },
        tokens: { 'row-15-column-15': 'elk', 'row-20-column-20': 'elk', 'row-20-column-21': 'elk' },
        expected: { elk: 7 }
    },
    {
        name: 'Elk-D: hex ring of 6 → 21',
        decks: { elk: 'D' },
        tokens: {
            'row-19-column-20': 'elk', 'row-19-column-19': 'elk',
            'row-20-column-19': 'elk', 'row-21-column-19': 'elk',
            'row-21-column-20': 'elk', 'row-20-column-21': 'elk'
        },
        expected: { elk: 21 }
    },

    // ---------- FOX ----------
    {
        name: 'Fox-A: 3 unique types around 1 fox → 3',
        decks: { fox: 'A' },
        tokens: { 'row-20-column-20': 'fox', 'row-19-column-20': 'bear', 'row-21-column-20': 'elk', 'row-20-column-21': 'salmon' },
        expected: { fox: 3 }
    },
    {
        name: 'Fox-B: user scenario (2 pairs + 1 pair) → 8',
        decks: { fox: 'B' },
        tokens: {
            // fox 1: 2 pairs (2 elk + 2 bear)
            'row-20-column-20': 'fox',
            'row-20-column-21': 'elk', 'row-21-column-20': 'elk',
            'row-20-column-19': 'bear', 'row-19-column-20': 'bear',
            // fox 2: surrounded by 6 elk (1 pair)
            'row-15-column-15': 'fox',
            'row-14-column-15': 'elk', 'row-14-column-14': 'elk',
            'row-15-column-16': 'elk', 'row-15-column-14': 'elk',
            'row-16-column-15': 'elk', 'row-16-column-14': 'elk'
        },
        expected: { fox: 8 }
    },
    {
        name: 'Fox-C: max same-type adjacent (2 bears) → 2',
        decks: { fox: 'C' },
        tokens: { 'row-20-column-20': 'fox', 'row-19-column-20': 'bear', 'row-20-column-21': 'bear', 'row-20-column-19': 'elk' },
        expected: { fox: 2 }
    },

    // ---------- HAWK ----------
    {
        name: 'Hawk-A: 3 isolated hawks → 8',
        decks: { hawk: 'A' },
        tokens: { 'row-15-column-15': 'hawk', 'row-20-column-20': 'hawk', 'row-25-column-25': 'hawk' },
        expected: { hawk: 8 }
    },
    {
        name: 'Hawk-B: 2 connected hawks via LOS → 5',
        decks: { hawk: 'B' },
        tokens: { 'row-20-column-20': 'hawk', 'row-20-column-23': 'hawk' },
        expected: { hawk: 5 }
    },
    {
        name: 'Hawk-C: 1 LOS pair → 3',
        decks: { hawk: 'C' },
        tokens: { 'row-20-column-20': 'hawk', 'row-20-column-23': 'hawk' },
        expected: { hawk: 3 }
    },

    // ---------- SALMON ----------
    {
        name: 'Salmon-A: run of 3 → 8',
        decks: { salmon: 'A' },
        tokens: { 'row-20-column-20': 'salmon', 'row-20-column-21': 'salmon', 'row-20-column-22': 'salmon' },
        expected: { salmon: 8 }
    },
    {
        name: 'Salmon-C: run of 3 → 10',
        decks: { salmon: 'C' },
        tokens: { 'row-20-column-20': 'salmon', 'row-20-column-21': 'salmon', 'row-20-column-22': 'salmon' },
        expected: { salmon: 10 }
    },
    {
        name: 'Salmon-D: run of 3 + 2 unique adjacent types → 5',
        decks: { salmon: 'D' },
        tokens: {
            'row-20-column-20': 'salmon', 'row-20-column-21': 'salmon', 'row-20-column-22': 'salmon',
            'row-19-column-20': 'bear', 'row-19-column-22': 'elk'
        },
        expected: { salmon: 5 }
    }
];

// ---- Driver ----
const driver = `
mapData = [];
for (let i=0,j=10; i<21; i++,j++) {
    mapRowsColumnsIndexes.rows['row'+j] = i;
    mapData[i] = [];
    for (let k=0,l=10; k<21; k++,l++) {
        mapRowsColumnsIndexes.columns['column'+l] = k;
        mapData[i][k] = { row: j, column: l, placedTile: false, habitats: [], wildlife: [], placedToken: false, rotation: 0 };
    }
}

const __tests = ${JSON.stringify(tests)};
let __pass = 0, __fail = 0;

function __reset() {
    tokenScoring.bear.totalScore = 0;
    tokenScoring.elk.totalScore = 0;
    tokenScoring.fox.totalScore = 0;
    tokenScoring.hawk.totalScore = 0;
    tokenScoring.salmon.totalScore = 0;
    allElkTokens.length = 0;
    usedElkTokenIDs.length = 0;
    potentialElkLines.length = 0;
    confirmedElkLines.length = 0;
    potentialElkLineStartingTokens.E.length = 0;
    potentialElkLineStartingTokens.SE.length = 0;
    potentialElkLineStartingTokens.SW.length = 0;
    usedSalmonTokenIDs.length = 0;
    potentialSalmonTokenIDs.length = 0;
    confirmedSalmonRuns.length = 0;
}

const __dispatch = {
    bear: calculateBearTokenScoring,
    elk: calculateElkTokenScoring,
    fox: calculateFoxTokenScoring,
    hawk: calculateHawkTokenScoring,
    salmon: calculateSalmonTokenScoring
};

for (const t of __tests) {
    __reset();
    Object.assign(selectedDecks, t.decks);
    allPlacedTokens = {};
    Object.assign(allPlacedTokens, t.tokens);

    const wildlifesUnderTest = Object.keys(t.expected);
    for (const w of wildlifesUnderTest) __dispatch[w]();

    let ok = true;
    const actuals = {};
    for (const w of wildlifesUnderTest) {
        actuals[w] = tokenScoring[w].totalScore;
        if (tokenScoring[w].totalScore !== t.expected[w]) ok = false;
    }
    if (ok) {
        __pass++;
        console.log('  ok    ' + t.name);
    } else {
        __fail++;
        console.log('  FAIL  ' + t.name);
        console.log('        expected: ' + JSON.stringify(t.expected));
        console.log('        actual:   ' + JSON.stringify(actuals));
    }
}

console.log('');
console.log(__pass + ' passed, ' + __fail + ' failed (' + __tests.length + ' total)');
process.exit(__fail ? 1 : 0);
`;

eval(dataSrc + '\n' + scriptSrc + '\n' + driver);
