import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { LoadingState } from "../components/academy/LoadingState";
import { AppShell } from "./AppShell";
import { ErrorBoundary } from "./ErrorBoundary";

const AboutPage = lazy(() => import("../pages/AboutPage"));
const AlbumDetailPage = lazy(() => import("../pages/AlbumDetailPage"));
const CommunityPage = lazy(() => import("../pages/CommunityPage"));
const CohortPage = lazy(() => import("../pages/CohortPage"));
const EventDetailPage = lazy(() => import("../pages/EventDetailPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const NewsArticlePage = lazy(() => import("../pages/NewsArticlePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const PhotoAlbumPage = lazy(() => import("../pages/PhotoAlbumPage"));

export function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingState label="Loading Academy Hub" />}>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="news/:slug" element={<NewsArticlePage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="events/:slug" element={<EventDetailPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="community/cohort" element={<CohortPage />} />
            <Route path="community/photos" element={<PhotoAlbumPage />} />
            <Route path="community/photos/:slug" element={<AlbumDetailPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}
