"use client"
import React, { useState } from 'react'
import { AuroraBackground } from "../ui/aurora-background";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import Nav from '../Components/Nav/Nav';
const page = () => {
    const [isHoveringProfile, setIsHoveringProfile] = useState(false);
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

                    </motion.div>

                </AuroraBackground>
            </div>
        </Auth0Provider>
    )
}

export default page