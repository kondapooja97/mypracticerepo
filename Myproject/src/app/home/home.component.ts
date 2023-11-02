import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  inpVal:any;
constructor(private router:Router,private dataService:DataService){}

  ngOnInit(){
    this.inpVal=this.dataService.inputBox;
  }

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
