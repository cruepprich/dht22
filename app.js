//https://www.npmjs.com/package/blynk-library
const BlynkLib = require('blynk-library');
 
const blynk = new BlynkLib.Blynk('b42be0df478345648e0c93f9e3df1fdd');
var v1 = new blynk.VirtualPin(1);
var v9 = new blynk.VirtualPin(9);
let txt, rnd

v1.on('write', function(param) {
  blynk.virtualWrite(9,1*param);
  if (param == 0 ){
    txt = '----'
  } else {
    txt = 'Hello There'
  }

  blynk.virtualWrite(0,txt);
  blynk.virtualWrite(2,200*param);
  bumpVal()
});

v1.on('read', function(param) {
  console.log('V1: read', param);
});



v9.on('write', function() {
  bumpVal()
});


const bumpVal = () => {

  rnd = Math.round(Math.random() *(100-0)+0,0)
  console.log('V9: bump', rnd);
  blynk.virtualWrite(3,rnd);
}

blynk.syncVirtual()
