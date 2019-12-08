var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var startTimer;
shuffle();

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

var a1 = document.getElementById('cell11');
var a2 = document.getElementById('cell12');
var a3 = document.getElementById('cell13');

var b1 = document.getElementById('cell21');
var b2 = document.getElementById('cell22');
var b3 = document.getElementById('cell23');

var c1 = document.getElementById('cell31');
var c2 = document.getElementById('cell32');
var c3 = document.getElementById('cell33');


function setTime()
{
 
   startTimer= setInterval(function(){
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds);
    if(
    hasClass(a1, 'tile1') == true && 
    hasClass(a2, 'tile2') == true && 
    hasClass(a3, 'tile3') == true && 

    hasClass(b1, 'tile4') == true && 
    hasClass(b2, 'tile5') == true && 
    hasClass(b3, 'tile6') == true && 

    hasClass(c1, 'tile7') == true && 
    hasClass(c2, 'tile8') == true && 
    hasClass(c3, 'tile9') == true  ){
     win();
    }

  },1000);
}

function win(){

  alert("You Win!");
  var res=confirm('Ingin bermain lagi?');
  
  clearTimeout(startTimer);
  document.getElementById("winscreen").style.opacity="1";
  document.getElementById("winscreen").style.visibility="visible";
  started=false;

  if(res==true){
    document.location.reload();  
      }

  else{
     alert("Permainan Usai!");
      }
}

function pad(val)
{
    var valString = val + "";
    if(valString.length < 2)
    {
        return "Time: " + valString;
    }
    else
    {
        return "Time: " + valString;
    }
}

setTime();

var started = true;
function pause(){
    if (started){
     clearTimeout(startTimer);
        document.getElementById("warning").innerHTML="PAUSED";
        document.getElementById("pauseBtn").style.marginTop="5px";
        document.getElementById("pauseBtn").style.marginLeft="15px";
        document.getElementById("pauseBtn").style.borderLeft="15px solid black";
        document.getElementById("pauseBtn").style.borderRight="15px dashed transparent";
        document.getElementById("pauseBtn").style.borderTop="15px dashed transparent";
        document.getElementById("pauseBtn").style.borderBottom="15px dashed transparent";
        document.getElementById("pauseBtn").style.width="0";
        document.getElementById("pauseBtn").style.height="0";
   
    }
    else{
     setTime();document.getElementById("warning").innerHTML="";
        document.getElementById("pauseBtn").style.marginTop="10px";
        document.getElementById("pauseBtn").style.marginLeft="10px";
        document.getElementById("pauseBtn").style.borderLeft="7px solid black";
        document.getElementById("pauseBtn").style.borderRight="7px solid black";
        document.getElementById("pauseBtn").style.borderTop="0";
        document.getElementById("pauseBtn").style.borderBottom="0";
        document.getElementById("pauseBtn").style.width="7px";
        document.getElementById("pauseBtn").style.height="20px";
   
  }
  
  started = !started;
  }

function swapTiles(cell1,cell2) {
    var temp = document.getElementById(cell1).className;
    document.getElementById(cell1).className = document.getElementById(cell2).className;
    document.getElementById(cell2).className = temp;
  }
  
  function shuffle() {

  for (var row=1;row<=3;row++) { 
     for (var column=1;column<=3;column++) { 
    
      var row2=Math.floor(Math.random()*3 + 1); 
      var column2=Math.floor(Math.random()*3 + 1); 
       
      swapTiles("cell"+row+column,"cell"+row2+column2); 
    } 
  } 
  }
 
  function clickTile(row,column) {
      if(started){

    var cell = document.getElementById("cell"+row+column);
    var tile = cell.className;
    if (tile!="tile9") { 
   
      if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column+1));
             return;
           }
         }

         if (column>1) {
           if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+row+(column-1));
             return;
           }
         }

         if (row>1) {
           if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row-1)+column);
             return;
           }
         }

         if (row<3) {
           if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
             swapTiles("cell"+row+column,"cell"+(row+1)+column);
             return;
           }
         } 
    }

    }
  }

  function cheat(event){
      var x = event.key;
      if(x=="c" || x=="C"){
          document.getElementById("cell11").className="tile1";
          document.getElementById("cell12").className="tile2";
          document.getElementById("cell13").className="tile3";
          document.getElementById("cell21").className="tile4";
          document.getElementById("cell22").className="tile5";
          document.getElementById("cell23").className="tile6";
          document.getElementById("cell31").className="tile9";
          document.getElementById("cell32").className="tile7";
          document.getElementById("cell33").className="tile8";
          
      }

  }
