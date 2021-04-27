import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'selectLanguage',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  foods: Food[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
