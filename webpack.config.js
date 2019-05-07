module.exports = {
    entry: [
        'webpack-dev-server/client/?http://localhost:8080',
        __dirname + '/src/js/content.js'
    ],
    output: {
        publicPath: 'dist/',
        path: __dirname + '/dist/',
        filename: 'app.js'
    },
    devtool: '#sourcemap',
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=react']
            }
        ]
    },
}