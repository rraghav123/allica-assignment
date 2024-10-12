import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./providers/ReactQueryProvider.js";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routers } from "./router/index.js";
import './styles/global.css'

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={createBrowserRouter(routers)} />
      </QueryClientProvider>
  )
}

export default App
