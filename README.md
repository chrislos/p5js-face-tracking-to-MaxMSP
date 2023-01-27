# p5js-face-emotion-tracking-to-MaxMSP
Combining Gene Kogan's p5js-osc (https://github.com/genekogan/p5js-osc) & Agoston Nagy's (Binaura) face-tracking-p5js (https://github.com/stc/face-tracking-p5js) to a barebone "hello Max/MSP world" example for a class preparation....



# howto
1. install node from https://nodejs.org/en/
2. go to folder via terminal and install node packages
```
cd 5js-face-emotion-tracking-to-MaxMSP 
npm install
```
3. start node-js script either via terminal
```
cd 5js-face-emotion-tracking-to-MaxMSP 
node bridge.js
```
or just by pressing 'start script' in the max_receive.maxpat patch.

4. open max_emotion/index.html in your webbrowser.
5. now your primary camera should show up and face detection should send it's predicitons via OSC port 12000 to your Max Patch.

only tested on mac.


Thanks again Gene and Agoston for saving me hours of work.
cheers

![MaxEmotion](/assets/images/hello.png)
