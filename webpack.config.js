const path = require("path");

module.exports = {
    entry: {
        content_scripts: "./content_scripts/content.js",
        popup: "./popup/left-pad.js"
    },
    output: {
        path: path.resolve(__dirname, "addon"),
        filename: "[name]/index.js"
    }
};
