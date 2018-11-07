var loginPage= function(){
	
	/*element(by.partialButtonText("Bank Manager Login")).click();
	var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	  elem.click();*/
	       
   var manager=element(by.partialButtonText("Bank Manager Login"));
   var customer=element(by.css('[ng-click = "customer()"]'));
   
   this.clickManager=function(){
	   clickManager.click();
	   return require('./managerPage.js');
   }
	
   this.clickCustomer=function(){
	   clickCustomer.click();
	   return require('./customerPage.js');
	   }
	  }
  
	  module.exports=new loginPage();
	
