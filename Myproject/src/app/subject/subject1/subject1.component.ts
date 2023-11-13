import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.scss']
})
export class Subject1Component {
name!:string;
dataInsubjectcompon!:string;
  constructor(private dataService:DataService){}

  ngOnInit(){
    this.dataService.namesubjectdata.subscribe(name=>{
      this.name=name;
    })
  }
}
