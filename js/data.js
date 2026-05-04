var startingTiles = [
    [
        {
            tileNum: '1',
            habitats: ['mountain'],
            wildlife: ['bear'],
            rotation: 0 // increments of 60
        },
        {
            tileNum: '2',
            habitats: ['forest', 'swamp'],
            wildlife: ['hawk', 'fox', 'elk'],
            rotation: 60 // increments of 60
        },
        {
            tileNum: '3',
            habitats: ['desert', 'lake'],
            wildlife: ['salmon', 'bear'],
            rotation: 300 // increments of 60
        },
    ],
    [
        {
            tileNum: '4',
            habitats: ['swamp'],
            wildlife: ['hawk'],
            rotation: 0 // increments of 60
        },
        {
            tileNum: '5',
            habitats: ['forest', 'lake'],
            wildlife: ['salmon', 'hawk', 'elk'],
            rotation: 240 // increments of 60
        },
        {
            tileNum: '6',
            habitats: ['mountain', 'desert'],
            wildlife: ['bear', 'fox'],
            rotation: 300 // increments of 60
        },
    ],
    [
        {
            tileNum: '7',
            habitats: ['desert'],
            wildlife: ['fox'],
            rotation: 0 // increments of 60
        },
        {
            tileNum: '8',
            habitats: ['swamp', 'lake'],
            wildlife: ['salmon', 'fox', 'hawk'],
            rotation: 60 // increments of 60
        },
        {
            tileNum: '9',
            habitats: ['mountain', 'forest'],
            wildlife: ['bear', 'elk'],
            rotation: 300 // increments of 60
        },
    ],
    [
        {
            tileNum: '10',
            habitats: ['forest'],
            wildlife: ['elk'],
            rotation: 0 // increments of 60
        },
        {
            tileNum: '11',
            habitats: ['lake', 'mountain'],
            wildlife: ['hawk', 'bear', 'elk'],
            rotation: 240 // increments of 60
        },
        {
            tileNum: '12',
            habitats: ['desert', 'swamp'],
            wildlife: ['fox', 'salmon'],
            rotation: 300 // increments of 60
        },
    ],
    [
        {
            tileNum: '13',
            habitats: ['lake'],
            wildlife: ['salmon'],
            rotation: 0 // increments of 60
        },
        {
            tileNum: '14',
            habitats: ['forest', 'desert'],
            wildlife: ['salmon', 'bear', 'elk'],
            rotation: 240 // increments of 60
        },
        {
            tileNum: '15',
            habitats: ['mountain', 'swamp'],
            wildlife: ['fox', 'hawk'],
            rotation: 120 // increments of 60
        },
    ],

]

