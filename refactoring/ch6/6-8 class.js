// 6-8 Class Version
// 데이터와 데이터를 처리하는 로직이 다 외부에서 일일이 작성되고 있다.
// -> 클래스를 활용하여 데이터와 데이터로직을 묶어줄 수 있다.
export function readingsOutsideRange(station, range) {
    // filter 내 callback 함수를 메서드로
    return station.readings.filter((readingItem) =>
        range.contains(readingItem.temp)
    );
}

const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:20" },
        { temp: 58, time: "2016-11-10 09:30" },
        { temp: 53, time: "2016-11-10 09:40" },
        { temp: 51, time: "2016-11-10 09:50" },
    ],
};

// 순수 데이터 객체 : 데이터만 담고있는 객체
// const operationPlan = {
//     temperatureFloor: 51,
//     temperatureCeiling: 53,
// };

// ※ 클래스 활용하기
// - 이런 데이터를 가공해야한다면 관련 함수를 만들어서 가지고 있는게 더 유용할 것
// - 정답 : 클래스!!
export class NumberRange {
    #min;
    #max;
    constructor(min, max) {
        this.#min = min;
        this.#max = max;
    }

    get min() {
        return this.#min;
    }
    get max() {
        return this.#max;
    }
    contains(number) {
        return number >= this.#min && number <= this.#max;
    }
}

const operationPlan = new NumberRange(51, 53);

const result = readingsOutsideRange(station, operationPlan);

console.log(result);

// 함수에 여러가지 데이터(매개변수)를 전달한다면?
// 1. 데이터 중에 하나의 객체로 묶을 수 있는게 없는지 생각해보기
// 2. 더 나아가 그 객체 안에 좀 더 관련된 유용한 함수를 만들 수 있지는 않을지 고민해보기
