describe('XYZ bank application', function() {
	
  it('loginPage', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  browser.sleep(2000); 
  });

  it('managerLogin', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  browser.sleep(2000);
  });
  
  it('AddCustomer', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  var elem = element(by.css('[ng-click = "addCust()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();	       
	  });
	  element(by.model("fName")).sendKeys("Suman");
	  element(by.model("lName")).sendKeys("Kumari");
	  element(by.model("postCd")).sendKeys("12345");
	  element(by.xpath("//button[@type='submit']")).click();
	  let ele=browser.switchTo().alert();
	  ele.accept();
      browser.sleep(3000);
    });
  
  it('openAccountForDollar', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  var elem = element(by.css('[ng-click = "openAccount()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="1"]').click();
	  browser.sleep(1000);
	  element(by.model('currency')).$('[value="Dollar"]').click();
	  browser.sleep(1000);
	  element(by.xpath("//button[@type='submit']")).click();
      browser.sleep(1000);
      let ele=browser.switchTo().alert();
	  ele.accept();
	  browser.sleep(1000);
      
  });
  
  it('openAccountForPound', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  var elem = element(by.css('[ng-click = "openAccount()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  browser.sleep(1000);
	  element(by.model('currency')).$('[value="Pound"]').click();
	  browser.sleep(1000);
	  element(by.xpath("//button[@type='submit']")).click();
      browser.sleep(1000);
      let ele=browser.switchTo().alert();
	  ele.accept();
	  browser.sleep(1000);
      
  });
  
  it('openAccountForRupees', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  var elem = element(by.css('[ng-click = "openAccount()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="3"]').click();
	  browser.sleep(1000);
	  element(by.model('currency')).$('[value="Rupee"]').click();
	  browser.sleep(1000);
	  element(by.xpath("//button[@type='submit']")).click();
      browser.sleep(1000);
      let ele=browser.switchTo().alert();
	  ele.accept();
	  browser.sleep(2000);
      
  });
  
  it('deleteCustomer', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  element(by.partialButtonText("Bank Manager Login")).click();
	  var elem = element(by.css('[ng-click = "showCust()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  var elem = element(by.css('[ng-click = "deleteCust(cust)"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  browser.sleep(2000); 
	  
  });
  
});