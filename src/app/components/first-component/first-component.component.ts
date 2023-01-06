import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public name: string = 'Augusto';
  public age: number = 31;

  constructor() { }

  ngOnInit(): void {
  }

}
