import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-departmentstock',
  templateUrl: './departmentstock.component.html',
  styleUrls: ['./departmentstock.component.css']
})
export class DepartmentstockComponent implements OnInit {

  constructor(private sharedservice:SharedService){}

  dropdownData:any[]=[]

  departmentData = [
    {department:'CASTING'},
    {department:'HAND MADE'}
  ]

  ngOnInit(): void {
    initFlowbite();

    this.sharedservice.branchdetails().subscribe({
      next:(data)=>{

        this.dropdownData = data
        console.log(data);
        
      },
      error:(err)=>{

      }
    })
  }

  inputData1 = '';
  inputData2 = '';
  selectedValue: any;
  selectedLabel: string = '';
  selectedValue2:string = '';
  

  onDropdownChange(event: any) {
    const selectedOption = this.dropdownData.find(option => option.value === event.target.value);
    if (selectedOption) {
      this.selectedLabel = selectedOption.label;
    } else {
      this.selectedLabel = ''; // Handle case where no option is selected
    }
  }

  onsubmit(brn:string , dep:string){

    const data = {
      brn,
      dep
    }
    console.log(data);

    this.sharedservice.searchstochbydepartment(data).subscribe({
      next:(data)=>{

        console.log(data);
        
      },
      error:(err)=>{

      }
    })
    
  }

}
