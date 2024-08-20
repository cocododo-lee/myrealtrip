import React, { Suspense} from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';

type MainLayoutProps = {
    children : React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) =>{
    return children;
}

const Root = () => {
  return (
    <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet/>
        </Suspense>
        <ScrollRestoration/>
    </MainLayout>
  )
}

export default Root