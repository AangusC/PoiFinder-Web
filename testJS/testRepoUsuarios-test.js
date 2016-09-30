
describe("Test Repo Usuario", function() {

	var repo;
	beforeEach(function() {
		repo = new RepoUsuarios();
	});

	it("test getUsuario existente", function() {
		expect(repo.getUsuario("pp")).toBeDefined();
	});
	it("test getUsuario no existente", function() {
		expect(repo.getUsuario("pipi")).not.toBeDefined();
	});
});