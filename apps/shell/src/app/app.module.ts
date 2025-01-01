import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

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
    // AppComponent2,
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
    // }),
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `https://example.com/images?src=${config.src}&width=${config.width}`
    //     // return `https://picsum.photos/200/300`
    //   }
    //   }
    // {
    //   provide: IMAGE_CONFIG,
    //   useValue: {
    //     breakpoints: [380, 640, 1200, 1920, 2048, 3840],
    // placeholderResolution: 25
    //   }
    // },
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `https://cdn-images-1.medium.com/max/400/${config.src}`;
    //     // ${config.width} 400
    //   },
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
