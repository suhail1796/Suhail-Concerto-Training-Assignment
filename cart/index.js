//background: radial-gradient(#27cf43 5%, #27cf43 2%, rgb(28, 172, 35), rgb(22, 141, 32));
const foodItem = [
  {
    id: 1,
    name: "Ambur Biryani",
    category: "biryani",
    rating: 4.3,
    price: 13,
    img: "images/biryani/Ambur-Chicken-Biryani.jpg",
    quantity: 1,
  },
  {
    id: 2,
    name: "Hyderabadi Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "images/biryani/Chicken-Biryani-hyd.jpg",
    quantity: 1,
  },
  {
    id: 3,
    name: "Egg Biryani",
    category: "biryani",
    rating: 4.3,
    price: 18,
    img: "images/biryani/egg-biryani.jpeg",
    quantity: 1,
  },
  {
    id: 4,
    name: "Goan Fish Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "images/biryani/goan-fish-biryani.jpg",
    quantity: 1,
  },
  {
    id: 5,
    name: "Mutton Biryani",
    category: "biryani",
    rating: 4.3,
    price: 10,
    img: "images/biryani/hyd-Mutton-Biryani.jpg",
    quantity: 1,
  },
  {
    id: 6,
    name: "Kamrupi Biryani",
    category: "biryani",
    rating: 4.3,
    price: 12,
    img: "images/biryani/kamrupi-biryani.jpg",
    quantity: 1,
  },
  {
    id: 7,
    name: "Kashmiri Biryani",
    category: "biryani",
    rating: 4.3,
    price: 13,
    img: "images/biryani/kashmiri.pulao.jpg",
    quantity: 1,
  },
  {
    id: 8,
    name: "Memoni Biryani",
    category: "biryani",
    rating: 4.3,
    price: 20,
    img: "images/biryani/memonibiryani.png",
    quantity: 1,
  },
  {
    id: 9,
    name: "Mughlai Biryani",
    category: "biryani",
    rating: 4.3,
    price: 15,
    img: "images/biryani/mughlai-biryani.jpg",
    quantity: 1,
  },
  {
    id: 10,
    name: "Chicken Roast",
    category: "chicken",
    rating: 4.3,
    price: 11,
    img: "images/chicken/Chicken_roast.jpg",
    quantity: 1,
  },
  {
    id: 11,
    name: "Chicken Curry",
    category: "chicken",
    rating: 4.3,
    price: 10,
    img: "images/chicken/Chicken-Curry.jpg",
    quantity: 1,
  },
  {
    id: 12,
    name: "Chicken Do Pyaza",
    category: "chicken",
    rating: 4.3,
    price: 14,
    img: "images/chicken/Chicken-do-Pyaza.jpg",
    quantity: 1,
  },
  {
    id: 13,
    name: "Chicken Masala",
    category: "chicken",
    rating: 4.3,
    price: 12,
    img: "images/chicken/Chicken-Masala.jpeg",
    quantity: 1,
  },
  {
    id: 14,
    name: "Handi Chicken",
    category: "chicken",
    rating: 4.3,
    price: 17,
    img: "images/chicken/Handi-chicken.jpg",
    quantity: 1,
  },
  {
    id: 15,
    name: "Murgh Musallam",
    category: "chicken",
    rating: 4.3,
    price: 20,
    img: "images/chicken/Murgh-Musallam.jpg",
    quantity: 1,
  },
  {
    id: 16,
    name: "Matar Paneer",
    category: "paneer",
    rating: 4.3,
    price: 15,
    img: "images/paneer/Matar-Paneer.jpg",
    quantity: 1,
  },
  {
    id: 17,
    name: "Palak Paneer",
    category: "paneer",
    rating: 4.3,
    price: 10,
    img: "images/paneer/palak-paneer.jpg",
    quantity: 1,
  },
  {
    id: 18,
    name: "Paneer Butter Masala",
    category: "paneer",
    rating: 4.3,
    price: 15,
    img: "images/paneer/paneer-butter-masala.jpg",
    quantity: 1,
  },
  {
    id: 19,
    name: "Paneer Do Pyaza",
    category: "paneer",
    rating: 4.3,
    price: 12,
    img: "images/paneer/Paneer-Do-Pyaza.jpg",
    quantity: 1,
  },
  {
    id: 20,
    name: "Hyderabadi Paneer",
    category: "paneer",
    rating: 4.3,
    price: 8,
    img: "images/paneer/Paneer-Hyderabadi.jpg",
    quantity: 1,
  },
  {
    id: 21,
    name: "Paneer Lababdar",
    category: "paneer",
    rating: 4.3,
    price: 7,
    img: "images/paneer/paneer-lababdar.jpg",
    quantity: 1,
  },
  {
    id: 22,
    name: "Shahi Paneer",
    age: "32",
    category: "paneer",
    rating: 4.3,
    price: 5,
    img: "images/paneer/shahi-paneer.jpg",
    quantity: 1,
  },
  {
    id: 23,
    name: "Navratan Korma",
    category: "vegetable",
    rating: 4.3,
    price: 8,
    img: "images/vegetable/navratan-korma_-vegetable.png",
    quantity: 1,
  },
  {
    id: 24,
    name: "Veg Jalfrezi",
    category: "vegetable",
    rating: 4.3,
    price: 7,
    img: "images/vegetable/VEG-JALFREZI.jpg",
    quantity: 1,
  },
  {
    id: 25,
    name: "Veg Biryani",
    category: "vegetable",
    rating: 4.3,
    price: 5,
    img: "images/vegetable/vegetable-biryani.jpg",
    quantity: 1,
  },
  {
    id: 26,
    name: "Veg Curry",
    category: "vegetable",
    rating: 4.3,
    price: 7,
    img: "images/vegetable/vegetable-curry.jpeg",
    quantity: 1,
  },
  {
    id: 27,
    name: "Veg Kolhapur",
    category: "vegetable",
    rating: 4.3,
    price: 10,
    img: "images/vegetable/vegetable-kolhapuri.jpg",
    quantity: 1,
  },
  {
    id: 28,
    name: "Veg Masala",
    category: "vegetable",
    rating: 4.3,
    price: 4,
    img: "images/vegetable/vegetable-masala.jpg",
    quantity: 1,
  },
  {
    id: 29,
    name: "Veg Pakora",
    category: "vegetable",
    rating: 4.3,
    price: 4,
    img: "images/vegetable/vegetable-pakora.jpg",
    quantity: 1,
  },
  {
    id: 30,
    name: "Momos",
    category: "chinese",
    rating: 4.3,
    price: 8,
    img: "images/chinese/cabbage-momos-.jpg",
    quantity: 1,
  },
  {
    id: 31,
    name: "Chicken Manchurian",
    category: "chinese",
    rating: 4.3,
    price: 7,
    img: "images/chinese/ChickenManchurian.jpg",
    quantity: 1,
  },
  {
    id: 32,
    name: "Chili Chicken",
    category: "chinese",
    rating: 4.3,
    price: 5,
    img: "images/chinese/Chili-Chicken.jpg",
    quantity: 1,
  },
  {
    id: 33,
    name: "Chowmein",
    category: "chinese",
    rating: 4.3,
    price: 16,
    img: "images/chinese/chowmin.jpg",
    quantity: 1,
  },
  {
    id: 34,
    name: "Spring Roll",
    category: "chinese",
    rating: 4.3,
    price: 14,
    img: "images/chinese/spring-rolls.jpg",
    quantity: 1,
  },
  {
    id: 35,
    name: "Szechuan Chicken",
    category: "chinese",
    rating: 4.3,
    price: 10,
    img: "images/chinese/szechuan-chicken.jpg",
    quantity: 1,
  },
  {
    id: 36,
    name: "Fried Rice",
    category: "chinese",
    rating: 4.3,
    price: 8,
    img: "images/chinese/veg-fried-rice.jpg",
    quantity: 1,
  },
  {
    id: 37,
    name: "Butter Masala Dosa",
    category: "south indian",
    rating: 4.3,
    price: 18,
    img: "images/south indian/Butter-Masala-Dosa.png",
    quantity: 1,
  },
  {
    id: 38,
    name: "Idli",
    category: "south indian",
    rating: 4.3,
    price: 20,
    img: "images/south indian/idli-with-rice-flour.jpg",
    quantity: 1,
  },
  {
    id: 39,
    name: "Masala Dosa",
    category: "south indian",
    rating: 4.3,
    price: 12,
    img: "images/south indian/masala-dosa.jpg",
    quantity: 1,
  },
  {
    id: 40,
    name: "Mysore Bonda",
    category: "south indian",
    rating: 4.3,
    price: 10,
    img: "images/south indian/mysore-bonda.jpg",
    quantity: 1,
  },
  {
    id: 41,
    name: "Onion Uttapam",
    category: "south indian",
    rating: 4.3,
    price: 15,
    img: "images/south indian/onion-uttapam.jpg",
    quantity: 1,
  },
  {
    id: 42,
    name: "Plain Dosa",
    category: "south indian",
    rating: 4.3,
    price: 40,
    img: "images/south indian/plain-dosa.jpeg",
    quantity: 1,
  },
  {
    id: 43,
    name: "Rava Uttapam",
    category: "south indian",
    rating: 4.3,
    price: 25,
    img: "images/south indian/Rava-Uttapam.jpg",
    quantity: 1,
  },
  {
    id: 44,
    name: "Sambhar Vada",
    category: "south indian",
    rating: 4.3,
    price: 34,
    img: "images/south indian/sambhar-vada.jpg",
    quantity: 1,
  },
];

