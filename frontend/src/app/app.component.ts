import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from './services/icons.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  //let mybutton = document.getElementById("btn-back-to-top");
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService){
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP_ICON));
  }
  name = "Angular " + VERSION.major;
  @ViewChild("btnbacktotop")
  btnbacktotop!: ElementRef;
  getValue() {
    console.log(this.btnbacktotop.nativeElement.innerHTML);
    //this.btnbacktotop.nativeElement.innerHTML
  }
  // 1. Select the div element using the id property

  // (window.onscroll = function () {
  //   scrollFunction();
  // };)();
}
