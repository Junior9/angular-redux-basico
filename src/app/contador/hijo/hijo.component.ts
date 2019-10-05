import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

	@Input() contador: number;
	@Output() new_contador = new EventEmitter<number>();

	constructor() { }

	ngOnInit() {
	}

	dividir(){
		this.contador /=2;
		this.new_contador.emit(this.contador);
	}
	multiplicar(){
		this.contador *=2;
		this.new_contador.emit(this.contador);
	}

	reset(){
		this.new_contador.emit(0);
	}

}
