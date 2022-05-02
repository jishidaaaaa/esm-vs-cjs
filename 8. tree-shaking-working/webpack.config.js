const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "lib/a.js"),
    output: {
        path: path.resolve(__dirname, "dist")
    },
    devtool: false,
}
