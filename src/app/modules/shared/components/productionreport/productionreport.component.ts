import { Component } from '@angular/core';
import { ExcelService } from 'src/app/service/excel.service';

@Component({
  selector: 'app-productionreport',
  templateUrl: './productionreport.component.html',
  styleUrls: ['./productionreport.component.css']
})
export class ProductionreportComponent {

   headers: string[] = [
    "Production Date",
    "Department",
    "Category",
    "Sub Category",
    "Pieces",
    "Weight",
    "NET WT",
    "Worker Name"
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
    this.excelService.exportToExcel(this.headers);
  }

  submitDates() {
    console.log('Start Date:', this.startDate);
    console.log('End Date:', this.endDate);
    // You can perform further actions here, such as sending the dates to a service

    this.show= false;
  }

}
