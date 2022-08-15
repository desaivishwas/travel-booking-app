import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Output() counterValue: EventEmitter<number>;

  _value: number = 0;
  _step: number = 1;
  _min: number = 0;
  _max: number = 20;
  color: string = 'default';

  constructor() {
    this.counterValue = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  myFormGroup = new FormGroup({
    formField: new FormControl()
  });

  setColor(color: string): void {
    this.color = color;
  }

  getColor(): string {
    return this.color
  }

  incrementValue(step: number = 1): void {
    let inputValue = this._value + step;
    this._value = inputValue;
    this.counterValue.emit(inputValue)
  }

  shouldDisableDecrement(inputValue: number): boolean {
    return inputValue <= this._min;
    this.counterValue.emit(inputValue)
  }

  shouldDisableIncrement(inputValue: number): boolean {
    return inputValue >= this._max;
  }

}
