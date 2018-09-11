import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  login: boolean = false;

  constructor(private router: Router) {

    router.events.subscribe((val) => {
      if(router.url == '/login') {
        this.login = true;
      } else {
        this.login = false;
      }
    });

    // setInterval(() => {

    //   if(this.router.url == '/login') {
    //     this.login = true;
    //   } else {
    //     this.login = false;
    //   }

      
    // }, 2000);

  }
}
