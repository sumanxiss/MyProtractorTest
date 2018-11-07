var data=require('data.json');

var accountPage=function(){
	
	 /*element(by.model('custId')).$('[value="2"]').click();
	 element(by.xpath("//button[@type='submit']")).click();
	 
	 element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	 
	 element(by.model('accountNo')).$('[value="number:1006"]').click();
	 element(by.xpath("//button[contains(@ng-click,'deposit()')]")).click();
	 element(by.model("amount")).sendKeys("2000");
     element(by.xpath("//button[@type='submit']")).click();
     
     element(by.model('accountNo')).$('[value="number:1006"]').click();
	 element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'withdrawl()')]")).click();
	  element(by.model("amount")).sendKeys("2001");
	  element(by.xpath("//button[@type='submit']")).click();
	  
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.model("amount")).sendKeys("1000");
	  element(by.xpath("//button[contains(@ng-click,'withdrawl()')]")).click();
	  element(by.xpath("//button[@type='submit']")).click();
	  
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();
	  
	  element(by.model('accountNo')).$('[value="number:1006"]').click();
	  element(by.xpath("//button[contains(@ng-click,'transactions()')]")).click();*/
	 
	 var custName=element(by.model('custId')).$('[value="2"]');
	 var clickButton=element(by.xpath("//button[@type='submit']"));
	 
	 var transactionBtn=element(by.xpath("//button[contains(@ng-click,'transactions()')]"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var deposit=element(by.xpath("//button[contains(@ng-click,'deposit()')]"));
	 var enterAmount=element(by.model("amount"));
	 var submitBtn=element(by.xpath("//button[@type='submit']"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var transactionBtn= element(by.xpath("//button[contains(@ng-click,'transactions()')]"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var withdrawal=element(by.xpath("//button[contains(@ng-click,'withdrawl()')]"));
	 var enterAmount=element(by.model("amount"));
     var submitBtn=element(by.xpath("//button[@type='submit']"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var enterAmount=element(by.model("amount"));
	 var withdrawal=element(by.xpath("//button[contains(@ng-click,'withdrawl()')]"));
	 var submitBtn=element(by.xpath("//button[@type='submit']"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var transactionBtn= element(by.xpath("//button[contains(@ng-click,'transactions()')]"));
	 
	 var accountNo=element(by.model('accountNo')).$('[value="number:1006"]');
	 var transactionBtn= element(by.xpath("//button[contains(@ng-click,'transactions()')]"));
	 
	 var logout=element(by.xpath("//button[contains(@ng-click,'byebye()')]"));
	 
	 this.custName=function(){
		 custName.click();
		 return this;
	 }
	this.clickButton=function(){
		clickButton.click();
		return this;
	}
	this transaction=function(){
		transaction.click();
	    return require('./listTxPage.js');
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this deposit=function(){
		deposit.click();
		return this;
	}
	this enterAmount=function(){
		enterAmount.sendKeys(data.depositMoney.amount);
		return this;
	}
	this submitButton=function(){
		submitButton.click();
		return this;
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this transaction=function(){
		transaction.click();
	    return require('./listTxPage.js');
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this withdrawal=function(){
		withdrawal.click();
		return this;
	}
	this enterAmount=function(){
		enterAmount.sendKeys(data.withdrawError.amount);
		return this;
	}
	this submitButton=function(){
		submitButton.click();
		return this;
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this enterAmount=function(){
		enterAmount.sendKeys(data.withdrawSuccess.amount);
		return this;
	}
	this withdrawal=function(){
		withdrawal.click();
		return this;
	}
	this submitButton=function(){
		submitButton.click();
		return this;
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this transaction=function(){
		transaction.click();
	    return require('./listTxPage.js');
	}
	this acccountNo=function(){
		accountNo.click();
		return this;
	}
	this transaction=function(){
		transaction.click();
	    return require('./listTxPage.js');
	}	
	this logout=function(){
		logout.click();
		return require('./customerPage')
	}
}

module.exports=new accountPage();