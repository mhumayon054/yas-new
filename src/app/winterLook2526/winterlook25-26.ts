import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { HeroVideoService } from "../services/hero-video.service";

@Component({
  selector: "app-winterlook-25-26",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./winterlook25-26.html",
  styleUrls: ["./winterlook25-26.scss"],
})
export class WinterLook2526 implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private heroVideoService: HeroVideoService
  ) {}

  private readonly heroVideoUrl: string =
    "https://yas-videos-cdn.b-cdn.net/wintervideos%20-2025-2026/header%20of%20both%20home%20page%20and%20fall%20winter%202025_2026%20page%20.mp4";

  @Input() lookData: {
    name: string;
    img: string;
    img2?: string;
    text?: string;
    showSecondImage?: boolean;
  }[] = [];

  allPictures: any[] = [];

  ngOnInit() {
    this.heroVideoService.setVideo(this.heroVideoUrl);

    this.allPictures = [];
    this.lookData.forEach((product, index) => {
      if (index !== 7 && index !== 13) {
        this.allPictures.push({
          img: product.img,
          img2: product.img2,
          name: product.name,
          text: product.text,
        });
      }
    });
  }

  ngOnDestroy() {
    this.heroVideoService.setVideo(null);
  }

  showLookDetails(
    item: { img: string; img2?: string; name: string; text?: string },
    index: number
  ) {
    const itemToSend = {
      allpictures: this.allPictures,
      pictures: this.getImages(item),
      name: item.name,
      text: item.text || "",
    };

    console.log("[FW 25–26] Winter Look - Navigating to /winterlooksshow-25-26");

    this.router.navigate(["/winterlooksshow-25-26"], {
      state: {
        items: [itemToSend],
        fullList: this.lookData,
        startIndex: index,
      },
    });
  }

  getImages(product: { img: string; img2?: string }): string[] {
    const images = [product.img];
    if (product.img2) {
      images.push(product.img2);
    }
    return images;
  }
}
