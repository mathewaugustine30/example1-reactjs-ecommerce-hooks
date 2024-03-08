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


fetchProducts : () =>{
   return fetch("http://localhost:5001/products", {
    method: "GET",
  });
},
}

export const BrandsService = {
  fetchBrands: () => {
    return fetch("http://localhost:5001/brands", {
      method: "GET",
    });
  },
  getBrandByBrandId: (brands, brandId) => {
    return brands.find((brand) => brand.id === String(brandId));
  },
};

export const CategoriesService = {
  fetchCategories: () => {
    return fetch("http://localhost:5001/categories", {
      method: "GET",
    });
  },
  getCategoryByCategoryId: (categories, categoryId) => {
    return categories.find((category) => category.id === String(categoryId));
  },
};



export const SortService = {
  getSortedArray: (elements, sortBy, sortOrder) => {
    if (!elements) return elements;

    let array = [...elements];

    array.sort((a, b) => {
      //a = cat
      //b = dog
      //c = 99
      //d = 100
      //return 99 - 100 = -1
      //a comes first; and then b
      //cat comes first; and then dog
      if (a[sortBy] && b[sortBy])
        return (
          a[sortBy].toString().toLowerCase() -
          b[sortBy].toString().toLowerCase()
        );
      else return 0;
    });

    if (sortOrder === "DESC") array.reverse();

    return array;
  },
};