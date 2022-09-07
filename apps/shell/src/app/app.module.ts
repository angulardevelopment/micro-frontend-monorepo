import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import {GalleryStoreModule} from '../../../../libs/shared/data-store/src/lib/gallery-store/gallery-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    GalleryStoreModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RouterModule.forRoot([
      {
          path: '',
          component: HomeComponent
      },
      {
          path: 'gallery',
          loadChildren: () => import('../../../gallery/src/app/app.module').then((m) => m.AppModule),
      },
  ],
  { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
