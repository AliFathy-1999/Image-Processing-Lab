import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private matIconRegistry: MatIconRegistry){
    this.matIconRegistry.addSvgIcon(
      `noun-unicorn`,
      `/frontend/src/assets/noun-unicorn-1470723.svg`
    );
  }
}
