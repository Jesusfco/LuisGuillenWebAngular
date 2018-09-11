import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../visitor.service';
import { Blog } from '../classes/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public principalsBlog: Array<Blog> = [];
  constructor(private _http: VisitorService) { }

  ngOnInit() {
  }

}
