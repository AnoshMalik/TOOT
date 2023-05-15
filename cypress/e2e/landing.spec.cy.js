describe("landing page", () => {
	it("loads", () => {
		cy.visit("http://localhost:3000/");
		cy.get(".github-login-button").should("exist");
	});
	it("log in button redirects to github", () => {
		cy.visit("http://localhost:3000/");
		cy.get(".github-login-button").click();
		cy.origin("https://github.com", () => {
			cy.contains("Sign in to GitHub");
		});
	});
	it("logins via github", () => {
		cy.visit("http://localhost:3000/api/auth/github/callback");
		cy.get(".github-login-button").should("not.exist");
		cy.get(".navbar-github-username").should("contain", "test-user");
	});
});
