const path=require("path");
const config={
	mode:"production",
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
				test:/\.js$/i,
				use:{
					loader:"babel-loader",
					options:{
						presets:["es2015"]
					}
				}
			}
		]
	}
};

module.exports=config;