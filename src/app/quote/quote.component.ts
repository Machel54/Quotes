import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes: Quote[] = [
    new Quote(1,'William Shakespeare','To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.'),
    new Quote(2,'Machel Raini','Roses are red, violets are blue, vodka costs less than dinner for two.'),
    new Quote(3,'Florence Nightingale','Women have no sympathy and my experience of women is almost as large as Europe'),
    new Quote(4,'Mahatma Gandhi','I will not let anyone walk through my mind with their dirty feet.'),
    new Quote(5,'Pablo Picasso','The purpose of art is washing the dust of daily life off our souls.'),
  ];

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  
  constructor() { }

  ngOnInit() {
  }

}


