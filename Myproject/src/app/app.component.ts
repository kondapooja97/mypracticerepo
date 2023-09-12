import { Component } from '@angular/core';//import section

@Component({    //component directive/decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //class to write code here
  title = 'My First Angular Project !!!';
  //let/var/const city = 'pune';
//any Data type
//property
 city? : string ; //declaration of property

 city2 : string = 'pune'; //declration + def of proprty

 city3 = 'mumbai.....';

 name='Aranya';
 num1=10;
 num2=100;

  constructor(){}    //to inject dependancies
  
//life cycle hooks 

//functions
  learningstringinterpolation(){
      return this.city2;
  }
}
