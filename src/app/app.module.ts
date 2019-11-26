import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { from } from 'rxjs';
import { GalleryComponent } from './gallery/gallery.component';

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
    GalleryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
