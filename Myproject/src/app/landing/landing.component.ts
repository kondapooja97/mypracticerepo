import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
 constructor(private router:Router){}
 
 home(){
  this.router.navigateByUrl('home')
 }

test(){
  this.router.navigateByUrl('test')
}

gallery(){
  this.router.navigateByUrl('gallery')
}

}
