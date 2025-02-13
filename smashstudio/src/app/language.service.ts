import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root' // Makes this service available app-wide
})
export class LanguageService {
  private translate = inject(TranslateService);

  constructor() {
    const savedLang = localStorage.getItem('language') || 'srb';
    this.translate.use(savedLang);
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
