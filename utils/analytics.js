import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-KJMZD1YEY0'); // Replace 'YOUR_TRACKING_ID' with your actual tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
