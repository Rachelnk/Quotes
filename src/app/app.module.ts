import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesformComponent } from './quotesform/quotesform.component';
import { HighlightDirective } from './highlight.directive';
import { QuotedetailComponent } from './quotedetail/quotedetail.component';
import { TimecountPipe } from './timecount.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesformComponent,
    HighlightDirective,
    QuotedetailComponent,
    TimecountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
