import { Component, OnInit} from '@angular/core';
import { Store,Action } from '@ngrx/store';
import { DividirAction,MultiplicarAction} from './../contador.actions';
import { AppState } from './../../app.reducers';

@Component({
	selector: 'app-hijo',
	templateUrl: './hijo.component.html',
	styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

	contador:number;

	constructor(private store:Store<AppState>) { 
		this.store.select('contador').subscribe(contador=>{
			this.contador = contador;
		})
	}

	ngOnInit() {
	}

	dividir(){
		const action = new DividirAction(2);
		this.store.dispatch(action)
	}
	multiplicar(){
		const action = new MultiplicarAction(2);
		this.store.dispatch(action)
	}

}