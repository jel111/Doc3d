import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'c4a'),
    exact: true
  },
  {
    path: '/blog/3d-chameleon',
    component: ComponentCreator('/blog/3d-chameleon', '787'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/3d-chameleon',
    component: ComponentCreator('/blog/tags/3d-chameleon', '7a7'),
    exact: true
  },
  {
    path: '/blog/tags/3d-printing',
    component: ComponentCreator('/blog/tags/3d-printing', '520'),
    exact: true
  },
  {
    path: '/blog/tags/ai',
    component: ComponentCreator('/blog/tags/ai', '21d'),
    exact: true
  },
  {
    path: '/blog/tags/cnc',
    component: ComponentCreator('/blog/tags/cnc', 'a79'),
    exact: true
  },
  {
    path: '/blog/tags/diy',
    component: ComponentCreator('/blog/tags/diy', '6df'),
    exact: true
  },
  {
    path: '/blog/tags/maker',
    component: ComponentCreator('/blog/tags/maker', '880'),
    exact: true
  },
  {
    path: '/blog/tags/metalworking',
    component: ComponentCreator('/blog/tags/metalworking', 'ecf'),
    exact: true
  },
  {
    path: '/blog/tags/woodworking',
    component: ComponentCreator('/blog/tags/woodworking', 'b14'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7d3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '742'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/3-d-printing',
            component: ComponentCreator('/docs/tags/3-d-printing', '804'),
            exact: true
          },
          {
            path: '/docs/tags/maker',
            component: ComponentCreator('/docs/tags/maker', 'bac'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b66'),
            routes: [
              {
                path: '/docs/category/3d-printers',
                component: ComponentCreator('/docs/category/3d-printers', 'ec1'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/category/filaments',
                component: ComponentCreator('/docs/category/filaments', 'd06'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/category/tutorials',
                component: ComponentCreator('/docs/category/tutorials', '1d8'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/filaments/filaments',
                component: ComponentCreator('/docs/filaments/filaments', '3a3'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '6e0'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/bambu-labs--p1s',
                component: ComponentCreator('/docs/printers/bambu-labs--p1s', '1db'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/creality-k2',
                component: ComponentCreator('/docs/printers/creality-k2', 'de6'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/elagoo-centauri-carbon',
                component: ComponentCreator('/docs/printers/elagoo-centauri-carbon', '144'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/flsun-s1-pro',
                component: ComponentCreator('/docs/printers/flsun-s1-pro', '045'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/prusa-core-one',
                component: ComponentCreator('/docs/printers/prusa-core-one', 'e0a'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/printers/prusa-xl',
                component: ComponentCreator('/docs/printers/prusa-xl', 'aae'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/tutorials/begintemp',
                component: ComponentCreator('/docs/tutorials/begintemp', '951'),
                exact: true,
                sidebar: "contentSidebar"
              },
              {
                path: '/docs/tutorials/sonic-pad',
                component: ComponentCreator('/docs/tutorials/sonic-pad', '36e'),
                exact: true,
                sidebar: "contentSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
