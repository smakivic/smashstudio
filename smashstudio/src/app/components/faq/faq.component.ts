import { Component } from '@angular/core';
import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  faqs = [
    { question: 'What is Smash Studio?', answer: 'Smash Studio is a creative space offering various services including...', isOpen: false },
    { question: 'How do I book an appointment?', answer: 'You can book an appointment through our online platform...', isOpen: false },
    { question: 'What services are offered?', answer: 'We offer a range of services from photography to...', isOpen: false },
    { question: 'Do you offer gift cards?', answer: 'Yes, Smash Studio offers gift cards for different services...', isOpen: false }
  ];

  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}