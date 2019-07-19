import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  isAtBottom: boolean;

  constructor() {
    this.isAtBottom = false;
  }

  getContent() {
    return document.querySelector('ion-content');
  }

  scrollToBottom() {
    this.getContent().scrollToBottom(500);
    this.isAtBottom = true;
  }

  scrollToTop() {
    this.getContent().scrollToTop(500);
    this.isAtBottom = false;
  }
}
