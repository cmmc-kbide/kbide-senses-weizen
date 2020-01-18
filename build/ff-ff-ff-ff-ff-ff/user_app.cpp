#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>
#include <Senses_wifi_esp32.h>

#include <OneWire.h>
#include <DallasTemperature.h>

float sensor_value;
Senses_wifi_esp32 __senses_iot;
OneWire oneWire_DS18B20(2);
DallasTemperature sensors_ds18b20(&oneWire_DS18B20);

void setup() {
  __senses_iot.connect("your ssid", "wifi password", "senses",
                       "--device key--");
}
void loop() {
  sensor_value = sensors_ds18b20.getTemperatureC(0);
  __senses_iot.send(1, String(sensor_value));
  delay(10000);
}
