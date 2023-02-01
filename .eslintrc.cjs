module.exports = {
	root: true,
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: latest,
		sourceType: "module",
	},
	plugins: ["svelte3", "@typescript-eslint"],
	ignorePatterns: ["*.cjs"],
	settings: {
		"svelte3/typescript": () => require("typescript"),
	},
	rules: {
		"@typescript-eslint/naming-convention": [
			"warn",
			{
				selector: "variable",
				format: ["camelCase"],
			},
			{
				selector: "class",
				format: ["PascalCase"],
			},
		],
		"curly": "error",
		"eqeqeq": "error",
		"no-throw-literal": "warn",
		"prefer-const": "warn",
		"semi": ["error", "always"],
		"quotes": ["error", "double"],
	},
};
