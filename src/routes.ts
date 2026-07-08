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

  // Drain the Lake wiki routes
  Guides = '/guides',
  Codes = '/codes',
  Beginner = '/beginner',
  DrainCycle = '/drain-cycle',
  Tokens = '/tokens',
  SkillTree = '/skill-tree',
  Depth = '/depth',
  Endings = '/endings',
  Badges = '/badges',
  Buckets = '/buckets',
  Download = '/download',
  Updates = '/updates',
  Tools = '/tools',
  RouteEfficiency = '/tools/route-efficiency',
  BeginnerGuide = '/guides/beginner-guide',
  FullWalkthroughGuide = '/guides/full-walkthrough',
  FastDrainGuide = '/guides/fastest-way-to-drain',
  SkillTreeGuide = '/guides/skill-tree-upgrades',
  AllBadgesGuide = '/guides/all-badges-guide',
  PhoneEndingGuide = '/guides/phone-ending-guide',
  CodesStatusGuide = '/guides/codes-status-guide',

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
