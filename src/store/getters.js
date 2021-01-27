export default {
   characters: state => page => state.characters[page],
   numberOfCharPages: state => state.characters.numberOfPages,
   locations: state => page => state.locations[page],
   numberOfLocPages: state => state.locations.numberOfPages,
   episodes: state => page => state.episodes[page],
   numberOfEpiPages: state => state.episodes.numberOfPages
}