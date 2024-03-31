import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css'],
})
export class OrderlistComponent implements OnInit {
  orders: any[] = [];
  formData: any = {};

  ngOnInit(): void {}
  constructor(private sharedService: SharedService) {}

  exportToExcel(data: any[]) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'export.xlsx');
  }

  // Function to fetch orders based on selected date range
  submitForm(formData: any): void {
    const { fromDate, toDate } = formData;

    this.sharedService.searchOders(fromDate, toDate).subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  exportToDataExcel() {
    this.exportToExcel(this.orders);
  }
}
