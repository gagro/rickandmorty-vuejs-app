import axios from "axios";

// Types
import * as types from "./types";

axios.defaults.baseURL = "https://rickandmortyapi.com/api";

export default {
   fetchCharacters({ commit, state }, page) {
      if (!state.characters[page]) {
         return axios.get(`/character?page=${page}`).then(response => {
            commit({
               type: types.GET_CHARACTERS,
               data: response.data.results,
               numberOfPages: response.data.info.pages,
               page
            })
         })
            .catch(error => error)
      }
   },
   fetchLocations({ commit, state }, page) {
      if (!state.locations[page]) {
         return axios.get(`/location?page=${page}`).then(response => {
            commit({
               type: types.GET_LOCATIONS,
               data: response.data.results,
               numberOfPages: response.data.info.pages,
               page
            })
         })
            .catch(error => error)
      }
   },
   fetchEpisodes({ commit, state }, page) {
      if (!state.episodes[page]) {
         return axios.get(`/episode?page=${page}`).then(response => {
            commit({
               type: types.GET_EPISODES,
               data: response.data.results,
               numberOfPages: response.data.info.pages,
               page
            })
         })
            .catch(error => error)
      }
   },
}