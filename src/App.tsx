import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { NotFoundComponent } from "./components/not-found-page";

const Home = () => {

  const router = createRouter({
    routeTree,
    basepath: '/tierra-ignota-clone',
    defaultNotFoundComponent: NotFoundComponent
  });

  return (
    <main className="relative">
      <RouterProvider router={router} />
    </main>
  )
}

export default Home;