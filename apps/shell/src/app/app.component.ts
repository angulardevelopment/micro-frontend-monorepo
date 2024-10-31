import { Component, OnInit } from '@angular/core';
import { GalleryFacade } from '../../../../libs/shared/data-store/src';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'shell';
  postImage1 = "assets/Angular_full_color_logo.svg.png";
  postImage = "https://i.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8";

  constructor(private galleryFacade: GalleryFacade) {}

  ngOnInit(): void {
      this.galleryFacade.init();
  }

}




