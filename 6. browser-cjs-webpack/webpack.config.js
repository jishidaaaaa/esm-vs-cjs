const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "public/a.js"),
    output: {
        path: path.resolve(__dirname, "public")
    },
    devtool: false,
}