import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { MainPage } from "../main-page/main-page";
import { SliderFour } from "../slider-four/slider-four";
import { Footer } from "../footer/footer";
import { PageTen } from "../page-ten/page-ten"; // 🔥 FW 25–26 looks page

@Component({
  selector: "app-winterlooksshow-25-26",
  standalone: true,
  imports: [CommonModule, MainPage, SliderFour, Footer],
  templateUrl: "./winterlooksshow25-26.html",
  styleUrls: ["../looksshow/looksshow.scss"], // same styling reuse
})
export class WinterLooksshow2526 implements OnInit {
  item: {
    allpictures: any[];
    pictures: string[];
    name: string;
    text: string;
  } | null = null;

  fullList: any[] = [];
  startIndex = 0;

  selectedIndex = 0; // active look in ENQUIRE slider

  @ViewChild("enquireSection") enquireSection!: ElementRef<HTMLDivElement>;

  receivedImage = "";
  receivedText = "";
  currentIndex = 0;
  startX = 0;
  hide = false;

  heroVideoUrl =
    "https://yas-videos-cdn.b-cdn.net/wintervideos%20-2025-2026/header%20of%20both%20home%20page%20and%20fall%20winter%202025_2026%20page%20.mp4";

  filteredPictures: string[] = [];

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state as {
      items?: { allpictures: string[]; pictures: string[]; name: string; text: string }[];
      fullList?: any[];
      startIndex?: number;
    };

    if (state?.fullList && state.fullList.length > 0) {
      this.fullList = state.fullList;
    }

    if (typeof state?.startIndex === "number") {
      this.startIndex = state.startIndex;
      this.selectedIndex = state.startIndex;
    }
  }

  ngOnInit() {
    // 🔥 agar router state se list na aaye to FW 25–26 looks (PageTen) se load karo
    if (!this.fullList.length) {
      const pageTen = new PageTen();
      this.fullList = pageTen.lookDatas;
      this.selectedIndex = 0;
    }

    if (!this.fullList.length) return;

    if (this.selectedIndex < 0 || this.selectedIndex >= this.fullList.length) {
      this.selectedIndex = 0;
    }

    this.updateSelectedLook(this.selectedIndex);
  }

  private updateSelectedLook(index: number) {
    const newLook = this.fullList[index];
    if (!newLook) return;

    const pictures = this.getImages(newLook);

    const allpictures = this.fullList.map((product: any, idx: number) => {
      // agar neeche slider me current look ko hide karna hai:
      if (idx === index) {
        return { img: "", img2: "", name: "", text: "" };
      }
      return product;
    });

    this.item = {
      allpictures,
      pictures,
      name: newLook.name || "",
      text: newLook.text || "",
    };

    this.filteredPictures = pictures;

    this.receivedImage = "";
    this.receivedText = "";
    this.currentIndex = 0;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  scrollToEnquire() {
    if (this.enquireSection?.nativeElement) {
      this.enquireSection.nativeElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  handleTrueClick(event: { flag: boolean; message: string }) {
    const origval = event.message || "";
    this.receivedImage = origval.split(",")[0] || "";
    this.receivedText = origval.split(",").slice(1).join(",") || "";
    this.hide = event.flag;
  }

  receiveValue(value: string) {
    const origval = value || "";
    this.receivedImage = origval.split(",")[0] || "";
    this.receivedText = origval.split(",").slice(1).join(",") || "";
  }

  onSliderIndexChange(index: number) {
    if (!this.fullList || !this.fullList.length) return;
    if (index < 0 || index >= this.fullList.length) return;

    this.selectedIndex = index;
    this.updateSelectedLook(index);
  }

  resetSelectedImage() {
    this.receivedImage = "";
  }

  moveSlide(direction: number) {
    if (!this.filteredPictures || !this.filteredPictures.length) return;
    const total = this.filteredPictures.length;
    this.currentIndex = (this.currentIndex + direction + total) % total;
  }

  moveNext(id: string) {
    this.router.navigate([id]);
  }

  @HostListener("touchstart", ["$event"])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener("touchend", ["$event"])
  onTouchEnd(event: TouchEvent) {
    const delta = event.changedTouches[0].clientX - this.startX;
    if (delta < -50) this.moveSlide(1);
    else if (delta > 50) this.moveSlide(-1);
  }

  zoomIn(event: MouseEvent) {
    const img = (event.currentTarget as HTMLElement).querySelector("img");
    if (img) {
      img.style.transform = `scale(1.8)`;
    }
  }

  zoomMove(event: MouseEvent) {
    const wrapper = event.currentTarget as HTMLElement;
    const img = wrapper.querySelector("img");
    if (!img) return;

    const rect = wrapper.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;

    const percentX = (offsetX / rect.width) * 100;
    const percentY = (offsetY / rect.height) * 100;

    img.style.transformOrigin = `${percentX}% ${percentY}%`;
  }

  zoomOut(event: MouseEvent) {
    const img = (event.currentTarget as HTMLElement).querySelector("img");
    if (img) {
      img.style.transform = "scale(1)";
    }
  }

  getImages(product: { img: string; img2?: string }): string[] {
    const images = [product.img];
    if (product.img2) {
      images.push(product.img2);
    }
    return images;
  }
}
