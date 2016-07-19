
//prototype

function strCheck(str) {
	console.log("Inside function");
	this.str = str;
	this.isEmpty = function() {
		if(this.str==null||this.str.length==0){
		//	if(this.str==null||this.str.trim().length==0){
			return true;
		}else{
			return false;
		}
	};
}

// Use of prototype

function chkString(){
	var res = new strCheck(document.getElementById("txtCheck").value);
	//var res = new strCheck(null);
	document.getElementById("lblOutput").innerHTML = res.isEmpty();
	//console.log(res.isEmpty());
}
