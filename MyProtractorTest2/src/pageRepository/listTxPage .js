var listTxPage=function(){
	
	// element(by.xpath("//button[contains(@ng-click,'back()')]")).click();
	 
	 var backButton=element(by.xpath("//button[contains(@ng-click,'back()')]"));
	 
	 this.backButton=function(){
		 backbutton.click();
		 return require=('./accountPage')
	 }
	
}

module.exports=new listTxPage();	