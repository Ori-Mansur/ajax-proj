'use strict'


var gCountry

var gCountryCode = {
    Canada: 'ca',
    Scotland: 'gb',
    Australia: 'au',
    Argentina: 'ar',
    Italy: 'it',
    'New Zealand': 'nz',
    'Korea Republic': 'kr',
    Thailand: 'th',
    Chile: 'cl',
    'China PR': 'cn',
    Japan: 'jp',
    England: 'gb',
    Norway: 'no',
    Brazil: 'br',
    Sweden: 'se',
    'South Africa': 'za',
    Cameroon: 'cm',
    Jamaica: 'jm',
    USA: 'us',
    France: 'fr',
    Netherlands: 'nl',
    Germany: 'de',
    Nigeria: 'ng',
    Spain: 'es',
}
function getCountryCode() {
    return gCountryCode
}

function getData(url, callBackFoo) {

    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) return;
        var data = JSON.parse(request.responseText);
        gCountry = data
        callBackFoo(data)
    };
    request.send();
}