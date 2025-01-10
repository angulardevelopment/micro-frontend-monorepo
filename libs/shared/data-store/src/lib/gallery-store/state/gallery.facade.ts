import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import { map } from 'rxjs';

import * as GalleryActions from './gallery.actions';
import * as GalleryFeature from './gallery.reducer';
import * as GallerySelectors from './gallery.selectors';
import { GalleryEntity } from './gallery.models';

@Injectable()
export class GalleryFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(GallerySelectors.getGalleryLoaded));
  allGallery$ = this.store.pipe(select(GallerySelectors.getAllGallery));
  selectedGallery$ = this.store.pipe(select(GallerySelectors.getSelected));
  selectedCats$ = this.store.pipe(select(GallerySelectors.getSelectedCats));
  constructor(private readonly store: Store) {
    console.log('GalleryFacade created');
  }

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(GalleryActions.initGallery());
  }
  isCatSelected(catId: string) {
    return this.selectedCats$.pipe(
        map((selectedCats) => selectedCats.has(catId))
    );
}
toggleSelectCat(cat:GalleryEntity) {
    this.store.dispatch(GalleryActions.toggleSelectCat({ cat }));
}
}
