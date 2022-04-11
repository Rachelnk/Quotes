import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.component.html',
  styleUrls: ['./quotedetail.component.css']
})
export class QuotedetailComponent implements OnInit {
  
  @Input()
  quote!: Quote;
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
