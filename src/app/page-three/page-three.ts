import { Component } from '@angular/core';
import { MainPage } from '../main-page/main-page';
import { Silder } from '../silder/silder';
import { Footer } from '../footer/footer';
import { Slidertwo } from "../slidertwo/slidertwo";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  imports: [MainPage, Footer, Slidertwo],
  templateUrl: './page-three.html',
  styleUrl: './page-three.scss',
})
export class PageThree {
  constructor(private route: Router) {}
  
  images = [
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%203.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%209.2.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2022.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2021.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2018.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2025.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2013.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2016.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%207.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%204.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2014.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%202.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2012.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2026.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2023.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%206.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2019.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2024.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2012.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2015.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2017.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2011.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%201.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%205.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%208.1%20(1).jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%209.1.jpg",
    "https://ik.imagekit.io/5sbqruotr/summerspringImagesHome/Look%2020.jpg",
  ];
  images2 = [
    'https://ik.imagekit.io/5sbqruotr/summerSpringBTSImages/w11.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringBTSImages/w12.webp',
    "https://ik.imagekit.io/5sbqruotr/summerSpringBTSImages/w14.webp",
    'https://ik.imagekit.io/5sbqruotr/summerSpringBTSImages/5.jpg',
    // 'assets/w15.webp',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740282/Look_1.1_rcaqeg.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740285/Look_2.1_mc3x9o.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740288/Look_4.1_aja8ce.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740286/Look_5.1_ks3xqh.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740285/Look_6.1_hp9vry.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740314/Look_8.1_hf0l05.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740300/Look_26_kpr82f.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740299/Look_24_ybavgn.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740295/Look_10.1_k8dnnk.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740299/Look_11.1_tehbn6.jpg',
    // 'https://res.cloudinary.com/dzit141xn/image/upload/v1758740295/Look_12.1_gzylv5.jpg',
  ];
  images3 = [
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p11.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p12.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p13.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p14.webp',
    // 'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p15.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p16.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p17.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p18.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/p19.webp',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/Look%205.2.jpg',
    'https://ik.imagekit.io/5sbqruotr/summerSpringDetailsImages/Look%2011.2.jpg',
  ];
  moveNext(id: string) {
    this.route.navigate([id]);
  }
}
