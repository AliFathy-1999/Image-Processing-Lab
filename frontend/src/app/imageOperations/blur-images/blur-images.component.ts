import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faImage,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-blur-images',
  templateUrl: './blur-images.component.html',
  styleUrls: ['./blur-images.component.css']
})
export class BlurImagesComponent implements OnInit {
  faArrowAltCircleDown=faArrowAltCircleDown;faImage=faImage;
  file:any=null;
  isSubmitted:boolean=false;
  isUploaded:boolean=false;
  imageStorage="";
  imageAfterBlur="";

  blur= {
    "sigma": "",
  }
  constructor(private _global:GlobalService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  blurFunction(value:any){
    this.blur.sigma=value;
  }
  handleUpload(e:any){
    this.file=e.target.files;
    this.isUploaded=true;
  }
  handleSubmit(form:NgForm){
    if(this.file != null){
    let formData = new FormData();
    formData.append("authimage",this.file[0]);
    formData.append("blur",this.blur.sigma);
    this._global.BlurImage(formData).subscribe(data=>{
        this.toastr.success(data.message)
        this.imageAfterBlur=data.imageAfterBlur;
        this.isSubmitted=true;

    },(err)=>{
      this.toastr.error("Or you entered image has high Resolution","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
    })
  }
  }
}
