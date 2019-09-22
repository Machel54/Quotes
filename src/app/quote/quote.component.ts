import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes: Quote[] = [
    {id:1, description:'William Shakespeare',name:'To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.'},
    {id:2,description:'Machel Raini',name:'Roses are red, violets are blue, vodka costs less than dinner for two.'},
    {id:3,description:'Florence Nightingale',name:'Women have no sympathy and my experience of women is almost as large as Europe'},
    {id:4,description:'Mahatma Gandhi',name:'I will not let anyone walk through my mind with their dirty feet.'},
    {id:5,description:'Pablo Picasso',name:'The purpose of art is washing the dust of daily life off our souls.'},
  ];
  constructor() { }

  ngOnInit() {
  }

}


