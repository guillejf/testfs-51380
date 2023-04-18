const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = [];
    const productsString = fs.readFileSync(this.path, "utf-8");
    const products = JSON.parse(productsString);
    this.products = products;
  }
  createProduct(product) {
    this.products.push(product);
    const productsString = JSON.stringify(this.products);
    fs.writeFileSync(this.path, productsString);
  }

  updateProduct(product) {
    //fs.writeFileSync(this.path, productsString);
  }

  deleteProduct(product) {
    //fs.writeFileSync(this.path, productsString);
  }
  getAllProducts() {
    return this.products;
  }
  getProductById() {}
}

const productManager = new ProductManager("productos.json");

productManager.createProduct({ name: "pelota 1", price: 20 });
productManager.createProduct({ name: "pelota 2", price: 420 });
console.log(productManager.getAllProducts());
