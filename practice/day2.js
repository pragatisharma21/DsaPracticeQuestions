const calculatePrice = function(price, discount) {
    if (isNaN(price) || price < 0) {
      return "Invalid price. Please enter a positive number.";
    }
  
    if (discount === undefined || discount === "") {
      discount = 10; 
    } else if (isNaN(discount) || discount < 0) {
      return "Invalid discount. Please enter a positive number.";
    }
  
    const finalPrice = price - (price * (discount / 100));
    return finalPrice;
  };
  
  const priceInput = 100; 
  const discountInput = "";
  
  const finalResult = calculatePrice(priceInput, discountInput);
  console.log(`Final price after discount: $${finalResult}`);
  