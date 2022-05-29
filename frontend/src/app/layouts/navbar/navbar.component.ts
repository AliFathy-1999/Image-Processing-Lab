import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faMaximize,faRotate,faPalette } from '@fortawesome/free-solid-svg-icons';
import { GlobalService } from 'src/app/services/global.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _global: GlobalService,private router:Router) { }

  ngOnInit(): void {
  }
  faMaximize=faMaximize;faRotate=faRotate;faPalette=faPalette;

}
