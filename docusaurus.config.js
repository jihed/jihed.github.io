module.exports = {
  title: 'Jihed MSELMI',
  tagline: 'My 0.02$',
  url: 'https://jihed.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jihed', // Usually your GitHub org/user name.
  projectName: 'jihed.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Jihed MSELMI',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/jihed',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheJMse',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jihed',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jihed MSELMI. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/', 
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} Jihed MSELMI.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
