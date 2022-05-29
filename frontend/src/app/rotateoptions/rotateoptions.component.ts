import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {  NgForm  } from '@angular/forms';


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

  constructor() { }

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
