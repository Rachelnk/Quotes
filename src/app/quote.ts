export class Quote {
 
  constructor (public id:number, public quote:string, public upvote:number, public downvote:number) {
    this.id =id;
    this.quote = quote;
    this.upvote = upvote;
    this.downvote = downvote;

  }
}
