import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { GalleryFacade } from '../../../../../libs/shared/data-store/src';

@Component({
  selector: 'test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent  {


    cats = this.galleryFacade.selectedCats$.pipe(
        map((selectedCats: any) => Array.from(selectedCats.values()))) as any;
    constructor(private galleryFacade: GalleryFacade) {}

}
