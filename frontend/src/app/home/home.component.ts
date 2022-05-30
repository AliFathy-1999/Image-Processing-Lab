import { Component, OnInit} from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faImage,faMaximize,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';


import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../services/global.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  faArrowAltCircleDown=faArrowAltCircleDown;faImage=faImage;faMaximize=faMaximize;
  imageUrl:any={};imagePath:any="";imageAlt:any="";myimage:any="";
  file:any=null;
  isSubmitted:boolean=false;
  imageStorage="";
  imageAfterResize="";
  dimensions= {
    "width": "",
    "height": ""
  }

  myimgname:any="";
  constructor(private _global:GlobalService,private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }
  handleSubmit(form:NgForm){

    if(this.file != null){
    let formData = new FormData();
    formData.append("authimage",this.file[0]);
    formData.append("width",this.dimensions.width);
    formData.append("height",this.dimensions.height);
    this._global.ResizeImage(formData).subscribe(data=>{
        this.toastr.success(data.message)
        this.imagePath=data.imagePath;
        this.myimgname=data.imageName;
        this.imageAlt=data.imageName;
        this.imageAfterResize=data.imageAfterResize;
        this.isSubmitted=true;
    },(err)=>{
      this.toastr.error("Or you dont enter width or height or both","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
    })
  }
  }
  handleUpload(e:any){
    this.file=e.target.files;
  }

}
