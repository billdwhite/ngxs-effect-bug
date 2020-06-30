import {Injectable} from '@angular/core';
import {Action, NgxsOnInit, State, StateContext, Store} from '@ngxs/store';
import {ApplicationActions} from './app.actions';

export interface ApplicationStateModel {
    loading: boolean;
    loadingText: string;
    debugMode: boolean;
}


@State<ApplicationStateModel>({
    name: 'application',
    defaults: {
        loading: false,
        loadingText: '',
        debugMode: false
    }
})
@Injectable()
export class ApplicationState  {


    constructor(private store: Store) {
    }

}
