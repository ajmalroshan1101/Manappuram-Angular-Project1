import { Component } from '@angular/core';
import { ExcelService } from 'src/app/service/excel.service';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent {


  tableData = [
    "Bill NO",
    "Trans Date",
    "Party Name",
    "Gr Wt",
    "Cls Wt",
    "Net Wt",
    "Mtl Amt",
    "Gold Rate",
    "Karat",
    "Labour Value",
    "Ggst Amt",
    "Sgst Amt",
    "IgstAmt",
    "Tcs Amy",
    "Final Amount",
    "Purchase MC",
    "Branch Name",
    "State",
    "Sub Category",
    "Product Style",
    "Inward Party Name",
    "Category",
    "Mobilizer"
  ];
  
  startDate!: string;
  endDate!: string;

  show:boolean= true;
  
  constructor(private excelService: ExcelService) { }


  exportTableToExcel(): void {
    this.excelService.exportToExcel(this.tableData);
  }

  submitDates() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    // You can perform further actions here, such as sending the dates to a service

    this.show= false;
  }

}
