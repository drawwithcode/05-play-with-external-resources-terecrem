var mySong;
var mySong2;
var analyzer;
var analyzer2;



function preload(){
    mySong = loadSound('assets/musicauno.mp3');
    mySong2 = loadSound('assets/musicdue.mp3');
     myImage = loadImage('./assets/uno.jpg')
}

function setup() {
  analyzer= new p5.Amplitude();
  analyzer.setInput(mySong)//dichiaro a quale mp3 applicare


  analyzer2= new p5.Amplitude();
  analyzer2.setInput(mySong2)//dichiaro a quale mp3 applicare

     createCanvas(windowWidth, windowHeight);
     background('black');

     rectMode(CENTER)
}

function draw() {

  image(myImage, 0, 0,windowWidth, windowHeight);

  var volume=analyzer.getLevel();
  console.log(volume)//per vedere nella cons il valore del vol
  volume=map(volume,0,1,50,width/2)


    var volume2=analyzer2.getLevel();
    console.log(volume2)//per vedere nella cons il valore del vol
    volume2=map(volume2,0,1,50,width/2)




if (mouseX < 500) {
    if (mySong.isPlaying() == false) {
        mySong.play();
        }
  stroke('#182845')
    strokeWeight(4)
    fill('#E0C38A')
     rect(460,520, volume,volume);
}
else {

    mySong.pause();
    stroke('#182845')
      strokeWeight(4)
    fill('#D4A9AA')
     rect(460,520, volume,volume);
}

// secondo if

if (mouseX > 900) {
    if (mySong2.isPlaying() == false) {
        mySong2.play();
        }
    stroke('#FEF5F4')
    fill('#182845')
      strokeWeight(5)
     rect(930,380, volume2,volume2);
}
else {

    mySong2.pause();
    stroke('#FEF5F4')
      strokeWeight(5)
    fill('#D4A9AA')
     rect(930,380, volume2,volume2);
}

push();
textSize(26);
textStyle('bold')
  textFont('Gotham')
  noStroke()
  fill('white')
text('F I N D  T H E  I N T E R A C T I V E  S H A P E S ', 430,650);
pop();

push();
textSize(26);
textStyle('bold')
  textFont('Gotham')
  noStroke()
  fill('#182845')
text('F I N D  T H E  I N T E R A C T I V E  S H A P E S ', 432,652);
pop();
}
