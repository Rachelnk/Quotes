export class Quote {
  
  showDescription: boolean;
  constructor (public id:number, public quote:string, public quoteBy:string, public quoteContributor:string, public upvote:number, public downvote:number) {
    this.id =id;
    this.quote = quote;
    this.quoteBy = quoteBy;
    this.quoteContributor = quoteContributor;
    this.upvote = upvote;
    this.downvote = downvote;
    this.showDescription = false;

  }
}
