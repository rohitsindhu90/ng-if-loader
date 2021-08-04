import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BlockUIModule } from 'ng-if-block-ui';
import { BlockUIRouterModule, BlockUIPreventNavigation } from 'ng-if-block-ui/router';
import { BlockUIHttpModule } from 'ng-if-block-ui/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BlockElementModule } from './block-element/block-element.module';
import { BlockTemplateComponent } from './block-template/block-template.component';
import { AppComponent } from './app.component';
import { DeafultComponent } from './default/default.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MultiHttpComponent } from './multi-http/multi-http.component';

const appRoutes: Routes = [
  { path: '', canActivateChild: [BlockUIPreventNavigation], children: [
    { path: '', component: DeafultComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'multi-http', component: MultiHttpComponent }
  ]}
];

@NgModule({
  imports: [
    BrowserModule,
    BlockElementModule,
    BlockUIModule.forRoot({
      message: 'Global Default Message',
      enable:false,
      delayStop:10000
    }),
    BlockUIRouterModule.forRoot(),
    BlockUIHttpModule.forRoot({
      requestFilters: [], // /\/api.github.com\/users\//
      blockAllRequestsInProgress: true,
      
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    BlockTemplateComponent,
    AppComponent,
    DeafultComponent,
    LandingPageComponent,
    MultiHttpComponent
  ],
  providers: [],
  entryComponents: [
    BlockTemplateComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
