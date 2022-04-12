import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RedHilightDirective } from './red-hilight.directive';
import { GreenHilightDirective } from './green-hilight.directive';

@NgModule({
  declarations: [
    AppComponent,
    RedHilightDirective,
    GreenHilightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
