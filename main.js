var a=[1,-7,2,3,-9,4,-2,10]; 
			function linga(a){
			var y=[];
			for(i=0; i<a.length; i++){
				if(a[i]<0){
					y.push(a[i]*-1)
				}
			}
			console.log(y);
			}
			linga(a);