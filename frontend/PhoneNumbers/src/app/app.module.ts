import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPhoneNumbersComponent } from './components/list-phone-numbers/list-phone-numbers.component';
import { CreatePhoneNumbersComponent } from './components/create-phone-numbers/create-phone-numbers.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PhoneNumberService } from './services/phoneNumber.service';

const appRoutes: Routes = [
  { path: 'list', component: ListPhoneNumbersComponent },
  { path: 'create', component: CreatePhoneNumbersComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListPhoneNumbersComponent,
    CreatePhoneNumbersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PhoneNumberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
