import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = '';

  handleChange(value: any) {
    this.name = value.target.value;
  }
}
