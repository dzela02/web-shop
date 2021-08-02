function getItems() {
  db.collection("items")
    .get()
    .then((querySnapshot) => {
      let items = [];
      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          image: doc.data().image,
          make: doc.data().make,
          name: doc.data().name,
          price: doc.data().price,
          rating: doc.data().rating,
        });
      });
      generateItems(items);
    });
}

function addToCart(item) {
  console.log(item);
  db.collection("cart-items").doc(item.id).set({
    image: item.image,
    make: item.make,
    name: item.name,
    rating: item.rating,
    price: item.price,
    quantity: 1,
  });
}

function generateItems(items) {
  let itemsHTML = "";
  items.forEach((item) => {
    let doc = document.createElement("div");
    doc.classList.add("main-product", "mr-5");
    doc.innerHTML = `
        <div class="product-image w-48 h-52 bg-white rounded-lg p-4">
              <img
                class="w-full h-full object-contain"
                  src="${item.image}"
                   alt="Nintendo switch"
                />
                </div>
                <div class="product-name text-gray-700 font-bold mt-2 text-sm">
                  ${item.name}
                </div>
                <div class="product-make text-green-700 font-bold">
                  ${item.make}
                </div>
                <div class="product-rating text-yellow-300 font-bold my-1">
                  ⭐⭐⭐⭐⭐ ${item.rating}
                </div>
                <div class="product-price font-bold text-gray-700 text-lg">
                  $ ${item.price}
                </div>
    `;

    let addToCartEl = document.createElement("div");
    addToCartEl.classList.add(
      "add-to-cart",
      "h-8",
      "w-28",
      "bg-yellow-500",
      "flex",
      "items-center",
      "justify-center",
      "text-white",
      "rounded-xl",
      "hover:bg-gray-700",
      "hover:text-gray-300",
      "cursor-pointer",
      "text-md"
    );
    addToCartEl.innerText = "Dodaj u korpu";
    addToCartEl.addEventListener("click", function () {
      addToCart(item);
    });
    doc.appendChild(addToCartEl);
    document.querySelector(".main-section-products").appendChild(doc);
  });
}

getItems();
