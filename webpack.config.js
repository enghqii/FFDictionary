const path = require("path");

module.exports = {
    mode: "production",
    entry: {
        background: "./src/background.ts",
        content: "./src/content.ts",
        dict: "./src/dict.ts",
    },
    module: {
        rules: [
            {
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
};