/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */



function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }




}


function newDoc() {
  window.location.assign("https://www.w3schools.com")
}


/*

function showMore() {
  document.getElementById("show-more-top-deals").classList.toggle("show");
  document.getElementById("show-more").style.display = "none";
}
*/

function showMoreS() {
  
  document.getElementById("showMoreTopDeals").style.display = "block";
  document.getElementById("show-more-btn1").style.display = "none";
  

}


// doepdown country



   
function myFunction() {

 // document.getElementById("myDropdown").classList.toggle("show");
  var x = document.getElementById("myDropdown");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  
  
  
}
  

  

function cancle(){
  document.getElementById("myDropdown").style.display = "none";
 
  
}









/*
fetch('data.json')
.then(res => res.json())
.then((json) => {
  

  var price =  json.links[1].price ; 
  document.getElementById('price1').innerHTML = "Price: " + price.slice(1) ;  
  



})

*/

