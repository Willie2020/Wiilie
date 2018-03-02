import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NewstuffComponent } from './components/newstuff/newstuff.component';
import { RouterModule} from '@angular/router';
import { Route } from '@angular/router/src/config';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewstuffComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      {path: 'newstuff', component: NewstuffComponent},
      {path: '', component: UserComponent}, 
    ],{useHash: true}),
  ],
  entryComponents: [
    NewstuffComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
// platformBrowserDynamic().bootstrapModule( AppModule );

