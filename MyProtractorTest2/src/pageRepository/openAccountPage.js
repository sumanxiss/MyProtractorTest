
var openAccountPage=function(){
	
	/*var elem = element(by.css('[ng-click = "openAccount()"]'));
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
	  ele.accept();*/
	  
	  
	  var openAccount=element(by.css('[ng-click = "openAccount()"]'));
	  var custName=element(by.model('custId')).$('[value="1"]');
	  var Dollar=element(by.model('currency')).$('[value="Dollar"]');
	  var submitButton=element(by.xpath("//button[@type='submit']"));
	  
	  var openAccount=element(by.css('[ng-click = "openAccount()"]'));
	  var custName=element(by.model('custId')).$('[value="2"]');
	  var Pound=element(by.model('currency')).$('[value="Pound"]');
	  var submitButton=element(by.xpath("//button[@type='submit']"));	
		  
	  var openAccount=element(by.css('[ng-click = "openAccount()"]'));
	  var custName=element(by.model('custId')).$('[value="3"]');
	  var Rupee= element(by.model('currency')).$('[value="Rupee"]');
	  var submitButton=element(by.xpath("//button[@type='submit']"));
	  
	  this.openAccount=function(){
		  openAccount.click();
		  return this;
	  }
	  this.custName=function(){
		  custName.click();
		  return this;
	  }
	  this.Dollar=function(){
		  Dollar.click();
		  return this;
	  }
	  this.submitButton=function(){
			submitButton.click();
			return this;
		}	   
		this.acceptAlert=function(){
			browser.switchTo().alert().accept();
		}
		 this.openAccount=function(){
			  openAccount.click();
			  return this;
		  }
		  this.custName=function(){
			  custName.click();
			  return this;
		  }
		  this.Pound=function(){
			  Pound.click();
			  return this;
		  }
		  this.submitButton=function(){
				submitButton.click();
				return this;
			}	   
			this.acceptAlert=function(){
				browser.switchTo().alert().accept();
			}
			 this.openAccount=function(){
				  openAccount.click();
				  return this;
			  }
			  this.custName=function(){
				  custName.click();
				  return this;
			  }
			  this.Rupee=function(){
				  Rupee.click();
				  return this;
			  }
			  this.submitButton=function(){
					submitButton.click();
					return this;
				}	   
				this.acceptAlert=function(){
					browser.switchTo().alert().accept();
				}

}

module.exports=new openAccountPage();