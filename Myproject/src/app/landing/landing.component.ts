import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  inputboxValue:any;
 constructor(private router:Router,private dataService:DataService){
  
 }
 
 home(){
  console.log(this.inputboxValue);
  this.dataService.inputBox=this.inputboxValue;  //set
  this.router.navigateByUrl('home')
 }

test(){
  this.router.navigateByUrl('test')
}

gallery(){
  this.router.navigateByUrl('gallery')
}
adminmod(){
  this.router.navigateByUrl('admin/adminLanding')
}
BlogLogin(){
  this.router.navigateByUrl('blog/blog-landing')
}
login(){
  this.router.navigateByUrl('login/studentLanding')
}

}
