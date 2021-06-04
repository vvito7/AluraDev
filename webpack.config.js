const path = require('path');

module.exports = {
    entry: [
        './src/assets/js/editor.js',
        './src/assets/js/image.js',
        './src/assets/js/comunidade.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}