import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  vendorcount!:number ; 
  constructor(private sharedservice : SharedService){
  }

  

  ngOnInit(): void {
    this.sharedservice.showvendor().subscribe({
      next:(data)=>{

        console.log(data);
        
        this.vendorcount = data.length
        
      },
      error:(err)=>{

        console.log(err);
        
      }
    })
  }
}