var tiles = [
    {
        tileNum: '16',
        habitats: ['mountain'],
        wildlife: ['hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '17',
        habitats: ['mountain'],
        wildlife: ['hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '18',
        habitats: ['mountain'],
        wildlife: ['bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '19',
        habitats: ['mountain'],
        wildlife: ['elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '20',
        habitats: ['mountain'],
        wildlife: ['elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '21',
        habitats: ['forest'],
        wildlife: ['bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '22',
        habitats: ['forest'],
        wildlife: ['bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '23',
        habitats: ['forest'],
        wildlife: ['elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '24',
        habitats: ['forest'],
        wildlife: ['fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '25',
        habitats: ['forest'],
        wildlife: ['fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '26',
        habitats: ['desert'],
        wildlife: ['elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '27',
        habitats: ['desert'],
        wildlife: ['elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '28',
        habitats: ['desert'],
        wildlife: ['fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '29',
        habitats: ['desert'],
        wildlife: ['salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '30',
        habitats: ['desert'],
        wildlife: ['salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '31',
        habitats: ['swamp'],
        wildlife: ['fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '32',
        habitats: ['swamp'],
        wildlife: ['fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '33',
        habitats: ['swamp'],
        wildlife: ['salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '34',
        habitats: ['swamp'],
        wildlife: ['salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '35',
        habitats: ['swamp'],
        wildlife: ['hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '36',
        habitats: ['lake'],
        wildlife: ['hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '37',
        habitats: ['lake'],
        wildlife: ['hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '38',
        habitats: ['lake'],
        wildlife: ['salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '39',
        habitats: ['lake'],
        wildlife: ['bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '40',
        habitats: ['lake'],
        wildlife: ['bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '41',
        habitats: ['mountain', 'forest'],
        wildlife: ['hawk', 'bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '42',
        habitats: ['mountain', 'forest'],
        wildlife: ['fox', 'bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '43',
        habitats: ['mountain', 'desert'],
        wildlife: ['fox', 'bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '44',
        habitats: ['mountain', 'desert'],
        wildlife: ['salmon', 'fox', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '45',
        habitats: ['forest', 'desert'],
        wildlife: ['salmon', 'fox', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '46',
        habitats: ['desert', 'swamp'],
        wildlife: ['salmon', 'fox', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '47',
        habitats: ['desert', 'swamp'],
        wildlife: ['salmon', 'fox', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '48',
        habitats: ['mountain', 'swamp'],
        wildlife: ['fox', 'hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '49',
        habitats: ['mountain', 'swamp'],
        wildlife: ['salmon', 'bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '50',
        habitats: ['forest', 'swamp'],
        wildlife: ['salmon', 'hawk', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '51',
        habitats: ['swamp', 'lake'],
        wildlife: ['salmon', 'hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '52',
        habitats: ['forest', 'lake'],
        wildlife: ['hawk', 'fox', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '53',
        habitats: ['lake', 'mountain'],
        wildlife: ['salmon', 'hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '54',
        habitats: ['desert', 'lake'],
        wildlife: ['salmon', 'fox', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '55',
        habitats: ['desert', 'lake'],
        wildlife: ['fox', 'hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '56',
        habitats: ['mountain', 'forest'],
        wildlife: ['hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '57',
        habitats: ['mountain', 'forest'],
        wildlife: ['hawk', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '58',
        habitats: ['mountain', 'forest'],
        wildlife: ['bear', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '59',
        habitats: ['mountain', 'forest'],
        wildlife: ['elk', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '60',
        habitats: ['forest', 'desert'],
        wildlife: ['bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '61',
        habitats: ['forest', 'desert'],
        wildlife: ['bear', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '62',
        habitats: ['forest', 'desert'],
        wildlife: ['elk', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '63',
        habitats: ['forest', 'desert'],
        wildlife: ['elk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '64',
        habitats: ['forest', 'desert'],
        wildlife: ['fox', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '65',
        habitats: ['desert', 'swamp'],
        wildlife: ['elk', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '66',
        habitats: ['desert', 'swamp'],
        wildlife: ['elk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '67',
        habitats: ['desert', 'swamp'],
        wildlife: ['fox', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '68',
        habitats: ['desert', 'swamp'],
        wildlife: ['salmon', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '69',
        habitats: ['swamp', 'lake'],
        wildlife: ['fox', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '70',
        habitats: ['swamp', 'lake'],
        wildlife: ['fox', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '71',
        habitats: ['swamp', 'lake'],
        wildlife: ['salmon', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '72',
        habitats: ['swamp', 'lake'],
        wildlife: ['salmon', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '73',
        habitats: ['swamp', 'lake'],
        wildlife: ['hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '74',
        habitats: ['lake', 'mountain'],
        wildlife: ['salmon', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '75',
        habitats: ['lake', 'mountain'],
        wildlife: ['salmon', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '76',
        habitats: ['lake', 'mountain'],
        wildlife: ['hawk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '77',
        habitats: ['lake', 'mountain'],
        wildlife: ['hawk', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '78',
        habitats: ['lake', 'mountain'],
        wildlife: ['bear', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '79',
        habitats: ['mountain', 'desert'],
        wildlife: ['hawk', 'elk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '80',
        habitats: ['mountain', 'desert'],
        wildlife: ['hawk', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '81',
        habitats: ['mountain', 'desert'],
        wildlife: ['bear', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '82',
        habitats: ['mountain', 'desert'],
        wildlife: ['elk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '83',
        habitats: ['mountain', 'swamp'],
        wildlife: ['hawk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '84',
        habitats: ['mountain', 'swamp'],
        wildlife: ['bear', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '85',
        habitats: ['mountain', 'swamp'],
        wildlife: ['elk', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '86',
        habitats: ['mountain', 'swamp'],
        wildlife: ['elk', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '87',
        habitats: ['forest', 'swamp'],
        wildlife: ['bear', 'fox'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '88',
        habitats: ['forest', 'swamp'],
        wildlife: ['bear', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '89',
        habitats: ['forest', 'swamp'],
        wildlife: ['elk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '90',
        habitats: ['forest', 'swamp'],
        wildlife: ['elk', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '91',
        habitats: ['forest', 'swamp'],
        wildlife: ['fox', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '92',
        habitats: ['forest', 'lake'],
        wildlife: ['bear', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '93',
        habitats: ['forest', 'lake'],
        wildlife: ['fox', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '94',
        habitats: ['forest', 'lake'],
        wildlife: ['elk', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '95',
        habitats: ['forest', 'lake'],
        wildlife: ['elk', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '96',
        habitats: ['forest', 'lake'],
        wildlife: ['fox', 'bear'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '97',
        habitats: ['desert', 'lake'],
        wildlife: ['elk', 'salmon'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '98',
        habitats: ['desert', 'lake'],
        wildlife: ['elk', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '99',
        habitats: ['desert', 'lake'],
        wildlife: ['fox', 'hawk'],
        rotation: 0 // increments of 60
    },
    {
        tileNum: '100',
        habitats: ['desert', 'lake'],
        wildlife: ['fox', 'bear'],
        rotation: 0 // increments of 60
    }

]

// Wildlife Scoring Cards — all four decks (A/B/C/D) for each wildlife.
// Structure:
//   wildlifeScoringDecks[wildlife][deck] = {
//     deck:    'A' | 'B' | 'C' | 'D'
//     name:    short title from the card (e.g. "Mating Pairs")
//     rule:    the descriptive sentence printed at the bottom of the card
//     header:  optional [leftLabel, rightLabel] for the points table
//     rows:    array of [key, points] pairs (key may be a size, pair count, line length, etc.)
//     bonus:   optional { points: number, description: string } for extra conditions (e.g. Bear C "+3 if all 3 group sizes")
//     formula: optional human-readable formula for cards whose scoring isn't a simple table (Hawk C, Salmon D)
//   }
var wildlifeScoringDecks = {
    bear: {
        A: {
            deck: 'A',
            name: 'Mating Pairs',
            rule: 'Scores for number of pairs of BEARS with no other BEARS next to them.',
            header: ['Pairs', 'Points'],
            rows: [['1', 4], ['2', 11], ['3', 19], ['4+', 27]]
        },
        B: {
            deck: 'B',
            name: 'Mother and Cubs',
            rule: 'Scores per group of three BEARS (any shape) with no other BEARS next to it.',
            header: ['Group', 'Points'],
            rows: [['Exactly 3', 10]]
        },
        C: {
            deck: 'C',
            name: 'Families',
            rule: 'Scores for each group of BEARS with no other BEARS next to it.',
            header: ['Group Size', 'Points'],
            rows: [['1', 2], ['2', 5], ['3', 8]],
            bonus: { points: 3, description: 'Bonus for having all 3 group sizes' }
        },
        D: {
            deck: 'D',
            name: 'Big Groups',
            rule: 'Scores per group of BEARS (any shape) with no other BEARS next to it.',
            header: ['Group Size', 'Points'],
            rows: [['2', 5], ['3', 8], ['4', 13]]
        }
    },
    elk: {
        A: {
            deck: 'A',
            name: 'Lines',
            rule: 'Scores per straight line of ELK (each ELK may only score for a single line).',
            header: ['Line Length', 'Points'],
            rows: [['1', 2], ['2', 5], ['3', 9], ['4', 13]]
        },
        B: {
            deck: 'B',
            name: 'Formations',
            rule: 'Scores per group of ELK in the exact shape shown (each ELK may only score for a single group).',
            header: ['Shape', 'Points'],
            rows: [
                ['Single elk', 2],
                ['Pair (2 side-by-side)', 5],
                ['Trio (1 on top, 2 below)', 9],
                ['Diamond (4 elk)', 13]
            ]
        },
        C: {
            deck: 'C',
            name: 'Herds',
            rule: 'Scores for each group of ELK in any shape.',
            header: ['Group Size', 'Points'],
            rows: [['1', 2], ['2', 4], ['3', 7], ['4', 10], ['5', 14], ['6', 18], ['7', 23], ['8+', 29]]
        },
        D: {
            deck: 'D',
            name: 'Rings',
            rule: 'Scores per group of ELK in a circular formation (each ELK may only score for a single group).',
            header: ['Ring Size', 'Points'],
            rows: [['1', 2], ['2', 5], ['3', 8], ['4', 12], ['5', 16], ['6', 21]]
        }
    },
    fox: {
        A: {
            deck: 'A',
            name: 'Nearby Animals',
            rule: 'Scores for each FOX, number of unique adjacent animal types (FOXES count).',
            header: ['Unique Types', 'Points (per fox)'],
            rows: [['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5]]
        },
        B: {
            deck: 'B',
            name: 'Nearby Pairs',
            rule: 'Scores for each FOX, number of unique adjacent animal pairs (FOXES do not count).',
            header: ['Unique Pairs', 'Points (per fox)'],
            rows: [['1', 3], ['2', 5], ['3', 7]]
        },
        C: {
            deck: 'C',
            name: 'Nearby Related',
            rule: 'Scores for each FOX, the number of a single adjacent animal type (FOXES do not count).',
            header: ['Same-type Count', 'Points (per fox)'],
            rows: [['1', 1], ['2', 2], ['3', 3], ['4', 4], ['5', 5], ['6', 6]]
        },
        D: {
            deck: 'D',
            name: 'Dynamic Duos',
            rule: 'Scores for each FOX pair, number of unique adjacent animal pairs (FOXES do not count).',
            header: ['Adjacent Pairs', 'Points (per fox pair)'],
            rows: [['1', 5], ['2', 7], ['3', 9], ['4', 11]]
        }
    },
    hawk: {
        A: {
            deck: 'A',
            name: 'Solitary',
            rule: 'Scores for each HAWK that is not adjacent to any other HAWK.',
            header: ['Hawks', 'Points'],
            rows: [['1', 2], ['2', 5], ['3', 8], ['4', 11], ['5', 14], ['6', 18], ['7', 22], ['8+', 26]]
        },
        B: {
            deck: 'B',
            name: 'Connected',
            rule: 'Scores for each HAWK that is not adjacent to any other HAWK and has a direct line of sight to a HAWK.',
            header: ['Hawks', 'Points'],
            rows: [['2', 5], ['3', 9], ['4', 12], ['5', 16], ['6', 20], ['7', 24], ['8+', 28]]
        },
        C: {
            deck: 'C',
            name: 'Network',
            rule: 'Scores for each direct line of sight between two non-adjacent HAWKS.',
            formula: '3 points per line of sight'
        },
        D: {
            deck: 'D',
            name: 'Territorial',
            rule: 'Scores for each pair of HAWKS, number of unique animal types between them (each HAWK only counts once).',
            header: ['Unique Types Between', 'Points (per hawk pair)'],
            rows: [['1', 4], ['2', 7], ['3+', 9]]
        }
    },
    salmon: {
        A: {
            deck: 'A',
            name: 'Long Run',
            rule: 'Scores for each run, per SALMON (runs may not be adjacent to each other).',
            header: ['Run Size', 'Points'],
            rows: [['1', 2], ['2', 5], ['3', 8], ['4', 12], ['5', 16], ['6', 20], ['7+', 25]]
        },
        B: {
            deck: 'B',
            name: 'Short Run',
            rule: 'Scores for each run, per SALMON (runs may not be adjacent to each other).',
            header: ['Run Size', 'Points'],
            rows: [['1', 2], ['2', 4], ['3', 9], ['4', 11], ['5+', 17]]
        },
        C: {
            deck: 'C',
            name: 'Families',
            rule: 'Scores for each run of 3, 4, or 5+ SALMON (runs may not be adjacent to each other). Runs of 1 or 2 do not score.',
            header: ['Run Size', 'Points'],
            rows: [['3', 10], ['4', 12], ['5+', 15]]
        },
        D: {
            deck: 'D',
            name: 'Surrounded',
            rule: 'Scores per SALMON, and per animal adjacent to a run of at least 3 (runs may not be adjacent).',
            formula: '1 point per salmon + 1 point per unique adjacent animal (for runs of size ≥ 3)'
        }
    }
};