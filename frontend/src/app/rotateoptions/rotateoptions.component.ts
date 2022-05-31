import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconsService } from '../services/icons.service';

@Component({
  selector: 'app-rotateoptions',
  templateUrl: './rotateoptions.component.html',
  styleUrls: ['./rotateoptions.component.css']
})
export class RotateoptionsComponent implements OnInit {

  simpleoptions:boolean=false;
  public loading = false;
  time:any;
  seconds:any;
  counter:number=0;
  colorA:any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,public _icons:IconsService) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`

    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this._icons.HOME_ICON));
    iconRegistry.addSvgIconLiteral('resizeimage', sanitizer.bypassSecurityTrustHtml(this._icons.RESIZE_ICON));
    iconRegistry.addSvgIconLiteral('rotateimage', sanitizer.bypassSecurityTrustHtml(this._icons.ROTATE_ICON));
    iconRegistry.addSvgIconLiteral('blurimage', sanitizer.bypassSecurityTrustHtml(this._icons.BLUR_ICON));
    iconRegistry.addSvgIconLiteral('colorimage', sanitizer.bypassSecurityTrustHtml(this._icons.COLOR_ICON));
    iconRegistry.addSvgIconLiteral('imageOps', sanitizer.bypassSecurityTrustHtml(this._icons.IMAGE_OPERATIONS_ICON));

  }

  ngOnInit(): void {
  }
  selection={
    simple:"",
    advanced:"",
  }
  angles={
    angle:"",
  }
  colors={
    color:"",
  }
  loadingImage(){
    this.loading = true;
    this.time=10000,
    this.counter=this.time/1000;
    setInterval(()=>{
      this.counter--;
      if(this.counter==this.time){
        this.loading = false;
      }
    },1000);
    setTimeout(() => {
      this.loading = false;
    }, this.time);
  }

  rotate(value:any){

    this.angles.angle=value;
    console.log(this.angles.angle);
  }
  rgb={
    red:"",
    green:"",
    blue:"",
  }
colorchange(e:any){
    this.colors.color=e.target.value;
    this.colorA=e.target.value;
  }
  colorchange2(e:any){
    this.colors.color=e.target.value;
    this.colorA=e.target.value;
  }

  setValue(value:any){
    this.colorA=value;
  }
  handleSimple(){
    this.simpleoptions=true;
  }
  handleAdvanced(){
    this.simpleoptions=false;
  }
  handleAngle(form:NgForm){
    let formData = new FormData();
    formData.append("angle",this.angles.angle);
    console.log(this.angles.angle);
  }
}
