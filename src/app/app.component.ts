import { Component } from '@angular/core';
import { Store,Action } from '@ngrx/store';
import * as ReducerContador from './contador/contador.actions';

import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'redux-app';

  contador:number;

  constructor(private store:Store<AppState>){
    this.store.select('contador').subscribe(contador=>{
      this.contador = contador;
    })
  }

  incrementa(){
  	const accion = new ReducerContador.IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar(){
  	const accion = new ReducerContador.DecrementarAction();
    this.store.dispatch(accion);
  }

}
