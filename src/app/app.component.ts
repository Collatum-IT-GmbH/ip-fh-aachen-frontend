import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ip-fh-aachen-frontend';
  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }
  decreaseCounter() {
    this.counter--;
  }
}
