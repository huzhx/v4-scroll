import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  isAtBottom: boolean;
  isOverflown: boolean;

  constructor() {
    this.isAtBottom = false;
  }

  ionViewDidEnter() {
    this.isOverflown = this.checkOverflown();
    console.log(this.isOverflown);
  }

  getContent() {
    return document.querySelector('ion-content');
  }

  getTextContent() {
    return document.querySelector('div');
  }

  scrollToBottom() {
    this.getContent().scrollToBottom(1000);
    this.isAtBottom = true;
  }

  scrollToTop() {
    this.getContent().scrollToTop(1000);
    this.isAtBottom = false;
  }

  checkOverflown() {
    console.log(this.getContent().scrollHeight);
    console.log(this.getContent().clientHeight);
    console.log(this.getContent().offsetHeight);
    console.log(this.getTextContent().scrollHeight);
    console.log(this.getTextContent().clientHeight);
    console.log(this.getTextContent().offsetHeight);
    return this.getTextContent().clientHeight > this.getContent().clientHeight;
  }
}
