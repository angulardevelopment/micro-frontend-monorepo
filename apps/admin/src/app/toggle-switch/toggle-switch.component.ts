import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss']
})
export class ToggleSwitchComponent {

   @Input() checked = false;
  @Output() toggled = new EventEmitter<boolean>();

  onToggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.toggled.emit(isChecked);
  }
}
