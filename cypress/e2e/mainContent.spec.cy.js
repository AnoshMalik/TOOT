describe("landing page", () => {
	it("login via github", () => {
		cy.visit("http://localhost:3000/api/auth/github/callback");
		cy.get(".github-login-button").should("not.exist");
		cy.get(".navbar-github-username").should("contain", "test-user");
		cy.get(".content-textarea").should("exist");
		cy.get(".content-textarea").type("Macbath wuz a scortish kiinng");
		cy.get(".check-button").click();
		cy.get(".content-textarea").type("Macbath wuz a scortish kiinng");
        cy.get(".response-textarea").should("not.be.empty");
        cy.get(".speak-button").click();
        cy.get(".speak-button").click();

		// eslint-disable-next-line cypress/no-unnecessary-waiting
		cy.get(".clear-button").click();
	});
	// it("check textbox is editable", () => {
	//     cy.get("div").should("exist");
	// });
});
