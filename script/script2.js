"use strict"

let header_content_info_container = document.getElementById("header_content_info_container"),
 header_content_info_container2 = document.getElementById("header_content_info_container2"),


countries_element = document.getElementsByClassName("countries_element"),
container_select_right_side = document.getElementById('container_select_right_side'),
container_select = document.getElementById('container_select'),
container_countries = document.getElementById('container_countries'),
countries_element_text_special = document.getElementById('countries_element_text_special'),
countries_element_text  = document.getElementsByClassName("countries_element_text"),
special_countries_element_image = document.getElementById("special_countries_element_image"),


bootsProductContainerSlider = document.getElementById('bootsProductContainerSlider'),
bootsProductSlider  = document.querySelectorAll('a.bootsProductSlider'),
bootsProduct = document.querySelector("bootsProduct"),
arrow_right  = document.getElementById('arrow_right'),
arrow_left  = document.getElementById('arrow_left'),
favorite  = document.getElementById('favorite'),
minicart_content = document.getElementById('minicart_content'),
minicart_content_text = document.getElementById('minicart_content_text'),

hearts  = document.querySelectorAll('.fa-heart');

/*INDEX2.HTML */
let
finalPrince = parseFloat(document.getElementById("final-prince").textContent),
regularPrice = parseFloat(document.getElementById("regular-price").textContent),
resultSubstraction = document.getElementById("resultSubstraction"),
showMore = document.getElementsByClassName("showMore"),
showButton = document.getElementsByClassName("showButton")[0],
moveClass = document.getElementsByClassName("moveClass"),
productSpecification = document.getElementById("productSpecification"),
productSpecificationHeader = document.getElementById("productSpecificationHeader"),
productSpecificationSubContainer = document.getElementById("productSpecificationSubContainer"),
productSliderElement = document.getElementsByClassName("productSliderElement"),
closeBtn = document.getElementById("closeBtn"),
chooseSize  = document.getElementById("chooseSize"),
containerSelectSize = document.getElementById("containerSelectSize"),
chooseSizeListItem = document.getElementsByClassName("chooseSizeListItem"),
ChoosenImgElement = document.getElementById("ChoosenImgElement"),

purchaseButton  = document.getElementById("purchaseButton"),
purchaseButtonAfter = document.getElementById("purchaseButtonAfter");

/*INDEX2.html */
function showBlock(element) {
(element.style.display === "none" || element.style.display === "")?  element.style.display = "block": element.style.display = "none";
};

function transform(element) {
  (element.style.transform === 'rotate(0deg)' || element.style.transform === 'rotate(90deg)')?   element.style.transform = 'rotate(270deg)':element.style.transform = 'rotate(90deg)';  
};

function changeOpacity(element) {
(element.style.color  === "" || element.style.color  === "rgb(0, 0, 0)")?  element.style.color  = "rgba(0, 0, 0, 0.5)":  element.style.color  = "rgba(0, 0, 0, 1)";
};

function changeElement(event) {
 
if(event.target.classList.contains("countries_element") )
{
  let target = event.target;
  special_countries_element_image.src = target.firstElementChild.src;  
  countries_element_text_special.textContent = target.textContent;
}
else if(event.target.classList.contains("countries_element_text")) 
{
let target = event.target;
countries_element_text_special.textContent = target.textContent;
special_countries_element_image.src = target.previousElementSibling.src;  
}
else
{
  let target = event.target;
  special_countries_element_image.src = target.src;  
  countries_element_text_special.textContent = target.nextElementSibling.textContent;
}

 };

 function arrowAnimation(bootsProductSlider, event)
 {
  let target = event.target;
  if(target==arrow_right)
  {
    bootsProductSlider.forEach((element) => {

      
   
        element.style.transform += "translateX(-18rem)" ;

 
    })
  }
  else if(target==arrow_left)
  {
    bootsProductSlider.forEach((element) => {
      
  
      element.style.transform += "translateX(18rem)";

     
   

    })
  };
 }

 function count(favorite, event, heart) {
  if ((typeof favorite.textContent === "string")  && (event.target == heart && !event.target.classList.toggle("disabledBootsProduct"))) {
    
    favorite.textContent = parseInt(favorite.textContent) - 1;
  } 
  else if((typeof favorite.textContent === "string")  && (event.target == heart && event.target.classList.contains("disabledBootsProduct"))) {
   
    favorite.textContent = parseInt(favorite.textContent) +1;
  }
  else if(favorite.textContent  < 0 )   favorite.textContent = parseInt(favorite.textContent) + 1;

}
/*INDEX2.html */

function substractionPrince(finalPrince, regularPrice) {
	
  return  regularPrice - finalPrince + " zł"
}


resultSubstraction.textContent = substractionPrince(finalPrince, regularPrice, resultSubstraction)

showButton.addEventListener("click", () => {

  showButton.classList.toggle("moveClass")
  if (showButton.classList.contains("moveClass")) {
    productSpecificationSubContainer.style.display = "block";
    productSpecificationSubContainer.classList.add("transitionClass")
    showButton.textContent = "pokaz mniej";
  }
  else{
    productSpecificationSubContainer.style.display = "none";
    productSpecificationSubContainer.classList.remove("transitionClass")
    showButton.textContent = "pokaz wiecej";
  }

}) 
Array.from(productSliderElement).forEach((productSlider) => {
  productSlider.addEventListener("click", (event) => {
    let target = event.target
    ChoosenImgElement.src =   target.src 
  })
})

containerSelectSize.addEventListener("click", () => {
 
  chooseSize.style.display = "block";
  
});
closeBtn.addEventListener("click", () => {

  chooseSize.style.display = "none";

});

Array.from(chooseSizeListItem).forEach((item) =>{
  item.addEventListener("click", () => {
    containerSelectSize.textContent = item.textContent
    chooseSize.style.display = "none";
  })
})


purchaseButton.addEventListener("click", () => {
  purchaseButtonAfter.style.display = "flex";

})
/*INDEX2.html */
container_select.addEventListener('click', function()
 {showBlock(container_countries),
  transform(container_select_right_side), 
  changeOpacity(countries_element_text_special)});
  
container_countries.addEventListener("click", function(event){changeElement(event)});



header_content_info_container2.addEventListener('click', function(){showBlock(miniToolTip2)});
header_content_info_container.addEventListener('click', function(){showBlock(miniToolTip1)});

for (let heart of hearts) {
  heart.addEventListener('click', function(event) {
    count(favorite, event, heart);
    for (let item of bootsProductSlider && bootsProduct) {
        if ((item == event.target.parentNode.parentNode.parentNode) && (event.target == heart)) {
          item.classList.toggle("disabledBootsProduct")
      }
       
    }
  }
  )
}