var biryani = foodItem.filter(item => item.category == "biryani")
var chicken = foodItem.filter(item => item.category == "chicken")
var chinese = foodItem.filter(item => item.category == "chinese")
var paneer = foodItem.filter(item => item.category == "paneer")
var vegetable = foodItem.filter(item => item.category == "vegetable")
var sIndian = foodItem.filter(item => item.category == "south indian")
//console.log(sIndian)
var total = 0;
var totalPrice = document.getElementById("total-price");
//totalPrice.innerText ='Total Amount : ' +total;

function displaycategory(items) {
  //console.log(items)
  let list = [];
  //console.log(items)
  var category = document.getElementById("category").value;
  console.log(category)
  if (category == 'biryani') {
    list = biryani;
  }
  else if (category == 'chicken') {
    list = chicken;
  }
  else if (category == 'chinese') {
    list = chinese;
  }
  else if (category == 'paneer') {
    list = paneer;
  }
  else if (category == 'south indian') {
    list = sIndian;
  }
  else {
    list = vegetable;
  }
  //console.log(list)
  var items = document.getElementById("items");
  items.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    //console.log(list[i])
    displayItems(list[i]);
  }




}
var val = document.getElementById("category").value;
displaycategory(val);

function displayItems(list) {
  var items = document.getElementById("items");
  //items=''
  //items.innerHTML = '';
  // console.log(items)
  //console.log(list);
  var html = '';
  //console.log(list.img)
  //console.log(list.img)
  html = `
  <div class="row text-center m-b-5" id="row"
  style="border-bottom: 2px solid red; margin-bottom: 20px; margin-top:10px">
  <div class="col-md-3 text-center">
      <img src="${list.img}" class='img-fluid' style="height:70%" />
  </div>
  <div class="col-md-2">
      <h3 id="text">${list.name}</h3>
  </div>
  <div class="col-md-2">
      <h3 id="text">${list.price}</h3>
  </div>
  <div class="col-md-2">
      <h3 id="text">${list.rating}</h3>
  </div>
  <div class="col-md-2">
      <input type="checkbox" id="${list.id}" onclick="addToCart(${list.id})" >
  </div>
</div>`;

  items.innerHTML += html;

}
// call this function to display the 1st item in the fropdown
//displayItems();

