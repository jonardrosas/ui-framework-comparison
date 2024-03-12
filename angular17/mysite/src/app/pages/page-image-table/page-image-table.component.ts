import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, OnDestroy, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Observable, Subscription } from 'rxjs'


export interface PeriodicElement {
  name: string;
  index: number;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
}

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

@Component({
  selector: 'app-page-image-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, CommonModule, NgOptimizedImage],
  templateUrl: './page-image-table.component.html',
  styleUrl: './page-image-table.component.scss'
})
export class PageImageTableComponent implements OnInit, AfterViewInit, OnDestroy  {


  displayedColumns: string[] = ['name', 'index', 'isActive', 'balance', 'age', 'eyeColor'];
  dataSource: any;
  dataSubscription!: Subscription;
  imageSubscription!: Subscription;
  products!: ProductsInterface[];

  constructor(private http: HttpClient) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getTableData(): any {
    return this.http.get('https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt')
  }

  getImages(): Observable<any>{
    return this.http.get('https://api.slingacademy.com/v1/sample-data/products?limit=1000')
  }

  ngAfterViewInit() {
    this.dataSubscription = this.getTableData().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);  
        this.dataSource.paginator = this.paginator;
      }
    )
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe()
    this.imageSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.imageSubscription = this.getImages().subscribe(
      (data) => {
        this.products = data.products;
      }
    )
  }


}
