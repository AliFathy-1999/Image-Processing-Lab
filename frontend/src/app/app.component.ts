import { Component, ElementRef, Inject, VERSION, ViewChild } from '@angular/core';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconsService } from './services/icons.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  isScrolled: boolean = false;
  buttonPosition: number = 0;
  ngOnInit() {
  }
  //let mybutton = document.getElementById("btn-back-to-top");
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService,@Inject(DOCUMENT) public document: Document){
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP_ICON));
    this.document.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    })

  }

  getToTop(){
    window.scrollTo(0,0);
  }


}
