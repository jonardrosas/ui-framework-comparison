import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';


interface ProductsInterface {
  id: number;
  price: number;
  category: string;
  updated_at: string;
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
}

interface RequestInterface {
  success: boolean;
  products: ProductsInterface[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products!: ProductsInterface[];

  constructor(private http: HttpClient) {
  }

  query(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=1000')
  }

  getProducts(): Observable<any> {
    return this.query()
  }

  ngOnInit(): void {
    this.getProducts().subscribe(
      (data) => {
        this.products = data.products;
      }
    )
  }


}
