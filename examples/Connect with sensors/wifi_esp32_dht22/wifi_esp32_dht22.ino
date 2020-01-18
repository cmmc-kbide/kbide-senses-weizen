#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Senses_wifi_esp32.h>

#include "DHTesp.h"

float sensor_value;
Senses_wifi_esp32 __senses_iot;
DHTesp DhtSensor1;

void setup() {
  __senses_iot.connect("your ssid", "wifi password", "senses",
                       "--device key--");

  DhtSensor1.setup(4, DHTesp::DHT22);
}
void loop() {
  sensor_value = DhtSensor1.getTemperature();
  __senses_iot.send(1, String(sensor_value));
  delay(10000);
}
