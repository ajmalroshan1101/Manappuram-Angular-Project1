import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  exportToExcel(data: any[]) { 
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'BRANCH WISE GOLD PURCHASE LIST');

    XLSX.writeFile(wb, 'export.xlsx');
}

  constructor(private sharedserive:SharedService){}
  cities = [
    'BANGALORE MANUFACTURING UNIT',
    'KOLKATA MANUFACTURING UNIT',
    'CUTTACK WHOLESALE OFFICE',
    'NAGARATHPET WHOLE SALE OFFICE',
    'COIMBATORE WHOLE SALE OFFICE',
    'HYDERABAD WHOLE SALE OFFICE'
  ];
  selectedCity: string ='';
  
  arrayofdata:any[]=[] ;

  totalsum:any[]=[];

  showthetable:boolean =false ;

  filteredCities: string[] = this.cities; // Initially show all cities
  searchTerm = '';

  ngOnInit(): void {
     // Pre-select the first city initially (optional)
     this.selectedCity = this.cities[0];
  }

  onSubmit(data:string) {

  
    this.sharedserive.searchstockbybranch(data).subscribe({
      next:(data)=>{

        this.showthetable = true;
        this.arrayofdata = data;

        const weightSumByVariant = data.reduce((acc: { variant: string, weight: number }[], item: any) => {
          // Convert weight string to number
          const weight = parseInt(item.weight, 10);
        
          // Check if variant name exists in accumulator
          const existingVariant = acc.find(entry => entry.variant === item.gold_alloy_variant_name);
        
          // If variant exists, update weight
          if (existingVariant) {
            existingVariant.weight += weight;
          } else {
            // If variant doesn't exist, create a new object and add it to accumulator
            acc.push({
              variant: item.gold_alloy_variant_name,
              weight: weight
            });
          }
        
          return acc;
        }, []);
        
        this.totalsum= weightSumByVariant 
        
        
      },
      error:(err)=>{
        console.error(err);
        
      }
    })
  }



  exportToExcelTotal() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.totalsum);

    // Add formatting (optional)
   
    XLSX.utils.sheet_add_aoa(ws, [['Variant' , 'Weight']], { origin: 'A1' });

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'SUM OF GOLD ');

    // Use FileSaver.js (install separately) for browser download
    const filename = 'exported_data.xlsx';
    XLSX.writeFile(wb, filename);
  }
    
  exportToExcelALL(){

    this.exportToExcel(this.arrayofdata);
  }
  
}
