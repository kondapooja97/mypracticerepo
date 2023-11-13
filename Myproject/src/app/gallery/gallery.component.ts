import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  inputboxValue: any;
  name: string = "pooja";
  date1 = "19/04/1992";
constructor(private router:Router){}


goback(){
  this.router.navigateByUrl('landing')
}
}
