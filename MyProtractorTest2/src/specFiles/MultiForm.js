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
  it('customerLogin', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('verifyCurrencyType', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('initialTransaction', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  browser.sleep(3000); 
	  
  });
  
  it('depositMoney', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click();
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'deposit()')]")).click();
	  element(by.model("amount")).sendKeys("2000");
	  element(by.xpath("//button[@type='submit']")).click();
	  browser.sleep(3000); 
	  
  });
  
  it('transactionAfterDeposite', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('withdrawError', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'withdrawl()')]")).click();
	  element(by.model("amount")).sendKeys("2001");
	  element(by.xpath("//button[@type='submit']")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('withdrawSuccess', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.model("amount")).sendKeys("1000");
	  element(by.xpath("//button[contains(@ng-click,'withdrawl()')]")).click();
	  element(by.xpath("//button[@type='submit']")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('transactionAfterWithdraw', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('transactionReset', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('mainPage', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  element(by.xpath("//button[contains(@ng-click,'back()')]")).click();
	  browser.sleep(2000); 
	  
  });
  
  it('logout', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
	  var elem = element(by.css('[ng-click = "customer()"]'));
	  browser.wait(protractor.ExpectedConditions.elementToBeClickable(elem), 10000).then(function(){
	       elem.click();
	  });
	  element(by.model('custId')).$('[value="2"]').click();
	  element(by.xpath("//button[@type='submit']")).click(); 
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  element(by.xpath("//button[contains(@ng-click,'back()')]")).click();
	  element(by.xpath("//button[contains(@ng-click,'byebye()')]")).click();
	  browser.sleep(2000); 
	  
  });
  
});