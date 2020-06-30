export namespace ApplicationActions {

    export class ShowLoading {
        static readonly type = '[Roadmap] SHOW_LOADING';
        constructor(public payload: boolean) {
        }
    }
    export class ShowLoadingSuccess {
        static readonly type = '[Roadmap] SHOW_LOADING_SUCCESS';
        constructor(public payload: boolean) {
        }
    }
    export class ShowLoadingError {
        static readonly type = '[Roadmap] SHOW_LOADING_ERROR';
        constructor(public payload: any) {
        }
    }



    export class HideLoading {
        static readonly type = '[Roadmap] HIDE_LOADING';
        constructor(public payload: boolean) {
        }
    }
    export class HideLoadingSuccess {
        static readonly type = '[Roadmap] HIDE_LOADING_SUCCESS';
        constructor(public payload: boolean) {
        }
    }
    export class HideLoadingError {
        static readonly type = '[Roadmap] HIDE_LOADING_ERROR';
        constructor(public payload: any) {
        }
    }



    export class Initialize {
        static readonly type = '[Roadmap] INITIALIZE';
        constructor() {
        }
    }
    export class InitializeSuccess {
        static readonly type = '[Roadmap] INITIALIZE_SUCCESS';
        constructor() {
        }
    }
    export class InitializeError {
        static readonly type = '[Roadmap] INITIALIZE_ERROR';
        constructor(public payload: any) {
        }
    }



}
