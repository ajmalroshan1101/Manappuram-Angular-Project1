import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

  ngOnInit(): void {
    
  }
  isSidebarOpen: boolean = true; // Initially set to true to show the sidebar

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
