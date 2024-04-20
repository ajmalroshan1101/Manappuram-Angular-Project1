import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/service/excel.service';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-salesreport',
  templateUrl: './salesreport.component.html',
  styleUrls: ['./salesreport.component.css']
})
export class SalesreportComponent implements OnInit{
  
  selectedCity: string ='';
  startDate!: Date;
  endDate!: Date;
  saleData:any[] = [] ;

  show:boolean= true;

  cities :any [] = [];

  showtext:boolean = false;
  
  
  constructor(private excelService: ExcelService , private sharedservice:SharedService) { }

ngOnInit(): void {
  
  this.sharedservice.showbranch().subscribe({
    next:(data)=>{

      this.cities = data
    },error:(err)=>{

    }
  })
}
  
  submitDates(from:Date , to:Date , branch:string) {
    
    
    
    this.sharedservice.salereport(from , to , branch).subscribe({
      next:(data)=>{
        
        // this.saleData = data
        // this.show= false;

        if(data.length !== 0){
          this.saleData = data
          this.show= false;
          this.showtext = false

        }else{

          this.show = true;
          this.showtext = true;
        }
      },
      error:(err)=>{
        
      }
    })
    
  }
  
  // exportTableToExcel(): void {
  //   this.excelService.exportToExcel(this.saleData);
  // }

  exportToExcel(data: any[]) { 
    let count = 0;
    count++
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `sheet ${count}`);

    XLSX.writeFile(wb, 'export.xlsx');
}
}
