export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
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
        url: '/dashboard',
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
        url: '/processes/active',
        icon: 'play-circle',
        breadcrumbs: false
      },
      {
        id: 'abandoned',
        title: 'Processus abandonnés',
        type: 'item',
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
        url: '/analysis/impact',
        icon: 'database',
        breadcrumbs: false
      },
      {
        id: 'performance',
        title: 'Performance',
        type: 'item',
        url: '/analysis/performance',
        icon: 'line-chart',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'database',
    title: 'Base de données',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'monitoring',
        title: 'Monitoring',
        type: 'item',
        url: '/database',
        icon: 'monitor',
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
        url: '/admin/users',
        icon: 'user',
        breadcrumbs: false
      },
      {
        id: 'settings',
        title: 'Paramètres',
        type: 'item',
        url: '/admin/settings',
        icon: 'setting',
        breadcrumbs: false
      }
    ]
  }
];