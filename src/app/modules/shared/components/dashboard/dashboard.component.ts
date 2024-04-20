import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

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
  branch!: any;
  mergedData1!: any[];
  showTable: boolean = false;
  lenghtofgcd!:any ;
  totalSum:any 

  exportToExcel(data: any[]) { 
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, 'export.xlsx');
}

  constructor(private sharedservice: SharedService ,private route:Router , private commonservice:CommonService) {}

  ngOnInit(): void {
    this.sharedservice.showvendor().subscribe({
      next: (data) => {

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


    this.branch  = this.commonservice.getbranch();

    
    //fetching the finished goods detalis 

    this.sharedservice.finishedGoods(this.branch).subscribe({
      next:(data)=>{

        this.lenghtofgcd = data.length
         this.totalSum = data.map(parseFloat).reduce((sum:any, value:any) => sum + value, 0);
        console.log(this.totalSum);
        
      },
      error:(err)=>{

      }
    })
  }

  submitForm() {
    console.log('From Date:', this.fromDate);
    console.log('To Date:', this.toDate);

    this.sharedservice.searchdate(this.fromDate, this.toDate).subscribe({
      next: (data) => {

        

        this.mergedData1 = data;
        
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
