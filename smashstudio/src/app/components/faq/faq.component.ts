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
    { questionKey: 'faq.question1', answerKey: 'faq.answer1', isOpen: false },
    { questionKey: 'faq.question2', answerKey: 'faq.answer2', isOpen: false },
    { questionKey: 'faq.question3', answerKey: 'faq.answer3', isOpen: false },
    { questionKey: 'faq.question4', answerKey: 'faq.answer4', isOpen: false },
    { questionKey: 'faq.question5', answerKey: 'faq.answer5', isOpen: false },
    { questionKey: 'faq.question6', answerKey: 'faq.answer6', isOpen: false },
    { questionKey: 'faq.question7', answerKey: 'faq.answer7', isOpen: false }
  ];


  toggle(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}