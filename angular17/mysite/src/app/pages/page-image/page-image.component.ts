import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

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
  selector: 'app-page-image',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './page-image.component.html',
  styleUrl: './page-image.component.scss'
})
export class PageImageComponent implements OnInit {

  products!: ProductsInterface[];
  dataSubscription!: Subscription;

  constructor(private http: HttpClient) {
  }

  query(){
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=1000')
  }

  getProducts(): Observable<any> {
    return this.query()
  }

  ngOnInit(): void {
    this.dataSubscription = this.getProducts().subscribe(
      (data) => {
        this.products = data.products;
      }
    )
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
  }  

}
