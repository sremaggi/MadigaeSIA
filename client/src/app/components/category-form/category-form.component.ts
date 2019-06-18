import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from "../../interfaces/Category";
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {CategoryService  } from "../../services/category.service";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  category: Category = {
    
    category_name:'',
    subCategory:'',
    subsubCategory:''
  };

  constructor(

    private categoryService: CategoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit() {
  }

  submitProduct() {
    this.categoryService.createCategory(this.category)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/category/create']);
        },
        err => console.log(err)
      )
  }
}
