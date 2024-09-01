import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

interface Product {
  name: string;
  composition: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = { name: '', composition: '' };
  displayDialog: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  showDialogToAdd() {
    this.displayDialog = true;
  }

  saveProduct() {
    this.productService.createProduct(this.newProduct).subscribe(
      (product) => {
        this.products.push(product);
        this.displayDialog = false;
        this.newProduct = { name: '', composition: '' };
      },
      (error) => {
        console.error('Error adding product', error);
      }
    );
  }
}
