import { Component } from '@angular/core';
import { ExcelService } from 'src/app/service/excel.service';

@Component({
  selector: 'app-fgstockreport',
  templateUrl: './fgstockreport.component.html',
  styleUrls: ['./fgstockreport.component.css']
})
export class FGstockreportComponent {


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
  
   headers: string[] = [
    "Category",
    "Bar code",
    "Variant Name",
    "Prodtype",
    "Sub Catg",
    "Karat",
    "Job Worker Vendor",
    "Gross Wt",
    "Stone Weight",
    "N Wt",
    "Aging Days",
    "Branch"
    // Add more headers as needed
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
