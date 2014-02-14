var subway = {};
subway.N = ["TS", "34", "28-N", "23-N", "US", "8-N"];
subway.L = ["8-L", "6", "US", "3", "1"];
subway.S = ["GC", "33", "28-6", "23-6", "US", "AP"];

var userOnLine = "N";
var userOnStop = "TS";

var startIndex = 0;

var userOffLine = "S";
var userOffStop = "AP";

var stopIndex = 5;

function findLine(){
    if (userOnLine !== userOffLine) {

        var usOnIndex = stationIndex(userOnLine);
        var usOffIndex = stationIndex(userOffLine);

        var numberOfStops = usOnIndex - startIndex;
        for(var i = 0; i <= numberOfStops; i = i + 1){
            console.log(subway[userOnLine][i]);
        } 

        if (usOffIndex > stopIndex){
            var numberOfStops = usOffIndex - stopIndex;
            for(var i = usOffIndex; i >= (usOffIndex - numberOfStops); i = i - 1){
            console.log(subway[userOffLine][i]);
            }   
        }
        else{
            var numberOfStops = stopIndex - usOffIndex;
            for(var i = usOffIndex; i <= (usOffIndex + numberOfStops); i = i + 1){
            console.log(subway[userOffLine][i]);
            }
        }     
    }
    else {
        var numberOfStops = stopIndex - startIndex;
        for(var i = 0; i <= numberOfStops; i = i + 1){
            console.log(subway[userOnLine][i]);
        }
    }
}

function stationIndex(userLine) {
    var usIndex;
    if((userLine === "N") || userLine === "S")
        usIndex = 4;
    else
        usIndex = 2;
    return usIndex;
}
