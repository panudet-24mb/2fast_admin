module.exports = [
  // {
  //   key: 'account_page',
  //   name: 'Auth Page',
  //   icon: 'account_box',
  //   child: [
  //     {
  //       key: 'account_page',
  //       name: 'Sttaic Auth Page',
  //       title: true,
  //     },
  //     {
  //       key: 'login',
  //       name: 'Login',
  //       icon: 'account_box',
  //       link: '/login',
  //     },
  //     {
  //       key: 'register',
  //       name: 'Register',
  //       icon: 'border_color',
  //       link: '/register',
  //     },
  //     {
  //       key: 'reset',
  //       name: 'Reset Password',
  //       icon: 'undo',
  //       link: '/reset-password',
  //     },
  //     {
  //       key: 'account_page_firebase',
  //       name: 'Firebase Auth Page',
  //       title: true,
  //     },
  //     {
  //       key: 'login',
  //       name: 'Login',
  //       icon: 'account_box',
  //       link: '/login-firebase',
  //     },
  //     {
  //       key: 'register',
  //       name: 'Register',
  //       icon: 'border_color',
  //       link: '/register-firebase',
  //     },
  //     {
  //       key: 'reset',
  //       name: 'Reset Password',
  //       icon: 'undo',
  //       link: '/reset-password-firebase',
  //     },
  //   ],
  // },
  // {
  //   key: 'pages',
  //   name: 'Pages',
  //   icon: 'important_devices',
  //   child: [
  //     {
  //       key: 'other_page',
  //       name: 'Welcome Page',
  //       title: true,
  //     },
  //     {
  //       key: 'blank',
  //       name: 'Blank Page',
  //       icon: 'adb',
  //       link: '/app',
  //     },
  //     {
  //       key: 'mongnaja',
  //       name: 'Blank Page',
  //       icon: 'adb',
  //       link: '',
  //     },
  //     {
  //       key: 'generic_page',
  //       name: 'Generic',
  //       title: true,
  //     },
  //     {
  //       key: 'dashboard',
  //       name: 'dashboard',
  //       icon: 'settings_brightness',
  //       link: '/app/dashboard',
  //     },
  //     {
  //       key: 'forms',
  //       name: 'Form',
  //       link: '/app/form',
  //       icon: 'ballot',
  //     },
  //     {
  //       key: 'tables',
  //       name: 'Table',
  //       icon: 'grid_on',
  //       link: '/app/table',
  //     },
  //     {
  //       key: 'maintenance',
  //       name: 'Maintenance',
  //       icon: 'settings',
  //       link: '/maintenance',
  //     },
  //     {
  //       key: 'coming_soon',
  //       name: 'Coming Soon',
  //       icon: 'polymer',
  //       link: '/coming-soon',
  //     },
  //   ],
  // },
  // {
  //   key: 'errors',
  //   name: 'Erros',
  //   icon: 'pets',
  //   child: [
  //     {
  //       key: 'errors',
  //       name: 'Errors',
  //       title: true,
  //     },
  //     {
  //       key: 'not_found_page',
  //       name: 'Not Found Page',
  //       icon: 'pets',
  //       link: '/app/pages/not-found',
  //     },
  //     {
  //       key: 'error_page',
  //       name: 'Error Page',
  //       icon: 'flash_on',
  //       link: '/app/pages/error',
  //     },
  //   ],
  // },
  // {
  //   key: 'menu_levels',
  //   name: 'Menu Levels',
  //   multilevel: true,
  //   icon: 'sort',
  //   child: [
  //     {
  //       key: 'level_1',
  //       name: 'Level 1',
  //       link: '/#',
  //     },
  //     {
  //       key: 'level_2',
  //       keyParent: 'menu_levels',
  //       name: 'Level 2',
  //       child: [
  //         {
  //           key: 'sub_menu_1',
  //           name: 'Sub Menu 1',
  //           link: '/#',
  //         },
  //         {
  //           key: 'sub_menu_2',
  //           name: 'Sub Menu 2',
  //           link: '/#',
  //         },
  //       ],
  //     },
  //   ],
  // },
  /* 2Fast Scope */
  {
    key: 'dashboard',
    name: 'DashBoard',
    icon: 'dashboard',
    child: [
      {
        key: 'dashboard',
        name: 'Dashboard',
        title: true,
      },
      {
        key: 'Dashboard',
        name: 'Dashboard',
        icon: 'poll',
        link: '/app/Dashboard',
      }
    ],
  },
  {
    key: 'yourwork',
    name: 'Your Work',
    icon: 'work',
    child: [
      {
        key: 'work',
        name: 'Work',
        title: true,
      },
      {
        key: 'recent_work',
        name: 'Recent work',
        icon: 'work',
        link: '/app',
      },
      {
        key: 'worked_on',
        name: 'Worked on',
        icon: 'check_circle',
        link: '',
      },
      {
        key: 'assigned_to_me',
        name: 'Assigned to me',
        icon: 'assignment_turned_in',
        link: '',
      },
      {
        key: 'starred',
        name: 'Starred',
        icon: 'grade',
        link: '',
      },
    ],
  },
  {
    key: 'projects',
    name: 'Projects',
    icon: 'next_week',
    child: [
      {
        key: 'project',
        name: 'Project',
        title: true,
      },
      {
        key: 'Project',
        name: 'Project',
        icon: 'pie_chart',
        link: '/app/project',
      }
    ],
  },
  {
    key: 'report',
    name: 'Report',
    icon: 'insert_drive_file',
    child: [
      {
        key: 'report',
        name: 'Report',
        title: true,
      },
      {
        key: 'view_all_report',
        name: 'View All Report',
        icon: 'insert_drive_file',
        link: '',
      },
    ],
  },
  {
    key: 'application',
    name: 'Application',
    icon: 'apps',
    child: [
      {
        key: 'subscription_bill',
        name: 'Subscriptions & Bill',
        title: true,
      },
      {
        key: 'billing',
        name: 'Billing',
        icon: 'payments',
        link: '',
      },
      {
        key: 'subscriptions',
        name: 'Manage Subscription',
        icon: 'monetization_on',
        link: '',
      },
      {
        key: 'user_management',
        name: 'User Management',
        title: true,
      },
      {
        key: 'manage_user',
        name: 'Manage User',
        icon: 'account_circle',
        link: '/app/manage-user',
      },
      {
        key: 'manage_team',
        name: 'Manage Team',
        icon: 'groups',
        link: '/app/manage-team',
      },
      {
        key: 'manage_grp_permission',
        name: 'Group & Permission',
        icon: 'group',
        link: '',
      },
      {
        key: 'access_requests',
        name: 'Access Requests',
        icon: 'beenhere',
        link: '',
      },
      {
        key: 'site_setting',
        name: 'Site Setting',
        title: true,
      },
      {
        key: 'site_access',
        name: 'Site Access',
        icon: 'admin_panel_settings',
        link: '',
      },
      {
        key: 'module_access',
        name: 'Module Access',
        icon: 'lock',
        link: '',
      },
      {
        key: 'storage',
        name: 'Storage',
        icon: 'storage',
        link: '',
      },
    ],
  },
  {
    key: 'setting',
    name: 'Setting',
    icon: 'settings',
    child: [
      {
        key: 'user_interface',
        name: 'User Interface',
        title: true,
      },
      {
        key: 'site_setting',
        name: 'Site Setting',
        icon: 'settings',
        link: '',
      },
      {
        key: 'system_dashboard',
        name: 'System Dashboard',
        icon: 'analytics',
        link: '',
      },
      {
        key: 'import_export',
        name: 'Import / Export',
        title: true,
      },
      {
        key: 'backup_manager',
        name: 'Backup Manager',
        icon: 'backup',
        link: '',
      },
      {
        key: 'external_system',
        name: 'External Import',
        icon: 'archive',
        link: '',
      },
      {
        key: 'recovery',
        name: 'Recovery',
        icon: 'sync',
        link: '',
      },
      {
        key: 'security',
        name: 'security',
        title: true,
      },
      {
        key: 'project_role',
        name: 'Project Role',
        icon: 'rule',
        link: '',
      },
      {
        key: 'global_permission',
        name: 'Global Permission',
        icon: 'verified_user',
        link: '',
      },
      {
        key: 'general',
        name: 'general',
        title: true,
      },
      {
        key: 'general_config',
        name: 'General Configuration',
        icon: 'widgets',
        link: '',
      },
      {
        key: 'log',
        name: 'Log',
        title: true,
      },
      {
        key: 'audit_log',
        name: 'Audit Log',
        icon: 'speaker_notes',
        link: '',
      },
    ],
  },
];
