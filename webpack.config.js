const path = require( 'path' );
const FriendlyErrorsWebpackPlugin = require( 'friendly-errors-webpack-plugin' );

const config = {
    entry: [
        './_src/js/app.js',
        './_src/scss/style.scss',
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
    devServer: {
        contentBase: './_site',
        publicPath: '/assets/',
        quiet: true,
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin(),
    ],
    stats: false,
};

module.exports = config;
