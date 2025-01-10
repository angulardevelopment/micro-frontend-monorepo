import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';
import { GalleryFacade, GalleryStoreModule } from '@test/shared/data-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, EntryComponent],
  imports: [
    BrowserModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RouterModule.forRoot([
      {
        path: '',
        component: EntryComponent,
      },
    ]),
    CommonModule,
    GalleryStoreModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  providers: [GalleryFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
