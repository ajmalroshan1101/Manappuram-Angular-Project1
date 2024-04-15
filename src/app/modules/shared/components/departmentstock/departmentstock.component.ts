import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SharedService } from '../../service/shared.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-departmentstock',
  templateUrl: './departmentstock.component.html',
  styleUrls: ['./departmentstock.component.css'],
})
export class DepartmentstockComponent implements OnInit {
  constructor(private sharedservice: SharedService) {}

  dropdownData: any[] = [];
  handmadedata:any[]=[];
  castingdata:any[]=[];
  selectedSubDepForHandMade!: any;
  selectedSubDepForCasting!: any;

  
  showHandMadeTable:boolean = false;
  showcastingtable:boolean = false;

  departmentData = [{ department: 'CASTING' }, { department: 'HAND MADE' }];

  exportToExcel(data: any[]) { 
    let count = 0;
    count++
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, `sheet ${count}`);

    XLSX.writeFile(wb, 'export.xlsx');
}

  ngOnInit(): void {
    initFlowbite();

    this.sharedservice.branchdetails().subscribe({
      next: (data) => {
        this.dropdownData = data;

        
      },
      error: (err) => {},
    });
  }

  inputData1 = '';
  inputData2 = '';
  selectedValue: any;
  selectedLabel: string = '';
  selectedValue2: string = '';



  dateAndBranchAndDepartment( branch:string , department:string ){

    this.sharedservice.dateAndBranchAndDepartmentAPI(branch , department).subscribe({
      next:(data)=>{
     
        
        if(data.dep === 'hand'){


          this.handmadedata = data.result;
          this.showHandMadeTable = true;
          this.showcastingtable = false;

          

        }else if(data.dep === 'cast'){

          this.castingdata = data.result;
          this.showcastingtable = true;
          this.showHandMadeTable = false;
        }
              
       
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

  exportdata(data:any[]){

    this.exportToExcel(data);
  }
}
