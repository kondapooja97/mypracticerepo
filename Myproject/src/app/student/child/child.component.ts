import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() dataFromParentCompo: any;
  @Output() childDataevent = new EventEmitter<any>();
  data: any;
  @Input() colorsfromParent:any;
  city:any;

  constructor(private dataService:DataService){

  }

  ngOnInit(){
    this.dataService.city.subscribe(cityName=>{     //get the subject data
      this.city=cityName;
    })
  }
  submit() {
    this.childDataevent.emit(this.data)
  }
}
