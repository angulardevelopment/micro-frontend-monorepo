import { createAction, props } from '@ngrx/store';
import { GalleryEntity } from './gallery.models';

export const initGallery = createAction('[Gallery Page] Init Load Cats List');

export const loadGallerySuccess = createAction(
  '[Gallery/API] Load Gallery Success',
  props<{ gallery: GalleryEntity[] }>()
);

export const loadGalleryFailure = createAction(
  '[Gallery/API] Load Gallery Failure',
  props<{ error: any }>()
);

export const toggleSelectCat = createAction(
  '[Gallery] Toggle Select Cats',
  props<{ cat: any }>()
);
