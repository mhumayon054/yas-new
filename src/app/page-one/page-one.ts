import { Component } from "@angular/core"
import { MainPage } from "../main-page/main-page"
import { Silder } from "../silder/silder"
import { Footer } from "../footer/footer"
import { Slidertwo } from "../slidertwo/slidertwo"
import { SliderThree } from "../slider-three/slider-three"
import { Router } from "@angular/router"
import { SliderFour } from "../slider-four/slider-four"

@Component({
  selector: "app-page-one",
  imports: [MainPage, Silder, Footer, SliderThree, Slidertwo],
  templateUrl: "./page-one.html",
  styleUrls: ["./page-one.scss"],
})
export class PageOne {
  constructor(private route: Router) {}
  images2 = [
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
    // "https://res.cloudinary.com/dzit141xn/image/upload/v1758729899/Look_12.2_kmfmsv.jpg",
    // "https://res.cloudinary.com/dzit141xn/image/upload/v1758729828/Look_23_au9fyn.jpg",
    // "https://res.cloudinary.com/dzit141xn/image/upload/v1758729835/Look_24_agh3pi.jpg",
    // "https://res.cloudinary.com/dzit141xn/image/upload/v1758729837/Look_25_oqkp9s.jpg",
  ]
  images = [
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758735067/fallwinter5_rmesxj.webp',
      hoverUrl: 'https://placehold.co/800x1200?text=Hover+Preview',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733782/fallwinter3_kfb0ee.webp',
      hoverUrl: 'https://placehold.co/800x1200?text=Hover+Preview',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733779/fallwinter4_fsdty9.webp',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_1.2_zhzwe1.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733798/Look_2.1_lbvjge.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733800/Look_2.2_wwyqzq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733809/Look_3.1_f6usaw.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733811/Look_3.2_wwyqzq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733800/Look_4.1_cyclai.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733802/Look_4.2_yz9nyi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733818/Look_6.1_trwggm.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733820/Look_6.2_zzm4kq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733814/Look_7.1_gijgos.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733816/Look_7.2_mtnjli.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733807/Look_10.2_kvqz2c.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733805/Look_10.1_q0cxqa.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733826/Look_12.2_kcmq9p.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733824/Look_12.1_oaofal.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733972/Look_13_o93hcp.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733974/Look_13.2_qbwxgq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_1.2_zhzwe1.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/fallwinter4_fsdty9.webp',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733824/Look_15_mdndyz.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733826/Look_15.2_hbjzif.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733836/Look_16_yz9nyi.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733838/Look_16_t6uu6d.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733838/Look_18_mtnjli.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733840/Look_18_wko8eq.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733776/Look_19_bagho6.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733774/Look_19_bej2l2.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733762/Look_20_mnriki.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733760/Look_20_ci0gol.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/Look_21_axtlfh.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733775/Look_21_bmnmv7.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733805/Look_22_izqgno.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733803/Look_22_ls5djy.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733860/Look_11.2_komkyy.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733858/Look_11.1_gnm7pi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733814/Look_23_fxawbc.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733812/Look_23_au9fyn.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733775/Look_24_u3iecq.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733773/Look_24_agh3pi.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733778/Look_25_ypnyy6.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733776/Look_25_oqkp9s.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733799/Look_26_s20b8i.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733797/Look_26_ls5djy.jpg',
    },
    {
      defaultUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733788/Look_27_exa9vm.jpg',
      hoverUrl:
        'https://res.cloudinary.com/dzit141xn/image/upload/v1758733786/Look_27_kmfmsv.jpg',
    },
  ];
  imageswinter = [ 'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%201.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%202.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%203.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%204.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%205.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%206.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%207.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%208.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%209.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2010.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2011.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2012.1.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2013.jpg', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2014.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/look%2015.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2016.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/look%2017.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2018.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2019.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2020.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2021.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2022.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2023.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2024.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2025.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2026.tif', 
    'https://ik.imagekit.io/5sbqruotr/springfallImagesHome/Look%2027.tif', 
  ];
  images3 = [
    "https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1513-scaled-1-1.jpg.webp",
    "https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1469.jpg",
    "https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1582-scaled.jpg.webp",
    "https://ik.imagekit.io/5sbqruotr/bridalCollectionHome/3C8A1581-1-scaled.jpg.webp",
  ]

imagesFall2526 = [
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%203.1.jpg?updatedAt=1765288677889',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%201.1.jpg?updatedAt=1765288732356',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%202.1.jpg?updatedAt=1765288701262',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%204.1.jpg?updatedAt=1765288742404',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%205.1.jpg?updatedAt=1765288736671',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%206.1.jpg?updatedAt=1765288741942',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%207.1.jpg?updatedAt=1765288709249',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%208.1.jpg?updatedAt=1765288723648',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%209.1.jpg?updatedAt=1765288753272',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2010.1.jpg?updatedAt=1765288740136',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2011.1.jpg?updatedAt=1765288731254',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2012.1.jpg?updatedAt=1765288721694',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2013.1.jpg?updatedAt=1765288738291',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2014.1.jpg?updatedAt=1765288732058',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2015.1.jpg?updatedAt=1765288715678',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2016.jpg?updatedAt=1765288732581',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2017.1.jpg?updatedAt=1765288745924',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2018.jpg?updatedAt=1765288717863',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2019.jpg?updatedAt=1765288721062',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2020.1.jpg?updatedAt=1765288750342',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2021.1.jpg?updatedAt=1765288729556',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2022.1.jpg?updatedAt=1765288696789',
  'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2023.1.jpg?updatedAt=1765288732461'
];

  moveNext(id: string) {
    this.route.navigate([id])
  }
}
