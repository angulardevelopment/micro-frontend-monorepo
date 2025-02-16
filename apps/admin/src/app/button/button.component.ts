import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'test-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() label = '';
  @Input() isHover = false;
  @Input() isActive = false;
  constructor() {}

  ngOnInit(): void {}
}
