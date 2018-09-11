import { Injectable } from '@angular/core';
import { Url } from './url';
import { Http, Headers } from '@angular/http';
import "rxjs";
import { HttpClient } from 'selenium-webdriver/http';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class VisitorService {

  public link: Url = new Url();
  
  constructor(private _http: Http, private meta: Meta) {}

  getIndexBlog() {
    return this._http.get(this.link.api + 'indexBlog' )
    .map(data => data.json())
    .toPromise();

  }

  getBlog(search) {
    return this._http.post(this.link.api + 'blog/get', {title: search} )
    .map(data => data.json())
    .toPromise();

  }

 setTags(config) {

  this.meta.updateTag({name: 'twitter:card', content: 'summary'});
  this.meta.updateTag({name: 'twitter:site_name', content: 'Luis Guillen | Coaching'});
  this.meta.updateTag({name: 'twitter:title', content:  config.title});
  this.meta.updateTag({name: 'twitter:description', content:  config.description});
  this.meta.updateTag({name: 'twitter:image', content:  config.img});

  this.meta.updateTag({property: 'og:type', content: 'article'});
  this.meta.updateTag({property: 'og:site_name', content: 'Luis Guillen | Coaching'});
  this.meta.updateTag({property: 'og:title', content: config.title});
  this.meta.updateTag({property: 'og:description', content: config.description});
  this.meta.updateTag({property: 'og:image', content: config.img});

 }

}
