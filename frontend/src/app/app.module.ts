import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ResizeimagesComponent } from './resizeimages/resizeimages.component';
import { RotateImagesComponent } from './imageOperations/rotate-images/rotate-images.component';
import { BlurImagesComponent } from './imageOperations/blur-images/blur-images.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BackgroundRemoverComponent } from './imageOperations/background-remover/background-remover.component';
import { ChangeColorComponent } from './change-color/change-color.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ResizeimagesComponent,
    RotateImagesComponent,
    BlurImagesComponent,
    ErrorpageComponent,
    BackgroundRemoverComponent,
    ChangeColorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right' }),
    ToastContainerModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatGridListModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
