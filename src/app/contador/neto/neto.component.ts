import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.scss']
})
export class NetoComponent implements OnInit {

  constructor() { }

  @Input() contador:number;
  @Output() zero = new EventEmitter<number>();

  ngOnInit() {
  }

  zerar(){
  	this.zero.emit(0);
  }

}
