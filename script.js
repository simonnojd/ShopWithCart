// Hämtar produkter och lägger dom i en array
const products = []
getProducts()
ready()

function getProducts() {
  fetch("https://fakestoreapi.com/products")
            .then(res=>res.json())
            .then(data=>data.forEach(e => {
              products.push(e)
            }))
            .then(products=>productRender(products))
}

// Skapar element och lägger in datan från produkt-arrayen
function productRender() {
  document.getElementById("title-1").innerHTML = products[0].title
  document.getElementById("img-1").src = products[0].image
  document.getElementById("desc-1").innerHTML = products[0].description
  document.getElementById("price-1").innerHTML = products[0].price + "$"

  document.getElementById("title-2").innerHTML = products[1].title 
  document.getElementById("img-2").src = products[1].image
  document.getElementById("desc-2").innerHTML = products[1].description
  document.getElementById("price-2").innerHTML = products[1].price + "$"

  document.getElementById("title-3").innerHTML = products[2].title;
  document.getElementById("img-3").src = products[2].image
  document.getElementById("desc-3").innerHTML = products[2].description
  document.getElementById("price-3").innerHTML = products[2].price + "$"

  document.getElementById("title-4").innerHTML = products[3].title
  document.getElementById("img-4").src = products[3].image
  document.getElementById("desc-4").innerHTML = products[3].description
  document.getElementById("price-4").innerHTML = products[3].price + "$"
}

function ready() {
  // Kopplar en knapp med att ta bort en produkt från Carten
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  // Kopplar en input med kvantitet av en produkt
  var quantityInputs = document.getElementsByClassName("cart-quantity-input")
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener("change", quantityChanged)
  }

  // Kopplar knapp 1 till produkt 1 att den ska läggas till i carten
  var addToCartButtons1 = document.getElementsByClassName("shop-item-button-1")
  for (var i = 0; i < addToCartButtons1.length; i++) {
      var button = addToCartButtons1[i]
      button.addEventListener("click", addToCartClicked1)
  }

  // Kopplar knapp 2 till produkt 2 att den ska läggas till i carten
  var addToCartButtons2 = document.getElementsByClassName("shop-item-button-2")
  for (var i = 0; i < addToCartButtons2.length; i++) {
      var button = addToCartButtons2[i]
      button.addEventListener("click", addToCartClicked2)
  }

  // Kopplar knapp 3 till produkt 3 att den ska läggas till i carten
  var addToCartButtons3 = document.getElementsByClassName("shop-item-button-3")
  for (var i = 0; i < addToCartButtons3.length; i++) {
      var button = addToCartButtons3[i]
      button.addEventListener("click", addToCartClicked3)
  }

  // Kopplar knapp 4 till produkt 4 att den ska läggas till i carten
  var addToCartButtons4 = document.getElementsByClassName("shop-item-button-4")
  for (var i = 0; i < addToCartButtons4.length; i++) {
      var button = addToCartButtons4[i]
      button.addEventListener("click", addToCartClicked4)
  }
}


// Tar bort produkten från carten sen uppdaterar
function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

// Ändrar kvaniteten av en produkt sen uppdaterar
function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1
  }
  updateCartTotal()
}

// Funktion att lägga till produkt 1
function addToCartClicked1(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText
  var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

// Funktion att lägga till produkt 2
function addToCartClicked2(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("shop-item-title")[1].innerText
  var price = shopItem.getElementsByClassName("shop-item-price")[1].innerText
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[1].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

// Funktion att lägga till produkt 3
function addToCartClicked3(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("shop-item-title")[2].innerText
  var price = shopItem.getElementsByClassName("shop-item-price")[2].innerText
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[2].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

// Funktion att lägga till produkt 4
function addToCartClicked4(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName("shop-item-title")[3].innerText
  var price = shopItem.getElementsByClassName("shop-item-price")[3].innerText
  var imageSrc = shopItem.getElementsByClassName("shop-item-image")[3].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

// Skapar en div och skickar in titeln, priset och bilden sen kopplar ihop knappar till diven
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div")
  cartRow.classList.add("cart-row")
  var cartItems = document.getElementsByClassName("cart-items")[0]
  var cartItemNames = cartItems.getElementsByClassName("cart-item-title")
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert("Denna produkt ligger redan i varukorgen.")
          return
      }
  }
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">Ta Bort</button>
      </div>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem)
  cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged)
}

// Uppdaterar prisen beroende på kvanitet och olika produkter
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0]
  var cartRows = cartItemContainer.getElementsByClassName("cart-row")
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName("cart-price")[0]
      var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
      var price = parseFloat(priceElement.innerText.replace("$", ""))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("cart-total-price")[0].innerText = "$" + total
}

// Kollar att alla fält är ifyllda
function validateForm() {
  var x = document.forms["myForm"]["fName"].value;
  var y = document.forms["myForm"]["fNumber"].value;
  var z = document.forms["myForm"]["fMail"].value;
  var v = document.forms["myForm"]["fAdress"].value;
  if (x == "" || y == "" || z == "" || v == "") {
    alert("Alla fält måste vara ifyllda, försök igen.")
    return false
  } else {
    alert("Tack för din beställning!")
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
    document.forms["myForm"]["fName"].value = "";
    document.forms["myForm"]["fNumber"].value = "";
    document.forms["myForm"]["fMail"].value = "";
    document.forms["myForm"]["fAdress"].value = "";
  }
}
