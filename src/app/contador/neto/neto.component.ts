import { Component, OnInit } from '@angular/core';
import { Store,Action } from '@ngrx/store';
import { ZerarAction} from './../contador.actions';
import { AppState } from './../../app.reducers';

@Component({
  selector: 'app-neto',
  templateUrl: './neto.component.html',
  styleUrls: ['./neto.component.scss']
})
export class NetoComponent implements OnInit {

  contador:number;

  constructor(private store:Store<AppState>) {}

  ngOnInit() {
  }

  zerar(){
    const action = new ZerarAction();
  	this.store.dispatch(action);
  }

}
