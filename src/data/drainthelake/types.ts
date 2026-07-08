export type SourceType =
  | 'official'
  | 'roblox_api'
  | 'competitor'
  | 'youtube'
  | 'serper'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'watch';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note?: string;
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt?: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export type GuideCategory =
  | 'Beginner'
  | 'Walkthrough'
  | 'Progression'
  | 'Badges'
  | 'Codes'
  | 'Safety'
  | 'Updates';

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: GuideCategory;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy:
    | 'official'
    | 'manual_data'
    | 'user_intent_youtube'
    | 'popular_youtube'
    | 'youtube_explainer'
    | 'community_crosscheck';
  videoSearchQueries?: string[];
  sourceNotes?: string;
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface GameCode {
  code: string;
  reward: string;
  status: 'active' | 'watch' | 'expired';
  firstSeen: string;
  lastChecked: string;
  sourceLabel: string;
  confidence: Confidence;
  notes: string;
}

export interface TopicCard {
  title: string;
  body: string;
  href?: string;
  meta?: string;
}

export interface TopicPage {
  slug: string;
  route: string;
  label: string;
  navGroup: 'Start' | 'Progression' | 'Reference' | 'Status';
  eyebrow: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  image: string;
  updatedAt: string;
  sections: GuideSection[];
  featuredRoutes: string[];
  cards?: TopicCard[];
  faq: GuideFaq[];
}
