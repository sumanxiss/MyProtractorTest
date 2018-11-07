var data=require('data.json');

var addCustPage=function(){
	
	  /*
	  element(by.model("fName")).sendKeys("Suman");
	  element(by.model("lName")).sendKeys("Kumari");
	  element(by.model("postCd")).sendKeys("12345");
	  element(by.xpath("//button[@type='submit']")).click();
	  let ele=browser.switchTo().alert();
	  ele.accept();*/
	  
	  var firstName= element(by.model("fName"));
	  var lastName=element(by.model("lName"));
	  var pinNo=element(by.model("postCd"));
	  var submitButton=element(by.xpath("//button[@type='submit']"));
	  
	 	  
	  
	  this.firstName=function(){
		  firstName.sendKeys(data.AddCustomer.firstName);
		  return this;  
	  }
	  this.lastName=function(){
		  lasttName.sendKeys(data.AddCustomer.lastName);
		  return this;  
	  }
	  this.pinNo=function(){
		  pinNO.sendKeys(data.AddCustomer.postalNo);
		  return this;  
	  }
	this.submitButton=function(){
		submitButton.click();
		return require('./openAccount.js');
	}	   
	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
	}
	
	}

module.exports=new addCustPage();	  
	
	
	
