import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const Home = () => {

  const router = createRouter({
    routeTree,
    basepath: '/tierra-ignota-clone',
  });

  return (
    <main className="relative">
      <RouterProvider router={router} />
    </main>
  )
}

export default Home;