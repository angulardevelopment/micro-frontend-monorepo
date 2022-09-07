import { Component } from '@angular/core';
import { GalleryFacade } from '../../../../libs/shared/data-store/src';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shell';
  constructor(private galleryFacade: GalleryFacade) {}
  ngOnInit(): void {
      this.galleryFacade.init();
  }
}
