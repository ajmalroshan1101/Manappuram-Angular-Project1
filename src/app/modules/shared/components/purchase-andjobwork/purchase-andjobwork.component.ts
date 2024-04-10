import { Component } from '@angular/core';
import { ExcelService } from 'src/app/service/excel.service';

@Component({
  selector: 'app-purchase-andjobwork',
  templateUrl: './purchase-andjobwork.component.html',
  styleUrls: ['./purchase-andjobwork.component.css']
})
export class PurchaseANDjobworkComponent {


  
  tableData = [
    "DOC. No",
    "TYPE",
    "Trans Date",
    "Party Name",
    "Gr Wt",
    "Cls Wt",
    "Net Wt",
    "Mtl Amt",
    "Booked Date",
    "Karat",
    "Labour Value",
    "Ggst Amt",
    "Sgst Amt",
    "IgstAmt",
    "Tcs Amy",
    "Final Amount",
   
    "Inward Branch Name",
    "State",
    "Sub Category",
    "Product Style",
    "Inward Party Name",
    "Category",
   
  ];

  selectedCity: string ='';
  startDate!: string;
  endDate!: string;

  show:boolean= true;

  cities = [
    'BANGALORE MANUFACTURING UNIT',
    'KOLKATA MANUFACTURING UNIT',
    'CUTTACK WHOLESALE OFFICE',
    'NAGARATHPET WHOLE SALE OFFICE',
    'COIMBATORE WHOLE SALE OFFICE',
    'HYDERABAD WHOLE SALE OFFICE'
  ];
  
  
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
