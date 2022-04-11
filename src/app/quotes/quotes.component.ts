import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  userquotes: Quote[]=[
    new Quote (1, 'Float like a butterfly, sting like a bee.','Muhammad Ali', "Rachel Kiarie",6, 2),
    new Quote (3, 'Lies run sprints, but the truth runs marathons.','Michael Jackson',"Rachel Kiarie",10,3)
  ];
  showDetails(index:any){
    this.userquotes[index].showDescription = !this.userquotes[index].showDescription;

  }
  addNewQuote(quotes:any){
    let quotelength = this.userquotes.length;
    quotes.id = quotelength+1;
    this.userquotes.push(quotes)

  }

  constructor() { }

  ngOnInit() {
  }

}
