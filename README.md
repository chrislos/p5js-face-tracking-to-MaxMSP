# p5js-face-emotion-tracking-to-MaxMSP
Combining Gene Kogan's p5js-osc (https://github.com/genekogan/p5js-osc) & stc's (Binaura) face-tracking-p5js (https://github.com/stc/face-tracking-p5js) to a barebone "hello Max/MSP world" example for a class preparation....


# howto
1. install node under https://nodejs.org/en/
2. goto 5js-face-emotion-tracking-to-MaxMSP folder and install node packages via 'npm install' command in console
3. either goto 5js-face-emotion-tracking-to-MaxMSP folder via console and start node script with 'node bridge.js' command or just by clicking start script in the max_receive.maxpat patch.
4. open /max_emotion/index.html in your webbrowser.
5. now your primary camera should show up and face detection should send it's predicitons via OSC port 12000 to your Max Patch.

only tested on mac.


Thanks again Gene and stc for saving me hours of work.
cheers
