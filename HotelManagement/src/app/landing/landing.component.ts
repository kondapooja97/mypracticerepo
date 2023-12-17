import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(private router:Router){}
  
adminSelected(){
  // let selectModule = "admins";
  // this.dataservice.moduleNavigation(selectModule);
  this.router.navigateByUrl('/admin/adminlanding')
 }

ownerSelected(){
//  let selectModule = "owners";
//  this.dataservice.moduleNavigation(selectModule);
 this.router.navigateByUrl('/owner/ownerlanding')
}
 
userSelected(){
//  let selectModule = "users";
  // this.dataservice.moduleNavigation(selectModule);
  this.router.navigateByUrl('/user/userlanding')
}
}
