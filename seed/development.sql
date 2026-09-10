PRAGMA foreign_keys = ON;

INSERT INTO news_articles (
  id,
  slug,
  title,
  excerpt,
  body,
  cover_image_key,
  cover_image_alt,
  cover_image_width,
  cover_image_height,
  category,
  author,
  published_at,
  status
) VALUES
(
  'news_dev_foundation',
  'foundation-preview',
  'Development Foundation Preview',
  'A sample development article used to verify the public news endpoint.',
  'This development-only record confirms that published news can be retrieved through the public API. Replace it with approved Academy content before launch.',
  NULL,
  NULL,
  NULL,
  NULL,
  'Announcements',
  'Intellibus Academy',
  '2026-04-22T12:00:00.000Z',
  'published'
);

INSERT INTO events (
  id,
  slug,
  title,
  summary,
  details,
  start_date,
  end_date,
  time_display,
  location,
  registration_url,
  status
) VALUES
(
  'event_dev_check_in',
  'development-check-in',
  'Development Check-In',
  'A sample development event used to verify event listing behavior.',
  'This development-only event confirms that upcoming and past event data can be read from D1.',
  '2026-04-15T16:00:00.000Z',
  NULL,
  '12:00 PM - 1:00 PM ET',
  'Virtual',
  NULL,
  'upcoming'
);

INSERT INTO participants (
  id,
  display_name,
  slug,
  pathway,
  short_bio,
  cohort,
  image_key,
  image_alt,
  image_width,
  image_height,
  display_order,
  consent_status,
  published
) VALUES
(
  'participant_dev_pending',
  'Participant sample pending',
  'participant-profile-pending',
  'Development sample',
  'This development-only profile remains unpublished until approved participant information is available.',
  '2026',
  NULL,
  NULL,
  NULL,
  NULL,
  1,
  'pending',
  0
);

INSERT INTO faqs (
  id,
  question,
  answer,
  category,
  display_order,
  published
) VALUES
(
  'faq_dev_updates',
  'Where will approved Academy updates appear?',
  'Approved updates will appear on the Academy Hub once content is published through the backend.',
  'General',
  1,
  1
);

INSERT INTO albums (
  id,
  slug,
  title,
  description,
  event_id,
  cohort,
  cover_image_key,
  cover_image_alt,
  cover_image_width,
  cover_image_height,
  published
) VALUES
(
  'album_dev_moments',
  'development-community-moments',
  'Development Community Moments',
  'A development-only album used to verify public album endpoints before approved photographs are provided.',
  'event_dev_check_in',
  '2026',
  NULL,
  NULL,
  NULL,
  NULL,
  1
);

UPDATE events
SET album_id = 'album_dev_moments'
WHERE id = 'event_dev_check_in';

INSERT INTO external_links (
  id,
  label,
  url,
  location,
  open_in_new_tab,
  active
) VALUES
(
  'external_dev_academy',
  'Intellibus Academy',
  'https://www.intellibus.com/',
  'footer',
  1,
  1
);
