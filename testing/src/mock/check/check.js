// predicate의 실행 결과가 true인지 false인지에 따라 각각 다른 콜백 함수를 실행시키는 코드
function check(predicate, onSuccess, onFail) {
    if (predicate()) {
        onSuccess("yes");
    } else {
        onFail("no");
    }
}

module.exports = check;
