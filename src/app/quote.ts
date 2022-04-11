export class Quote {
 
  constructor (public id:number, public quote:string, public quoteBy:string, public upvote:number, public downvote:number) {
    this.id =id;
    this.quote = quote;
    this.quoteBy = quoteBy;
    this.upvote = upvote;
    this.downvote = downvote;

  }
}
