import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  userquotes: Quote[]=[
    new Quote (1, 'Float like a butterfly, sting like a bee.','Muhammad Ali', "Rachel Kiarie",6, 2,false, new Date(2022, 12, 4)),
    new Quote (3, 'Lies run sprints, but the truth runs marathons.','Michael Jackson',"Rachel Kiarie",10,3, false, new Date(2022,11, 4))
  ];
  showDetails(index:any){
    this.userquotes[index].showDescription = !this.userquotes[index].showDescription;

  }
  addNewQuote(quotes:any){
    let quotelength = this.userquotes.length;
    quotes.id = quotelength+1;
    quotes.createdAt = new Date(quotes.createdAt);
    this.userquotes.push(quotes)

  }
  
  deleteQuote(isComplete:boolean, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure want to delete ${this.userquotes[index].quote}?`)
      if (toDelete){
        this.userquotes.splice(index,1)
      }
    }
    this.rankQuotes();
  }
  getQuotes (){
    return this.userquotes;
  }
  voteQuote(quote:any,type:number) {
    if(this.getQuotes().indexOf(quote)>= 0 ) {
      type === 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].upvote++ : this.getQuotes()[this.getQuotes().indexOf(quote)].downvote++;
      this.rankQuotes();    
  }
}
rankQuotes(): void{
  let upvoted: number = Math.max.apply(Math, this.getQuotes().map(function(chosen)
  {return chosen.upvote}));
  if(upvoted > 0){
    let upvotedQuote: any = this.getQuotes().find(function(selected){
      return selected.upvote == upvoted
    });
    let favIndex: number = this.getQuotes().indexOf(upvotedQuote);
    this.getQuotes().map((quote:any)=>{
      if (favIndex === this.getQuotes().indexOf(quote)){
        this.userquotes[favIndex].isFav = true;

      }else {
        quote.isFavorite =false;
      }
  
    });

  }
  
}

  constructor() { }

  ngOnInit() {
  }

}
