import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider-three',
  imports: [CommonModule],
  templateUrl: './slider-three.html',
  styleUrl: './slider-three.scss'
})
export class SliderThree {
  images = [
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Thal%C3%ADa.jpeg?updatedAt=1765120329266',
      text: 'Thalia shine while accepting the President’s Merit Award at the  20th Annual Latin Grammys in a Yas Couture Gown'
    },
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Amyra%20Dastur.jpeg?updatedAt=1765120326927',
      text: 'Amyra Dastur looking flawless in a Yas Couture See through mirror beaded gown.'
    },
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Kety%20Perry.jpeg',
      text: 'Katty Perry Shines in a Yas Couture silver embellished catsuit dress for the Video Music Awards'
    },
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Gwen%20Stephani.jpeg',
      text: 'The Beauty Icon Gwen Stefani glowing in a Yas Couture golden  bodysuit for GXVE Beauty.'
    },
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/Golden%20Godess.jpeg',
      text: 'Golden Goddess Paris Hilton looking absolutely  stunning in a Golden beaded gown from Yas Couture'
    },
    {
      url: 'https://ik.imagekit.io/5sbqruotr/spotlightImages/48-1.jpeg',
      text: 'Jennifer Lopez graces the stage for the Robin Hood Foundation  in New York wearing a Yas Couture costume.'
    },
  ];

  currentIndex = 0;
  startX = 0;

  moveSlide(direction: number) {
    this.currentIndex = (this.currentIndex + direction + this.images.length) % this.images.length;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0].clientX;
    if (this.startX - endX > 50) {
      this.moveSlide(1); // swipe left
    } else if (endX - this.startX > 50) {
      this.moveSlide(-1); // swipe right
    }
  }
}