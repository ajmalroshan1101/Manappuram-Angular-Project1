import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  constructor(
    private commonService : CommonService ,
     private router:Router,
     ){}
  
  usertype!:string;
  branch!:string;
  message!:string;
  bool!:boolean;

  submitForm(formData: any) {
 
    this.commonService.findUser(formData.value).subscribe({
      next:(data)=>{
        
     
        
        if(data.success === false){
          
          this.bool = true;
          this.message = 'Invalid user or Password'
        }else if(data.success === true){

          //assigning the value to the variable
          this.usertype = data.data[0].emp_name;

          //for branch
          this.branch = data.data[0].branch_name;
         
          this.commonService.storeuser(this.usertype);



          this.commonService.storebranch(this.branch);
  
          // if(this.usertype === 'Casting'){
            
            this.router.navigate(['/shared/homepage'])
          // }
        }
        // this.router.navigate(['/shared/homepage'])

    
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }
}

