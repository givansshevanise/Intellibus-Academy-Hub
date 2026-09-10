PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS news_articles (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  body TEXT NOT NULL,
  cover_image_key TEXT,
  cover_image_alt TEXT,
  cover_image_width INTEGER,
  cover_image_height INTEGER,
  category TEXT NOT NULL,
  author TEXT NOT NULL,
  published_at TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'published', 'archived')),
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_news_articles_status_published_at
  ON news_articles (status, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_news_articles_category
  ON news_articles (category);

CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  details TEXT NOT NULL,
  start_date TEXT NOT NULL,
  end_date TEXT,
  time_display TEXT NOT NULL,
  location TEXT NOT NULL,
  registration_url TEXT,
  status TEXT NOT NULL CHECK (status IN ('upcoming', 'past', 'cancelled')),
  album_id TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_events_status_start_date
  ON events (status, start_date ASC);

CREATE TABLE IF NOT EXISTS participants (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  pathway TEXT NOT NULL,
  short_bio TEXT NOT NULL,
  cohort TEXT NOT NULL,
  image_key TEXT,
  image_alt TEXT,
  image_width INTEGER,
  image_height INTEGER,
  display_order INTEGER NOT NULL DEFAULT 0,
  consent_status TEXT NOT NULL CHECK (consent_status IN ('approved', 'pending', 'revoked')),
  published INTEGER NOT NULL DEFAULT 0 CHECK (published IN (0, 1))
);

CREATE INDEX IF NOT EXISTS idx_participants_public
  ON participants (published, consent_status, cohort, display_order);

CREATE TABLE IF NOT EXISTS faqs (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 0 CHECK (published IN (0, 1))
);

CREATE INDEX IF NOT EXISTS idx_faqs_public
  ON faqs (published, category, display_order);

CREATE TABLE IF NOT EXISTS albums (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_id TEXT,
  cohort TEXT,
  cover_image_key TEXT,
  cover_image_alt TEXT,
  cover_image_width INTEGER,
  cover_image_height INTEGER,
  published INTEGER NOT NULL DEFAULT 0 CHECK (published IN (0, 1)),
  FOREIGN KEY (event_id) REFERENCES events (id) ON DELETE SET NULL
);

CREATE INDEX IF NOT EXISTS idx_albums_public
  ON albums (published, cohort, title);

CREATE TABLE IF NOT EXISTS photographs (
  id TEXT PRIMARY KEY,
  album_id TEXT NOT NULL,
  image_key TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  caption TEXT,
  photographer_credit TEXT,
  consent_status TEXT NOT NULL CHECK (consent_status IN ('approved', 'pending', 'revoked')),
  display_order INTEGER NOT NULL DEFAULT 0,
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  published INTEGER NOT NULL DEFAULT 0 CHECK (published IN (0, 1)),
  FOREIGN KEY (album_id) REFERENCES albums (id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_photographs_public
  ON photographs (album_id, published, consent_status, display_order);

CREATE TABLE IF NOT EXISTS external_links (
  id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  location TEXT NOT NULL,
  open_in_new_tab INTEGER NOT NULL DEFAULT 1 CHECK (open_in_new_tab IN (0, 1)),
  active INTEGER NOT NULL DEFAULT 0 CHECK (active IN (0, 1))
);

CREATE INDEX IF NOT EXISTS idx_external_links_active_location
  ON external_links (active, location, label);

CREATE TRIGGER IF NOT EXISTS trg_news_articles_updated_at
AFTER UPDATE ON news_articles
FOR EACH ROW
BEGIN
  UPDATE news_articles SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;

CREATE TRIGGER IF NOT EXISTS trg_events_updated_at
AFTER UPDATE ON events
FOR EACH ROW
BEGIN
  UPDATE events SET updated_at = CURRENT_TIMESTAMP WHERE id = OLD.id;
END;
