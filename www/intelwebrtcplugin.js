var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.new_activity = function() {
    exec(function(res){}, function(err){}, "intelwebrtcplugin", "new_activity", []);
}

module.exports = new plugin();
