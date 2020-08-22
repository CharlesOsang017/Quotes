import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote("MLK", "Martin Luther King", "Injustice anywhere is a threat to justice everywhere."),
    new Quote("Life", "Margeret Atwood", "In the end we all become stories ")
  ]
    

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}



































































// export class QuoteComponent implements OnInit {
//   quotes: Quote[] = [
//     new Quote(1, 'If I have seen further it is by standing on the shoulders of giants', 'Sir Isaac Newton', new Date(2017, 9, 23)),
//     new Quote(2, 'The roots of education … are bitter, but the fruit is sweet', 'Aristotle', new Date(2018, 10, 30)),
//     new Quote(1, 'I have to study myself in actuality – as I am, not as I wish to be.', 'KRISHNAMURTI', new Date(2019, 3, 18)),
//     new Quote(1, 'We are rarely proud when we are alone.', 'Voltaire', new Date(2018, 7, 24)),
//   ];

//   addNewQuote(quote){
//     let quoteLength = this.quotes.length;
//     quote.id = quoteLength+1;
//     quote.completeDate = new Date(quote.completeDate)
//     this.quotes.push(quote)
//   }

//   toggleDetails(index) {
//     this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
//   }

//   deleteQuote(isComplete, index) {
//     if (isComplete) {
//       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
//       if (toDelete) {
//         this.quotes.splice(index, 1)
//       }
//     }
//   }

  
//   constructor() { }

//   ngOnInit() {
//   }

// }
