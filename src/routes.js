import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/insurance/tables/Tables'));

const medicalscheme = React.lazy(() => import('./views/insurance/medicalscheme/medicalscheme'));
const Cards = React.lazy(() => import('./views/insurance/cards/Cards'));
const Reports = React.lazy(() => import('./views/insurance/reports/reports'));
const Collapses = React.lazy(() => import('./views/insurance/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/insurance/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/insurance/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/insurance/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/insurance/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/insurance/navs/Navs'));
const Paginations = React.lazy(() => import('./views/insurance/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/insurance/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/insurance/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/insurance/switches/Switches'));

const Tabs = React.lazy(() => import('./views/insurance/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/insurance/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const members = React.lazy(() => import('./views/app/members/members'));
const Typography = React.lazy(() => import('./views/app/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/app', name: 'app', component: members, exact: true },
  { path: '/app/members', name: 'members', component: members },
  { path: '/app/typography', name: 'Typography', component: Typography },
  { path: '/insurance', name: 'insurance', component: Cards, exact: true },
  { path: '/insurance/medicalscheme', name: 'Medical Scheme', component: medicalscheme },
  { path: '/insurance/cards', name: 'Cards', component: Cards },
  { path: '/insurance/reports', name: 'Reports', component: Reports },
  { path: '/insurance/collapses', name: 'Collapse', component: Collapses },
  { path: '/insurance/forms', name: 'Forms', component: BasicForms },
  { path: '/insurance/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/insurance/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/insurance/navbars', name: 'Navbars', component: Navbars },
  { path: '/insurance/navs', name: 'Navs', component: Navs },
  { path: '/insurance/paginations', name: 'Paginations', component: Paginations },
  { path: '/insurance/popovers', name: 'Popovers', component: Popovers },
  { path: '/insurance/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/insurance/switches', name: 'Switches', component: Switches },
  { path: '/insurance/tables', name: 'Tables', component: Tables },
  { path: '/insurance/tabs', name: 'Tabs', component: Tabs },
  { path: '/insurance/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/hospital', name: '', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
