import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Love is when you meet someone who tells you something new about yourself.', 'Andre Breton', new Date(2017, 9, 23), 'Love Quote'),
    new Quote(2, "If two wrongs don't make a right, try three", 'Laurence J. Peter', new Date(2018, 10, 30), 'funny Quote'),
    new Quote(1, 'Nature will bear the closest inspection. She invites us to lay our eye level with her smallest leaf, and take an insect view of its plain', "Henry David Thoreau", new Date(2019, 3, 18), 'Nature Quote'),
    new Quote(1, 'No great artist ever sees things as they really are. If he did, he would cease to be an artist.', 'Oscar Wilde', new Date(2018, 7, 24), 'Art Quote'),
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete quote: ${this.quotes[index].name}?`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
