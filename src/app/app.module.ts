import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardFormComponent } from './card-form/card-form.component';
import { CardFrontComponent } from './card-front/card-front.component';
import { CreditCardNumberPipe } from './credit-card-number.pipe';
import { CardBackComponent } from './card-back/card-back.component';
import { SuccessScreenComponent } from './success-screen/success-screen.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CardFormComponent,
    CardFrontComponent,
    CreditCardNumberPipe,
    CardBackComponent,
    SuccessScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
