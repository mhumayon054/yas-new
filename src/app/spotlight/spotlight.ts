import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from "../footer/footer";

declare var Weglot: any;

@Component({
  selector: 'app-spotlight',
  standalone: true,
  imports: [CommonModule, Footer],
  templateUrl: './spotlight.html',
  styleUrl: './spotlight.scss'
})
export class Spotlight {


  products = [
 {  name: 'Shanaya Kapoor Dazzles in a Yas Couture Fall Winter 23/24  Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Shanaya%20Kapoor%20Dazzle.jpeg' },
    { name: 'Malaika Arora Stuns in a Yas Couture Fall Winter 23/24 Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Malaika%20Arora.jpeg' },
    { name: 'Shehnaaz Gill Dazzles in a Yas Couture Fall Winter 23/24 Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Shahnaz%20Gill.jpeg' },
    { name: 'Mouni Roy Stuns in a Yas Couture Fall Winter 23/24 Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Mouni%20Roy.jpeg' },
    { name: 'Deborah Cox light up the stage wearing Yas Couture Haute Couture dress during her Performance in KTUphoria', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Debroh%20Cox.jpeg' }, 
{ name: 'Malaika Arora Sparkled in a Yas Couture Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Malaika%20Arora%20Gown.jpeg' },
    { name: 'The Mexican Radio Host La Bronca looks extremely elegant in a Yas Couture Bridal Gown ', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/La%20Bronca.jpeg' },
{ name: 'Actress Berite La Belle Stuns in "Time is Eternal" playing Cleopatra role wearing Yas Couture in a dramatic gold embellished crystal gown', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Berite%20La%20Bella.jpeg' },
    { name: 'Deborah Cox Stuns in a Yas Couture SS22 Haute Couture dress for the JUNO Music Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Deborah%20Cox.jpeg' },
{ name: 'Deborah Cox Stuns in a Yas Couture SS22 Haute Couture dress while performing at the JUNO Music Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Deborah%20Cox%20Canadian.jpeg' },
{ name: 'Deborah Cox Dazzle in a Yas Couture SS22 Haute Couture dress while attending the JUNO Music Awards ', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Deborah%20Cox%20Dazzle.jpeg' },
{ name: 'The Legendary Deborah Cox dazzle in a Yas Couture SS22 Haute Couture dress for the night gala of the JUNO Music Award', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Deborah%20Cox%20Canadian%20Event.jpeg' },
{ name: 'Rima Fakih attends the Billboard Awards in a Yas Couture Black embroidered gown', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Rima%20Fakih.jpeg' },
{ name: 'Dayena Erappa wearing Yas Couture Haute Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Diana%20Erappa.jpeg' },
    { name: 'The Beauty Icon Gwen Stefani glowing in a Yas Couture golden bodysuit for GXVE Beauty', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Gwen%20Stephani.jpeg' },
    { name: 'Nora Fatehi Stuns in a Multicolor tiger print dress from Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Nora%20Fatehi.jpeg' },
    { name: 'Amyra Dastur looking flawless in a Yas Couture See through mirror beaded gown', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Amyra%20Dastur.jpeg' },
    { name: `Thalia shine while accepting the President's Merit Award at the 20th Annual Latin Grammys in a Yas Couture Gown`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Thal%C3%ADa.jpeg' },
{ name: 'Balqees Fathi Stuns in a red beaded dress from Yas Couture for the hope makers in Dubai', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Balqees%20Fathi.jpeg' },
    { name: 'Golden Goddess Paris Hilton looking absolutely stunning in a Golden beaded gown from Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Golden%20Godess.jpeg' },
    { name: 'Carrie Underwood slay the red carpet at the 53rd Annual CMA Awards in a Yas Couture blue gray golden beaded see through dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Carrie%20Underwood.jpeg' },
{ name: `Paris Hilton Stuns in a Yas Couture dress while attending the HBO Golden Globes Awards`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Paris%20Hilton.jpeg' },
    { name: 'Bebe Rexha dazzled in a silver dripping bodysuit from Yas Couture as featured in Nylon Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Bebe%20Rexha.jpeg' },
    { name: 'Malaika Arora Stuns in a Yas Couture dress for Koffee with Karan', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Malaika%20Arora%20Magzine.jpeg' },
{ name: 'Hofit Golan shines in a Yas Couture gown at the 27th Annual Elton John AIDS Foundation Academy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Hofit%20Galon.jpeg' },
    { name: 'Patrizia Yanguela stuns in a Yas Couture dress while attending the 61st Annual Grammy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Patrizia.jpeg' },
    { name: 'Toni Braxton shines in a Yas Couture dress while attending the 61st Annual Grammy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Toni%20Braxton.jpeg' },
{ name: 'Loren Gray in a Yas Couture costume for her music video “Queen”', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Loren%20Gray.jpeg' },
{ name: 'Nour Al ghandour stuns in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Nour%20Al%20Ghandour.jpeg' },
    { name: 'Bebe Rexha wearing a Yas Couture look as featured on the cover of Billboard Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Tyler%20Hubbard%20and%20Brian%20Kelley.jpeg' },
{ name: 'Bebe Rexha wearing a Yas Couture crystal beaded evening gown while performing on The Tonight Show starring Jimmy Fallon', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Bebe%20Rexha%20crystal.jpeg' },
{ name: 'Nour Al Ghandour in a Yas Couture Pantsuit for the Official Arab Social Media Summit', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Sona%20Rafiq.jpeg' }, 
{ name: `Malaika Arora in a Yas Couture Striped beaded gown for India's got talent`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Malaika%20Arora%20Color.jpeg' },
{ name: 'Paulina Rubio shines in a gold metallic crystal dress from Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Poulina%20Robio.jpeg' },
    { name: 'Shereen Reda stuns in a Yas Couture dress while attending the 40th Annual Cairo International Film Festival', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Shereen%20Reda.jpeg' },
{ name: 'Yuri stuns in a Yas Couture dress for the Latin Grammys', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Yuri%20Stuns.jpeg' },
   { name: 'Thalia shine in a Yas Couture metallic gown for the Latin Grammys', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Thal%C3%ADa%20Super.jpeg' },
{ name: 'Bebe Rexha wearing a Yas Couture crystal beaded evening gown while performing at the CMA Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Bebe%20Rexha%20Cheer.jpeg' },
{ name: 'WWE Diva Barbie Blank stuns in a Yas Couture black beaded mini dress for WWE Evolution', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Kelly%20Kelly.jpeg' },
{ name: 'Alejandra Espinoza stuns in a Yas Couture beaded off white crop top with a high waisted fringes skirt for Nuestra BellezaLatina', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Sonal%20Kukreja.jpeg' },
{ name: `Mel B Stuns in a Yas Couture black beaded sheer evening gown for the America's Got Talent final show`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Mel%20B%20Stuns.jpeg' },
{ name: 'Hofit Golan wearing a Yas Couture silver and gold beaded gown for the International Emmy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/42.jpeg' },
{ name: 'Ashanti shines in a Yas Couture dress at the Video Music Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Ashanti%20SHines.jpeg' },
{ name: 'Ashanti wearing a Yas Couture Mirror dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/44.jpeg' },
{ name: 'Gwen Stefani in a Yas Couture silver stones beaded dress for her opening show in Las Vegas.', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Ashanti.jpeg' },
{ name: 'Vu Ngoc Anh stuns in a Yas Couture Gown as she attends Cannes Film Festival.', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/46.jpg' },
{ name: 'Vu Ngoc Anh stuns in a Yas Couture Gown as she attends Cannes Film Festival', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/47.jpg' },
{ name: 'Jennifer Lopez graces the stage for the Robin Hood Foundation in New York wearing a Yas Couture costume', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/48.jpeg' },
{ name: 'MYA wearing a Yas Couture beaded off white crop top with a high waisted fringes skirt as featured on the Runway Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/49.jpeg' },
{ name: 'Beautiful Illustration by the talented Chantelle Shamoun for Jennifer Lopez look for her Music Video “EL Anillo “ wearing Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/50.jpeg' },
{ name: 'Mel B Dazzle in a Yas Couture Crystal beaded mini dress while attending Amercia’s Got Talent Season 13', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/51.jpeg' },
{ name: 'Peta Murgatroyd Stuns in a Yas Couture dress as featured on the Runway Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/52.jpeg' },
{ name: 'Ashanti wearing a Yas Couture shimmering and dripping crystals dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/53.jpeg' },
{ name: 'Pia Toscano stuns in a Yas Couture dress for the Polar Bear Affair event in Tronto', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/54.jpg' },
{ name: 'Ashanti stuns in a Yas Couture dress while attending the 60th Annual Grammy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/ashanti%2055.jpeg' },
{ name: 'Paris Hilton Stuns in a Yas Couture dress while attending the HBO Golden Globes Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/56-1.jpeg' },
{ name: 'Gwen Stefani Shines in a Yas Couture dress for her new Album “You Make It Feel Like Christmas”', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Gwen%20Stefani.jpeg' },
{ name: `Balqees Fathi shines in a Yas Couture dress at Saudi Arabia’s first female only concert”`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Balqees%20Fathi%20shines.png' },
{ name: 'Paris Hilton wearing a Yas Couture multicolored dress for the Fred Hollows Foundation Gala', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/59.jpeg' },
{ name: 'Jennifer Lopez in a Yas Couture Costume during her show in Dubai', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/60.jpeg' },
{ name: 'Carrie Underwood at the 51st Annual CMA Awards in a Yas Couture white beaded mini dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/61.jpeg' },
{ name: 'Carrie Underwood stuns for the Sunday Night Football Intro in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/62.jpeg' },
{ name: 'Katy Perry Shines in a Yas Couture silver embellished catsuit dress for the Video Music Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/63.jpeg' },
{ name: `Mel B wearing a colorful beaded dress from Yas Couture for the latest episode of America's Got Talent`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/64.jpeg' },
{ name: `Mel B Shines in a Yas Couture Gold beaded bodysuit for the Semi Final of America's Got Talent`, img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/65.jpeg' },
{ name: 'Paris Hilton slay the foam and diamond party in Ibiza wearing a full shimmering Swarovski beaded dress from Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/66.jpeg' },
{ name: 'WWE Diva Barbie Blank stuns in a Yas Couture black beaded mini dress for Miami Swim Week', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/67.jpeg' },
{ name: 'Uldouz Stuns in a Yas Couture black beaded mini dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/68.jpeg' },
{ name: 'Paris Hilton stuns in a Yas Couture dress while attending the Foam and Diamonds opening session in Ibiza', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/69.jpeg' },
{ name: 'Yuri Shines in a Yas Couture Silver shimmering Swarovski beaded dress with fringes from Yas Couture', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/70.jpeg' },
{ name: 'Thalia dazzle in a Haute Couture dress while attending the 71st Annual Tony Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/71.jpeg' },
{ name: 'Carrie Underwood Stuns in a Yas Couture dress while attending the CMT Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/72.jpeg' },
{ name: 'Uldouz Shines in a Yas Couture crystal beaded bodysuit', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/73.jpeg' },
{ name: 'Uldouz wearing a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/74.jpeg' },
{ name: 'Victoria Bonya Stuns in a Yas Couture red lace beaded gown', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/75.jpeg' },
{ name: 'Hofit Golan Shines in a Yas Couture dress for the amfAR Gala Cannes', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/76.jpeg' },
{ name: 'Uldouz wearing a Yas Couture dress as featured on Premium Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/77.jpeg' },
{ name: 'Reign Edwards wearing a Yas Couture dress while attending the 44th annual daytime Emmy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/78.jpeg' },
{ name: 'Reign Edwards wearing a Yas Couture dress while attending the 44th annual daytime Emmy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/79.jpeg' },
{ name: 'Lilit Hovhannisyan Stuns in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/80.jpeg' },
{ name: 'Nicole Sheridan Stuns in a Yas Couture dress while attending The Vanity Fair after party with her husband Mr. Taylor Sheridan.', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/81.jpeg' },
{ name: 'Paulina Rubio wearing a Yas Couture dress while attending The 59th Annual Grammy Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/82.jpg' },
{ name: 'Lilit Hovhannisyan Stuns in a Yas Couture dress for American Music Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/83.jpeg' },
{ name: 'Shirine David Shines in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/84.jpeg' },
{ name: 'Carrie Underwood Shines in a Yas Couture dress for the CMA Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/85.jpeg' },
{ name: 'Toni Braxton wearing a Yas Couture dress for the Hits Tour', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/86.jpeg' },
{ name: 'Thalia Shines in a Yas Couture dress for her Latina Love Tour in New York', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/87.jpeg' },
{ name: 'Thalia Stuns in a Yas Couture dress for her Latina Love Tour in New York', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/88.jpeg' },
{ name: 'Zhavea wearing a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/89.jpeg' },
{ name: 'Karen Manco stuns in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/90.jpeg' },
{ name: 'Eva Marcille slay the red carpet of Bet Awards in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Eva%20Marcille.jpeg' },
{ name: 'Jennifer Lopez performs at Qatar Airways Gala at the Fox Theater in Atlanta Wearing a Yas Couture Costume', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/92.jpeg' },
{ name: 'Toni Braxton Stuns in a Yas Couture dress for the Grammy Park', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/93.jpeg' },
{ name: 'Carrie Underwood Stuns in a Yas Couture dress for the American Country Countdown Awards', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/94.jpeg' },
{ name: 'Jennifer Lopez Shines in a Yas Couture dress for the Final Episode of American Idol', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Jennifer%20Lopez.jpeg' },
{ name: 'Kat Graham in a Yas Couture dress as featured on the Basic Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Kat%20Graham.png' },
{ name: 'Bai Ling wearing a Yas Couture dress as featured on the cover of Gia’s Magazine', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/97.jpeg' },
{ name: 'Cynthia Olav Stuns in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/98.jpeg' },
{ name: 'Anahi Giovanna Wearing a Yas Couture look for the Premios Juventud', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/99.jpeg' },
{ name: 'Paris Hilton Stuns in a Yas Couture dress', img: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/100.jpeg' },
  ];

  viewerOpen = false;
  selectedIndex = 0;
  zoomState: 'normal' | 'in' | 'out' = 'normal';
  showShare = false;

  @ViewChild('imgEl', { static: false }) imgEl!: ElementRef<HTMLImageElement>;
  private dragging = false;
  private startX = 0;
  private startY = 0;
  private translateX = 0;
  private translateY = 0;

  openViewer(index: number) {
    this.selectedIndex = index;
    this.viewerOpen = true;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  closeViewer() {
    this.viewerOpen = false;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.selectedIndex = (this.selectedIndex === 0) ? this.products.length - 1 : this.selectedIndex - 1;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.selectedIndex = (this.selectedIndex === this.products.length - 1) ? 0 : this.selectedIndex + 1;
    this.zoomState = 'normal';
    this.showShare = false;
    this.resetImgTransform();
  }

  toggleZoom(event: Event) {
    event.stopPropagation();
    if (this.zoomState === 'normal') {
      this.zoomState = 'in';
    } else if (this.zoomState === 'in') {
      this.zoomState = 'out';
    } else {
      this.zoomState = 'normal';
    }
    this.resetImgTransform();
  }

  toggleFullScreen(event: Event) {
    event.stopPropagation();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  toggleShare(event: Event) {
    event.stopPropagation();
    this.showShare = !this.showShare;
  }

  shareLink(event: Event, platform: string) {
    event.stopPropagation();
    const imgUrl = this.products[this.selectedIndex].img;
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(imgUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(imgUrl)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(imgUrl);
    }
    this.showShare = false;
  }

  onWheel(event: WheelEvent) {
    // Optional: implement scroll zoom in/out
  }

  onImgMouseDown(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = true;
    this.startX = event.clientX - this.translateX;
    this.startY = event.clientY - this.translateY;
    this.imgEl.nativeElement.style.cursor = 'grabbing';
  }

  onImgMouseUp(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = false;
    this.imgEl.nativeElement.style.cursor = 'grab';
  }

  onImgMouseMove(event: MouseEvent) {
    if (this.zoomState === 'normal' || !this.dragging) return;
    this.translateX = event.clientX - this.startX;
    this.translateY = event.clientY - this.startY;
    this.setImgTransform();
  }

  onImgMouseLeave(event: MouseEvent) {
    if (this.zoomState === 'normal') return;
    this.dragging = false;
    this.resetImgTransform();
  }

  private setImgTransform() {
    let scale = 1;
    if (this.zoomState === 'in') scale = 2;
    if (this.zoomState === 'out') scale = 0.5;

    this.imgEl.nativeElement.style.transform =
      scale !== 1 ? `scale(${scale}) translate(${this.translateX}px,${this.translateY}px)` : '';
  }

  private resetImgTransform() {
    this.translateX = 0;
    this.translateY = 0;

    let scale = 1;
    if (this.zoomState === 'in') scale = 2;
    if (this.zoomState === 'out') scale = 0.5;

    this.imgEl.nativeElement.style.transform = scale !== 1 ? `scale(${scale})` : '';
    this.imgEl.nativeElement.style.cursor = scale !== 1 ? 'grab' : 'zoom-in';
  }
}