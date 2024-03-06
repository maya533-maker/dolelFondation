import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-notification',
  templateUrl: './cookie-notification.component.html',
  styleUrls: ['./cookie-notification.component.css']
})
export class CookieNotificationComponent implements OnInit {
  acceptedCookies: boolean = false;
  showMore: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.acceptedCookies = this.cookieService.check('accept-cookies');
  }

  acceptCookies(): void {
    this.cookieService.set('accept-cookies', 'true', 365);
    this.acceptedCookies = true;
  }

  showMoreInfo(): void {
    this.showMore = true;
  }

  hideMoreInfo(): void {
    this.showMore = false;
  }
}
