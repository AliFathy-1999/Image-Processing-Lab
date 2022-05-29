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
