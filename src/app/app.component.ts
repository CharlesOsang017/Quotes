import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes : Quote[] = [
    {id:1, name:'If I have seen further it is by standing on the shoulders of giants.– Sir Isaac Newton'},
    {id:2, name:'The roots of education … are bitter, but the fruit is sweet. – Aristotle'},
    {id:1, name:'I have to study myself in actuality – as I am, not as I wish to be.—KRISHNAMURTI'},
    {id:1, name:'We are rarely proud when we are alone –  Voltaire'},
];
}
