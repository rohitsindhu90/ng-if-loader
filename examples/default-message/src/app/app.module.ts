import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BlockUIModule } from 'ng-if-block-ui';

@NgModule({
  imports: [
    BrowserModule,
    BlockUIModule.forRoot({
      message: 'Default Message...'
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
