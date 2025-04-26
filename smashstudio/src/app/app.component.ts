import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { FaqComponent } from './components/faq/faq.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, TranslateModule, CommonModule, GalleryComponent, FaqComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'smashstudio';
}
