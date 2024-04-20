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

  username!:any;
  branch!:any;

  ngOnInit(): void {
    

    this.username = this.commonService.getuser();

    this.branch = this.commonService.getbranch();
    
  }
 

  logout(){

    this.route.navigate(['/']);
    this.commonService.removeusertype();
    this.commonService.removebranch();

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
