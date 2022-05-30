import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const THUMBUP_ICON =`
<svg xmlns="http://www.w3.org/2000/svg" width="700pt" height="700pt" version="1.1" viewBox="0 0 700 700">
<g>
 <path d="m566.36 50.91h-432.73c-7.0195 0.019532-12.707 5.707-12.727 12.727v432.73c0.019532 7.0195 5.707 12.707 12.727 12.727h432.73c7.0195-0.019532 12.707-5.707 12.727-12.727v-432.73c-0.019532-7.0195-5.707-12.707-12.727-12.727zm-267.91 326.84c-1.793-5.1523-6.6328-8.6172-12.09-8.6562h-140v-59.055l24.82-30.035h0.63281v-0.76172l20.367-24.691 5.0898-6.1094 15.91-19.348 9.5469-11.453 17.945-21.762 32.961 49.887 5.7266 8.7812 23.926 36.145v0.003906c2.1836 3.2031 5.6875 5.2578 9.5469 5.5977 3.8398 0.38281 7.6445-1.0273 10.309-3.8164l117.09-121.55 113.4 114.29v122.05h-280l20.363-15.273c4.332-3.3438 6.1133-9.0391 4.4531-14.254zm-152.09-148.66h25.453v-25.453h-25.453v-25.453h25.453v-25.457h-25.453v-25.453h25.453v-25.457h-25.453v-25.453h25.453v25.453h25.453l0.003907-25.453h25.453v25.453h25.453l0.003906-25.453h25.453v25.453h25.453v-25.453h25.453l0.003906 25.453h25.453v-25.453h25.453v25.453h25.453l0.003906-25.453h25.453v25.453h25.453v-25.453h25.453l0.003907 25.453h25.453v-25.453h25.453l0.003906 25.453h25.453v25.453l-25.453 0.003907v25.453h25.453v25.453l-25.453 0.003906v25.453h25.453v25.453h-19.855l-5.5977-5.5977v-19.855h-19.73l-5.7266-5.8555v-19.598h-19.473l-5.9805-5.9844v-19.473h-19.348l-6.1094-6.2344v-19.219h-25.453v21.383l-3.9453 4.0742-21.508-0.003907v22.398l-3.0547 3.0547-22.402 0.003906v23.289l-2.0352 2.1641h-23.418v24.184l-1.1445 1.2734-24.309-0.003906v25.074l-0.25391 0.38281h-14.383l-10.82-16.418v-9.0391h-5.9805l-16.801-25.453h22.781v-25.453h-25.453v21.508l-14.129-21.508h14.129v-25.457h-25.453v10.82c-1.7305-1.0469-3.707-1.6172-5.7305-1.6562-4.0156-0.26172-7.9102 1.4492-10.434 4.582l-9.2891 11.199-0.003907-24.945h-25.453v25.453h25.074l-21 25.453-4.0742 0.003907v4.8359l-17.055 20.617h-8.4023v10.184l-12.598 15.273h-12.855zm381.82 229.09v25.453h-25.457v-25.453h-25.453v25.453h-25.457v-25.453h-25.453v25.453h-25.453v-25.453h-25.457v25.453h-25.453v-25.453h-25.453v25.453h-25.457v-25.453h-25.453v25.453h-25.453v-25.453h-25.457v25.453h-25.453v-25.453h-25.457v25.453h-25.453v-25.453h25.453v-25.457h-25.453v-25.453h25.453v-12.727h25.453v12.727h25.453l0.003906-12.727h25.453l-16.926 12.727h-8.5273v25.453h25.453v25.453h25.453l0.003907-25.453h25.453v25.453h25.453l0.003906-25.453h25.453v25.453h25.453v-25.453h25.453v25.453h25.453l0.003906-25.453h25.453v25.453h25.453l0.003907-25.453h25.453v25.453h25.453l0.003906-25.453h25.453v25.453z"/>
 <path d="m197.27 101.82h25.453v25.453h-25.453z"/>
 <path d="m248.18 101.82h25.453v25.453h-25.453z"/>
 <path d="m299.09 101.82h25.453v25.453h-25.453z"/>
 <path d="m350 101.82h25.453v25.453h-25.453z"/>
 <path d="m400.91 101.82h25.453v25.453h-25.453z"/>
 <path d="m451.82 101.82h25.453v25.453h-25.453z"/>
 <path d="m502.73 101.82h25.453v25.453h-25.453z"/>
 <path d="m171.82 127.27h25.453v25.453h-25.453z"/>
 <path d="m222.73 127.27h25.453v25.453h-25.453z"/>
 <path d="m273.64 127.27h25.453v25.453h-25.453z"/>
 <path d="m197.27 432.73h25.453v25.453h-25.453z"/>
 <path d="m171.82 407.27h25.453v25.453h-25.453z"/>
 <path d="m324.55 127.27h25.453v25.453h-25.453z"/>
 <path d="m299.09 152.73h25.453v25.453h-25.453z"/>
 <path d="m299.09 203.64h25.453v25.453h-25.453z"/>
 <path d="m171.82 178.18h25.453v25.453h-25.453z"/>
 <path d="m324.55 178.18h25.453v25.453h-25.453z"/>
 <path d="m375.45 127.27h25.453v25.453h-25.453z"/>
 <path d="m350 152.73h25.453v25.453h-25.453z"/>
 <path d="m477.27 127.27h25.453v25.453h-25.453z"/>
 <path d="m502.73 152.73h25.453v25.453h-25.453z"/>
</g>
</svg>

`;
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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
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
