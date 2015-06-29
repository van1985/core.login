describe('Login Service ', function() {

	var service;

	beforeEach(module('core.login'));

	beforeEach(inject(function(CoreLoginSrv) {
		service = CoreLoginSrv;
	}));	

	it('should login', function() {
		var result= service.login('leandro.garcia','1qaz2wsx');
		
		expect(result).toBeDefined();

		expect(result.value).toBe(true);

	});

});