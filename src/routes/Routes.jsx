import Root from "../layouts/Root";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <MovieListing />,
      },
    ],
  },
]);