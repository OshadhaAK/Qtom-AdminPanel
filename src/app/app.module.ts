import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsandservicesComponent } from './productsandservices/productsandservices.component';
import { IndustriesComponent } from './industries/industries.component';

import { ModaladdnewComponent } from './modaladdnew/modaladdnew.component';
import { ModalremoveconfirmationComponent } from './modalremoveconfirmation/modalremoveconfirmation.component';
import { ModalupdateformComponent } from './modalupdateform/modalupdateform.component';
import { UpdateindustrymodalComponent } from './updateindustrymodal/updateindustrymodal.component';
import { RemoveindustrymodalComponent } from './removeindustrymodal/removeindustrymodal.component';
import { NewindustrymodalComponent } from './newindustrymodal/newindustrymodal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SidebarComponent,
    DashboardComponent,
    ProductsandservicesComponent,
    IndustriesComponent,
    ModaladdnewComponent,
    ModalremoveconfirmationComponent,
    ModalupdateformComponent,
    UpdateindustrymodalComponent,
    RemoveindustrymodalComponent,
    NewindustrymodalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
