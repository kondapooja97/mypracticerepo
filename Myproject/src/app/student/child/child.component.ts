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
    // constructor is not a lf cycle hook,it will call first then hooks will get invoked
    console.log('constructor is called...');
    
  }
    ngOnInit(){
        //this will trigger first if compo dont have 
        //input bound properties
        //it will get invoked only once
    console.log('ng onInit calling...');
    this.dataService.city.subscribe(cityName=>{     //get the subject data
      this.city=cityName;
    })
  }
   ngOnChanges(){
    console.log('ng onchanges called...'); 
    //if component is having input bound properties then 
   //ngOnchanges will get trigger first then ngOninit will get trigger
   //repeatadly it will get trigger/call on every change of input bound property.
   
   }
   ngDoCheck(){
    //it will trigger after onChanges first time and repeatadly will get trigger after every onchanges
    console.log('ng docheck called...');
   }
   ngAfterContentInit(){
    //it will trigger only once after do check 
    console.log('ng aftercontent Init...');
    
   }
   ngAfterContentChecked() {
    //called after every doCheck
    console.log("content cheked");

 }
 ngAfterViewInit() {
  //it will called after compiler intializes component and child compo
  //invoked only once after oninit()
  console.log('afterViewInit......');

}
ngAfterViewChecked() {
  //first time it will get invoked after ngafterviewinit 
  //called after every  ngAfterContentChecked()
  console.log("ngAfterViewChecked..");

}
  submit() {
    this.childDataevent.emit(this.data)
  }

  
  ngOnDestroy() {
    console.log('ondestroy....');

 }
}
