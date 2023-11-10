function dateSample(sampleActivity) {
    let t = 0;
    let current = +sampleActivity;
    const MODERN_ACTIVITY = 15;
    const HALF_LIFE_PERIOD = 5730;
    // const DECAY_CONSTANT = Math.log(2).toFixed(3) / HALF_LIFE_PERIOD;

    // console.log(Math.log(2).toFixed(3));
    // console.log(DECAY_CONSTANT);

    if (
        isNaN(current) ||
        typeof sampleActivity != "string" ||
        typeof sampleActivity == "undefined" ||
        current <= 0 ||
        current > MODERN_ACTIVITY
    )
        return false;

    // t = Math.log10(MODERN_ACTIVITY / current) / DECAY_CONSTANT;
    // t = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / current);
    // t = Math.log10(MODERN_ACTIVITY / current) / (0.693 / HALF_LIFE_PERIOD);
    t = Math.log(MODERN_ACTIVITY / current) / (0.693 / HALF_LIFE_PERIOD);

    return t != Infinity ? Math.abs(Math.ceil(t)) : false;
}

// console.log(dateSample("1")); // 22387
// console.log(dateSample(3)); //  false;
// console.log(dateSample(3.312312)); // false);
// console.log(dateSample(false)); // false);
// console.log(dateSample(null)); // false);
// console.log(dateSample(undefined)); // false);
// console.log(dateSample([3])); // false);
// console.log(dateSample(["3"])); // false);
// console.log(dateSample({ 3.14: "3dec" })); // false);
// console.log(dateSample("WOOT!")); // false
// console.log(dateSample()); // false
// console.log(dateSample("ACTIVITY OVER 9000")); // false);
// console.log(dateSample("one")); // false);
// console.log(dateSample("")); // false);
// console.log(dateSample(" ")); // false);
// console.log(dateSample(" \n\t\r")); // false);
// console.log(dateSample("9000")); // false);
// console.log(dateSample("15.1")); // false);
// console.log(dateSample("0")); // false);
// console.log(dateSample("-5")); // false);
// console.log(dateSample("-55.8")); // false);

// t = ln(N0 / N) / k
// N0 -  количество атомов в начальный момент,
// N - количество атомов по прошествии времени
// k - постоянная распада.  ln2 / HALF_LIFE_PERIOD

function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let arr = [...members];
    let out = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "undefined") continue;
        if (typeof arr[i] === "string")
            out.push(arr[i].trim().slice(0, 1).toUpperCase());
    }

    return out.sort().join("");
}

// console.log(
//     createDreamTeam([
//         "Keith",
//         "Donna",
//         "Lawrence",
//         "Sophia",
//         "Jack",
//         "Kyle",
//         "Andrew",
//         "Natalie",
//         "Deborah",
//         "Noah",
//     ])
// ); // 'ADDJKKLNNS');

// console.log(
//     createDreamTeam([
//         ["David Abram"],
//         ["Robin Attfield"],
//         "Thomas Berry", ["Paul R.Ehrlich"],
//         "donna Haraway",
//         " BrIaN_gOodWiN  ",
//         {
//             0: "Serenella Iovino",
//         },
//         "Erazim Kohak",
//         "  val_plumwood",
//     ])
// ); //'BDETV'
// console.log(createDreamTeam(3)); // false);
// console.log(createDreamTeam(3.312312)); // false);
// console.log(createDreamTeam(false)); // false);
// console.log(createDreamTeam(null)); // false);
// console.log(createDreamTeam(undefined)); // false);
// console.log(createDreamTeam({ foo: "bar" })); // false);

function getSeason(date) {
    let season;
    const allSeasons = {
        winter: [11, 0, 1],
        spring: [2, 3, 4],
        summer: [5, 6, 7],
        autumn: [8, 9, 10],
    };

    let time = new Date(2020, 0, 3, 4, 5, 6);
    console.log(time.getDate());

    if (
        date instanceof Date === false ||
        Object.getOwnPropertyNames(date).length > 0
    ) {
        throw new Error("Invalid date!");
    }

    try {
        let month = date.getMonth();

        for (let s in allSeasons) {
            for (let i of allSeasons[s]) {
                if (i === month) season = s;
            }
        }
    } catch (err) {
        throw new Error("Invalid date!");
    }

    return season;
}

