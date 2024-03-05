import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor() {}

  ngOnInit(): void {
    const contactForm = document.getElementById(
      'contact-form'
    ) as HTMLFormElement;
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const messageData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };

      console.log('Message envoyé:', messageData);

      contactForm.reset();
    });
  }
}
