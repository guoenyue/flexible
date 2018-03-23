const path=require("path");
const config={
	mode:"development",
	entry:{
		index:"./js/index",
		flexible:"./js/flex"
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"[name].bundle.js"
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/i,
				use:{
					loader:"babel-loader",
					options:{
						presets:["es2015","react"]
					}
				}
			}
		]
	},
	resolve:{
		extensions: [".js", ".json",".jsx",".css"]
	}
};

module.exports=config;