function navigate(address) {
    window.location = address;
}
const age = document.getElementById('age-value');


var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

function updateAge() {
    var epochCurrunt = Date.now() / 1000;
    const epochBirthDay = 876009600;
    const dif = epochCurrunt - epochBirthDay;
    const epochAge = dif / 31556926;
    //const epochAgeRound = Math.round(epochAge * 1000000000, 10) / 1000000000;
    const epochAgeRound = epochAge.toFixed(10)
    age.innerHTML = epochAgeRound;
    console.log(epochAgeRound);
}
updateAge()

setInterval(updateAge, 100);
