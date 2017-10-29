import {Component} from "@angular/core";
import {ProductService} from "./products.service";

interface ProductInterface {
  id: number;
  title: string;
  description: string;
  price: string;
  picture: string;
  priceMethod: string;
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})

export class ProductComponent {
  constructor(private pService: ProductService) {}

  ngOnInit() {
    this.products = this.pService.getProducts();
    this.currentProduct = this.products[0];
  }

  productSelector = {
    picture: ".product-image",
    title: ".product-title",
    desc: ".product-content p",
    price: '.product-price'
  };

  query(selector): any {
    return document.querySelectorAll(selector)
  }

  animateProductElements(bool) {

    const p = this.productSelector,
      doc = document;

    let selectors = p.picture + ", " + p.title + ", " + p.desc + ', ' + p.price;
    let elements = this.query(selectors);

    for(let i = 0; i < elements.length ; i++) {

      let item = elements[i];

      if(bool == false) {
        item.classList.remove('bounceIn')
        item.classList.add('bounceOut');
      }
      else {
        item.classList.remove('bounceOut');
        item.classList.add('bounceIn');
      }

    }

  }

  products: ProductInterface[] = [];

  currentProduct: any = {};

  changeCurrentProduct(productId) {
    this.animateProductElements(false)
    var self = this;

    let timeout = setTimeout(() => {
      self.currentProduct = self.products.filter(item => {
        return item.id === productId;
      })[0];
      this.animateProductElements(true)
    }, 500)


  }

  current() {return this.currentProduct}
}
