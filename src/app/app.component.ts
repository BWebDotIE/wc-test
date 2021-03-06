import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful/contentful.service';
import { Router, NavigationEnd } from "@angular/router";  //just for Google Analytics to record every route change and sent it back to Google as a page view. For more info, see https://codeburst.io/using-google-analytics-with-angular-25c93bffaa18. In other words, NavigationEnd is used for gtag to find out the 'page' by what comes after the '/' 

import { GoogleAnalyticsService } from './analytics/google-analytics.service';

declare let gtag: Function;

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  title: string = 'Wood Concepts';
  c: string;
  e: string;
  unscrampledEmail: string;

  constructor(
    private ContentfulService: ContentfulService,
    private router: Router,//just for Google Analytics to record every route change and sent it back to Google as a page view
    public googleAnalyticsService: GoogleAnalyticsService)
  {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-172953861-1', { 'page_path': event.urlAfterRedirects })
        //gtag('config', 'AW-820291490', { 'page_path': event.urlAfterRedirects }),
        //  gtag('config', 'UA-112883087-2', { 'page_path': event.urlAfterRedirects });
      }
    });
  }

  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventAction: 'eventAction',
      eventCategory: 'event_category',
      eventLabel: 'event_label',
      eventValue: 0
    });
  }

  ProductClick() {
    this.googleAnalyticsService.eventEmitter("view_item_list", "view products", "products", 0);
  }


  ngOnInit() {
    this.ContentfulService.onTitleChange(title => this.title = title)
  }


  emailAddress = ' ' + '&#116;&#109;&#115;&#64;&#116;&#109;' + '&#115;&#46;&#105;&#101';




}
