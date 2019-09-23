import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'The only true wisdom is in knowing you know nothing.', '- Socrates'),
    new Quote(2,'The greatest human act is to inspire', '- Nipsey Hussle'),
    new Quote(3,'But man is not made for defeat. A man can be destroyed but not defeated.', '- Ernest Hemingway'),
    new Quote(4,'When you reach the end of your rope, tie a knot in it and hang on.', '- Franklin D. Roosevelt'),
    new Quote(5,'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', '- Hellen Keller'),

  ];

  toggleDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }  

  constructor() { }

  ngOnInit() {
  }

}
