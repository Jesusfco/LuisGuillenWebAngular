import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  public menuBoolean: Boolean = false;
  constructor(private router: Router) { }


  ngOnInit() {
  }

  smoothScroll(id) {
    
    if(this.router.url != '/') {
      this.router.navigate(['./']);
    }

    var w = window.innerWidth;
    if(w <= 700){
      this.menuAction(); 
    }

    setTimeout(() => {

      var posicion = $(id).offset().top;
      $("html, body").animate({
          scrollTop: posicion - 120
      }, 750);

    }, 50);
    
  }

  menuAction() {
      

    if(this.menuBoolean == false) {
      this.menuBoolean = true;

      let b1 = document.getElementById('bodyMove1');
      let b2 = document.getElementById('bodyMove2');
      let b3 = document.getElementById('shadowMenu');

      b1.classList.add('bodyMove');
      b2.classList.add('bodyMove');
      b3.classList.add('display');

      b1.classList.add('active');
      b2.classList.add('active');

      setTimeout(() => {
        b3.classList.add('active');
      }, 1);
      

    } else {

      let b1 = document.getElementById('bodyMove1');
      let b2 = document.getElementById('bodyMove2');
      let b3 = document.getElementById('shadowMenu');

      b1.classList.remove('active');
      b2.classList.remove('active');
      b3.classList.remove('active');

      setTimeout(() => {
        b1.classList.remove('bodyMove');
        b2.classList.remove('bodyMove');
        b3.classList.remove('display');
        this.menuBoolean = false;
      }, 700);
      
    }
  }

}
