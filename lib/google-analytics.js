export const GA_TRACKING_ID = 'G-KJMZD1YEY0';

// Function to track pageviews
export const pageview = (url) => {
  window.gtag('config', G-KJMZD1YEY0, {
    page_path: url,
  });
};

// Function to track events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
