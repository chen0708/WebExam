var line = new Array();
var list = new Array();

function show() {
	   function show(){
		    var table=document.getElementById("tb");
		    for(var i=1;i<=9;i++){
		     var trn=document.createElement("tr");
		     table.appendChild(trn);  
		     for(var j=1;j<=i;j++){
		      var tdn=document.createElement("td");
		      trn.appendChild(tdn);
		      tdn.innerHTML=j+"*"+i+"="+(j*i);
		     }
		    }
		   }
}
function lin() {
	var sum=0;
	for ( i = 1; i < 10; i++) {
		for (var j = 1; j <= i; j++) {
           sum+=i*j;
		}

	}
}