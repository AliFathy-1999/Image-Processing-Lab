import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from 'src/app/services/global.service';
import { IconsService } from 'src/app/services/icons.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public _global: GlobalService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(this._icons.GETHUB_ICON));
   }

  ngOnInit(): void {
  }

}
