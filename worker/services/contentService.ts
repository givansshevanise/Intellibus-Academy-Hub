import { notFound } from "../http/errors";
import type {
  ContentRepository,
  ListAlbumsInput,
  ListEventsInput,
  ListFaqsInput,
  ListNewsInput,
  ListParticipantsInput
} from "./contentRepository";

export class ContentService {
  public constructor(private readonly repository: ContentRepository) {}

  public listNews(input: ListNewsInput) {
    return this.repository.listNews(input);
  }

  public async getNewsBySlug(slug: string) {
    const article = await this.repository.getNewsBySlug(slug);

    if (!article) {
      throw notFound("News article not found");
    }

    return article;
  }

  public listEvents(input: ListEventsInput) {
    return this.repository.listEvents(input);
  }

  public async getEventBySlug(slug: string) {
    const event = await this.repository.getEventBySlug(slug);

    if (!event) {
      throw notFound("Event not found");
    }

    return event;
  }

  public listParticipants(input: ListParticipantsInput) {
    return this.repository.listParticipants(input);
  }

  public listFaqs(input: ListFaqsInput) {
    return this.repository.listFaqs(input);
  }

  public listAlbums(input: ListAlbumsInput) {
    return this.repository.listAlbums(input);
  }

  public async getAlbumBySlug(slug: string) {
    const album = await this.repository.getAlbumBySlug(slug);

    if (!album) {
      throw notFound("Album not found");
    }

    return album;
  }

  public listPhotosByAlbumSlug(slug: string) {
    return this.repository.listPhotosByAlbumSlug(slug);
  }

  public listExternalLinks(location?: string) {
    return this.repository.listExternalLinks(location);
  }
}
