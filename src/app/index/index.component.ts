import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { VisitorService } from '../visitor.service';
import { Url } from '../url';


declare const $: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  progresBar: number = 0;

  piecesSlider: number;
  timeInterval: number = 6000;

  menuBoolean: Boolean = false;

  intervalProgressBar: any ;

  public blogs = [];
  public url: Url = new Url();
  public buttonSlider = 0;

  constructor(private titleService: Title, private _http: VisitorService ) {

    this.setBlog();

    titleService.setTitle('Luis Guillén | Coach Mental');
    this.setIntervalProgresBar(this.timeInterval);

  }

  ngOnInit() {

    setTimeout(() => {
      $('.slider .piece:gt(0)').hide();
    }, 50);

  }

  slider() {

    
    // sliderCircleBasic();
    $('.slider .piece:first-child').fadeOut(1000)
        .next('.slider .piece').fadeIn(1000)
        .end().appendTo('.sliderContainer .slider');

    // textAnimations();


}

  ngOnDestroy() {
    clearInterval(this.intervalProgressBar);
  }

  setIntervalProgresBar(time) {

    time = time / 1000;

    this.intervalProgressBar = setInterval(() => {

      let element = document.getElementById('barProgress');
      element.style.width = this.progresBar + '%';
      this.progresBar = this.progresBar + .1;
      if(this.progresBar >= 100) {
        this.progresBar = 0;
        this.slider();
      }


    }, time);


  }

  sliderNext() {
    // sliderCircleBasic();
    $('.slider .piece:first-child').fadeOut(500)
        .next('.piece').fadeIn(500)
        .end().appendTo('.sliderContainer .slider');
        this.progresBar = 0;

    // textAnimations();
}

sliderBefore() {
    // sliderCircleBasicReturn();
    $('.slider .piece:last-child').prependTo('.sliderContainer .slider').fadeIn(500);
    $('.slider .piece:nth-child(2)').fadeOut();

    setTimeout(() => {
        // $('#slider-piece:nth-child(2) .img .sliderText').addClass('sliderTextAnimation');
        // $('#slider-piece:first-child .img .sliderText').removeClass('sliderTextAnimation')
    }, 500);

    this.progresBar = 0;
}
  setBlog() {
    this._http.getIndexBlog().then(
      data => {

        this.blogs = data;

        for(let blog of this.blogs) {
          let title: String = blog.title;
          blog.url = title.split(' ').join('-');
        }
      },
      error => console.log(error)
    );
  }

 

}
