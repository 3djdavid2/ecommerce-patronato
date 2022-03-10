//
import { Action } from '@ngrx/store';
import { Pagination } from './list.models';
import { HttpParams } from '@angular/common/http'; //procesar lista de parametros de la url

//tipos de operaciones a definir
export enum Types {
    READ = '[Producto] Read: Start',
    READ_SUCCES = '[Producto] Read: Success',
    READ_ERROR = '[Producto] Read: Error',
}

//clases que representen a cada tipo
export class Read implements Action {
    readonly type = Types.READ;
    constructor(public paginationRequest: HttpParams, public paramsUrl: string) { }
}

export class ReadSuccess implements Action {
    readonly type = Types.READ_SUCCES;
    constructor(public pagination: Pagination | any) { }
}
export class ReadError implements Action {
    readonly type = Types.READ_ERROR;
    constructor(public error: string) { }
}
export type All = Read | ReadSuccess | ReadError;