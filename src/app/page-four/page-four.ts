import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { Silder } from "../silder/silder";
import { Sidebartwo } from "../sidebartwo/sidebartwo";
import { Slidertwo } from "../slidertwo/slidertwo";
import { SliderThree } from "../slider-three/slider-three";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-four',
  imports: [MainPage, Footer, Silder, Sidebartwo, Slidertwo, SliderThree],
  templateUrl: './page-four.html',
  styleUrl: './page-four.scss'
})
export default class PageFour {
  constructor(private route: Router) {}
  images = [
    'https://ik.imagekit.io/5sbqruotr/looks/Look-7.1-768x1152.jpeg.webp',
    'https://ik.imagekit.io/5sbqruotr/looks/Look-9.1-768x1152.jpeg.webp',
    'https://ik.imagekit.io/5sbqruotr/looks/Look-12.1-scaled.jpeg.webp',
    'https://ik.imagekit.io/5sbqruotr/looks/Look-10.1-scaled.jpeg',


  ];
  images2 = [
    'assets/t11.webp',
    'assets/t12.webp',
    'assets/t13.webp',
    'assets/t14.webp',


  ];
  images3 = [
    'assets/b11.webp',
    'assets/b12.webp',
    'assets/b13.webp',
    'assets/b14.webp',
    'assets/b15.webp',
    'assets/b16.webp',
    'assets/b17.webp',
    'assets/b18.webp',
   'assets/b19.webp',


  ];
   moveNext(id: string) {
    this.route.navigate([id]);
  }
}
