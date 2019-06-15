import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from "../../services/category.service";
import { Category } from 'src/app/interfaces/Category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    category:'',
    subCategory:'',
    imageURL: '',
    price: 0
  };
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productService.getProduct(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }

    this.getCategorys();
  }
  categorys: Category[]=[];

  cat2=false;
  categoria1="";
 


  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product']);
        },
        err => console.log(err)
      )
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }

}