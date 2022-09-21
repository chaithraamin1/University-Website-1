import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
