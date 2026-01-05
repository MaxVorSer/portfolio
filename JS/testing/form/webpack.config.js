const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: "source-map",
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: [process.env.NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader', 'postcss-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    optimization: {
        minimizer: [
            new ImageMinimizerPlugin({
                minimizer: {
                    implementation: ImageMinimizerPlugin.squooshMinify,
                    options: {
                        encodeOptions: {
                            mozjpeg: {
                                quality: 100,
                            },
                            webp: {
                                lossless: 1,
                            },
                            avif: {
                                cqLevel: 0,
                            },
                        },
                    },
                },
            }),
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Форма оплаты',
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
};
