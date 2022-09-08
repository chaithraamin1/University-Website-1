import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mail_subscription_with_google';
  ngOnInit(){
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxZCmvQLD3ScBlR83-Y9eyD_dAmOKPkBdNyno5LvDgMwcHZl_KOzRddtTo5QXfu35ck/exec';
    const newLocal:any = 'submit-to-google-sheet';
    const form = document.forms[newLocal];
    const msg:any =document.getElementById("msg");
    form.addEventListener('submit', function (e:any) {
        debugger;
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
            msg.innerHTML='Thank You For subscribing!'
            setTimeout(function(){
              msg.innerHTML="";
            },3000)
           form.reset()
          })
          .catch(error => console.error('Error!', error.message));
      })
  }
}
