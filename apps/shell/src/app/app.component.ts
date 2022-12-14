import { Component } from '@angular/core';
import { GalleryFacade } from '../../../../libs/shared/data-store/src';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';
  postImage = "https://i.picsum.photos/id/556/200/300.jpg?hmac=TLwE28gIMuw2BUTndMuC3hoTlK6FtrE6Mx1UnR2dzu8";
  constructor(private galleryFacade: GalleryFacade) {}
  ngOnInit(): void {
      this.galleryFacade.init();
  }
}



@Component({ selector: 'my-app', template: `<h1>Hello World!</h1>`, 
standalone: true,}) export class AppComponent2 {}