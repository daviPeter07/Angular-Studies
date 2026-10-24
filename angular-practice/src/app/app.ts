import { Component } from '@angular/core';
import { DeveloperCard } from './developer-card/developer-card';

@Component({
  imports: [DeveloperCard],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
}
