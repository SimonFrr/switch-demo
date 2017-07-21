import ReactGA from 'react-ga';

export const event = action => {
  ReactGA.event({
    category: 'acquisition',
    action: action
  });
};

export const pageView = page => {
  ReactGA.pageview(page);
};
