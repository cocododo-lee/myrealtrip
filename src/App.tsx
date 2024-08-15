import * as React from "react";
import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {RouterProvider } from "react-router-dom";
import router from "./router/router";
const queryClient = new QueryClient();

const App = () => {
//const App:React.FC = ()=> {
  return (
    <>
      <RouterProvider router={router} />
      <QueryClientProvider client={queryClient}/>
    </> 
  )
}

export default App
