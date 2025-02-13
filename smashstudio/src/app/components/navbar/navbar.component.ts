import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule, TranslateModule],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isNavbarCollapsed = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  closeNavbar() {
    this.isNavbarCollapsed = false;
  }
  languages = ['srb', 'en']; // Add more languages as needed

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'srb';
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    if (lang) {
      this.translate.use(lang);
      localStorage.setItem('language', lang);
    }
  }
}
