import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {

  @Input() set qrURL(value: string) {
    this.qrValue = value;
    console.log(this.qrValue)
  }

  public qrValue = "";

  constructor() { }

  ngOnInit(): void {
  }


}
