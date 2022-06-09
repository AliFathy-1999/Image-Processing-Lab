import { Component, OnInit } from '@angular/core';
import {  NgForm  } from '@angular/forms';
import { faImage,faRemove,faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from 'src/app/services/global.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-background-remover',
  templateUrl: './background-remover.component.html',
  styleUrls: ['./background-remover.component.css']
})
export class BackgroundRemoverComponent implements OnInit {
  faArrowAltCircleDown=faArrowAltCircleDown;faImage=faImage;faRemove=faRemove;
  file:any=null;
  isSubmitted:boolean=false;isUploaded:boolean=false;public loading:boolean=false;
  time:any;counter:number=0;
  imageAfterTransparency="";


  myimgname:any="";
  constructor(private _global:GlobalService,public toastr:ToastrService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('bkr', sanitizer.bypassSecurityTrustHtml(this._icons.BACKGROUND_REMOVER_ICON));
  }

  ngOnInit(): void {
  }
  handleUpload(e:any){
    this.file=e.target.files;
    this.isUploaded=true;
  }
  handleSubmit(form:NgForm){
    this.loading = true;
    this.time=10000,
    this.counter=this.time/1000;
    setInterval(()=>{
      this.counter--;
      if(this.counter==this.time){
        this.loading = false;
      }
    },1000);
    if(this.file != null){
    let formData = new FormData();
    formData.append("authimage",this.file[0]);
    this._global.BackgroundRemover(formData).subscribe(data=>{
      setTimeout(()=>{
        this.loading=false;
        this.toastr.success(data.message)
        this.imageAfterTransparency=data.imageAfterTransparency;
        this.isSubmitted=true;
      },10000);
    },(err)=>{
      this.toastr.error("Or Image Rosultion is too high","Error Uploading Image, Noticed that, Image size should be less than 20MB and Image should be in jpeg,png,jpg,tiff format");
    })
  }
  }

}
