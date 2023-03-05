function meyve(x) {
    var meyveler = ["portakal", "kiraz", "çilek", "muz"];
    return meyveler[x];
}

for (var x = 1; x < 4; x++) {
    //alert(meyve(x));
}

var vegetable = ["ıspanak", "kara lahana", "havuc"];

vegetable.forEach(function (value, key) {
    alert("value:" + value + " key" + key);
})