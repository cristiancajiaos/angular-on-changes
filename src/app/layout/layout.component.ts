import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  data: number = 0;

  constructor() {}

  ngOnInit(): void {}

  changeFromParent(): void {
    this.data += 1;
  }
}
