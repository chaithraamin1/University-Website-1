import { Component } from '@angular/core';
import {ApiService} from 'src/app/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  PieChart:any=[];
  constructor() { }

  ngOnInit(): void {
  
  var close:any=document.getElementById("close");
  var navLinks:any=document.getElementById("navLinks");
   close.onclick=function(){
    debugger    
    navLinks.style.right="-200px";
   }
  }
  open(){
    debugger
    var navLinks:any=document.getElementById("navLinks");
    navLinks.style.right="0px";
  }

}