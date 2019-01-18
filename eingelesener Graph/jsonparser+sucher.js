//Javascript Objekt FileLoad, das die JSON Datei enthält


var fileObj;



// Suchfunktion die den im Browser eingegebenen Text in den Klassennamen sucht. Sehr schlechte Performanz
function setElement() {

    if(fileObj === undefined || !fileObj.isLoaded){
        alert("File is not loaded yet.");
        return;
    }

    var text = document.getElementById("text").value;
    var json = jsonQ(fileObj.file);
    classes = json.find("declaringClass");


    for (var i = 0; i < classes.length; i++) {
        if (classes.value()[i].includes(text)) {
            document.getElementById("demo").innerHTML = "true";
        }
        console.log(i);
    }
}

//Alternative Suchfunktion mit gleichem Zweck die allerdings jsonQ benutzt für bessere Performanz
//Läuft aktuell noch nicht so wie gewollt. Wir können lediglich alle Klassennamen anzeigen
function setElement2() {

    if(fileObj === undefined || !fileObj.isLoaded){
        alert("File is not loaded yet.");
        return;
    }

    var text2 = document.getElementById("text").value;
    var json2 = jsonQ(fileObj.file);
    classes2 = json2.find("declaringClass");

    document.getElementById("demo").innerHTML = classes2.value();

    //var searchedClass = jsonQ.contains(json2, {"declaringClass": text}, true);
    //document.getElementById("demo").innerHTML = searchedClasses;
}