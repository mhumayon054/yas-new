import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroVideoService {
  private videoSource = new BehaviorSubject<string | null>(null);
  video$ = this.videoSource.asObservable();

  setVideo(url: string | null) {
    this.videoSource.next(url);
  }
}
