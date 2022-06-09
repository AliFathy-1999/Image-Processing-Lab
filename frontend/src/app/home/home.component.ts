import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GlobalService } from '../services/global.service';
import { IconsService } from '../services/icons.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  Functions:any = [
    {
      name: 'Resize Image',
      icon: 'resizeimage',
      button: 'Resize',

      description: 'It resizes the image to the specified width and height. ',
      link: '/resizeimages',
      borderColor: 'border border-primary'
    },
    {
      name: 'Rotate Image',
      icon: 'rotateimage',
      button: 'Rotate',
      description: 'Rotate an image by the specified angle and Can change background color of an image. ',
      link: '/rotateimages',
      borderColor: 'border border-primary'
    },
    {
      name: 'Blur Image',
      button: 'Blur',
      icon: 'blurimage',
      description: 'It blurs the image by the value of the blur percentage entered by the user. ',
      link: 'blurimages',
      borderColor: 'border border-primary'
    },
    {
      name: 'Background Remover',
      button: 'Background Remover',
      icon: 'brimage',
      description: 'Background Remover removes the background color of an image and make Image background transparency. ',
      link: 'backgroundremover',
      borderColor: 'border border-primary'
    },
    {
      name: 'Tint Color Image',
      button: 'Tint',
      icon: 'tint',
      description: 'It changes the image color by the color value entered by the user. ',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Brightness Effect',
      button: 'Brightness',
      icon: 'brig',
      description: 'It changes the brightness of an image by the value entered by the user. ',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'GrayScale Effect',
      button: 'GrayScale',
      icon: 'gray',
      description: 'It changes the image into grayscale image.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Cmyk Effect',
      button: 'cmyk',
      icon: 'cmyk',
      description: 'It changes the image into CMYK image.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Black and White Effect',
      button: 'B&W',
      icon: 'bw',
      description: 'It changes the image into Black and White image.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Sharpness Filter',
      button: 'sharpness',
      icon: 'sharp',
      description: 'It describes the clarity of detail in an image and the sharpness changed according to the values entered by the user.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Median Filter',
      button: 'Median',
      icon: 'median',
      description: 'is the filtering technique used for noise removal from images and signals and it changed according to the values entered by the user.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Normalise Effect',
      button: 'Normalise',
      icon: 'norm',
      description: 'It is a process that changes the range of pixel intensity values. ',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },
    {
      name: 'Histogram Effect',
      button: 'Histogram',
      icon: 'hist',
      description: 'It is a image processing technique used to improve contrast in images.',
      link: '/changecolor',
      borderColor: 'border border-warning'
    },


  ]
  Features:any = [
    {
      name: 'Well planned Information Architecture',
      icon: 'arch',
      description: 'This website is divided into individual screens so that the user can easily find the information they need. ',
    },
    {
      name: 'Fast Load Times',
      icon: 'fast',
      description: 'This website is fast in uploading and previewing modified images. ',
    },
    {
      name: 'Effective Navigation',
      icon: 'navi',
      description: 'This website is easy to navigate through navigation bar to any pages existed. ',
    },
    {
      name: 'Mobile-Responsive',
      icon: 'responsive',
      description: 'This website has pages that have been reformatted to reproduce what you experience on the desktop. ',
    },
    {
      name: 'Easy to use',
      icon: 'easy',
      description: 'This website is easy to use and easy to understand (example: clarifies the effect of colour on images by putting images explaining this and in rotate operation also). ',
    },
    {
      name: 'Contrasting Color Scheme',
      icon: 'contrast',
      description: 'This Website has good contrast between background and contant ex. using background dark blue and text color white. ',
    },

  ]

  constructor(private _global:GlobalService,private toastr: ToastrService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,private _icons:IconsService) {
    iconRegistry.addSvgIconLiteral('tint', sanitizer.bypassSecurityTrustHtml(this._icons.TINT_ICON));
    iconRegistry.addSvgIconLiteral('effect', sanitizer.bypassSecurityTrustHtml(this._icons.EFFECT_ICONS));
    iconRegistry.addSvgIconLiteral('gray', sanitizer.bypassSecurityTrustHtml(this._icons.GRAY_ICONS));
    iconRegistry.addSvgIconLiteral('cmyk', sanitizer.bypassSecurityTrustHtml(this._icons.CMYK_BW_ICON));
    iconRegistry.addSvgIconLiteral('bw', sanitizer.bypassSecurityTrustHtml(this._icons.BW_ICON));
    iconRegistry.addSvgIconLiteral('sharp', sanitizer.bypassSecurityTrustHtml(this._icons.SHARP_ICON));
    iconRegistry.addSvgIconLiteral('norm', sanitizer.bypassSecurityTrustHtml(this._icons.NORM_ICON));
    iconRegistry.addSvgIconLiteral('hist', sanitizer.bypassSecurityTrustHtml(this._icons.HIST_ICON));
    iconRegistry.addSvgIconLiteral('median', sanitizer.bypassSecurityTrustHtml(this._icons.MEDIAN_ICON));
    iconRegistry.addSvgIconLiteral('brig', sanitizer.bypassSecurityTrustHtml(this._icons.BRIGHTNESS_ICON));
    iconRegistry.addSvgIconLiteral('resizeimage', sanitizer.bypassSecurityTrustHtml(this._icons.RESIZE2_ICON));
    iconRegistry.addSvgIconLiteral('rotateimage', sanitizer.bypassSecurityTrustHtml(this._icons.ROTATE_ICON));
    iconRegistry.addSvgIconLiteral('blurimage', sanitizer.bypassSecurityTrustHtml(this._icons.BLUR2_ICON));
    iconRegistry.addSvgIconLiteral('colorimage', sanitizer.bypassSecurityTrustHtml(this._icons.COLOR_ICON));
    iconRegistry.addSvgIconLiteral('imageOps', sanitizer.bypassSecurityTrustHtml(this._icons.IMAGE_OPERATIONS_ICON));
    iconRegistry.addSvgIconLiteral('brimage', sanitizer.bypassSecurityTrustHtml(this._icons.BACKGROUND_REMOVER_ICON));
    iconRegistry.addSvgIconLiteral('copy', sanitizer.bypassSecurityTrustHtml(this._icons.COPY_ICON));
    iconRegistry.addSvgIconLiteral('responsive', sanitizer.bypassSecurityTrustHtml(this._icons.RESPONSIVE_ICON));
    iconRegistry.addSvgIconLiteral('contrast', sanitizer.bypassSecurityTrustHtml(this._icons.CONTRAST_ICON));
    iconRegistry.addSvgIconLiteral('fast', sanitizer.bypassSecurityTrustHtml(this._icons.FAST_ICON));
    iconRegistry.addSvgIconLiteral('navi', sanitizer.bypassSecurityTrustHtml(this._icons.NAVIGATION_ICON));
    iconRegistry.addSvgIconLiteral('easy', sanitizer.bypassSecurityTrustHtml(this._icons.EASY_ICON));
    iconRegistry.addSvgIconLiteral('arch', sanitizer.bypassSecurityTrustHtml(this._icons.ARCH_ICON));
    iconRegistry.addSvgIconLiteral('arrowup', sanitizer.bypassSecurityTrustHtml(this._icons.ARROW_UP_ICON));
  }

  ngOnInit(): void {


  }

  /*scrollFunction(){
    mybutton = document.getElementById("btn-back-to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  (  window.onscroll = function () {
    scrollFunction();
  };)();*/



}
