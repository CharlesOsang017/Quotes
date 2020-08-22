import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes : Quote[] = [
    {id:1, name:'If I have seen further it is by standing on the shoulders of giants.– Sir Isaac Newton'},
    {id:2, name:'The roots of education … are bitter, but the fruit is sweet. – Aristotle'},
    {id:1, name:'I have to study myself in actuality – as I am, not as I wish to be.—KRISHNAMURTI'},
    {id:1, name:'We are rarely proud when we are alone –  Voltaire'},
];
  constructor() { }

  ngOnInit() {
  }

}
