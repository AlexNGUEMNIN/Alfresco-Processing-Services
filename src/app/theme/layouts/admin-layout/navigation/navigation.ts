export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  groupClasses?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  link?: string;
  description?: string;
  path?: string;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Tableau de bord',
    type: 'group',
    icon: 'dashboard',
    children: [
      {
        id: 'default',
        title: 'Vue générale',
        type: 'item',
        classes: 'nav-item',
        url: '/dashboard/default',
        icon: 'dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'processes',
    title: 'Processus',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'active',
        title: 'Processus actifs',
        type: 'item',
        classes: 'nav-item',
        url: '/processes/active',
        icon: 'play-circle',
        breadcrumbs: false
      },
      {
        id: 'abandoned',
        title: 'Processus abandonnés',
        type: 'item',
        classes: 'nav-item', 
        url: '/processes/abandoned',
        icon: 'warning',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'analysis',
    title: 'Analyse',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'impact',
        title: 'Impact BD',
        type: 'item',
        classes: 'nav-item',
        url: '/analysis/impact',
        icon: 'database',
        breadcrumbs: false
      },
      {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        classes: 'nav-item',
        url: '/analysis/performance',
        icon: 'line-chart',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'admin',
    title: 'Administration',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'users',
        title: 'Utilisateurs',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/users',
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Paramètres',
        type: 'item',
        classes: 'nav-item',
        url: '/admin/settings',
        icon: 'setting',
        breadcrumbs: false
      }
    ]
  }
];