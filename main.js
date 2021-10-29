//https://teachablemachine.withgoogle.com/models/aHIOkqYCO/
function startClassifying() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aHIOkqYCO/model.json', modelLoaded);
}
function modelLoaded(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}