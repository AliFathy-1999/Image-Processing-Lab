import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from '../services/icons.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {

  faArrowAltCircleDown=faArrowAltCircleDown;
  file:any=null;
  isSubmitted:boolean=false;
  tintoption:boolean=false;
  effectoption:boolean=false;
  isUploaded:boolean=false;

  imageAfterColor="";
  tintvalue:any="";
  isGray:boolean=false;
  sharpValue:any;
  medianValue:any;
  dimensions:any={
    width:0,
    height:0
  }
BrightnessValue:any;
  type:any="";
  effect:any="gray";



  constructor(private _global:GlobalService,private toastr: ToastrService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('tint', sanitizer.bypassSecurityTrustHtml(this._icons.TINT_ICON));
    iconRegistry.addSvgIconLiteral('effect', sanitizer.bypassSecurityTrustHtml(this._icons.EFFECT_ICONS));
    iconRegistry.addSvgIconLiteral('gray', sanitizer.bypassSecurityTrustHtml(this._icons.GRAY_ICONS));
    iconRegistry.addSvgIconLiteral('cmyk', sanitizer.bypassSecurityTrustHtml(this._icons.CMYK_BW_ICON));
    iconRegistry.addSvgIconLiteral('bw', sanitizer.bypassSecurityTrustHtml(this._icons.BW_ICON));
    iconRegistry.addSvgIconLiteral('sharp', sanitizer.bypassSecurityTrustHtml(this._icons.SHARP_ICON));
    iconRegistry.addSvgIconLiteral('norm', sanitizer.bypassSecurityTrustHtml(this._icons.NORM_ICON));
    iconRegistry.addSvgIconLiteral('hist', sanitizer.bypassSecurityTrustHtml(this._icons.HIST_ICON));
    iconRegistry.addSvgIconLiteral('median', sanitizer.bypassSecurityTrustHtml(this._icons.MEDIAN_ICON));
    iconRegistry.addSvgIconLiteral('brig', sanitizer.bypassSecurityTrustHtml(this._icons.BRIGHTNESS_ICON));
   }

  ngOnInit(): void {
  }

  handleTint(){
    this.tintoption=true;
    this.effectoption=false;
    this.type="tint";
  }
  handleEffect(){
    this.tintoption=false;
    this.effectoption=true;
    this.type="effect";
  }
  handlemyEffect(myeffect:any){
    this.effect=myeffect;
  }
  handleUpload(e:any){
    this.file=e.target.files;
    this.isUploaded=true;
  }

  handleSubmit(form:NgForm){
    if(this.file != null){
    let formData = new FormData();
    formData.append("authimage",this.file[0]);
    formData.append("type",this.type);
    formData.append("tint",this.tintvalue);
    formData.append("effect",this.effect);
    formData.append("sharp",this.sharpValue);
    formData.append("median",this.medianValue);
    formData.append("width",this.dimensions.width);
    formData.append("height",this.dimensions.height);
    formData.append("brightness",this.BrightnessValue);
    this._global.ColorChange(formData).subscribe(data=>{
        this.toastr.success(data.message)
        if(this.type=="tint"){
        this.imageAfterColor=data.imageNameT;
        }else if(this.type=="effect"){
         if(this.effect=="gray"){
          this.imageAfterColor=data.imageNameG;
        }else if(this.effect=="cmyk") {
          this.imageAfterColor=data.imageNameCmyk;
        }else if(this.effect=="bw"){
          this.imageAfterColor=data.imageNameBw;
        }else if(this.effect=="sharpen"){
          this.imageAfterColor=data.imageNameSharp;
        }else if(this.effect=="normalise"){
          this.imageAfterColor=data.imageNameNorm;
        }else if(this.effect=="histogram"){
          this.imageAfterColor=data.imageNameHist;
        }else if(this.effect=="median"){
          this.imageAfterColor=data.imageNameMedian;
        }else if(this.effect=="brightness"){
          this.imageAfterColor=data.imageNameBrig;
        }
      }
      this.isSubmitted=true;

    },(err)=>{
      this.toastr.error("Or Image has too high resolution","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
    })
  }
  }
}
