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
  languages = [
    { code: 'srb', name: 'SRB', flag: 'assets/flags/serbia.svg' },
    { code: 'en', name: 'EN', flag: 'assets/flags/uk.svg' }
  ];
  
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'srb';
    this.translate.use(savedLang);
  }
  dropdownOpen = false;
  currentLanguage = this.languages.find(
    lang => lang.code === (localStorage.getItem('language') || 'srb')
  ) || this.languages[0];

  switchLanguage(langCode: string) {
    this.translate.use(langCode);
    localStorage.setItem('language', langCode);
    this.currentLanguage = this.languages.find(lang => lang.code === langCode) || this.languages[0];
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
