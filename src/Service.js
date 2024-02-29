export const OrderService ={


    //getPreviousOrders
getPreviousOrders : (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === true);
  },
  
  //getCart
getCart : (orders) => {
    return orders.filter((ord) => ord.isPaymentCompleted === false);
  },
}


export const ProductService ={

getProductByProductId: (prodId,products)  =>{
    return products.find(
        (prod) => prod.id === String(prodId)
      );
},


fetchProducts: () =>{
   return fetch("http://localhost:5000/products", {
    method: "GET",
  });
},
}