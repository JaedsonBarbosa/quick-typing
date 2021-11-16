module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,css,js,png,html,webmanifest}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'build/sw.js'
};