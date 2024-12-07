"use client"
import Login from '@/components/admin-apnel/Login';
import { useAppSelector } from '@/redux/hooks';
import { useSession } from 'next-auth/react';
import React from 'react'

const layout = () => {

    const isloading = useAppSelector(store => store.loadingReduce)
    const {data: session} = useSession();

    if (!session?.user) {
        return <Login />;
    }

  return <div>layout</div>;
};

export default layout