import type { PaginationMeta } from "../../src/models/api";
import type {
  AcademyEvent,
  Album,
  ExternalLink,
  FAQ,
  NewsArticle,
  Participant,
  Photograph
} from "../../src/models/content";

export interface PaginatedResult<T> {
  data: T[];
  meta: PaginationMeta;
}

export interface ListNewsInput {
  page: number;
  pageSize: number;
  offset: number;
  category?: string;
}

export interface ListEventsInput {
  page: number;
  pageSize: number;
  offset: number;
  status?: string;
}

export interface ListParticipantsInput {
  cohort?: string;
}

export interface ListFaqsInput {
  category?: string;
}

export interface ListAlbumsInput {
  cohort?: string;
}

export interface ContentRepository {
  listNews(input: ListNewsInput): Promise<PaginatedResult<NewsArticle>>;
  getNewsBySlug(slug: string): Promise<NewsArticle | null>;
  listEvents(input: ListEventsInput): Promise<PaginatedResult<AcademyEvent>>;
  getEventBySlug(slug: string): Promise<AcademyEvent | null>;
  listParticipants(input: ListParticipantsInput): Promise<Participant[]>;
  listFaqs(input: ListFaqsInput): Promise<FAQ[]>;
  listAlbums(input: ListAlbumsInput): Promise<Album[]>;
  getAlbumBySlug(slug: string): Promise<Album | null>;
  listPhotosByAlbumSlug(slug: string): Promise<Photograph[]>;
  listExternalLinks(location?: string): Promise<ExternalLink[]>;
}
