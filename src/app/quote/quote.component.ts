import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'If I have seen further it is by standing on the shoulders of giants', 'Sir Isaac Newton'),
    new Quote(2, 'The roots of education … are bitter, but the fruit is sweet', 'Aristotle'),
    new Quote(1, 'I have to study myself in actuality – as I am, not as I wish to be.', 'KRISHNAMURTI'),
    new Quote(1, 'We are rarely proud when we are alone.', 'Voltaire'),
  ];
 
  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  copmleteQuote(isComplete, index){
    if(isComplete) {
      this.quotes.splice(index,1);
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
