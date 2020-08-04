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

function elementJS(ids) {
        var aTag = document.createElement("a");
        aTag.innerHTML = "name";
        
        aTag.setAttribute("class","link-txt");
        aTag.setAttribute("id","name"+ids);

        document.getElementById('box'+ids).appendChild(aTag);

        var h3 = document.createElement("h3");
        h3.innerHTML = "price";
        h3.setAttribute("class","price");
        h3.setAttribute("id","price"+ids);
        document.getElementById('box'+ids).appendChild(h3);

        var normalPrice_Ptag = document.createElement("p");
        
        normalPrice_Ptag.setAttribute("class","normal-price");
        normalPrice_Ptag.setAttribute("id","normal-price"+ids);
        document.getElementById('box'+ids).appendChild(normalPrice_Ptag);

        var discount_Tag = document.createElement("p");
        
        discount_Tag.setAttribute("class","discount");
        discount_Tag.setAttribute("id","discount"+ids);
        document.getElementById('box'+ids).appendChild(discount_Tag);


        var brand_img = document.createElement("img");
        
        brand_img.setAttribute("class","brand");
        brand_img.setAttribute("id","brand"+ids);
        document.getElementById('box'+ids).appendChild(brand_img);

        var divImg = document.createElement("div");
        divImg.setAttribute("class", "img-box");
        divImg.setAttribute("id", "img-box-"+ids);
        document.getElementById('box'+ids).appendChild(divImg);

        // phone img
        var img = document.createElement("img");
        img.setAttribute("class","phone-img");
        img.setAttribute("id", "img"+ids);
        document.getElementById("img-box-"+ids).appendChild(img);


        var divLink = document.createElement("div");
        divLink.setAttribute("class", "link-button");
        divLink.setAttribute("id", "link-button-"+ids);

        document.getElementById('box'+ids).appendChild(divLink);

        var aLink = document.createElement("a");
        aLink.innerHTML = "visit website";
        

        aLink.setAttribute("id","link"+ids);

        document.getElementById('link-button-'+ids).appendChild(aLink);
}

function phoneData(idIndex, jsonDataIndex ,fileFormat, brand ,normalPrice, name ,img) {
  
  
  var JsonData = fileFormat.links[jsonDataIndex].price ;
  
  var JsonDataInt = JsonData.slice(1);
  var ReplaceComma = parseFloat(JsonDataInt.replace(/,/g, ''));
  var differenceInPrice = normalPrice - ReplaceComma ;

  var percentValue = (parseInt(differenceInPrice) / normalPrice ) * 100   ;

  var roundedPercentValue = Math.round(percentValue) ;

  if (brand == "a") {
      document.getElementById('price'+idIndex).innerHTML = JsonData.slice(0,-3)  ;
      document.getElementById('brand'+idIndex).src = "###########https://cdn.clipart.email/997b00858c031976500e16c850dd3626_transparent-background-amazonin-logo-png_350-350.png"  ;
      document.getElementById("brand"+idIndex).style.top = "80px";

   
  }

  if (brand == "f"){
     document.getElementById('price'+idIndex).innerHTML = fileFormat.links[jsonDataIndex].price  ;    
     document.getElementById('brand'+idIndex).src = "#######https://cdn.freebiesupply.com/logos/large/2x/flipkart-logo-png-transparent.png"  ;

        
  }
  
  document.getElementById('discount'+idIndex).innerHTML = roundedPercentValue + "% <span class="+"off"+">Off </span>" ;
  document.getElementById('normal-price'+idIndex).innerHTML = "<s>"+normalPrice+" ₹</s>" ;
  document.getElementById('img'+idIndex).src = img ;
  document.getElementById('link'+idIndex).href = fileFormat.links[jsonDataIndex].link ;
  document.getElementById('name'+idIndex).innerHTML = name ;

  if (roundedPercentValue == 0) {
        
        document.getElementById("normal-price"+idIndex).style.display = "none" ;
        document.getElementById("discount"+idIndex).style.display = "none" ;
  }
  
  
  

}

fetch('/json/india/amazon_in.json')
  .then(res => res.json())
  .then((json) => {


     phoneData(1, 7 , json , "a" ,  36900 , "iPhone Xr (White, 64 GB)" , "");
     phoneData(2, 1 , json , "a" ,  36900 , "iPhone 7 (Rose Gold, 32 GB)" , "");
    
    


     
  })

  fetch('/json/india/flipkart.json')
  .then(res => res.json())
  .then((json) => {

      phoneData(4, 0 , json , "f" ,  0 , "iPhone Xr (Black, 32 GB)" , "");
      phoneData(5, 1 , json , "f" ,  0 , "iPhone Xr (Rose Gold, 32 GB)" , "");
      phoneData(6, 2 , json , "f" ,  0 , "iPhone Xr Plus (Black, 32 GB)" , "");
      phoneData(7, 3 , json , "f" ,  0 , "iPhone Xr Plus (Gold, 32 GB)" , "");
        
  

        

  })  
       
                












