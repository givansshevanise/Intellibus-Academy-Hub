import type {
  AcademyEvent,
  Album,
  ExternalLink,
  FAQ,
  NewsArticle,
  Participant,
  Photograph
} from "../../src/models/content";
import type {
  ContentRepository,
  ListAlbumsInput,
  ListEventsInput,
  ListFaqsInput,
  ListNewsInput,
  ListParticipantsInput,
  PaginatedResult
} from "../services/contentRepository";

type QueryValue = string | number | null;

interface NewsArticleRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  cover_image_key: string | null;
  cover_image_alt: string | null;
  cover_image_width: number | null;
  cover_image_height: number | null;
  category: string;
  author: string;
  published_at: string;
  status: NewsArticle["status"];
  created_at: string;
  updated_at: string;
  total?: number;
}

interface EventRow {
  id: string;
  slug: string;
  title: string;
  summary: string;
  details: string;
  start_date: string;
  end_date: string | null;
  time_display: string;
  location: string;
  registration_url: string | null;
  status: AcademyEvent["status"];
  album_id: string | null;
  created_at: string;
  updated_at: string;
  total?: number;
}

interface ParticipantRow {
  id: string;
  display_name: string;
  slug: string;
  pathway: string;
  short_bio: string;
  cohort: string;
  image_key: string | null;
  image_alt: string | null;
  image_width: number | null;
  image_height: number | null;
  display_order: number;
  consent_status: Participant["consentStatus"];
  published: number;
}

interface FaqRow {
  id: string;
  question: string;
  answer: string;
  category: string;
  display_order: number;
  published: number;
}

interface AlbumRow {
  id: string;
  slug: string;
  title: string;
  description: string;
  event_id: string | null;
  cohort: string | null;
  cover_image_key: string | null;
  cover_image_alt: string | null;
  cover_image_width: number | null;
  cover_image_height: number | null;
  published: number;
}

interface PhotographRow {
  id: string;
  album_id: string;
  image_key: string;
  alt_text: string;
  caption: string | null;
  photographer_credit: string | null;
  consent_status: Photograph["consentStatus"];
  display_order: number;
  width: number;
  height: number;
  published: number;
}

interface ExternalLinkRow {
  id: string;
  label: string;
  url: string;
  location: string;
  open_in_new_tab: number;
  active: number;
}

export class D1ContentRepository implements ContentRepository {
  public constructor(private readonly db: D1Database) {}

  public async listNews(input: ListNewsInput): Promise<PaginatedResult<NewsArticle>> {
    const filters = ["status = 'published'"];
    const bindings: QueryValue[] = [];

    if (input.category) {
      filters.push("category = ?");
      bindings.push(input.category);
    }

    const where = filters.join(" AND ");
    const query = `
      SELECT *, COUNT(*) OVER() AS total
      FROM news_articles
      WHERE ${where}
      ORDER BY published_at DESC
      LIMIT ? OFFSET ?
    `;
    const result = await this.db
      .prepare(query)
      .bind(...bindings, input.pageSize, input.offset)
      .all<NewsArticleRow>();
    const rows = result.results ?? [];

    return {
      data: rows.map(mapNewsArticle),
      meta: {
        page: input.page,
        pageSize: input.pageSize,
        total: rows[0]?.total ?? 0
      }
    };
  }

  public async getNewsBySlug(slug: string): Promise<NewsArticle | null> {
    const row = await this.db
      .prepare("SELECT * FROM news_articles WHERE slug = ? AND status = 'published'")
      .bind(slug)
      .first<NewsArticleRow>();

    return row ? mapNewsArticle(row) : null;
  }

  public async listEvents(
    input: ListEventsInput
  ): Promise<PaginatedResult<AcademyEvent>> {
    const filters = ["status != 'cancelled'"];
    const bindings: QueryValue[] = [];

    if (input.status) {
      filters.push("status = ?");
      bindings.push(input.status);
    }

    const where = filters.join(" AND ");
    const query = `
      SELECT *, COUNT(*) OVER() AS total
      FROM events
      WHERE ${where}
      ORDER BY start_date ASC
      LIMIT ? OFFSET ?
    `;
    const result = await this.db
      .prepare(query)
      .bind(...bindings, input.pageSize, input.offset)
      .all<EventRow>();
    const rows = result.results ?? [];

    return {
      data: rows.map(mapEvent),
      meta: {
        page: input.page,
        pageSize: input.pageSize,
        total: rows[0]?.total ?? 0
      }
    };
  }

  public async getEventBySlug(slug: string): Promise<AcademyEvent | null> {
    const row = await this.db
      .prepare("SELECT * FROM events WHERE slug = ? AND status != 'cancelled'")
      .bind(slug)
      .first<EventRow>();

    return row ? mapEvent(row) : null;
  }

  public async listParticipants(input: ListParticipantsInput): Promise<Participant[]> {
    const filters = ["published = 1", "consent_status = 'approved'"];
    const bindings: QueryValue[] = [];

    if (input.cohort) {
      filters.push("cohort = ?");
      bindings.push(input.cohort);
    }

    const result = await this.db
      .prepare(
        `SELECT * FROM participants WHERE ${filters.join(
          " AND "
        )} ORDER BY display_order ASC, display_name ASC`
      )
      .bind(...bindings)
      .all<ParticipantRow>();

    return (result.results ?? []).map(mapParticipant);
  }

