import ReactGA from 'react-ga';

export const event = action => {
  ReactGA.event({
    category: 'acquisition',
    action: action
  });
}
