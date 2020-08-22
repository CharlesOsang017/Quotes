import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : string[];
  constructor(){
    this.quotes = ['If I have seen further it is by standing on the shoulders of giants.– Sir Isaac Newton', 'The roots of education … are bitter, but the fruit is sweet. – Aristotle', 'I have to study myself in actuality – as I am, not as I wish to be.—KRISHNAMURTI','We are rarely proud when we are alone –  Voltaire']
  }
}
