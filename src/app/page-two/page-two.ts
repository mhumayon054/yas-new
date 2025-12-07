import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Footer } from '../footer/footer';
import { Silder } from '../silder/silder';
import { Sidebartwo } from '../sidebartwo/sidebartwo';
import { Slidertwo } from '../slidertwo/slidertwo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-two',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-two.html',
  styleUrl: './page-two.scss',
})
export class PageTwo {
  constructor(private route: Router) {}
  images = [
    'https://ik.imagekit.io/5sbqruotr/megamenuimages/j11.webp',
    'https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1469.jpg?updatedAt=1764628074370',
    'https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1582-scaled.jpg.webp?updatedAt=1764628074465',
    // 'assets/j14.webp',
    'https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1513-scaled-1-1.jpg.webp?updatedAt=1764628074522',
  ];
  images2 = [
    'https://ik.imagekit.io/5sbqruotr/megamenuimages/j11.webp',
    'https://ik.imagekit.io/ozrxwulka/3C8A1469%20(2).jpg?updatedAt=1758795423814',
    'https://ik.imagekit.io/ozrxwulka/3C8A1513%20(3).jpg?updatedAt=1758792380383',
    'https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1582-scaled.jpg.webp?updatedAt=1764628074465',
    // 'assets/3C8A1513-scaled-1-1.jpg.webp',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
