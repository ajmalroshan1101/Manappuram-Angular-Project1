import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  constructor(private route:Router , private commonService:CommonService){}

  username!:string;

  ngOnInit(): void {
    
    this.commonService.userData$.subscribe((data)=>{
     
      this.username = data.emp_name;      
    })
  }
 

  logout(){

    this.route.navigate(['/']);
    this.commonService.removeusertype();

  }

  // Function to toggle sidebar visibility 
  toggleSidebar() { 
    const sidebar = document.getElementById('logo-sidebar'); 
    if (sidebar) {
       sidebar.classList.toggle('-translate-x-full');
       }
   } 
  // Function to handle user menu dropdown 
  toggleUserMenu() { 
    const userMenu = document.getElementById('dropdown-user');
    if (userMenu) { 
      userMenu.classList.toggle('hidden'); 
    } 
     } 

    
}
