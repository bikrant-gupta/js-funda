function delt(id){
	console.log(id);
	id.remove();
	// var l=id.firstElementChild;
	// console.log(l);
	// id.removeChild(l);

}
function addnew(){
	var div=document.querySelector(".listitem .container");
	var before=document.querySelector("#button-1");


	var newitem=document.createElement('div');
	newitem.className="form-group row";


	var newitem1=document.createElement('div');
	newitem1.className="col-12 col-md-8";
	newitem.appendChild(newitem1);
	var newitem2=document.createElement('input');
	newitem2.setAttribute('onblur','after(this.id);');
	newitem2.type="text";
	newitem2.className="form-control";


	var l=div.children.length;
	var lnew;
	if(l>=2)
	{
		var lastid=div.children[l-2].firstElementChild.firstElementChild.id;
		l=lastid.length;
		var s="";
		for(i=7;i<l;i++)
		{
			s+=lastid[i];
		}
		lnew=parseInt(s)+1;
		console.log(lnew);

	}
	else{
		lnew=1;
	}
	newitem2.id="textbar"+lnew.toString();
	newitem2.placeholder="newitem";
    newitem1.appendChild(newitem2);

    newitem1=document.createElement('div');
	newitem1.className="col-6 col-md-2";
	newitem.appendChild(newitem1);
	newitem2=document.createElement('button');
	newitem2.innerHTML="edit";
	newitem2.setAttribute('onclick','edit(this.parentNode.parentNode.firstElementChild.firstElementChild);');
	newitem2.className="btn btn-primary";
	newitem1.appendChild(newitem2);

	newitem1=document.createElement('div');
	newitem1.className="col-6 col-md-2";
	newitem.appendChild(newitem1);
	newitem2=document.createElement('button');
	newitem2.setAttribute('onclick','delt(this.parentNode.parentNode);');
	newitem2.innerHTML="delete";
	newitem2.className="btn btn-primary";
	newitem1.appendChild(newitem2);



    div.insertBefore(newitem,before);



	console.log(newitem);
	console.log(div);
	console.log(before);
}
function edit(id){
	id.disabled = false;
}
function after(id){
	id="#"+id;
	console.log(id);
	document.querySelector(id).setAttribute("disabled","true");
}
