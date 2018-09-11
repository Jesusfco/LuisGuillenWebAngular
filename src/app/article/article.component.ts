import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Router, ActivatedRoute } from '@angular/router';

import { FacebookService, UIParams, UIResponse } from 'ngx-facebook';
import { Title, Meta } from '@angular/platform-browser';
import { Blog } from '../classes/blog';
import { MetaTags } from '../classes/metaTags';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  observerRef: any;

  public metaTags = new MetaTags();
  public blog: Blog = new Blog();

  constructor(private _http: VisitorService,
    private router: Router,
    private actRou: ActivatedRoute,private titleService: Title) { 

      this.observerRef = actRou.params.subscribe(params => {
        this.blog.title = params['name'];
        this.blog.url = params['name'];
        this.blog.title = this.blog.title.split('-').join(' ');

        titleService.setTitle(this.blog.title + ' | Luis Guillén | Blog');
        this.setBlog();
        
         
        
        setTimeout( () => {
          window.scrollTo(0, 0);
          this.setDataHerfComment();
          var script = document.getElementById('facebookScript');
          
        }, 50);
        
      });

     

    }

  ngOnInit() {
  }

  setBlog() {
    this._http.getBlog(this.blog.title).then(

      data => {

        this.blog.setData(data);

        this.metaTags.setData({title: this.blog.title + ' | Luis Guillén | Blog' , description: this.blog.resume, img: this.blog.imgUrl });
        this._http.setTags(this.metaTags);

        if(this.blog.youtube != null) {
          this.setIframeYoutube();
        } else {
          this.erraseYoutube();
        }
      },
      error => console.log(error)
      
    );
  }

  setIframeYoutube() {

    setTimeout(() => {
      let iframe = document.getElementById('iframeContainer');
    iframe.innerHTML = this.blog.youtube.toString();


    iframe.firstElementChild.setAttribute('width', '100%');
    iframe.firstElementChild.setAttribute('height', '100%');
    iframe.firstElementChild.setAttribute('style', 'position: absolute;');
    }, 50);


  }

  setDataHerfComment() {

    let comment = document.getElementById('comentBox');
    comment.setAttribute('data-href', 'http://luisguillen.com.mx/blog/' + this.blog.url);
    
  }

  erraseYoutube() {
    // let iframe = document.getElementById('iframeContainer');
    // iframe.innerHTML = '';
  }

}
