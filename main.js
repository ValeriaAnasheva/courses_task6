let inBuyBasket = document.querySelectorAll('.in-buy-basket');
let valueShopBasket = document.getElementById('valueShopBasket');

for (let elem of inBuyBasket){
elem.onclick = () => {
valueShopBasket.textContent = getNumPlusOne(valueShopBasket.textContent);
}
}

function getNumPlusOne(valueShopBasket) {
	return (Number(valueShopBasket) + 1);
}