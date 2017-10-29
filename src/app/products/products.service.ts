import {Injectable} from "@angular/core";
import Products from "./api/products";

@Injectable()
export class ProductService {
  getProducts() {
    return Products.products;
  }
}
