var fs = require("fs");
var path = require("path");
var rootdir = process.env.PWD;
var valuesPath = "/platforms/android/app/src/main/res/values/";
var colorsFile = "colors.xml";
var destFile = path.join(rootdir, valuesPath, colorsFile);
var destDir = path.dirname(destFile);

module.exports = {

    createAndroidColorXml: function (context) {
        console.log("*************************************");
        console.log(`before_plugin_install running`);
        console.log("*************************************");

        if (fs.existsSync(destDir)) {
            if (!fs.existsSync(destFile)) {
                console.log("*************************************");
                console.log(`creating new  ${destFile}`);
                console.log("*************************************");
                fs.writeFile(
                    destFile,
                    '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n <color name="colorPrimary">#3F51B5</color>\n <color name="colorPrimaryDark">#303F9F</color>\n <color name="colorAccent">#FF4081</color>\n <color name="black_overlay">#66000000</color>\n</resources>',
                    function (err) {
                        if (err) {
                            console.error("writeFile error" + err);
                        }
                        console.log(`${colorsFile} created!`);
                    }
                );
            } else {
                console.log(`skipping, file ${colorsFile}  exists`);
            }
        } else {
            console.log("skipping, android platform not found");
        }
    }

};