



var obj1 = document.createElement("audio");
obj1.src="http://4umi.com/web/sound/beat.wav";
obj1.volume=0.10;
obj1.autoPlay=false;
obj1.preLoad=true; 

var obj2 = document.createElement("audio");
obj2.src="http://www.weblust.com/sounds/drum6.wav";
obj2.volume=0.10;
obj2.autoPlay=false;
obj2.preLoad=true; 

var obj3 = document.createElement("audio");
obj3.src="http://www.denhaku.com/r_box/linn/sd1.wav";
obj3.volume=0.10;
obj3.autoPlay=false;
obj3.preLoad=true; 


var obj4 = document.createElement("audio");
obj4.src="http://bigsamples.free.fr/d_kit/hithat/606chat.wav";
obj4.volume=0.10;
obj4.autoPlay=false;
obj4.preLoad=true; 


var obj0 = document.createElement("audio");
obj0.src="http://media.april.org/audio/wesnoth/core_sounds/mace.wav";
obj0.volume=0.10;
obj0.autoPlay=false;
obj0.preLoad=true; 

initObj();

function initObj () {
  $("#onBtn").bootstrapSwitch();
  $('#onBtn').bootstrapSwitch('state', false);
}


$('#onBtn').on('switchChange.bootstrapSwitch', function () {
    state = $('#onBtn').bootstrapSwitch('state');
    if (state == true){
      $("#displayResult").text("- -");
    } else {
      clearInterval(timerId);
      arrToPlay = [];
      result = true;
      player = 0;
      round = 0;
      $("#displayResult").html("&nbsp;&nbsp;");
    }
});

$("#startBtn").click(function(){
  if (state == true){
    initGame();
  }
}); 


$("#strictBtn").click(function(){
  if (state == true){
    if ( strict == true){
      strict = false;
      $("#whitecircle").css({backgroundColor: 'white'});
    } else {
      strict = true;
      $("#whitecircle").css({backgroundColor: 'red'});
    }
  }
}); 

var timerId;
var state = false;
var strict = false
var arrPlayed = [];
var arrToPlay = [];
var round = 0;
var roundPlayed = 0;
var player = 0;
result = true;

function initGame () {
  arrToPlay = [];
  for (var i = 0; i < 21; i++){
    arrToPlay.push(Math.floor((Math.random() * 4) + 1))
  }
  result = true;
  player = 0;
  round = 0;
  $("#displayResult").text(round);
  timeToplay(0);
  
}

function timeToplay (whois) {
  if (result == true){
    if (whois == 0){
        $("#displayResult").text(round);
        if (round == 20){
          initGame ()
        } else {
        iaPlay();
        }
    } else if (whois == 1){
      //timer vien ici
      player = 1;
  
    }
  } else if (result == false) {
    obj0.play();
    $("#displayResult").text("! !");
    if ( strict == false){
      setTimeout(function () {
        round --;
        result = true;
        $("#displayResult").text(round);
        iaPlay();

      }, 600)
    } else {
      initGame()
    }


  }
}

function playerPlay (played) {
    arrPlayed.push(played)
    result = true;
    for (var i = 0; i < arrPlayed.length; i++){
      if (arrPlayed[i] != arrToPlay[i]){
      player = 0;
      result = false
      arrPlayed = [];
      timeToplay(1);
      }
    }
    if (arrPlayed.length == round){
      player = 0;
      arrPlayed = [];
      timeToplay(0);  
    }
}


function iaPlay () {
  round ++;
  var toPlay = 0;
  timerId = setInterval(function () {
    playSound(arrToPlay[toPlay]);
    $("#br"+ arrToPlay[toPlay]).addClass('test');
    showDiv(arrToPlay[toPlay]);
    toPlay++;
    if (toPlay == round){
      iaPlayed();
    }
  },1100)
}

function iaPlayed () {
    clearInterval(timerId);
    setTimeout(function () {
      timeToplay(1)
    }, 1100)
}


function playSound (toP) {
  $("#br"+ toP).click();
}

function showDiv (toP) {
  setTimeout(function () {
    $("#br"+ toP).removeClass('test');
  }, 600)
}


$("#br1").click(function() {
  if(state == true){
    obj1.play();
    if(player == 1){
      playerPlay(1);
    }
  }
 });


$("#br2").click(function() {
  if(state == true){
    obj2.play();
    if(player == 1){
      playerPlay(2);
    }
  }
});

$("#br3").click(function() {
  if(state == true){
    obj3.play();
    if(player == 1){
      playerPlay(3);
    }
  }
});


$("#br4").click(function() {
  if(state == true){
    obj4.play();
    if(player == 1){
      playerPlay(4);
    }
  }
});