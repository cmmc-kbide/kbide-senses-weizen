const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
  blocks: [ // use "blocks : [ " in normally situation but this need to override base block from esp-idf platforms
  	{
  		name : "Senses IoT Platform",
  		icon: `file:///${dirIcon}/static/icons/ic_launcher.png`,
  		index : 0,
  		color: "230",
  		blocks : [
  			"senses_wifi_connect",
  			{
  				xml : `<block type="senses_wifi_send">
                        <value name="slot">
                            <shadow type="math_number">
                                <field name="NUM">1</field>
                            </shadow>
                        </value>
                        <value name="value">
                            <shadow type="math_number">
                                <field name="NUM">0</field>
                            </shadow>
                        </value>
                    </block>`
            }
  		]
  	}
  ],
};