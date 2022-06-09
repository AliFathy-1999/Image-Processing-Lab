import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faMaximize,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-resizeimages',
  templateUrl: './resizeimages.component.html',
  styleUrls: ['./resizeimages.component.css']
})
export class ResizeimagesComponent implements OnInit {
  faArrowAltCircleDown=faArrowAltCircleDown;faMaximize=faMaximize;
  file:any=null;
  isSubmitted:boolean=false;isUploaded:boolean=false;
  imageAfterResize="";
  dimensions= {
    "width": "",
    "height": ""
  }

  constructor(private _global:GlobalService,private toastr: ToastrService) { }
  ngOnInit(): void {}
  handleSubmit(form:NgForm){
      if(this.file != null){
        let formData = new FormData();
        formData.append("authimage",this.file[0]);
        formData.append("width",this.dimensions.width);
        formData.append("height",this.dimensions.height);
        this._global.ResizeImage(formData).subscribe(data=>{
            this.toastr.success(data.message)
            this.imageAfterResize=data.imageAfterResize;
            this.isSubmitted=true;
        },(err)=>{
          this.toastr.error("Or you dont enter width or height or both","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
        })
      }
  }
  handleUpload(e:any){
    this.file=e.target.files;
    this.isUploaded=true;
  }

}
