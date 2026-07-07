import { websiteConfig } from './config/website';

/**
 * The routes for the application
 */
export enum Routes {
  Root = '/',

  // legal pages
  CookiePolicy = '/cookie',
  PrivacyPolicy = '/privacy',
  TermsOfService = '/terms',
  Disclaimer = '/disclaimer',

  // Thanos Simulator wiki routes
  Guides = '/guides',
  Codes = '/codes',
  Stones = '/stones',
  Weapons = '/weapons',
  Bosses = '/bosses',
  Map = '/map',
  Controls = '/controls',
  Download = '/download',
  Updates = '/updates',
  Tools = '/tools',
  BossChecklist = '/tools/boss-checklist',
  WeaponPlanner = '/tools/weapon-planner',
  StonesTracker = '/tools/infinity-stones-tracker',
  Database = '/database',
  DatabaseStones = '/database/stones',
  DatabaseWeapons = '/database/weapons',
  DatabaseBosses = '/database/bosses',
  DatabaseZones = '/database/zones',
  BeginnerGuide = '/guides/beginner-guide',
  StonesGuide = '/guides/all-infinity-stones-guide',
  ControlsGuide = '/guides/gauntlet-controls-guide',
  WeaponsGuide = '/guides/weapons-progression-guide',
  MechanicalGlovesGuide = '/guides/mechanical-gloves-doom-guide',
  SurturGuide = '/guides/surtur-twilight-sword-guide',
  HeartOfYmirGuide = '/guides/heart-of-ymir-guide',
  StormbreakerGuide = '/guides/stormbreaker-mjolnir-guide',
  GungnirGuide = '/guides/gungnir-fragments-guide',
  CodesSafetyGuide = '/guides/codes-and-scripts-safety-guide',

  // auth routes
  Login = '/auth/login',
  Register = '/auth/register',
  AuthError = '/auth/error',
  ForgotPassword = '/auth/forgot-password',
  ResetPassword = '/auth/reset-password',

  // dashboard routes
  Dashboard = '/dashboard',
  AdminUsers = '/admin/users',
  AdminTestCreditPackage = '/admin/test-credit-package',
  SettingsProfile = '/settings/profile',
  SettingsBilling = '/settings/billing',
  SettingsCredits = '/settings/credits',
  SettingsSecurity = '/settings/security',
  SettingsNotifications = '/settings/notifications',

  // payment processing
  Payment = '/payment',
}

/**
 * The routes that can not be accessed by logged in users
 */
export const routesNotAllowedByLoggedInUsers = [Routes.Login, Routes.Register];

/**
 * The routes that are protected and require authentication
 */
export const protectedRoutes = [
  Routes.Dashboard,
  Routes.AdminUsers,
  Routes.AdminTestCreditPackage,
  Routes.SettingsProfile,
  Routes.SettingsBilling,
  Routes.SettingsCredits,
  Routes.SettingsSecurity,
  Routes.SettingsNotifications,
  Routes.Payment,
];

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT =
  websiteConfig.routes.defaultLoginRedirect ?? Routes.Root;
