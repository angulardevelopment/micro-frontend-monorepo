import { Component, OnInit } from '@angular/core';
// import { GalleryFacade } from '@test/shared/data-store';
import { GalleryFacade } from '../../../../../libs/shared/data-store/src';


@Component({
  selector: 'test-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent  {

      cats = this.galleryFacade.allGallery$ as any;
      selectedCats = this.galleryFacade.selectedCats$;
      constructor(private galleryFacade: GalleryFacade) {}
      toggleSelectCat(cat: any) {
          this.galleryFacade.toggleSelectCat(cat);
      }
      isSelected(catId: any) {
          return this.galleryFacade.isCatSelected(catId);
      }
  
}
