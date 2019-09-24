import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'The only true wisdom is in knowing you know nothing.', '- Socrates', new Date(2018, 11, 24, 10, 33, 30, 0), 0, 0),
    new Quote(2,'The greatest human act is to inspire', '- Nipsey Hussle', new Date(2018, 12, 25, 8, 30, 50, 0), 0, 0),
    new Quote(3,'But man is not made for defeat. A man can be destroyed but not defeated.', '- Ernest Hemingway', new Date(2019, 1, 2, 11, 20, 12, 0), 0, 0),
    new Quote(4,'When you reach the end of your rope, tie a knot in it and hang on.', '- Franklin D. Roosevelt', new Date(2019, 2, 2, 5, 40, 50, 0), 0, 0),
  ];


  highestVotes: number = 0;
  quotesIndex: number = 0;
  calculateHighestVotes() {
    for (var i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].upVotes > this.highestVotes) {
        this.highestVotes = this.quotes[i].upVotes;
        this.quotesIndex = i;
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength +1;
    this.quotes.push(quote);
  }

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }  
  upVote(index) {
    this.quotes[index].upVotes += 1;
  }
  downVote(index) {
    this.quotes[index].downVotes += 1;
  }
  val:string  = "Uploaded {{quote.timeOfCreation|timeCount}}"
  refresh(id:string):void{
    document.getElementById(id).innerHTML=this.val;
    }

  constructor() { }

  ngOnInit() {
  }

}
