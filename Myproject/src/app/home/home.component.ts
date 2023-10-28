import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
constructor(private router:Router){}

back(){
  this.router.navigateByUrl('landing')
}
login(){
  this.router.navigateByUrl('login/studentlogin')
}
signup(){
  this.router.navigateByUrl('signup/studentsignup')
}

}
