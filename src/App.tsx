import * as React from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider } from "react-router-dom";
import router from "./router/router"; 
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

const App = ()=> {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen />
     </QueryClientProvider>
    </> 
  )
}

export default App
