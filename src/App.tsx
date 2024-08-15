import * as React from "react";
import {useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Outlet, RouterProvider } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
//const App:React.FC = ()=> {
  return (
    <>
    <QueryClientProvider client={queryClient}>
     </QueryClientProvider>
      
    </> 
  )
}

export default App
