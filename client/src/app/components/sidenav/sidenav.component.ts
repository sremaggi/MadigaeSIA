import { Component, OnInit } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/Product';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private productService: ProductService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  products: Product[]=[];

  ngOnInit() {
    this.getProducts();
    //dataSource = new MatTableDataSource(this.products);
  }
  getProducts(): void {
     this.productService.getProducts()
      .subscribe(
        res =>{this.products = res ; console.log(res)}, 
        err => console.log(err),
        )
       
  }
  agregar(producto: Product){
    console.log(producto.price);
    console.log(producto.name);

  }
  applyFilter(filterValue: string) {
    console.log(filterValue,typeof(filterValue));
    //this.products.filter=filterValue;
    var prod = this.products.filter(function(producto){
      return producto.category==filterValue;
    });
    console.log(prod);

  }
  deleteProduct(id: string): void {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          console.log(res);
          this.getProducts();
        },
        err => console.log(err)
      )
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;

  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true;

  
}
