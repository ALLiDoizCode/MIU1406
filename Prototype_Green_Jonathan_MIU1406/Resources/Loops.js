for(var i = 0, j = PetStore.length; i<j; i++ ){
	for (var d = 0, k = Dog1.length; d<k; d++){
		var dog1 = Ti.UI.createTableViewRow({
		title:Dog1[d],
		hasChild: true,
		});	
	sec2.add(dog1);
	dog1.addEventListener("click", infoDetail);
	}
};