//Table2
			var table1 = Ti.UI.createTableView({
				top: myBorder.top + myBorder.height,
				//backgroundColor:"black"
			});
			
			var sec1 = Ti.UI.createTableViewSection({
				headerTitle: "Description",
				
			});
			
			//Load Data
			var info1 = [sec1];
			table1.setData(info1);
			
			for(var i = 0, j = PetStore.length; i<j; i++ ){	
				//for(desc = 0 , info = Dog0.length; desc<info; desc++){
					var data1 = Ti.UI.createTableViewRow({
					title:Dog0[i].Desc,
					//hasChild: true,
					});	
				sec1.add(data1);
				//data1.addEventListener("click", infoDetail2);
				//}
					
			};	
		//EndTable2