import React, { Suspense} from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';
import {BounceLoader} from 'react-spinners';

type MainLayoutProps = {
    children : React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) =>{
    return children;
}

const Root = () => {
  return (
    <MainLayout>
        <Suspense fallback={<BounceLoader />}>
          <Outlet/>
        </Suspense>
        <ScrollRestoration/>
    </MainLayout>
  )
}

export default Root