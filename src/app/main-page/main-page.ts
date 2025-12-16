import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  HostListener,
  OnInit,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Video } from "../video/video";
import { HeroVideoService } from '../services/hero-video.service';

declare var Weglot: any;

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule, Video],
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})
export class MainPage implements AfterViewInit, OnInit {
  isBookAppointmentPage: boolean = false;

  @ViewChild('myVideo', { static: false }) myVideo!: ElementRef<HTMLVideoElement>;

  private _inputVideo: string = '';

  @Input() set videoElement(value: string) {
    this._inputVideo = value || '';
    this.updateVideoSource();
  }
  get videoElement(): string {
    return this._inputVideo;
  }

  // ✅ Default hero video (home / normal pages)
  defaultVideo: string =
    'https://ik.imagekit.io/ozrxwulka/FallWinterVideos/fw-hero.mp4?updatedAt=1758745273304';

  // ✅ Service se aane wali hero video (jaise WinterLook25–26)
  private serviceVideo: string | null = null;

  // ✅ Ye hi actual <source [src]> me use hoga
  currentVideoSrc: string = this.defaultVideo;

  // Agar service se URL aaye before <video> ready
  private pendingVideoSrc: string | null = null;

  constructor(
    private router: Router,
    private heroVideoService: HeroVideoService
  ) {}

  sidebarOneOpen = false;
  sidebarTwoOpen = false;
  showHover = false;
  showHover2 = false;
  divshow1 = false;
  divshow2 = false;
  divshow3 = false;
  showHover3 = false;
  run = false;
  menuVisible = false;

  selectedLanguage: 'en' | 'ar' = 'en';
  languageDropdownOpen = false;

  currentRoute: string = '';

  languages = {
    en: {
      label: 'English',
      flag: 'https://ik.imagekit.io/5sbqruotr/flagsImages/Flag_of_the_United_States_(DoS_ECA_Color_Standard).svg.png',
    },
    ar: {
      label: 'للعربية',
      flag: 'https://ik.imagekit.io/5sbqruotr/download.jpeg',
    },
  };

  ngOnInit() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;

    // ✅ Route change listener
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });

    this.router.events.subscribe(() => {
      this.isBookAppointmentPage = this.router.url.includes('BookAppointment');
    });

    // ✅ HeroVideoService se video listen karo (sirf un pages ke liye jo service use karte hain)
    this.heroVideoService.video$.subscribe((url: string | null) => {
      this.serviceVideo = url;
      this.updateVideoSource();
    });

    // Initial state
    this.updateVideoSource();
  }

  @HostListener('window:resize')
  onResize() {
    let pageWidth = document.documentElement.clientWidth;
    this.run = pageWidth > 800;
  }

  ngAfterViewInit(): void {
    // ✅ Jab <video> ready ho jaye to currentVideoSrc apply kar do
    const initialSrc = this.pendingVideoSrc || this.currentVideoSrc;
    this.applyVideoToElement(initialSrc);

    // ✅ wait for Weglot to load properly
    setTimeout(() => {
      if (typeof Weglot !== 'undefined') {
        const currentLang = Weglot?.getCurrentLang?.() || 'en';
        Weglot.switchTo(currentLang);
        document.documentElement.setAttribute(
          'dir',
          currentLang === 'ar' ? 'rtl' : 'ltr'
        );
        this.selectedLanguage = currentLang;

        if (Weglot.refresh) {
          Weglot.refresh();
        }
      }
    }, 1500);

    // ✅ language change listener
    if (typeof Weglot !== 'undefined' && Weglot.on) {
      Weglot.on('languageChanged', (newLang: string) => {
        if (newLang === 'en' || newLang === 'ar') {
          this.selectedLanguage = newLang;
          document.documentElement.setAttribute(
            'dir',
            newLang === 'ar' ? 'rtl' : 'ltr'
          );
        }
        this.languageDropdownOpen = false;
      });
    }
  }

  // ✅ Decide final video source: Input > Service > Default
  private updateVideoSource() {
    const finalSrc =
      this._inputVideo || this.serviceVideo || this.defaultVideo;

    this.currentVideoSrc = finalSrc;
    this.pendingVideoSrc = finalSrc;

    if (this.myVideo?.nativeElement) {
      this.applyVideoToElement(finalSrc);
    }
  }

  // ✅ actual video element pe apply
  private applyVideoToElement(src: string) {
    if (!this.myVideo?.nativeElement) return;

    const video = this.myVideo.nativeElement;
    video.src = src;
    video.muted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.load();
    video
      .play()
      .catch(() => {
        // autoplay fail ho jaye to ignore
      });
  }

  onSpotLightClick() {
    if (this.run) {
      this.moveNext('SpotLight');
    }
  }

  // sidebars
  openSidebarOne() {
    this.sidebarOneOpen = true;
    this.sidebarTwoOpen = false;
  }
  closeSidebarOne() {
    this.sidebarOneOpen = false;
  }
  openSidebarTwo() {
    this.sidebarTwoOpen = true;
    this.sidebarOneOpen = false;
  }
  closeSidebarTwo() {
    this.sidebarTwoOpen = false;
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
  closeMenu() {
    this.menuVisible = false;
  }

  onClickHandler(id: string) {
    this.showHover = id === 'list1' ? !this.showHover : false;
    this.showHover2 = id === 'list2' ? !this.showHover2 : false;
    this.showHover3 = id === 'list3' ? !this.showHover3 : false;
  }

  ShowandHideDetails(id: string, isShow: boolean) {
    if (!isShow) {
      this.showHover = this.showHover2 = this.showHover3 = false;
    } else {
      this.showHover = id === 'list1';
      this.showHover2 = id === 'list2';
      this.showHover3 = id === 'list3';
    }
  }

  moveNext(id: string) {
    this.router.navigate([id]);
  }

  switchLanguage(lang: 'en' | 'ar') {
    if (
      typeof Weglot !== 'undefined' &&
      typeof Weglot.switchTo === 'function'
    ) {
      Weglot.switchTo(lang);
      document.documentElement.setAttribute(
        'dir',
        lang === 'ar' ? 'rtl' : 'ltr'
      );
      this.setLanguage(lang);

      if (Weglot.refresh) {
        setTimeout(() => Weglot.refresh(), 500);
      }
    } else {
      console.error('Weglot is not ready yet.');
    }
  }

  setLanguage(lang: 'en' | 'ar') {
    this.selectedLanguage = lang;
    this.languageDropdownOpen = false;
  }

  get alternateLanguage(): 'en' | 'ar' {
    return this.selectedLanguage === 'en' ? 'ar' : 'en';
  }
}
