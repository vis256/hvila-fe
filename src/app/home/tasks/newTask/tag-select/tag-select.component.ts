import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.css']
})
export class TagSelectComponent implements OnInit {
  @Input() tag: any;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit(): void {
    this.selected = false;
  }

}
