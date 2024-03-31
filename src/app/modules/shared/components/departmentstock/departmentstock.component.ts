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
  showthetable: boolean = false;
  departmentdata: any[] = [];
  subDepartmentofhandmade: any[] = [];
  subDepartmentofCasting: any[] = [];
  dateWiseData:any[] = [];
  datebranch:any[]=[];
  datebranchdepartment:any[]=[];
  dataforsubdepartment:any[]=[];
  selectedSubDepForHandMade!: any;
  selectedSubDepForCasting!: any;

  showsubdepboxForHandMade: boolean = false;
  showsubdepboxForCastind: boolean = false;
  showDate:boolean = false;
  showDateAndBranch:boolean = false;
  showDateAndBranchAndDepartment:boolean = false;
  showsubdepartment:boolean = false;

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

  fromDate!:Date;
  toDate!:Date;
  // //This event function is for getting the branch nam and departmentr type for sending to backend
  // onsubmit(brn: string, dep: string) {
  //   const data = {
  //     brn,
  //     dep,
  //   };

    

  //   //Here we have done a api call for finding the stock by department wise with data 
  //   this.sharedservice.searchstochbydepartment(data).subscribe({
  //     next: (data) => {
  //       this.showthetable = true;
  //       this.departmentdata = data;
    
  //     },
  //     error: (err) => {},
  //   });
  // }

  // This event is for getting department sub categories from the dp 
  departmentbtn(dep: string) {
    
    this.sharedservice.listingSubDepartment(dep).subscribe({
      next: (data) => {
        // Here we are taking sub-department of handmade
        if (data.type === 'HAND MADE') {
          this.subDepartmentofhandmade = data.data;
          this.showsubdepboxForHandMade = true;
          this.showsubdepboxForCastind = false;


        } 
        //Here we are taking sub-Department of Casting
        else if (data.type === 'CASTING') {
          this.subDepartmentofCasting = data.data;
          this.showsubdepboxForCastind = true;
          this.showsubdepboxForHandMade = false;
      
        }
      },
      error: (err) => {},
    });
  }

  //input value of sud deaprtment of HAND MADE
  subsubdepartmentOfHandmade(ssub: any) {
    
    this.sharedservice.subsubepartment(ssub).subscribe({
      next: (data) => {
     
        this.dataforsubdepartment = data;
        this.showsubdepartment = true;
        this.showDate = false;
        this.showDateAndBranch = false;
        this.showDateAndBranchAndDepartment = false;
        
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  subsubdepartmentOfCasting(data: any) {
    console.log(data);
  }

  //Date wise api
  submitDate(FROM:Date , TO:Date){


    this.sharedservice.departmentStockDate(FROM , TO).subscribe({
      next:(data)=>{
        this.dateWiseData = data;
        this.showDate = true;
        this.showDateAndBranch = false;
        this.showDateAndBranchAndDepartment = false;
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    
  }

  //Branch wise api
  branchWiseBtn(from:Date , to:Date , branch:string){

      console.log(from , to , branch);
      this.sharedservice.departmentStockDateAndBranch(from , to , branch).subscribe({
        next:(data)=>{

          this.datebranch = data;
          this.showDate = false;
          this.showDateAndBranch = true;
          this.showDateAndBranchAndDepartment = false;
          
        },error:(err)=>{
          console.log(err);
          
        }
      })
      
  }

  dateAndBranchAndDepartment(from:Date , to:Date , branch:string , department:string ){

    this.sharedservice.dateAndBranchAndDepartmentAPI(from , to , branch , department).subscribe({
      next:(data)=>{
       
        this.datebranchdepartment = data;
        this.showDate = false;
        this.showDateAndBranch = false;
        this.showDateAndBranchAndDepartment = true;
        
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
