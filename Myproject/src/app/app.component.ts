import { Component } from '@angular/core';//import section
import { Router } from '@angular/router';

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
 no3='88';

 cars:string[]=['Audi','Jaguar','swift','BMW'];  //array of property
 car=this.cars[2];

 student={name:'pooja',age:26,salary:35000};

 genderM='Male';
 genderF='Female';

 paintinghobbies="painting";
 sketchinghobbies="sketching"
 readinghobbies="reading";

  userhobbies:string[]=[];

  favfruit = 'Orange';

  studentName: any = 'ppppppppppppp';
  empName = '';

  no1: number = 10;
  no2: number = 20;
  result?: number;

  constructor(private router:Router){}    //to inject dependancies
  
    //life cycle hooks 

    //functions
    //Data binding: It is a technique to link data between a component and the DOM. 
    //1.one way data binding 2.two way data binding
    //1.one way data binding :1.string interpolation 2.property binding 3.event binding
    //string interpolation:It is a one way data binding technique: .ts/model to dom/html/template {{}}

  learningstringinterpolation(){ //Void: default type of function 
      return this.city2;
  }
   
  gen(data:any){
    console.log('data',data.target.value);
    
   }

  Hobbies(data : any){
    console.log(data.target.value);
    console.log(this.userhobbies);
   }
   submit(event:any){
    console.log(event);
    }
   //this keyword use >> js : this key word is getting used inside object to point object's key
  //ts: this keyword is used to point global properties.
  //It is also used in functions to fetch value of global properties.
   fruit(){
    console.log(this.favfruit);
   }
   
  
    addition(){
      this.result=this.num1+this.num2;
      console.log('Res-->',this.result);
      
    }
    addition1(event:any)
    {
      this.num1=parseInt(event.target.value);
    }
    addition2(event:any){
      this.num2=parseInt(event.target.value);
    }

  landing() {
    this.router.navigateByUrl('landing')
  }
}
