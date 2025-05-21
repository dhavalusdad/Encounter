import { ROUTES } from '@encounter/constant/routePath';
import {
  SectionLoader
} from '@encounter/common';
import { Suspense } from 'react';
import {
  type RouteObject,
  RouterProvider,
  createBrowserRouter
} from 'react-router-dom';

const applySuspense = (routes: RouteObject[]): RouteObject[] => {
  return routes.map((route) => ({
    ...route,
    element: <Suspense fallback={<SectionLoader />}>{route.element}</Suspense>
  }));
};

export const RoutesArray: RouteObject[] = applySuspense([
  ...Object.keys(ROUTES).map((key) => {
    const route = ROUTES[key as keyof typeof ROUTES];

    const routeObj: RouteObject = {
      path: route.path,
      element: route.element,
      errorElement: route.errorElement
    };

    return routeObj;
  })
]);

const AllRoute = createBrowserRouter(RoutesArray);

const Route = () => <RouterProvider router={AllRoute} />;

export default Route;
