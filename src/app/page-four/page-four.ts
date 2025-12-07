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
    'https://ik.imagekit.io/5sbqruotr/t11.webp',
    'https://ik.imagekit.io/5sbqruotr/t12.webp',
    'https://ik.imagekit.io/5sbqruotr/t13.webp',
    'https://ik.imagekit.io/5sbqruotr/t14.webp',


  ];
  images3 = [
    'https://ik.imagekit.io/5sbqruotr/b11.webp',
    'https://ik.imagekit.io/5sbqruotr/b12.webp',
    'https://ik.imagekit.io/5sbqruotr/b13.webp',
    'https://ik.imagekit.io/5sbqruotr/b14.webp',
    'https://ik.imagekit.io/5sbqruotr/b15.webp',
    'https://ik.imagekit.io/5sbqruotr/b16.webp',
    'https://ik.imagekit.io/5sbqruotr/b17.webp',
    'https://ik.imagekit.io/5sbqruotr/b18.webp',
   'https://ik.imagekit.io/5sbqruotr/b19.webp',


  ];
   moveNext(id: string) {
    this.route.navigate([id]);
  }
}
