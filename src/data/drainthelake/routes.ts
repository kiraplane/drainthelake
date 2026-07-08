import { guideRoutes } from './guides';
import { topicRoutes } from './topics';

export const allCoreRoutes = [
  '/',
  '/guides',
  ...topicRoutes,
  ...guideRoutes,
  '/tools',
  '/tools/route-efficiency',
  '/disclaimer',
  '/privacy',
  '/terms',
  '/cookie',
];
