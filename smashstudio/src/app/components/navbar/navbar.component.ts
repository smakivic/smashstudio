import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
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
}
