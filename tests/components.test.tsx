import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { FAQAccordion } from "../src/components/academy/FAQAccordion";
import { GalleryLightbox } from "../src/components/academy/GalleryLightbox";
import type { Photograph } from "../src/models/content";

const photos: Photograph[] = [
  {
    id: "photo-one",
    albumId: "album-one",
    imageKey: "test-photo-one",
    altText: "Approved album image one.",
    caption: "Workshop discussion",
    photographerCredit: "Intellibus Academy",
    consentStatus: "approved",
    displayOrder: 1,
    width: 1200,
    height: 800,
    published: true
  },
  {
    id: "photo-two",
    albumId: "album-one",
    imageKey: "test-photo-two",
    altText: "Approved album image two.",
    caption: "Peer presentation",
    photographerCredit: "Intellibus Academy",
    consentStatus: "approved",
    displayOrder: 2,
    width: 1200,
    height: 800,
    published: true
  }
];

describe("interactive components", () => {
  it("expands FAQ answers with accessible accordion controls", () => {
    render(
      <FAQAccordion
        items={[
          {
            id: "faq-one",
            question: "Where do Academy updates appear?",
            answer: "Approved updates appear in the Academy Hub."
          }
        ]}
      />
    );

    const trigger = screen.getByRole("button", {
      name: /where do academy updates appear/i
    });
    fireEvent.click(trigger);

    expect(
      screen.getByText("Approved updates appear in the Academy Hub.")
    ).toBeVisible();
  });

  it("supports arrow-key navigation in the gallery lightbox", () => {
    const onPhotoChange = vi.fn();

    render(
      <GalleryLightbox
        activePhotoId="photo-one"
        getImageUrl={(photo) => `/media/${photo.imageKey}`}
        onClose={vi.fn()}
        onPhotoChange={onPhotoChange}
        photos={photos}
      />
    );

    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(onPhotoChange).toHaveBeenCalledWith("photo-two");

    fireEvent.keyDown(window, { key: "ArrowLeft" });
    expect(onPhotoChange).toHaveBeenCalledWith("photo-two");
  });
});
