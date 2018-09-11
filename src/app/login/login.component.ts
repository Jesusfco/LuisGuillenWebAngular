import { Component, OnInit } from '@angular/core';
import { Url } from '../url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public url: Url = new Url();

  constructor() {

    setTimeout(() => {

      let element = document.getElementById('log');
      console.log(element);
      element.setAttribute('src', this.url.basic + 'login');

    }, 50);

   }

  ngOnInit() {
  }

}
