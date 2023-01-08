import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, AppComponent2 } from './app.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule, IMAGE_LOADER, NgOptimizedImage, provideImgixLoader, ImageLoaderConfig } from '@angular/common';

import {GalleryStoreModule} from '../../../../libs/shared/data-store/src/lib/gallery-store/gallery-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppComponent2,
    NgOptimizedImage,
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
  providers: [
    // provideImgixLoader("https://picsum.photos/", {
    //   ensurePreconnect: true
    // })
    // { 
    //   provide: IMAGE_LOADER, 
    //   useValue: (config: ImageLoaderConfig) => { 
    //     // return `https://example.com/images?src=${config.src}&width=${config.width}` 
    //     return `https://picsum.photos/200/300` 
    //   } 
    //   }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
