import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from "../interfaces/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }



  getCategorys(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/category`);
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.BASE_URL}/category/create`,category);
  }





}
