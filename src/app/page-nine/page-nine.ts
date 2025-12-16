import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { Silder } from '../silder/silder';
import { Sidebartwo } from '../sidebartwo/sidebartwo';
import { Slidertwo } from '../slidertwo/slidertwo';
import { SliderThree } from '../slider-three/slider-three';

@Component({
  selector: 'app-page-nine',
  imports: [MainPage, Footer, Silder, Sidebartwo, Slidertwo, SliderThree],
  templateUrl: './page-nine.html',
  styleUrl: './page-nine.scss'
})
export default class PageNine {
  constructor(private route: Router) {}

  images = [
    'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%204.1.jpg?updatedAt=1765288742404',
    'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%201.1.jpg?updatedAt=1765288732356',
    'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%202.1.jpg?updatedAt=1765288701262',  
    'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%203.1.jpg?updatedAt=1765288677889',
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
