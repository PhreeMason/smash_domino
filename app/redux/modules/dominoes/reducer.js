const initialState = {
  fivefive: 
  { name: 'five-five',
    uri: require('../../../assets/img/five-five.png') },
  fivesix: 
  { name: 'five-six',
    uri: require('../../../assets/img/five-six.png') },
  fourfive: 
  { name: 'four-five',
    uri: require('../../../assets/img/four-five.png') },
  fourfour: 
  { name: 'four-four',
    uri: require('../../../assets/img/four-four.png') },
  foursix: 
  { name: 'four-six',
    uri: require('../../../assets/img/four-six.png') },
  onefive: 
  { name: 'one-five',
    uri: require('../../../assets/img/one-five.png') },
  onefour: 
  { name: 'one-four',
    uri: require('../../../assets/img/one-four.png') },
  oneone: 
  { name: 'one-one',
    uri: require('../../../assets/img/one-one.png') },
  onesix: 
  { name: 'one-six',
    uri: require('../../../assets/img/one-six.png') },
  onethree: 
  { name: 'one-three',
    uri: require('../../../assets/img/one-three.png') },
  onetwo: 
  { name: 'one-two',
    uri: require('../../../assets/img/one-two.png') },
  sixsix: 
  { name: 'six-six',
    uri: require('../../../assets/img/six-six.png') },
  threefive: 
  { name: 'three-five',
    uri: require('../../../assets/img/three-five.png') },
  threefour: 
  { name: 'three-four',
    uri: require('../../../assets/img/three-four.png') },
  threesix: 
  { name: 'three-six',
    uri: require('../../../assets/img/three-six.png') },
  threethree: 
  { name: 'three-three',
    uri: require('../../../assets/img/three-three.png') },
  twofive: 
  { name: 'two-five',
    uri: require('../../../assets/img/two-five.png') },
  twofour: 
  { name: 'two-four',
    uri: require('../../../assets/img/two-four.png') },
  twosix: 
  { name: 'two-six',
    uri: require('../../../assets/img/two-six.png') },
  twothree: 
  { name: 'two-three',
    uri: require('../../../assets/img/two-three.png') },
  twotwo: 
  { name: 'two-two',
    uri: require('../../../assets/img/two-two.png') },
  zerofive: 
  { name: 'zero-five',
    uri: require('../../../assets/img/zero-five.png') },
  zerofour: 
  { name: 'zero-four',
    uri: require('../../../assets/img/zero-four.png') },
  zeroone: 
  { name: 'zero-one',
    uri: require('../../../assets/img/zero-one.png') },
  zerosix: 
  { name: 'zero-six',
    uri: require('../../../assets/img/zero-six.png') },
  zerothree: 
  { name: 'zero-three',
    uri: require('../../../assets/img/zero-three.png') },
  zerotwo: 
  { name: 'zero-two',
    uri: require('../../../assets/img/zero-two.png') },
  zerozero: 
  { name: 'zero-zero',
    uri: require('../../../assets/img/zero-zero.png') }
}

export default (state = initialState, action) => {
  switch(action.type){
    case 'SHUFFLE_CARDS':
      return(
        initialState
      )
    default:
    return state;
  } 
}