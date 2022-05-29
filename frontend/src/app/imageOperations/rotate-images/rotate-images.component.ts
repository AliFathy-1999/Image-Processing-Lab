import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faImage,faRotate,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-rotate-images',
  templateUrl: './rotate-images.component.html',
  styleUrls: ['./rotate-images.component.css']
})
export class RotateImagesComponent implements OnInit {
  faArrowAltCircleDown=faArrowAltCircleDown;faImage=faImage;faRotate=faRotate;
  imageUrl:any={};imagePath:any="";imageAlt:any="";myimage:any="";
  file:any=null;
  isSubmitted:boolean=false;
  simpleoptions:boolean=false;
  advancedoptions:boolean=false;
  isUploaded:boolean=false;
  imageStorage="";
  imageAfterRotate="";


  selection={
    simple:"",
    advanced:"",
  }
  angles= {
    "angle": "",
  }
  colors= {
    "color": "",
  }
  range={
    myrange:0
  }

  myimgname:any="";
  constructor(private _global:GlobalService,private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  handleSimple(){
    this.simpleoptions=true;
    this.advancedoptions=false;
  }
  handleAdvanced(){
    this.simpleoptions=false;
    this.advancedoptions=true;

  }
  rotate(value:any){
    this.angles.angle=value;
    console.log(this.angles.angle);
  }
  handleUpload(e:any){
    this.file=e.target.files;
    this.isUploaded=true;
  }
  handleSubmit(form:NgForm){

    if(this.file != null){
    let formData = new FormData();
    formData.append("authimage",this.file[0]);
    formData.append("angle",this.angles.angle);
    formData.append("color",this.colors.color);
    this._global.RotateImage(formData).subscribe(data=>{
        this.toastr.success(data.message)
        this.imagePath=data.imagePath;
        this.myimgname=data.imageName;
        this.imageAlt=data.imageName;
        this.imageAfterRotate=data.imageAfterRotate;
        this.isSubmitted=true;

    },(err)=>{
      this.toastr.error("Or you dont enter Angle Value","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
    })
  }
  }


}
