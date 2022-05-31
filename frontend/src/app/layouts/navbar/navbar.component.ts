import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _global: GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private router:Router,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('home', sanitizer.bypassSecurityTrustHtml(this._icons.HOME_ICON));
    iconRegistry.addSvgIconLiteral('resizeimage', sanitizer.bypassSecurityTrustHtml(this._icons.RESIZE_ICON));
    iconRegistry.addSvgIconLiteral('rotateimage', sanitizer.bypassSecurityTrustHtml(this._icons.ROTATE_ICON));
    iconRegistry.addSvgIconLiteral('blurimage', sanitizer.bypassSecurityTrustHtml(this._icons.BLUR_ICON));
    iconRegistry.addSvgIconLiteral('colorimage', sanitizer.bypassSecurityTrustHtml(this._icons.COLOR_ICON));
    iconRegistry.addSvgIconLiteral('imageOps', sanitizer.bypassSecurityTrustHtml(this._icons.IMAGE_OPERATIONS_ICON));
    iconRegistry.addSvgIconLiteral('brimage', sanitizer.bypassSecurityTrustHtml(this._icons.BACKGROUND_REMOVER_ICON));
   }

  ngOnInit(): void {
  }


}
