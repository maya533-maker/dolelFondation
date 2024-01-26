import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  setActiveNavItem(navItemIndex: number): void {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach((item, j) => {
      item.classList.remove("active");
    });

    navItems[navItemIndex].classList.add("active");
  }
}
