import myRule from "./rules/my-rule.js";

export default [
	{
		// define the plugin
		plugins: {
			local: {
				rules: {
					"my-rule": myRule,
				},
			},
		},

		// configure the rule
		rules: {
			"local/my-rule": ["error"],
		},
	},
];