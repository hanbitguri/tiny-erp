const path = require('path') 


const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports={
    mode:'development',  
    resolve: {
        extensions: ['.js', '.jsx'], 
      },
    entry: './src/index.js' 
    ,
    output:{
        path:path.resolve('./dist'), 
        filename:'bundle.[hash].js'
    },
    module:{ 
        rules:[
            {
                test:/\.css$/, 
                use:['style-loader','css-loader']
            },
            {
                test:/\.png$/,
                use:[
                    {
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]?[hash]'
                    }
                    }
            ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/', 
                use:[
                    {
                        loader:'babel-loader',
                    },
                ]
              },
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'./public/index.html'  
        })
    ],
    devServer: { 
        host: 'localhost',
        port: '3000',
        open: true, 
        
        hot: true,
      },

}