import { createReducer } from '@reduxjs/toolkit'
import { wsOpen, wsClose, wsMessage, wsError, wsConnecting } from '../actions/web-socket';
import { TOrdersResponse } from '../../utils/types';

export enum WebsocketStatus {
  CONNECTING = 'CONNECTING...',
  ONLINE = 'ONLINE',
  OFFLINE = 'OFFLINE'
}

export type TStore = {
  status: WebsocketStatus,
  connectionError: string,
  ordersData: TOrdersResponse | null
}

export const initialState: TStore = {
  status: WebsocketStatus.OFFLINE,
  connectionError: '',
  ordersData: null
};

export const wsFeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(wsConnecting, (state) => {
        state.status = WebsocketStatus.CONNECTING;
    })
    .addCase(wsOpen, (state) => {
        state.status = WebsocketStatus.ONLINE;
        state.connectionError = '';
    })
    .addCase(wsClose, (state) => {
      state.status = WebsocketStatus.OFFLINE;
    })
    .addCase(wsError, (state, action) => {
      state.connectionError = action.payload;
    })
    .addCase(wsMessage, (state, action) => {
      state.ordersData = action.payload
    })
})
