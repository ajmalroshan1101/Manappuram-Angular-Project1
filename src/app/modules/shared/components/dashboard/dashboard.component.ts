import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  vendorcount!: number;

  customercount!: number;

  fromDate!: Date;
  toDate!: Date;
  searchData1!: any[];
  searchData2!: any[];
  mergedData1!: any[];
  showTable: boolean = false;

  exportToExcel(data: any[]) { 
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'export.xlsx');
}

  constructor(private sharedservice: SharedService) {}

  ngOnInit(): void {
    this.sharedservice.showvendor().subscribe({
      next: (data) => {
        console.log(data);

        this.vendorcount = data.length;
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.sharedservice.showcustomer().subscribe({
      next: (data) => {
        this.customercount = data.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  submitForm() {
    console.log('From Date:', this.fromDate);
    console.log('To Date:', this.toDate);

    this.sharedservice.searchdate(this.fromDate, this.toDate).subscribe({
      next: (data) => {
        console.log(data);

        this.searchData1 = data.result;
        this.searchData2 = data.otherResult;

        const mergedData = []
        if(data.result.cust_id === data.otherResult.customer_id)
        for (let index = 0; index < data.result.length; index++) {
          const resultItem = data.result[index];
          const otherResultItem = data.otherResult[index];
          
          const mergedItem= { ...resultItem, ...otherResultItem };
         
          mergedData.push(mergedItem)
        }
        
        this.mergedData1 = mergedData
        
        this.showTable = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  exportToDataExcel(){

    this.exportToExcel(this.mergedData1)
  }
}
