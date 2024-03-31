import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  constructor(private route:Router , private commonService:CommonService){}

  isMobileMenuOpen = true;
  toggleMenu() {
    
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  
  logout(){

    this.route.navigate(['/']);
    this.commonService.removeusertype();

  }
}
