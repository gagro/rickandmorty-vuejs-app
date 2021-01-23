export default {
   characters: state => page => state.characters[page],
   numberOfCharPages: state => state.characters.numberOfPages
}