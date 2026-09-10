import type { Album, Photograph } from "../models/content";

const ALBUM_ID = "intellibus-award-ceremony";
const PHOTO_ROOT = "/images/award-ceremony";
const COVER_FILE_NAME = "Untitled.2-5-2.jpg";

const photoFiles = [
  ["Untitled.2-16.jpg", 1365, 2048],
  ["Untitled.2-5.jpg", 1480, 2048],
  ["Untitled.2-22.jpg", 1365, 2048],
  ["Untitled.2-15-3.jpg", 1365, 2048],
  ["Untitled.2-5-3.jpg", 1365, 2048],
  ["Untitled.2-15.jpg", 1365, 2048],
  ["Untitled.2-22-2.jpg", 1601, 2048],
  ["Untitled.2-27.jpg", 1365, 2048],
  ["Untitled.2-9-4.jpg", 1365, 2048],
  ["Untitled.2-32.jpg", 1365, 2048],
  ["Untitled.2-29.jpg", 1365, 2048],
  ["Untitled.2-14-3.jpg", 1502, 2048],
  ["Untitled.2-25-2.jpg", 1365, 2048],
  ["Untitled.2-7-4.jpg", 1365, 2048],
  ["Untitled.2-23.jpg", 1476, 2048],
  ["Untitled.2-11-4.jpg", 1365, 2048],
  ["Untitled.2-29-2.jpg", 1365, 2048],
  ["Untitled.2-35.jpg", 2048, 1365],
  ["Untitled.2-6-2.jpg", 1365, 2048],
  ["Untitled.2-16-3.jpg", 2048, 1365],
  ["Untitled.2-12-3.jpg", 1401, 2048],
  ["Untitled.2-8-2.jpg", 2048, 1365],
  ["Untitled.2-24-2.jpg", 1365, 2048],
  ["Untitled.2-28-2.jpg", 2048, 1365],
  ["Untitled.2-2.jpg", 1365, 2048],
  ["Untitled.2-25.jpg", 1365, 2048],
  ["Untitled.2-14-2.jpg", 1365, 2048],
  ["Untitled.2-6.jpg", 1298, 2048],
  ["Untitled.2-6-3.jpg", 1434, 2048],
  ["Untitled.2-30.jpg", 1365, 2048],
  ["Untitled.2-12.jpg", 1365, 2048],
  ["Untitled.2-3-3.jpg", 1472, 2048],
  ["Untitled.2-34.jpg", 1365, 2048],
  ["Untitled.2-3.jpg", 1365, 2048],
  ["Untitled.2-24.jpg", 2048, 1365],
  ["Untitled.2-9-3.jpg", 1470, 2048],
  ["Untitled.2-2-2.jpg", 2048, 1365],
  ["Untitled.2-10-3.jpg", 1365, 2048],
  ["Untitled.2-13-2.jpg", 1413, 2048],
  ["Untitled.2-4-3.jpg", 1365, 2048],
  ["Untitled.2-4-2.jpg", 2048, 1365],
  ["Untitled.2-17.jpg", 1365, 2048],
  ["Untitled.2-33.jpg", 1365, 2048],
  ["Untitled.2-10-2.jpg", 1365, 2048],
  ["Untitled.2-4-4.jpg", 2048, 1365],
  ["Untitled.2-14.jpg", 1400, 2048],
  ["Untitled.2-20-2.jpg", 1397, 2048],
  ["Untitled.2-28.jpg", 1365, 2048],
  ["Untitled.2-13.jpg", 2048, 1365],
  ["Untitled.2-8-4.jpg", 1365, 2048],
  ["Untitled.2-18.jpg", 1365, 2048],
  ["Untitled.2-10-4.jpg", 1365, 2048],
  ["Untitled.2-7-3.jpg", 1365, 2048],
  ["Untitled.2-23-2.jpg", 1365, 2048],
  ["Untitled.2-12-2.jpg", 1365, 2048],
  ["Untitled.2-31.jpg", 1365, 2048],
  ["Untitled.2-7.jpg", 1365, 2048],
  ["Untitled.2-3-4.jpg", 1365, 2048],
  ["Untitled.2-21.jpg", 1365, 2048],
  ["Untitled.2-12-4.jpg", 1365, 2048],
  ["Untitled.2-19-2.jpg", 1365, 2048],
  ["Untitled.2-3-2.jpg", 1365, 2048],
  ["Untitled.2-16-2.jpg", 1381, 2048],
  ["Untitled.2-21-2.jpg", 1365, 2048],
  ["Untitled.2-9-2.jpg", 1365, 2048],
  ["Untitled.2-26.jpg", 1365, 2048],
  ["Untitled.2-17-2.jpg", 1394, 2048],
  ["Untitled.2-4.jpg", 1365, 2048],
  ["Untitled.2-13-3.jpg", 1467, 2048],
  ["Untitled.2-2-4.jpg", 2048, 1365],
  ["Untitled.2-15-2.jpg", 1365, 2048],
  ["Untitled.2-8-3.jpg", 1400, 2048],
  ["Untitled.2-10.jpg", 1365, 2048],
  ["Untitled.2-19.jpg", 1365, 2048],
  ["Untitled.2-11-3.jpg", 1365, 2048],
  ["Untitled.2-9.jpg", 1365, 2048],
  ["Untitled.2-7-2.jpg", 1365, 2048],
  ["Untitled.2-26-2.jpg", 2048, 1365],
  ["Untitled.2-5-4.jpg", 1365, 2048],
  ["Untitled.2-13-4.jpg", 1365, 2048],
  ["Untitled.2.jpg", 1365, 2048],
  ["Untitled.2-20.jpg", 1365, 2048],
  ["Untitled.2-27-2.jpg", 1436, 2048],
  ["Untitled.2-6-4.jpg", 1365, 2048],
  ["Untitled.2-11-2.jpg", 1365, 2048],
  ["Untitled.2-8.jpg", 1365, 2048],
  ["Untitled.2-5-2.jpg", 2048, 1365],
  ["Untitled.2-2-3.jpg", 1365, 2048],
  ["Untitled.2-18-2.jpg", 1365, 2048]
] as const satisfies readonly (readonly [string, number, number])[];

export const awardCeremonyAlbum: Album = {
  id: ALBUM_ID,
  slug: ALBUM_ID,
  title: "Intellibus Award Ceremony",
  description: "Highlights from the Intellibus Academy award ceremony.",
  eventId: null,
  cohort: "2026",
  coverImageKey: `${PHOTO_ROOT}/${COVER_FILE_NAME}`,
  coverImageAlt:
    "An Intellibus Academy certificate being presented during the award ceremony.",
  coverImageWidth: 2048,
  coverImageHeight: 1365,
  published: true
};

export const awardCeremonyPhotos: Photograph[] = photoFiles.map(
  ([fileName, width, height], index) => ({
    id: `${ALBUM_ID}-${index + 1}`,
    albumId: ALBUM_ID,
    imageKey: `${PHOTO_ROOT}/${fileName}`,
    altText: `Intellibus Academy award ceremony highlight ${index + 1}.`,
    caption: null,
    photographerCredit: "Intellibus Academy",
    consentStatus: "approved",
    displayOrder: index + 1,
    width,
    height,
    published: true
  })
);

export const photoAlbums = [awardCeremonyAlbum];

export function getAlbumBySlug(slug?: string) {
  return photoAlbums.find((album) => album.slug === slug) ?? null;
}

export function getPhotosByAlbumId(albumId: string) {
  return awardCeremonyPhotos.filter((photo) => photo.albumId === albumId);
}
