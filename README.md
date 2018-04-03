# dht22
Read DHT22 temperature/humidity sensor with node.js.

## Installation

Requires C library for [bcm2835] (http://www.airspayce.com/mikem/bcm2835/)

```
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.55.tar.gz
tar zxvf bcm2835-1.55.tar.gz
cd bcm2835-1.55
./configure
make
make check
make install
```

```npm install```

## Run
```npm start```


# Connect DHT22
* pin 1 = 3.3v
* pin 2 = data (GPIO 4)
* pin 3 = not used
* pin 4 = Ground

Add pullup resistor (10K) between pin 1 and 2.

![DHT connection](https://goo.gl/images/XhN8C4)


