





function phoneData(idIndex, sortedPhoneListIndex) {
  document.getElementById('phone'+idIndex).innerHTML =  phonesList[sortedPhoneListIndex].name  ;
  document.getElementById('price'+idIndex).innerHTML = "Price: " + phonesList[sortedPhoneListIndex].price  ;
  document.getElementById('difference'+idIndex).innerHTML =  phonesList[sortedPhoneListIndex].percent + "% Off" ;
  document.getElementById('img'+idIndex).src =  phonesList[sortedPhoneListIndex].img  ;
  document.getElementById('linkBtn'+idIndex).href =  phonesList[sortedPhoneListIndex].linkUrl  ;
  document.getElementById('color'+idIndex).style.backgroundColor =  phonesList[sortedPhoneListIndex].color  ;
  if (phonesList[sortedPhoneListIndex].brand == "f"){
      document.getElementById('brand'+idIndex).src =  "https://c7.uihere.com/files/946/191/806/flipkart-e-commerce-logo-bangalore-chief-executive-others.jpg"  ;
  }
  
  
  

} 

  












