import { Component, OnInit } from '@angular/core';
import {RESTService} from '../rest.service'
import {UserService } from '../../services';

import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  allUserData:any;
  tablecolheaders:[];

  constructor(private rest :RESTService,private userService: UserService,private router: Router) { }

  ngOnInit() {

    this.rest.getallUserData().subscribe(
      res =>{
        this.allUserData= res
        console.log(this.allUserData)
       
      } );
   
  }

  delete(user_id){
    this.userService.delete(user_id).subscribe((res) => {
      this.rest.getallUserData().subscribe(
        res =>{
          this.allUserData= res
          console.log(this.allUserData)
         
        } );
    })
    
   

      this.router.navigate(['/users']);


  }

  clickMethod(user_id) {
    if(confirm("Are you sure you want to delete this user?")) {
      this.userService.delete(user_id).subscribe((res) => {
        this.rest.getallUserData().subscribe(
          res =>{
            this.allUserData= res
            console.log(this.allUserData)
           
          } );
      })
      
     
  
        this.router.navigate(['/users']);
    }
  }
  



}
