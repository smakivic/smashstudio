import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  images = Array.from({ length: 9 }, (_, i) => i + 1);

  @ViewChild('track', { static: false }) track!: ElementRef<HTMLDivElement>;

  isPaused = false;
  scrollX = 0;

  ngAfterViewInit() {
    const track = this.track.nativeElement;

    const originalChildren = Array.from(track.children);
    for (let i = 0; i < 4; i++) { // 5x clone
      originalChildren.forEach(child => {
        track.appendChild(child.cloneNode(true));
      });
    }

    const animate = () => {
      if (!this.isPaused) {
        this.scrollX -= 1.2; // Speed of movement
        track.style.transform = `translateX(${this.scrollX}px)`;
      }

      if (Math.abs(this.scrollX) > track.scrollWidth / 3) {
        this.scrollX = 0;
      }

      requestAnimationFrame(animate);
    };

    // Pause on hover
    track.querySelectorAll('img').forEach(img => {
      img.addEventListener('mouseenter', () => this.isPaused = true);
      img.addEventListener('mouseleave', () => this.isPaused = false);
    });

    requestAnimationFrame(animate);
  }
}
