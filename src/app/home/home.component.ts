import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Para testar o ngFor apenas
  items = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  // Para testar o ngFor apenas
  constructor() { }

  ngOnInit(): void {}

}
