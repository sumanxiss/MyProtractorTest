var deleteCustomer=function(){
	
	 var elem1 = element(by.css('[ng-click = "showCust()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem1.click();
	  });
	  var elem2 = element(by.css('[ng-click = "deleteCust(cust)"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  
	  this.elem1=function(){
		  elem1.click();
		  return this;
	  }
	  this.elem2=function(){
		  elem2.click();
		  return this;
	  }
}

module.exports=new listPage();	