import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'My-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name:string    //creating class variable
  LastName:string
  title:string
  constructor(){} 
  ngOnInit()
  {
    this.Name=""
    this.LastName="" 
  }    
   displaytitle()
   {  
      this.title="Hello"
   }  
}
