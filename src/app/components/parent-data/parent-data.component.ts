import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  public userData!: {email: string, cargo: string}; // ! permite inicializar a variável posteriormente

  constructor() { }

  ngOnInit(): void {
  }

}
