// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products	



var products = [
	{
		name: "Lactose Free Milk",
		category: "dairy",
		lactose_free: true,
		nut_free: true,
		price: 5.99,
		organic: false,
		
	},
	{
		name: "Milk",
		category: "dairy",
		lactose_free: false,
		nut_free: true,
		price: 4.99,
		organic: false,
		
		
	},
	{
		name: "Bread",
		category: "grain",
		lactose_free: false,
		nut_free: false,
		price: 8.99,
		organic: false,
		
		
	},
	{
		name: "Organic Bread",
		category: "grain",
		lactose_free: true,
		nut_free: false,
		price: 10.55,
		organic: true,
		
		
	},
	{
		name: "Organic Nut-Free Bread",
		category: "grain",
		lactose_free: true,
		nut_free: true,
		price: 12.50,
		organic: false,
		
	},
	{
		name: "Cheddar Cheese",
		category: "dairy",
		lactose_free: false,
		nut_free: true,
		price: 3.99,
		organic: false,
		
	},
	{
		name: "Lactose-Free Chedder Cheese",
		category: "dairy",
		lactose_free: true,
		nut_free: true,
		price: 6.00,
		organic: false,
		
	},
	{
		name: "Organic Lactose-Free Cheddar Cheese",
		category: "dairy",
		lactose_free: true,
		nut_free: true,
		price: 15.00,
		organic: false,
		
	},
	{
		name: "Organic Onions",
		category: "veg",
		lactose_free: true,
		nut_free: true,
		price: 6.97,
		organic: true,
		
	},
	{
		name: "Onions",
		category: "veg",
		lactose_free: true,
		nut_free: true,
		price: 2.97,
		organic: false,
		
	},
	{
		name: "Chocolate Granola Bars",
		category: "nuts",
		lactose_free: false,
		nut_free: false,
		price: 5.98,
		organic: false,
		
	},
	{
		name: "Nut-Free Granola Bars",
		category: "nuts",
		lactose_free: true,
		nut_free: true,
		price: 3.99,
		organic: false,
		
	},
	{
		name: "Strawberries",
		category: "fruits",
		lactose_free: true,
		nut_free: true,
		price: 4.97,
		organic: false,
		
	},
	{
		name: "Organic Strawberries",
		category: "fruits",
		lactose_free: true,
		nut_free: true,
		price: 7.28,
		organic: true,
		
	},
	{
		name: "Peanut Butter",
		category: "spread",
		lactose_free: false,
		nut_free: false,
		price: 2.26,
		organic: false,
		
	},
	{
		name: "Nut-Free Peanut Butter",
		category: "spread",
		lactose_free: false,
		nut_free: true,
		price: 6.00,
		organic: false,
		
	},
	{
		name: "Chicken",
		category: "meat",
		lactose_free: true,
		nut_free: true,
		price: 10.99,
		organic: false,
		
	},
	{
		name: "Organic Chicken",
		category: "meat",
		lactose_free: true,
		nut_free: false,
		price: 15.99,
		organic: true,
		
	},
	{
		name: "Cheese Bread",
		category: "grain",
		lactose_free: false,
		nut_free: false,
		price: 4.99,
		organic: false,
		
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_free") && (prods[i].lactose_free == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});
			//product_names.push(prods[i].price);
		}
		else if ((restriction == "nut_free") && (prods[i].nut_free == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});
			//product_names.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_names.push({name: prods[i].name,price: prods[i].price,img:prods[i].img});
			//product_names.push(prods[i].price);
		}else if ((restriction == "NutLactoseFree") && (prods[i].nut_free == true) && (prods[i].lactose_free == true)){
			product_names.push({name: prods[i].name,price: prods[i].price});

		}else if((restriction == "NutFreeOrganic") && (prods[i].nut_free == true)&&(prods[i].organic == true)){
				product_names.push({name: prods[i].name,price: prods[i].price});
		}else if((restriction == "LactoseFreeOrganic") && (prods[i].lactose_free == true) && (prods[i].organic == true)){

				product_names.push({name: prods[i].name,price: prods[i].price});
		}else if((restriction == "NutLactoseFreeOrganic") && (prods[i].nut_free == true) && (prods[i].lactose_free == true) && (prods[i].organic == true)){
				product_names.push({name: prods[i].name,price: prods[i].price});
		}else if ((restriction == "organic") && (prods[i].organic == true)){
				product_names.push({name: prods[i].name,price: prods[i].price});
		}
	}

	//sort the array

	product_names.sort((a,b) => (a.price > b.price) ? 1: -1)
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}