var customerPage=function(){
	
	/*element(by.model('custId')).$('[value="2"]').click();
	element(by.xpath("//button[@type='submit']")).click();*/
	
	var cust=element(by.model('custId')).$('[value="2"]');
	var clickButton=element(by.xpath("//button[@type='submit']"));
	
	this.cust=function(){
		cust.click();
		return require('./accountPage');
	}
}