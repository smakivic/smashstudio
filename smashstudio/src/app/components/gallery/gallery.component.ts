import { Component , AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit{
  images = Array.from({ length: 9 }, (_, i) => i + 1);

  @ViewChild('track', { static: false }) track!: ElementRef;

  ngAfterViewInit() {
    const track = this.track.nativeElement;
    let scrollAmount = 0;

    function scrollGallery() {
      scrollAmount += 0.1; // Slower scrolling speed
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scrollGallery);
    }

    // Duplicate images for continuous loop
    const clone = track.cloneNode(true);
    track.parentNode.appendChild(clone);

    requestAnimationFrame(scrollGallery);
  }
}
