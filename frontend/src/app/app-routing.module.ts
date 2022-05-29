import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { BlurImagesComponent } from './imageOperations/blur-images/blur-images.component';
import { RotateImagesComponent } from './imageOperations/rotate-images/rotate-images.component';

import { ResizeimagesComponent } from './resizeimages/resizeimages.component';
import { RotateoptionsComponent } from './rotateoptions/rotateoptions.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'resizeimages', component:ResizeimagesComponent },
  { path: 'rotateimages', component:RotateImagesComponent },
  { path: 'blurimages', component:BlurImagesComponent},
  { path: 'rotateoptions', component:RotateoptionsComponent},
  { path: '**', component:ErrorpageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
