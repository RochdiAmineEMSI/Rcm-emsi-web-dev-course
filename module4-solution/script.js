(function () {
    var names = ["Alice", "Jesse", "Charlie", "Jake", "Eva", "Felix", "Grace", "Henry", "Isabella", "Jack"];


for (var name in names) {

    var firstLetter = names[name].charAt(0).toLowerCase();

    if (firstLetter === 'j') {
        byeSpeaker.speak(names[name]);
    } else {
        helloSpeaker.speak(names[name]);
    }
}
})();
