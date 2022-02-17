function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var point = "";
    var period = "";
    var time = "";

    period = (h < 12 && h > 5) ? "Bm Dia!" : (h > 11 && h < 16) ? "Boa Tarde!" : (h > 15 && h > 0) ? "Boa Noite" : "Boa Madrugada!";
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    point = (s & 1) ? '<span id="point"></span>' : ':';

    time = h + ':' + m + point + s;
    document.getElementById("MyClockDisplay").innerHTML = time;
    document.getElementById("period").innerHTML = period;
    setTimeout(showTime, 0);
}
showTime()