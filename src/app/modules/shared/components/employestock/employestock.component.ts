import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-employestock',
  templateUrl: './employestock.component.html',
  styleUrls: ['./employestock.component.css']
})
export class EmployestockComponent implements OnInit {

  constructor(private sharedservice:SharedService){}
  selectedCity!:string ;
  cities:any ;

  show:boolean =true;
 
  exportToExcel(data: any[]) { 
    let count = 0;
    count++
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `sheet ${count}`);

    XLSX.writeFile(wb, 'export.xlsx');
}

  employedata:any []=[];
  ngOnInit(): void {

    this.sharedservice.showbranch().subscribe({
      next:(data)=>{

        this.cities = data
      },error:(err)=>{

      }
    })
  }

change(data:string){

  this.sharedservice.employeweight(data).subscribe({
    
    next:(data)=>{
     this.employedata = data;
     this.show = false
      
    },
    error:(err)=>{

    }
  })
}
}
