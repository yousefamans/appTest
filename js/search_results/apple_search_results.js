 





















function phoneData(idIndex, jsonDataIndex,idName ,fileFormat, Name  , img) {
  document.getElementById(idName+'-name-link'+idIndex).innerHTML = Name   ;
  document.getElementById(idName+'-price'+idIndex).innerHTML = fileFormat.links[jsonDataIndex].price  ;
  
  document.getElementById(idName+'-img'+idIndex).src =  img  ;
  document.getElementById(idName+'-link-btn'+idIndex).href =  fileFormat.links[jsonDataIndex].link  ;

  

} 



///flipkart


function india() {



  fetch('/json/india/flipkart.json')
  .then(res => res.json())
  .then((json) => {


    phoneData(1, 59 , json ,"se" ,"Samsung S20 flipkart" , "https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg?q=70")

   

    

  
  })

/*
  fetch('/json/india/amazon_in.json')
  .then(res => res.json())
  .then((json) => {

    
    phoneData(2, 29 , json, "samsung-galaxy-s20 Amazon" , "https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg?q=70")
    

    
    

  
  })
*/
}

india();

/*
function usa() {



  fetch('/json/usa/amazon_us.json')
  .then(res => res.json())
  .then((json) => {


    phoneData(1, 61 , json , "Apple S20 flipkart" , "https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg?q=70")

   

    

  
  })


  fetch('/json/usa/apple_amazon_usa.json')
  .then(res => res.json())
  .then((json) => {

    
    phoneData(2, 0 , json, "Apple-galaxy-s20 Amazon" , "https://rukminim1.flixcart.com/image/416/416/k6mibgw0/mobile/y/h/f/samsung-galaxy-s20-sm-g980fzadinu-original-imafpfkbhhtf6b8v.jpeg?q=70")
    

    
    

  
  })

}




usa();



// amazon





*/



