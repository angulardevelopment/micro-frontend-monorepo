import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, EntryComponent],
  imports: [
    // BrowserModule,
    // RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    RouterModule.forChild([
      {
        path: '',
        component: EntryComponent,
      },
    ]),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
