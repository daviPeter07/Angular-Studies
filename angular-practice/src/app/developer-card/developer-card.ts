import { Component, input } from '@angular/core';
import { ButtonStacks } from './components/button-stacks/button-stacks';

@Component({
  imports: [ButtonStacks],
  selector: 'app-developer-card',
  styleUrl: './developer-card.css',
  templateUrl: './developer-card.html',
})
export class DeveloperCard {
  name = input<string>();
  role = input<string>();

  stacks = [
    { id: 0, name: 'Angular' },
    { id: 1, name: 'Nextjs' },
    { id: 2, name: 'Nestjs' },
    { id: 3, name: 'Golang' },
  ];

  showStacks = false;

  //Alterna showStacks para true ou false, dependendo do valor atual
  toggleStacks() {
    this.showStacks = !this.showStacks;
  }
}
