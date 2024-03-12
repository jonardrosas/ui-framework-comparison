import { HttpClient } from '@angular/common/http';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  index: number;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
}


@Component({
  selector: 'app-page-tables',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './page-tables.component.html',
  styleUrl: './page-tables.component.scss'
})
export class PageTablesComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'index', 'isActive', 'balance', 'age', 'eyeColor'];
  dataSource: any;

  constructor(private http: HttpClient) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 query(): any {
    return this.http.get('https://gist.githubusercontent.com/krishna1234/94a8746a241ec6784a4c694d10c6d915/raw/c2ab14129870ae016e8bdc42b38e0dc6d0837177/gistfile1.txt')
  }

  ngAfterViewInit() {
    this.query().subscribe(
      (data: any) => {
        this.dataSource = new MatTableDataSource<PeriodicElement>(data);  
        this.dataSource.paginator = this.paginator;
      }
    )
  }


}