// console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500))); // winter
// console.log(getSeason(new Date(2018, 4, 17, 11, 27, 4, 321))); // spring
// console.log(getSeason(new Date(2017, 6, 11, 23, 45, 11, 500))); // summer
// console.log(getSeason(new Date(1994, 8, 26, 3, 0, 11, 500))); // autumn
// console.log(getSeason("foo")); // 'Invalid date!'
// console.log(getSeason({ John: "Smith" })); // 'Invalid date!'
// console.log(getSeason(20192701)); // 'Invalid date!'
// console.log(getSeason([2019, "27", 0 + "1"])); // 'Invalid date!'
// console.log(getSeason(() => new Date())); // 'Invalid date!'
// console.log(getSeason(new Date(1, 4, 6, 7, 8, 9))); // 'Invalid date!'

function calculateHanoi(disksNumber, turnsSpeed) {
    const turn = 2 ** disksNumber - 1;
    // const seconds = Math.floor((turnsSpeed * 3600) / turn);
    // const seconds = Math.floor((turn * 3600) / turnsSpeed);
    const seconds = Math.floor(turn / (turnsSpeed / 3600));
    return { turns: turn, seconds: seconds };
}

// turnsSpeed— скорость движения дисков (в оборотах в час ).
// turns(минимум number ходов для решения головоломки)
// seconds(минимум секунд number для решения головоломки при заданном , секунды должны быть целым числом, полученным из округленного в меньшую сторону (минимального) результата вычисления) turnsSpeed

// console.log(calculateHanoi(5, 4074)); // { turns: 31, seconds: 27 });
// console.log(calculateHanoi(38, 4594)); // { turns: 274877906943, seconds: 215402800390 });

function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let out = [];
    out = arr.filter((el) => typeof el === "number");

    if (out.length === 0) return arr;

    const func = {
        "discard-prev": discardPrev,
        "double-prev": 0,
        "double-next": 0,
        "discard-next": 0,
    };

    arr.forEach((el, ind) => {
        if (typeof el === "string") {
            let str = el.match(/\w+-\w+/g)[0];

            switch (str) {
                case "discard-prev":
                    discardPrev(ind);
                    break;
                case "discard-next":
                    discardNext(ind);
                    break;
                case "double-prev":
                    doublePrev(ind);
                    break;
                case "double-next":
                    doubleNext(ind);
                    break;
            }
        }
    });

    function discardPrev(ind) {
        try {
            // if (!ind) return out.splice(ind, 1);
            if (ind) return out.splice(ind - 1, 1);
        } catch {
            return out;
        }
    }

    function discardNext(ind) {
        try {
            // if (ind === out.length) return out.splice(ind - 1, 1);
            return out.splice(ind, 1);
            console.log("discardNext");
        } catch {
            return out;
        }
    }

    function doublePrev(ind) {
        try {
            // if (!ind) return out.unshift(out[0]);
            if (ind) return out.splice(ind, 0, out[ind - 1]);
        } catch {
            return out;
        }
    }

    function doubleNext(ind) {
        try {
            if (ind === out.length) return out;
            else return out.splice(ind, 0, out[ind]);
        } catch {
            return out;
        }
    }
    return out;
}

// console.log(transform(3)); // '\'arr\' parameter must be an instance of the Array!');
console.log(transform(["--discard-prev", 1, 2, 3]));
console.log(transform([1, 2, 3, "--discard-prev"]));

console.log(transform(["--double-prev", 1, 2, 3]));
console.log(transform([1, 2, 3, "--double-prev"]));

console.log(transform([1, 2, 3, "--double-next"]));
console.log(transform(["--double-next", 1, 2, 3]));

console.log(transform([1, 2, "--discard-next", 3]));
console.log(transform([1, 2, 3, "--discard-next"]));

console.log(transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7]));

/**
--discard-next исключает следующий элемент массива из преобразованного массива.
--discard-prev исключает предыдущий элемент массива из преобразованного массива.
--double-next дублирует следующий элемент массива в преобразованном массиве.
--double-prev дублирует предыдущий элемент массива в преобразованном массиве.
 */