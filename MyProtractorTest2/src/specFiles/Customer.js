describe('XYZ bank application', function() {
  it('loginPage', function() {
	  browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
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
  
  it('transactionAfterDeposit', function() {
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