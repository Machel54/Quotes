import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes: Quote[] = [
    new Quote(1,'William Shakespeare','To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.',new Date(2020,3,14)),
    new Quote(2,'Machel Raini','Roses are red, violets are blue, vodka costs less than dinner for two.',new Date(2019,6,9)),
    new Quote(3,'Florence Nightingale','Women have no sympathy and my experience of women is almost as large as Europe',new Date(2022,1,12)),
    new Quote(4,'Mahatma Gandhi','I will not let anyone walk through my mind with their dirty feet.',new Date(2019,0,18)),
    new Quote(5,'Pablo Picasso','The purpose of art is washing the dust of daily life off our souls.',new Date(2019,2,14)),
  ];
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}


