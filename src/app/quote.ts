export class Quote {
  // id:number;
  // quote:string;
  // upvote:number;
  // downvote:number;
  constructor (public id:number, public quote:string, public upvote:number, public downvote:number) {
    this.id =id;
    this.quote = quote;
    this.upvote = upvote;
    this.downvote = downvote;

  }
}
