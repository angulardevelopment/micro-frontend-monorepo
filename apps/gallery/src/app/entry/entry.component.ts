import { Component, OnInit } from '@angular/core';
// import { GalleryFacade } from '@test/shared/data-store';
import { GalleryFacade } from '../../../../../libs/shared/data-store/src';
import { GalleryEntity } from 'libs/shared/data-store/src/lib/gallery-store/state/gallery.models';


@Component({
  selector: 'test-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent {

  cats = this.galleryFacade.allGallery$;
  selectedCats = this.galleryFacade.selectedCats$;

  constructor(private galleryFacade: GalleryFacade) {
    this.cats.subscribe((cats) => {
      console.log('cats', cats);
    });
  }

  ngOnInit() {
      this.galleryFacade.init();
  }

  toggleSelectCat(cat: GalleryEntity) {
    this.galleryFacade.toggleSelectCat(cat);
  }

  isSelected(catId: string) {
    return this.galleryFacade.isCatSelected(catId);
  }

}
