// 매개변수 개수는 적당!
// 개별적으로 사용되는 것이 아니라 연관된 변수(min, max)를 range라는 변수로 묶어준다.

// 데이터 로직 : 데이터를 다루는 로직
export function readingsOutsideRange(station, range) {
    return station.readings.filter(
        (readingItem) =>
            readingItem.temp < range.temperatureFloor ||
            readingItem.temp > range.temperatureCeiling
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
const operationPlan = {
    temperatureFloor: 51,
    temperatureCeiling: 53,
};

const result = readingsOutsideRange(station, operationPlan);

console.log(result);