// create an empty array to store the item user selects to be added in the cart.
var cartData = [];
function addToCart(itemid) {
  //var checked = foodItem.filter(item => item.id == parseInt(itemid));
  //var checked = foodItem.filter(item => item.id == parseInt(itemid));
  //var checked = foodItem.map(item => item.id == parseInt(itemid));
  var checked = foodItem.find(item => item.id == itemid);
  //cartData =checked;
  var index = cartData.indexOf(checked);
  //console.log(index);
  //console.log(cartData);
  if (index == -1) {
    cartData.push(checked);
    console.log(checked);
    var html = '';
    html = ` ${cartData.length} Items`;
    var totalItem = document.getElementById("cart-plus");
    totalItem.innerText = html;
  }
  else {
    alert("item already present in the cart");
    document.getElementById(itemid).checked = true;
  }

  // return console.log(cartData)
}
//console.log(cartData);
var cartPage = document.getElementById("cart-page");
var main = document.getElementById("main");

function showItemList() {


  if (cartData.length == 0) {
    alert("There are no items in the cart");
    cartPage.style.display = 'none'
    main.style.display = 'block';
  }
  else {
    var quantity = 1;
    console.log('showItemList')

    cartPage.style.display = 'block';
    main.style.display = 'none';
    var tableBody = document.getElementById("table-body");
    var html = '';
    // for (let i = 0; i < cartData.length; i++) {
    //console.log(cartData[i['id']])
    for (let list of cartData) {
      html += `<tr id=row${list.id}>
            <td>
              <img src="${list.img}" class='img-fluid'>
            </td>
            <td>${list.name}</td>
            <td id="quantity${list.id}"><button onClick="incr(${list.id},${list.price},${quantity})">+</button> ${quantity} <button onClick="decr(${list.id},${list.price}, ${quantity})">-</button></td>
            <td id="price${list.id}">${list.price}</td>
          </tr>`;
      //total +=list.price;
    }
    // }
    tableBody.innerHTML = html;
    totalP();
  }
}

