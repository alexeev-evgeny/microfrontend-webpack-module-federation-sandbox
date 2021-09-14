// const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
// const deps = Object.keys(rawDeps).reduce((result, key) => {
// 	result[key] = {
// 		requiredVersion: rawDeps[key],
// 		eager: true,
// 		strictVersion: true,
// 		singleton: true,
// 	};
// 	return result;
// }, {});

// console.warn({ deps }, Object.keys(deps))
console.warn(JSON.stringify(deps, null, 4))

module.exports = {
	publicPath: "http://localhost:9001/",
	chainWebpack: config => {
		config.optimization.delete('splitChunks')
	},
	configureWebpack: {
		plugins: [
			new ModuleFederationPlugin({
				name: "child",
				filename: "child-app.js",
				exposes: {
					"./App": "./src/App",
				},
				// shared: ['core-js'],
				// shared: {
				// 	'core-js': { requiredVersion: deps['core-js'] }
				// }
				// shared: {
				// 	vue: {
				// 		import: "vue", // the "vue" package will be used a provided and fallback module
				// 		// shareKey: "shared-vue", // under this name the shared module will be placed in the share scope
				// 		shareScope: "default", // share scope with this name will be used
				// 		singleton: true, // only a single version of the shared module is allowed
				// 		// strictVersion: true, // don't use shared version when version isn't valid. Singleton or modules without fallback will throw, otherwise fallback is used
				// 		version: "2.6.14", // the version of the shared module
				// 		requiredVersion: "^2.6.14" // the required version of the shared module
				// 	}
				// }
				shared: ['vue']
			}),
		],
  },
  devServer: {
	port: 9001,
  },
};
