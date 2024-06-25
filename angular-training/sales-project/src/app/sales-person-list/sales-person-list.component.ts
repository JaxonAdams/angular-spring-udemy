import { Component } from '@angular/core';

import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrl: './sales-person-list.component.css'
})
export class SalesPersonListComponent {
  salesPersonList: SalesPerson[] = [
    new SalesPerson("John", "Doe", "example@gmail.com", 50000),
    new SalesPerson("Jane", "Doe", "other@gmail.com", 45000),
    new SalesPerson("Test", "User", "test@gmail.com", 90000),
  ];
}
