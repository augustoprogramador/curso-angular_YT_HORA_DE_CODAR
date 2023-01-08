import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userName: string = 'Augusto';
  public title: string = 'curso-angular';

  public userData = {
    email: 'augusto@email.com',
    cargo: 'Programador'
  };
}
