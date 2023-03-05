function meyve(x) {
    var meyveler = ["portakal", "kiraz", "çilek", "muz"];
    return meyveler[x];
}

for (var x = 1; x < 4; x++) {
    //alert(meyve(x));
}

var vegetable = ["ıspanak", "kara lahana", "havuc"];

vegetable.forEach(function (value, key) {
    //alert("value:" + value + " key" + key);
})

var images = [
    "https://picsum.photos/id/0/367/267",
    "https://picsum.photos/id/1/367/267",
    "https://picsum.photos/id/2/367/267"
];


var allImages = "";
images.forEach(function (value, key) {
    allImages = allImages + "<img src='"+ value + " '>"
});

$(".images").html(allImages)

