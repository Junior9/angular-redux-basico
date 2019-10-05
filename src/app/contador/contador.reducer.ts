import { Action } from '@ngrx/store';	
import * as fromContador from './contador.actions'

export function ContadorReducer(state:number = 10,action:fromContador.actions){

	switch (action.type) {
		case fromContador.INCREMENTAR:
			return state +=1;

		case fromContador.DECREMENTAR:
			return state -=1;

		case fromContador.DIVIDIR:
			return state /= action.payload;

		case fromContador.MULTIPLICAR:
			return state *= action.payload;

		case fromContador.ZERAR:
			return 0;

		default:
			return state;
	}
}