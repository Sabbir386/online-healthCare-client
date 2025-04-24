import Footer from '@/components/Shared/Footer/Footer';
import Navbar from '@/components/Shared/Navbar/Navbar';
import React from 'react';
import { Toaster } from 'sonner';

const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <Navbar />
      <div className='min-h-screen '>
      <>
      <Toaster></Toaster>
      {children}</>
      </div>
      <Footer />
    </>
  );
};

export default CommonLayout;