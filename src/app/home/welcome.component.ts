import { Component } from '@angular/core';
import { GoogleAnalyticsService } from '../analytics/google-analytics.service';

import { CarouselComponent } from './carousel/carousel.component';
import { AppComponent } from '../app.component';
/*
import '@clr/icons'
import '@clr/icons/shapes/core-shapes';
import '@clr/icons/shapes/essential-shapes';
import '@clr/icons/shapes/technology-shapes';
*/
@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  public pageTitle: string = 'Welcome';

  constructor(public googleAnalyticsService: GoogleAnalyticsService) { }

  ProductClick() {
    this.googleAnalyticsService.eventEmitter("view_item_list", "view products", "products", 0);
  }
}
