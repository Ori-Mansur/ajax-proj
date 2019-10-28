'use strict'

function getData(callBackFoo) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState != 4 || request.status != 200) return;
        var data = JSON.parse(request.responseText);
        callBackFoo(data)
    };
    request.open("GET",
        `http://www.filltext.com?rows=10&name={firstName}~{lastName}&address={streetAddress}&city={city}&zip={zip}&country={country}&phone={phone|format}`,
        true);
    request.send();
}