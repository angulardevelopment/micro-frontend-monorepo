import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label = 'Click Me';
  @Input() isHover = false;
  @Input() isActive = false;
  @Input() disabled = false;
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
  constructor() {}

  ngOnInit(): void {}
}
