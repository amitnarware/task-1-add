// functions.js
function generateExpectedResult(products, pricing, categories) {
    const result = [];
  
    for (const product of products) {
      const productPricing = pricing.find(item => item.sku === product.sku);
      const category = categories.find(cat => cat.id === product.category);
  
      if (productPricing && category) {
        const productDetails = {
          id: product.id,
          sku: product.sku,
          productName: product.productName,
          category: product.category,
          price: productPricing.price
        };
        result.push(productDetails);
      }
    }
  
    return result;
  }
  
  module.exports = {
    generateExpectedResult,
  };
  