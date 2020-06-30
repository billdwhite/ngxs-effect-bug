import {Injectable} from '@angular/core';
import {Effect, EffectsStart, EffectsTerminate} from 'ngxs-effects';
import {Store} from '@ngxs/store';

@Injectable()
export class AppEffects {

    constructor(private store: Store) {
    }



    @EffectsStart()
    start(): void {
    }



    @EffectsTerminate()
    terminate(): void {
    }
}
