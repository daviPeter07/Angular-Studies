import { Component, input, output } from '@angular/core';
import { LucideArrowDown, LucideArrowUp } from '@lucide/angular';

@Component({
  imports: [LucideArrowUp, LucideArrowDown],
  selector: 'app-button-stacks',
  styleUrl: './button-stacks.css',
  templateUrl: './button-stacks.html',
})
export class ButtonStacks {
  visible = input(false);

  toggleRequested = output<void>();

  onToggleClick() {
    this.toggleRequested.emit();
  }
}
