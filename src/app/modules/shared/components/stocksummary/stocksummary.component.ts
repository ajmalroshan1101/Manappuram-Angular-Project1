import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-stocksummary',
  templateUrl: './stocksummary.component.html',
  styleUrls: ['./stocksummary.component.css']
})
export class StocksummaryComponent implements OnInit{


  constructor(private sharedserive:SharedService){}



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
  ngOnInit(): void {
    
    
    this.sharedserive.showbranch().subscribe({
      next:(data)=>{

        this.cities = data;
        console.log(data);
        
      },
      error:(err)=>{

      }
    })
  }

  onSubmit(data:string){


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

  
}
