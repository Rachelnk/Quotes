import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  userquotes:Quote[]=[
  new Quote (1, 'Thumbs up',0, 0),
   new Quote (2, 'Thumbs down',3,0),
    new Quote (3, 'Thumbs up',5,3)
  ];
  addNewQuote(quotes:any){
    let quotelenghth = this.userquotes.length;
    quotes.id = quotelenghth+1;
    this.userquotes.push(quotes)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
