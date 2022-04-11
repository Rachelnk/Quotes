import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  userquotes: Quote[]=[
    new Quote (1, 'Float like a butterfly, sting like a bee.','Muhammad Ali',6, 2),
    new Quote (2, 'When someone shows you who they are believe them the first time.','Maya Angelou',3,1),
    new Quote (3, 'Lies run sprints, but the truth runs marathons.','Michael Jackson',10,3)
  ];
  addNewQuote(quotes:any){
    let quotelength = this.userquotes.length;
    quotes.id = quotelength+1;
    this.userquotes.push(quotes)

  }

  constructor() { }

  ngOnInit() {
  }

}
