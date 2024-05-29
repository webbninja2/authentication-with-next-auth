import Header from '@/components/layout/Header'
import { useSession } from 'next-auth/react';
import React from 'react'

function Profile() {
  const { data: session } = useSession();

  return (
    <>
    <Header/>
    <div className='text-center mt-20 text-lg	'>Welcome: <b>{session?.user?.email}</b> </div> 

    </>
  )
}

export default Profile