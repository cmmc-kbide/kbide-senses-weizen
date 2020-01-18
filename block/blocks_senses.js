module.exports = function(Blockly){
  'use strict';

Blockly.Blocks['senses_wifi_connect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("connect Senses IoT platfrom");
    this.appendDummyInput()
        .appendField("SSID")
        .appendField(new Blockly.FieldTextInput("--your SSID--"), "ssid")
        .appendField("WiFi password")
        .appendField(new Blockly.FieldTextInput("--wifi password--"), "pass");
    this.appendDummyInput()
        .appendField("user ID")
        .appendField(new Blockly.FieldTextInput("--your SSID--"), "user_id")
        .appendField("key")
        .appendField(new Blockly.FieldTextInput("--wifi password--"), "key");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("connect to Senses IoT Platform");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['senses_wifi_send'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("send data to Senses IoT");
    this.appendValueInput("slot")
        .setCheck("Number")
        .appendField("slot number");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("send data to Senses IoT Platform");
 this.setHelpUrl("");
  }
};

};