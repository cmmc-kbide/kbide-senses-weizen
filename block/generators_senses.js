module.exports = function(Blockly){
  'use strict';

Blockly.JavaScript['senses_wifi_connect'] = function(block) {
  var text_ssid = block.getFieldValue('ssid');
  var text_pass = block.getFieldValue('pass');
  var text_user_id = block.getFieldValue('user_id');
  var text_key = block.getFieldValue('key');
  var code = `#VARIABLE Senses_wifi_esp32 __senses_iot; #END
__senses_iot.connect("${text_ssid}", "${text_pass}", "${text_user_id}", "${text_key}");
`;
  return code;
};

Blockly.JavaScript['senses_wifi_send'] = function(block) {
  var value_slot = Blockly.JavaScript.valueToCode(block, 'slot', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `__senses_iot.send(${value_slot},String(${value_value}));\n`;
  return code;
};

}