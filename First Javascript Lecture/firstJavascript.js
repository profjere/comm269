listOfWords = ["grapes","apples","banananas","watermelon","cauliflower","aspasparagus"];
theNum = Math.floor(Math.random()*listOfWords.length)
var whichWord = listOfWords[theNum];
document.getElementById('container').innerHTML = whichWord;


var thirdLetter=whichWord.charAt(2);
document.getElementById('container2').innerHTML = 'The third letter is a '+thirdLetter+'.';


var thelength= listOfWords.length
var newString = "";
for (var i=0;i<thelength*10;i++){
   newString+= whichWord+' ';
    if (i>50){
        newString+='stop ';
    }
}
document.getElementById('container3').innerHTML=newString;





