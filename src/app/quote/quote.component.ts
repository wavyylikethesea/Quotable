import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'Wastin air', details:'By Nipsey Hussle'},
    {id:2, name:'Greatest human act is to inspire', details:'By Nipsey Hussle'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
