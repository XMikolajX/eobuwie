// Define variables for various DOM elements

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

// Define variables for elements specific to index2.html
/*--------------------------------------- INDEX2.html --------------------------------------- */

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
sizeChart  = document.getElementById("sizeChart"),
sizeChartMenu =  document.getElementById("sizeChartMenu"),
closeBtnSize = document.getElementById("closeBtnSize"),
containerSelectSize = document.getElementById("containerSelectSize"),
chooseSizeListItem = document.getElementsByClassName("chooseSizeListItem"),
ChoosenImgElement = document.getElementById("ChoosenImgElement"),
purchaseDetailsBootsName =  document.getElementById("purchaseDetailsBootsName"),
purchaseDetailsModelName =  document.getElementById("purchaseDetailsModelName"),
purchaseButton  = document.getElementById("purchaseButton"),

productVariants = document.getElementById("productVariants"),
prevButton = document.getElementsByClassName("prev-button")[0],
nextButton = document.getElementsByClassName("next-button")[0],




header_content_WalletSum = document.getElementById("header_content_WalletSum"),


purchaseButtonAfter = document.getElementById("purchaseButtonAfter"),
purchaseButtonAfterChooseSize = document.getElementById("purchaseButtonAfterChooseSize");




/*--------------------------------------- END INDEX2.HTML--------------------------------------- */

// Toggles the display property of the provided element between "none" and "block".

function showBlock(element) {
(element.style.display === "none" || element.style.display === "")?  element.style.display = "block": element.style.display = "none";
};

// Toggles the rotation of the provided element.

function transform(element) {
  (element.style.transform === 'rotate(0deg)' || element.style.transform === 'rotate(90deg)')?   element.style.transform = 'rotate(270deg)':element.style.transform = 'rotate(90deg)';  
};
// Toggles the opacity of the provided element's color property.
function changeOpacity(element) {
(element.style.color  === "" || element.style.color  === "rgb(0, 0, 0)")?  element.style.color  = "rgba(0, 0, 0, 0.5)":  element.style.color  = "rgba(0, 0, 0, 1)";
};

// Changes the content and image of certain elements based on the event target.


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

// Animates the sliding of product sliders to the left or right based on the arrow button clicked.

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
/*--------------------------------------- INDEX2.html --------------------------------------- */

// Function to calculate and update the price subtraction result

function substractionPrince(finalPrince, regularPrice) {
	let result = regularPrice - finalPrince 
  return  result.toFixed(2) + " zł"
}

resultSubstraction.textContent = substractionPrince(finalPrince, regularPrice)

// Add event listener to show more/less button

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

// Add event listener to size selection

containerSelectSize.addEventListener("click", () => {
 
  chooseSize.style.display = "block";
  
});


closeBtn.addEventListener("click", () =>{
 
  chooseSize.style.display = "none";


}); 


sizeChart.addEventListener("click", () =>{



  sizeChartMenu.style.display = "block";



}); 

closeBtnSize.addEventListener("click", () =>{


  sizeChartMenu.style.display = "none";



}); 

Array.from(chooseSizeListItem).forEach((item) =>{
  item.addEventListener("click", () => {
    containerSelectSize.textContent = item.textContent
    chooseSize.style.display = "none";
  })
})

// Update the count of products in the minicart

function updateMinicartCount() {
  let minicart_products = document.querySelectorAll('.minicart_product');
  header_content_WalletSum.textContent = (minicart_products.length === 0) ? 0 : minicart_products.length;
}


