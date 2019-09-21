import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { ContentHeaderComponent } from './content-header/content-header.component';   
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'customers', component: CustomerInfoComponent },
  {path:'', component:AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerInfoComponent,
    ContentHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
