import { Meta } from "@angular/platform-browser";
import { Url } from "../url";

export class MetaTags {
    public title: string;
    public description: string;
    public img: string;

    
    constructor() {}

    setData(data) {
        this.title = data.title;
        this.description = data.description;
        this.img = data.img;
        // this.setTags();
    }

    setImgFromServer() {
        // let url = new Url();
        // let momentString = this.img;
        // this.img = url.basic
    }

    // setTags() {

    //     this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    //     this.meta.updateTag({name: 'twitter:site_name', content: 'Luis Guillen | Coaching'});
    //     this.meta.updateTag({name: 'twitter:title', content:  this.title});
    //     this.meta.updateTag({name: 'twitter:description', content:  this.description});
    //     this.meta.updateTag({name: 'twitter:image', content:  this.img});
      
    //     this.meta.updateTag({name: 'og:type', content: 'article'});
    //     this.meta.updateTag({name: 'og:site_name', content: 'Luis Guillen | Coaching'});
    //     this.meta.updateTag({name: 'og:title', content: this.title});
    //     this.meta.updateTag({name: 'og:description', content: this.description});
    //     this.meta.updateTag({name: 'og:image', content: this.img});
    //    }
}