// Handles the click event on the purchase button.
purchaseButton.addEventListener("click", (event) => {

  if (isNaN(containerSelectSize.textContent)) {
    event.preventDefault(); // Zatrzymujemy domyślne działanie przycisku
    purchaseButtonAfterChooseSize.style.display = "flex";
    setTimeout(() => {
      purchaseButtonAfterChooseSize.style.display = "none";
    }, 1000);
  }
  else{
  // Display the purchase confirmation message for a brief duration.
  purchaseButtonAfter.style.display = "flex";
  setTimeout(() => {
    purchaseButtonAfter.style.display = "none";
  }, 1000);

  // Create elements to represent a product in the minicart.
  let minicart_product = document.createElement("div");
  let minicart_productInfo = document.createElement("div");
  let minicart_productImg = document.createElement("div");
  let minicart_productName = document.createElement("div");
  let minicart_ModelName = document.createElement("div");
  let  minicart_size = document.createElement("div");
  let minicart_resultSubstraction = document.createElement("span");
  let img = document.createElement("img");
  img.src = ChoosenImgElement.getAttribute("src");
  img.classList.add("minicart_product_img_class");
  minicart_productImg.appendChild(img);

  // Display the selected size in the minicart product.
  if (!isNaN(containerSelectSize.textContent )) {
    minicart_size.textContent =  "Rozmiar: " +  containerSelectSize.textContent; // Display the selected size
  }
  // Clone and replace product details for the minicart display.
  minicart_productName = purchaseDetailsBootsName.cloneNode(true);
  minicart_ModelName = purchaseDetailsModelName.cloneNode(true);
  minicart_content_text.replaceWith(minicart_product);
  let minicarCloseBtn = closeBtn.cloneNode(true);
  minicart_product.appendChild(minicarCloseBtn);

  // Assemble the minicart product elements.
  minicart_product.appendChild(minicart_productImg);
  minicart_product.appendChild(minicart_productInfo);
  minicart_productInfo.appendChild(minicart_productName);
  minicart_productInfo.appendChild(minicart_ModelName);
  minicart_productInfo.appendChild(minicart_size);
  
  // Display the discounted price in the minicart product.
  minicart_resultSubstraction.textContent =   finalPrince.toFixed(2) + " zł";
  minicart_productInfo.appendChild(minicart_resultSubstraction);
  
  // Add classes for styling to minicart product elements.
  minicart_productInfo.classList.add("minicart_productInfo");
  minicart_product.classList.add("minicart_product");
  minicart_productName.classList.add("minicart_productName");
  minicart_productName.classList.add("minicart_ModelName");
  minicart_size.classList.add("minicart_ModelName");
  minicart_resultSubstraction.classList.add("minicart_resultSubstraction");
  minicarCloseBtn.classList.add("minicarCloseBtn");

  // Add click event listener to close button for removing the minicart product.
  minicarCloseBtn.addEventListener("click", () => {
    minicart_product.replaceWith(minicart_content_text);
    updateMinicartCount();
  });

  // Update the minicart product count.
  updateMinicartCount();
}
});

// Function to change the displayed boot image on clicking prev/next buttons

let currentImageIndex = 0;
function updateDisplayedImage() {
  let sliderImages = document.getElementsByClassName("productSliderElement");
  if((sliderImages.length > 0 && currentImageIndex >= 0) && ( currentImageIndex < sliderImages.length)) {
    let imageUrl = sliderImages[currentImageIndex].getAttribute("src");
    ChoosenImgElement.setAttribute("src", imageUrl);
  }
}
nextButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1 ) % productSlider.childElementCount;
  updateDisplayedImage()
});
prevButton.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + productSlider.childElementCount ) % productSlider.childElementCount;
  updateDisplayedImage()
});

//replace boot photo on click on it
let  sliderImages = document.querySelectorAll('.productSliderElement');


sliderImages.forEach(function(image, index) { //make call on every sliderImage element with argument image, index
  image.addEventListener('click', function() { // on on every sliderImage element  add addEventListener 
    currentImageIndex = index;// if currentImageIndex was clicked then assign to currentImageIndex  this index 
    updateDisplayedImage();//call    updateDisplayedImage()

  })

});


/*--------------------------------------- END INDEX2.HTML--------------------------------------- */

// Add event listeners for toggling elements' visibility and behavior

container_select.addEventListener('click', function()
 {showBlock(container_countries),
  transform(container_select_right_side), 
  changeOpacity(countries_element_text_special)});
  
container_countries.addEventListener("click", function(event){changeElement(event)});



header_content_info_container2.addEventListener('click', function(){showBlock(miniToolTip2)});
header_content_info_container.addEventListener('click', function(){showBlock(miniToolTip1)});

// Add event listeners to heart icons for counting and toggling

// Iterate through each heart icon element.
for (let heart of hearts) {
  // Add a click event listener to each heart icon.
  heart.addEventListener('click', function(event) {
    // Call the 'count' function to update the favorite count and toggle classes.
    count(favorite, event, heart);
    
    // Iterate through each product item within 'bootsProductSlider' and 'bootsProduct'.
    for (let item of bootsProductSlider && bootsProduct) {
      // Check if the current item matches the clicked heart's parent hierarchy.
      if ((item == event.target.parentNode.parentNode.parentNode) && (event.target == heart)) {
        // Toggle the "disabledBootsProduct" class on the item.
        item.classList.toggle("disabledBootsProduct");
      }
    }
  });
}