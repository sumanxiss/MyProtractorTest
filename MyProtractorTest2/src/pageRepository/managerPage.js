var managerPage=function(){
	
	/*var elem = element(by.css('[ng-click = "addCust()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();	       
	  });
	*/
	 var addCust=element(by.css('[ng-click = "addCust()"]'));
	 
	 this.clickaddCust=function(){
		  clickaddCust.click();
		  return require('./addCustPage.js');
	  }  
	
}