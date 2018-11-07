var data=require('./data.json')
var login=require('./src/pageRepositiory/loginPage.js')

describe('MultiForm e2e automation', function() {
	  it('e2e Flow', function() {
		browser.get(data.url);
		var managerPage=login.clickManager();
		var addCustPage=managerPage.clickAddCust();
		addCustPage.firstName();
		addCustPage.lastName();
		addCustPage.pinNo();
		var openAccount=addCustPage.submitButton();
		openAccount.acceptAlert();
		openAccount.openAccount();
		openAccount.custName();
		openAccount.Dollar();
		openAccount.submitButton();
		openAccount.acceptAlert();
		openAccount.openAccount();
		openAccount.custName();
		openAccount.Pound();
		openAccount.submitButton();
		openAccount.acceptAlert();  
		openAccount.openAccount();
		openAccount.custName();
		openAccount.Rupee();
		openAccount.submitButton();
		openAccount.acceptAlert();
		var listPage=listPage.elem1();
		listPage.elem2();
		var customerPage=login.clickCustomer();
		var accountPage=customerPage.cust();
		accountPage.custName();
		acccontPage.clickButton();
		var listTxPage=accountPage.transaction();
		accountPage.acccountNo();
		accountPage.deposit();
		accountPage.enterAmount();
		accountPage.submitButton();
		accountPage.acccountNo();
		var listTxPage=accountPage.transaction();
		accountPage.acccountNo();
		accountPage.withdrawal();
		accountPage.enterAmount();
		accountPage.submitButton();
		accountPage.acccountNo();
		accountPage.enterAmount();
		accountPage.withdrawal();
		accountPage.submitButton();
		accountPage.acccountNo();
		var listTxPage=accountPage.transaction();
		accountPage.acccountNo();
		var listTxPage=accountPage.transaction();
		var accountPage=managerPage.backButton();
		var managerPage=listTxPage.logout();
		  
	  });
});  