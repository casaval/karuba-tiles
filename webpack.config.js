module.exports = {
    entry: "./make.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "!css!sass" },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=/assets/fonts/[name].[ext]'
            }        ]
    }
};