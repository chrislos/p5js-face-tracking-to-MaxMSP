/*
This Script combines:
Gene Kogan's p5js-osc (https://github.com/genekogan/p5js-osc) 
with stc's (Binaura) face-tracking-p5js (https://github.com/stc/face-tracking-p5js) 
to a barebone Max-MSP-Emotion receiver for a class I'm teaching..

thanks a lot for sharing your codes... saved me hours. 

© Christian Losert, 01-2023,
*/

// take care that socket is connected.... 
var socket;
var isConnected;

function setup() {
    loadCamera();
    loadTracker();
    loadCanvas(400,300);
    setupOsc(8000, 12000); //OSC IN & OUT PORTS
}
      
function draw() {
    getPositions();
    getEmotions(); 
    
    clear();
    
    noStroke();
    fill(0,150);
    rect(0,0,width,height);
    
    drawPoints();

    
    if (emotions) {
        // angry=0, sad=1, surprised=2, happy=3
        for (var i = 0;i < predictedEmotions.length;i++) {
            rect(i * 110+20, height-80, 30, -predictedEmotions[i].value * 30);    
            sendOsc('/emotion', i+' '+predictedEmotions[i].value);
        }
    }
    
    text("ANGRY", 20, height-40);
    text("SAD", 130, height-40);
    text("SURPRISED", 220, height-40);
    text("HAPPY", 340, height-40);

    
    
}

function drawPoints() {
    fill(255);
    for (var i=0; i<positions.length -3; i++) {
        ellipse(positions[i][0], positions[i][1], 2, 2);
    }
}










// OSC Functions 
function receiveOsc(address, value) {
	console.log("received OSC: " + address + ", " + value);
}

function sendOsc(address, value) {
	if (isConnected) {
		socket.emit('message', [address, value]);
	}
}

function setupOsc(oscPortIn, oscPortOut) {
	socket = io.connect('http://127.0.0.1:8081', { port: 8081, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {
			server: { port: oscPortIn,  host: '127.0.0.1'},
			client: { port: oscPortOut, host: '127.0.0.1'}
		});
	});
	socket.on('connect', function() {
		isConnected = true;
	});
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=2; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}
