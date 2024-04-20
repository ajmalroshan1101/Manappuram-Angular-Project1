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
  // cities = [
  //   'BANGALORE MANUFACTURING UNIT',
  //   'KOLKATA MANUFACTURING UNIT',
  //   'CUTTACK WHOLESALE OFFICE',
  //   'NAGARATHPET WHOLE SALE OFFICE',
  //   'COIMBATORE WHOLE SALE OFFICE',
  //   'HYDERABAD WHOLE SALE OFFICE'
  // ];

  cities:any []= [];
  selectedCity: string ='';
  
  arrayofdata:any[]=[] ;

  totalsum:any[]=[];

  showthetable:boolean =false ;

  filteredCities: string[] = this.cities; // Initially show all cities
  searchTerm = '';

  employeestock:any []= [];
  departmentstock:any []= [];
  barcoding:any []= [];
  castingtemp:any []= [];
  show:boolean= false;

  kolkatadata:any[]=[];
  showKOL:boolean = false;
  showtext:boolean = false;

  lucknow:any[]=[];
  showluck:boolean = false;
  ngOnInit(): void {
   

    this.sharedserive.showbranch().subscribe({
      next:(data)=>{

        this.cities = data;
        console.log(data);
        
      },
      error:(err)=>{

      }
    })

      // Pre-select the first city initially (optional)
      this.selectedCity = this.cities[0];
  }

  onSubmit(data:string){

    if(data === 'BANGALORE MANUFACTURING UNIT'){

      this.showtext = false;
      this.showluck = false;
      this.showKOL = false;
      this.sharedserive.employeestock(data).subscribe({
        next:(data)=>{
         
         this.employeestock = data
         this.show = true
         
          
        }
      }) 
      this.sharedserive.departmentstock(data).subscribe({
        next:(data)=>{
          this.departmentstock = data
          this.show = true
        }
      }) 
      this.sharedserive.barcodingstock(data).subscribe({
        next:(data)=>{
          this.barcoding = data
          this.show = true
        }
      }) 
      this.sharedserive.castingtemp(data).subscribe({
        next:(data)=>{
          this.castingtemp = data
          this.show = true
          
        }
      }) 
    }
    else if(data === 'KOLKATA MANUFACTURING UNIT'){

      this.sharedserive.KOLKATA(data).subscribe({
        next:(data)=>{

          this.kolkatadata = data
          console.log(this.kolkatadata);
          
          this.show = false;
          this.showKOL = true;
          this.showtext = false;
          this.showluck = false;
        },
        error:(err)=>{

        }
      })
      

    }
    else if(data === 'CUTTACK WHOLESALE OFFICE'){
      console.log(2);
      this.showtext = true;
      this.showluck = false;

      this.show = false;
      this.showKOL = false
    }
    else if(data === 'NAGARATHPET WHOLE SALE OFFICE'){
      console.log(3);
      this.showtext = true;
      this.showluck = false;
      this.show = false;
      this.showKOL = false
    }
    else if(data === 'COIMBATORE WHOLE SALE OFFICE'){
      console.log(4);
      this.showtext = true;
      this.showluck = false;
      this.show = false;
      this.showKOL = false
    }
    else if(data === 'HYDERABAD WHOLE SALE OFFICE'){
      console.log(5);
      this.showtext = true;
      this.showluck = false;
      this.show = false;
      this.showKOL = false
    }
    else if(data === 'Outsourcing Cum Sales Office At Kolkatta'){
      console.log(6);
      this.showtext = true;
      this.show = false;
      this.showKOL = false
      this.showluck = false;
    }
    else if(data === 'Trust Kolkata'){
      console.log(7);
      this.showtext = true;
      this.showluck = false;
      this.show = false;
      this.showKOL = false
    }
    else if(data === 'LUCKNOW'){
     this.sharedserive.LUCKNOW(data).subscribe({
      next:(data)=>{

        this.lucknow = data;
        this.showluck = true;
        this.show = false;
        this.showKOL = false;
        this.showtext = false;


      },error:(err)=>{

      }
     })


    }

    
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
