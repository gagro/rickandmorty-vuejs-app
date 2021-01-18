import * as types from "./types";

export default {
   [types.GET_CHARACTERS](state, payload) {
      state.characters = {
         ...state.characters,
         numberOfPages: payload.numberOfPages,
         [payload.page]: payload.data
      }
   },
   [types.GET_LOCATIONS](state, payload) {
      state.locations = {
         ...state.locations,
         numberOfPages: payload.numberOfPages,
         [payload.page]: payload.data
      }
   },
   [types.GET_EPISODES](state, payload) {
      state.episodes = {
         ...state.episodes,
         numberOfPages: payload.numberOfPages,
         [payload.page]: payload.data
      }
   },
}