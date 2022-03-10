import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import * as fromList from './list/list.reducer';
import { ListEffects } from "./list/list.effects";

export interface ShopState{
  list: fromList.ListState
}

export const reducers: ActionReducerMap<ShopState> = {
  list: fromList.reducer //esta cambia los valores del store
}

export const effects : any[] = [
    ListEffects      //metodo  de llamada al servidor para consulta de productos
]

export const getShopState = createFeatureSelector<ShopState>('shop');
