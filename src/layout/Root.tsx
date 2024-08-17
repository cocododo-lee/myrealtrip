import React, { Suspense} from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner'

type MainLayoutProps = {
    children : React.ReactNode;
}

const MainLayout:React.FC<MainLayoutProps> = ({children}) =>{
    return children;
}

const Root = () => {
  return (
    <MainLayout>
        <Suspense fallback={<LoadingSpinner/>}/>
        <Outlet/>
        <ScrollRestoration/>
    </MainLayout>
  )
}

export default Root