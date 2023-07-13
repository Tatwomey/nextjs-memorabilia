const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/analytics',
        destination: 'https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID',
      },
    ];
  },
  head: {
    script: [
      {
        src: '/analytics',
        async: true,
      },
      {
        dangerouslySetInnerHTML: {
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KJMZD1YEY0');
          `,
        },
      },
    ],
  },
};

module.exports = nextConfig;

