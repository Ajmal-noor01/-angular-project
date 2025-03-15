import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imageslider',
  imports: [CommonModule],
  templateUrl: './imageslider.component.html',
  styleUrl: './imageslider.component.scss'
})
export class ImagesliderComponent {
  @Input() slides: any[] = []
  @Input() indicatorVisible = true
  @Input() autoPlay = true
  currentSlide = 0
  slideHeight = 100;
  slideWidth = 100;
  hidden = false
  ngOnInit() {
    console.log("Slides array: ", this.slides);
    console.log("Current Slide: ", this.slides[this.currentSlide]);
  }
  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(this.currentSlide);
  }
  previous() {
    this.currentSlide = (this.currentSlide - 1) % this.slides.length;
    this.jumpToSlide(this.currentSlide)
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {

      this.currentSlide = index;
      this.hidden = false

    }, 500)
  }
  constructor() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, 3000)
    }
  }

}