function totalP() {
  var table = document.getElementById("table-body");
  var sum = 0;
  for (var i = 0, row; row = table.rows[i]; i++) {
    sum = sum + parseInt(table.rows[i].cells[3].innerHTML);
  }
  console.log(sum)
  document.getElementById("total-price").innerText = "Total Price : " + sum;
}

function incr(id, price, quantity) {
  //var id = event.target.id;
  var qnty = document.getElementById("quantity" + id);
  var prc = document.getElementById("price" + id);
  //console.log(p)
  console.log(quantity);
  quantity = quantity + 1;
  console.log(quantity);
  // price = price*quantity;
  qnty.innerHTML = `<button onClick="incr(${id},${price},${quantity})">+</button> ${quantity} <button onClick="decr(${id},${price}, ${quantity})">-</button>`;
  prc.innerHTML = price * quantity;
  totalP();
}
function decr(id, price, quantity) {
  var qnty = document.getElementById("quantity" + id);
  var prc = document.getElementById("price" + id);
  //console.log(p)
  console.log(quantity);
  quantity = quantity - 1;
  console.log(quantity);
  if (quantity < 1) {
    console.log(cartData.indexOf(id))
    let item = cartData.find(item => item.id == id)
    //console.log(x)
    //let table = document.getElementById("table-body");
    //table.deleteRow(table.indexOf(document.getElementById('row'+id)));
    let row =document.getElementById("row"+id);
    row.parentNode.removeChild(row);
    //x.parentNode.parentNode;
    //console.log(x.rowIndex-1)
    //table.deleteRow(x.rowIndex-1);
    //document.getElementById(id).remove;
    cartData.splice(cartData.indexOf(item), 1);
    //console.log(cartData)
    totalP();
  }
  else {
    qnty.innerHTML = `<button onClick="incr(${id},${price}, ${quantity})">+</button> ${quantity} <button onClick="decr(${id},${price}, ${quantity})">-</button>`;
    prc.innerHTML = price * quantity;
    totalP();
  }
  if (cartData.length == 0) {
    alert("There are no items in the cart");
    cartPage.style.display = 'none'
    main.style.display = 'block';
  }
}

