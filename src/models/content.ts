export type PublicationStatus = "draft" | "published" | "archived";
export type ConsentStatus = "approved" | "pending" | "revoked";
export type EventStatus = "upcoming" | "past" | "cancelled";

export interface ImageVariant {
  key: string;
  width: number;
  height: number;
  format: "avif" | "webp" | "jpg" | "png";
  byteSize?: number;
}

export interface StoredImage {
  key: string;
  alt: string;
  width: number;
  height: number;
  variants?: ImageVariant[];
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImageKey: string | null;
  coverImageAlt: string | null;
  coverImageWidth?: number | null;
  coverImageHeight?: number | null;
  category: string;
  author: string;
  publishedAt: string;
  status: PublicationStatus;
  createdAt: string;
  updatedAt: string;
}

export interface AcademyEvent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  details: string;
  startDate: string;
  endDate: string | null;
  timeDisplay: string;
  location: string;
  registrationUrl: string | null;
  status: EventStatus;
  albumId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Participant {
  id: string;
  displayName: string;
  slug: string;
  pathway: string;
  shortBio: string;
  cohort: string;
  imageKey: string | null;
  imageAlt: string | null;
  imageWidth?: number | null;
  imageHeight?: number | null;
  displayOrder: number;
  consentStatus: ConsentStatus;
  published: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  displayOrder: number;
  published: boolean;
}

export interface Album {
  id: string;
  slug: string;
  title: string;
  description: string;
  eventId: string | null;
  cohort: string | null;
  coverImageKey: string | null;
  coverImageAlt?: string | null;
  coverImageWidth?: number | null;
  coverImageHeight?: number | null;
  published: boolean;
}

export interface Photograph {
  id: string;
  albumId: string;
  imageKey: string;
  altText: string;
  caption: string | null;
  photographerCredit: string | null;
  consentStatus: ConsentStatus;
  displayOrder: number;
  width: number;
  height: number;
  published: boolean;
}

export interface ExternalLink {
  id: string;
  label: string;
  url: string;
  location: string;
  openInNewTab: boolean;
  active: boolean;
}
