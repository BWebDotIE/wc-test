import { Component, OnInit } from '@angular/core';

import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  
  blog: Entry<any>[] = [];

  constructor(private _contentfulService: ContentfulService) { }

  ngOnInit() {
    this._contentfulService.getBlog()
      .then(blog => this.blog = blog)

  }



}
