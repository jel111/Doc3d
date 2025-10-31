import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
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
    path: '*',
    component: ComponentCreator('*'),
  },
];
