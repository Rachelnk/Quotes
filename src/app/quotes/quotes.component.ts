import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  userquotes:Quote[]=[
    {id:1, quote:'Thumbs up',upvote:0,downvote:0},
    {id:2, quote:'Thumbs down',upvote:3,downvote:0},
    {id:3, quote:'Thumbs up',upvote:5,downvote:3}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
