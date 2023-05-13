const { defineConfig } = require("cypress");

module.exports = defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
			config.env = {
				...process.env,
				...config.env,
				CYPRESS_TEST: "1",
			};
			return config;
		},
	},
});
