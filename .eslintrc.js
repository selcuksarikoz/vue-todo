module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'comma-dangle': 'off',
		'semi-color': 'off',
		'object-curly-spacing': 'off',
		'prefer-destructuring': 0,
		'indent': 0,
		'no-multiple-empty-lines': 0,
		'quotes': ['error', 'single'],
		'no-tabs': 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
