// router.ts
import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { lazy } from "react";
import AppHeader from "@/components/AppHeader";

const RootRoute = createRootRoute({
  component: () => (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  ),
});

const GalleryRoute = createRoute({
  path: "/",
  getParentRoute: () => RootRoute,
  component: lazy(() => import("./pages/GalleryCuration")),
});

const ReportRoute = createRoute({
  path: "/report",
  getParentRoute: () => RootRoute,
  component: lazy(() => import("./pages/Reports")),
});

const routeTree = RootRoute.addChildren([GalleryRoute, ReportRoute]);

const router = createRouter({ routeTree });
export default router;