  public async listFaqs(input: ListFaqsInput): Promise<FAQ[]> {
    const filters = ["published = 1"];
    const bindings: QueryValue[] = [];

    if (input.category) {
      filters.push("category = ?");
      bindings.push(input.category);
    }

    const result = await this.db
      .prepare(
        `SELECT * FROM faqs WHERE ${filters.join(
          " AND "
        )} ORDER BY display_order ASC, question ASC`
      )
      .bind(...bindings)
      .all<FaqRow>();

    return (result.results ?? []).map(mapFaq);
  }

  public async listAlbums(input: ListAlbumsInput): Promise<Album[]> {
    const filters = ["published = 1"];
    const bindings: QueryValue[] = [];

    if (input.cohort) {
      filters.push("cohort = ?");
      bindings.push(input.cohort);
    }

    const result = await this.db
      .prepare(`SELECT * FROM albums WHERE ${filters.join(" AND ")} ORDER BY title ASC`)
      .bind(...bindings)
      .all<AlbumRow>();

    return (result.results ?? []).map(mapAlbum);
  }

  public async getAlbumBySlug(slug: string): Promise<Album | null> {
    const row = await this.db
      .prepare("SELECT * FROM albums WHERE slug = ? AND published = 1")
      .bind(slug)
      .first<AlbumRow>();

    return row ? mapAlbum(row) : null;
  }

  public async listPhotosByAlbumSlug(slug: string): Promise<Photograph[]> {
    const result = await this.db
      .prepare(
        `
        SELECT photographs.*
        FROM photographs
        INNER JOIN albums ON albums.id = photographs.album_id
        WHERE albums.slug = ?
          AND albums.published = 1
          AND photographs.published = 1
          AND photographs.consent_status = 'approved'
        ORDER BY photographs.display_order ASC
      `
      )
      .bind(slug)
      .all<PhotographRow>();

    return (result.results ?? []).map(mapPhotograph);
  }

  public async listExternalLinks(location?: string): Promise<ExternalLink[]> {
    const filters = ["active = 1"];
    const bindings: QueryValue[] = [];

    if (location) {
      filters.push("location = ?");
      bindings.push(location);
    }

    const result = await this.db
      .prepare(
        `SELECT * FROM external_links WHERE ${filters.join(
          " AND "
        )} ORDER BY location ASC, label ASC`
      )
      .bind(...bindings)
      .all<ExternalLinkRow>();

    return (result.results ?? []).map(mapExternalLink);
  }
}

function mapNewsArticle(row: NewsArticleRow): NewsArticle {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    coverImageKey: row.cover_image_key,
    coverImageAlt: row.cover_image_alt,
    coverImageWidth: row.cover_image_width,
    coverImageHeight: row.cover_image_height,
    category: row.category,
    author: row.author,
    publishedAt: row.published_at,
    status: row.status,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function mapEvent(row: EventRow): AcademyEvent {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    summary: row.summary,
    details: row.details,
    startDate: row.start_date,
    endDate: row.end_date,
    timeDisplay: row.time_display,
    location: row.location,
    registrationUrl: row.registration_url,
    status: row.status,
    albumId: row.album_id,
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}

function mapParticipant(row: ParticipantRow): Participant {
  return {
    id: row.id,
    displayName: row.display_name,
    slug: row.slug,
    pathway: row.pathway,
    shortBio: row.short_bio,
    cohort: row.cohort,
    imageKey: row.image_key,
    imageAlt: row.image_alt,
    imageWidth: row.image_width,
    imageHeight: row.image_height,
    displayOrder: row.display_order,
    consentStatus: row.consent_status,
    published: row.published === 1
  };
}

function mapFaq(row: FaqRow): FAQ {
  return {
    id: row.id,
    question: row.question,
    answer: row.answer,
    category: row.category,
    displayOrder: row.display_order,
    published: row.published === 1
  };
}

function mapAlbum(row: AlbumRow): Album {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    eventId: row.event_id,
    cohort: row.cohort,
    coverImageKey: row.cover_image_key,
    coverImageAlt: row.cover_image_alt,
    coverImageWidth: row.cover_image_width,
    coverImageHeight: row.cover_image_height,
    published: row.published === 1
  };
}

function mapPhotograph(row: PhotographRow): Photograph {
  return {
    id: row.id,
    albumId: row.album_id,
    imageKey: row.image_key,
    altText: row.alt_text,
    caption: row.caption,
    photographerCredit: row.photographer_credit,
    consentStatus: row.consent_status,
    displayOrder: row.display_order,
    width: row.width,
    height: row.height,
    published: row.published === 1
  };
}

function mapExternalLink(row: ExternalLinkRow): ExternalLink {
  return {
    id: row.id,
    label: row.label,
    url: row.url,
    location: row.location,
    openInNewTab: row.open_in_new_tab === 1,
    active: row.active === 1
  };
}
