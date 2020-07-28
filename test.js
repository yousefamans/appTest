/*
function elementJS(ids, divName, priceName) {
	var aTag = document.createElement("a");
	aTag.innerHTML = "phone";
	aTag.href = "/index.html"  ;
	aTag.setAttribute("class","link-txt");
	aTag.setAttribute("id","name-link"+ids);

	document.getElementById(divName+'-box'+ids).appendChild(aTag);

	var h3 = document.createElement("h3");
	h3.innerHTML = "price";
	h3.setAttribute("class","price");
	h3.setAttribute("id",priceName+"-price"+ids);
	document.getElementById(divName+'-box'+ids).appendChild(h3);

	var divImg = document.createElement("div");
	divImg.setAttribute("class", "img-box");
	divImg.setAttribute("id", "img-box-"+ids);
	document.getElementById(divName+'-box'+ids).appendChild(divImg);

	// phone img
	var img = document.createElement("img");
	img.setAttribute("class","phone-img");
	img.setAttribute("id", "img"+ids);
	document.getElementById("img-box-"+ids).appendChild(img);


	var divLink = document.createElement("div");
	divLink.setAttribute("class", "link-button");
	divLink.setAttribute("id", "link-button-"+ids);

	document.getElementById(divName+'-box'+ids).appendChild(divLink);

	var aLink = document.createElement("a");
	aLink.innerHTML = "visit website";
	aLink.href = "/index.html"  ;

	aLink.setAttribute("id","link-btn"+ids);

	document.getElementById('link-button-'+ids).appendChild(aLink);




	

}

*/


/*


document.getElementsByClassName("test1").innerHTML = "55";
document.getElementsByClassName("test").innerHTML = "55";

*/

function testKJ(){
    document.getElementById("test1").innerHTML = "55";	
}



