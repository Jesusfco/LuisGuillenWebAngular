import { Url } from "../url";

export class Blog {
    public id: Number;
    public title: String;
    public resume: String;
    public text: String;
    public date: String;
    public youtube: String;
    public img: String;
    public url: String;
    public imgUrl: String;
    public created_at: String;
    public updated_at: String;

    constructor() {}

    setData(data) {
        this.id = data.id;
        this.title = data.title;
        this.resume = data.resume;
        this.text = data.text;
        this.date = data.date;
        this.youtube = data.youtube;
        this.img = data.img;
        this.url = data.url;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;

        this.setUrl();
        this.setImgFormatTag();
        this.setBlogImgUrl();

    }

    setUrl() {
        
        this.url = this.title.split(' ').join('-');
    }

    setImgFormatTag(){
        this.img = this.img.split(' ').join('%20');
    }

    setBlogImgUrl(){

        let url = new Url();
        this.imgUrl = url.basic + 'images/blog/' + this.id + '/' + this.img;

    }
}