var webpack = require('webpack');
var path = require('path');

const appRoot = path.resolve('./src');

module.exports = {
    // mode: 'production',
    mode: 'development',
    optimization: {
        minimize: false,
        noEmitOnErrors: true
    },
    entry: {
        'ng_runtime': ['./src/ng_runtime.ts']
    },

    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    performance: {
        hints: 'warning',
        maxEntrypointSize: 8192000,
        maxAssetSize: 8192000
    },

    output: {
        filename: '[name].dll.js',
        path: path.join(__dirname, 'dist'),

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]',
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: './dist/[name]-manifest.json'
        })
        // suppress Typescript warnings when building Angular into vendor package
        //new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,appRoot),
        //new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, appRoot),
    ],
};
