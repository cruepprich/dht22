//https://www.npmjs.com/package/blynk-library
const BlynkLib = require('blynk-library');
const sensor = require('node-dht-sensor');
 
const blynk = new BlynkLib.Blynk('b42be0df478345648e0c93f9e3df1fdd');

var v9 = new blynk.VirtualPin(9);
let txt, rnd


v9.on('write', function() {
  getSensor()
    .then((data)=>{
      const out = "Temp: "+data.tempF+"  Hum: "+data.hum
      console.log('data',out)
      blynk.virtualWrite(0,out)
      blynk.virtualWrite(3,data.hum)
      blynk.virtualWrite(4,data.tempF)
    });
});





const getSensor = () => {
  return new Promise((resolve,reject) => {
    let sensorOut,tempF
  
    sensor.read(22, 4, function(err, temperature, humidity) {
      if (!err) {
          tempF = temperature*9/5+32
          sensorOut = {"tempC":temperature.toFixed(),"tempF":tempF.toFixed(),"hum":humidity.toFixed()}
          
          resolve(sensorOut)
      } else {
          reject(err)
      }
    });
  })
}


blynk.syncVirtual()
