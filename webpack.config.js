const path = require( 'path' );
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const config = {
    entry: [
        path.resolve( __dirname, './_src/js/app.js' ),
        path.resolve( __dirname, './_src/scss/style.scss' ),
    ],
    output: {
        path: path.resolve( __dirname, 'assets' ),
        filename: 'app.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        minified: true,
                        presets: [
                            'env',
                        ],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ],
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
    ],
    stats: false,
};

module.exports = config;
