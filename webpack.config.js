const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    // if we need to remove minification from the code
    mode: "development",
    // This option controls if and how source maps are generated.
    // eval - Each module is executed with eval() and //@ sourceURL.
        // This is pretty fast. The main disadvantage is that it doesn't
        // display line numbers correctly since it gets mapped to transpiled code
        // instead of the original code (No Source Maps from Loaders).
    devtool: false,

}