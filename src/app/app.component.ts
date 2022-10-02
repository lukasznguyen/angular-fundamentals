import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Lucas';

  handleClick() {
    this.name = 'Skywalker';
  }

  handleChange(value: string) {
    this.name = value;
  }
}
