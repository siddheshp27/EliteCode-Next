"use client"

import React, { useState, useEffect } from 'react'
import { AuroraBackground } from "../ui/aurora-background";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import Nav from '../Components/Nav/Nav';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import ProblemTable from '../Components/ProblemTable';
import { getAllProblems } from "../api/problems/route";

const Page = () => {
    const [problemData, setProblemData] = useState(null);
    const { isLoading } = useAuth0();
    const [isLoaderLoading, setIsLoaderLoading] = useState(true);
    const [isHoveringProfile, setIsHoveringProfile] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaderLoading(false);
        }, 2000);
        async function fetchData() {
            const res = await getAllProblems();

            setProblemData(res);
        }
        fetchData();
        return () => clearTimeout(timer);
    }, []);

    if (isLoading && isLoaderLoading) {
        return <div className='flex items-center justify-center bg-black h-screen'><Loader /></div>;
    }

    return (
        <Auth0Provider
            domain="dev-75u0gzvq2kz8rrir.us.auth0.com"
            clientId="LRl4LJvJ2Uu9VemQIDJgS6RSjvNvGPxM"
            authorizationParams={{
                redirect_uri: "http://localhost:3000/dashboard",
            }}
        >
            <div className='w-full overflow-x-clip bg-zinc-900'>
                <Nav setIsHoveringProfile={setIsHoveringProfile} isHoveringProfile={isHoveringProfile} />
                <AuroraBackground>
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="relative flex flex-col gap-4 items-center justify-center px-4 overflow-x-clip"
                    >
                        <Header />
                        <ProblemTable problems={problemData} />
                    </motion.div>
                </AuroraBackground>
            </div>
        </Auth0Provider>
    )
}

export default Page