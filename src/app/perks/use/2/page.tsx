'use client'

import { useAuthStore } from "@/store/store";
import { useEffect } from "react"

export default function page() {

    const token = useAuthStore((state: any) => (state.token))


    useEffect(() => {
        fetch('https://api.realmofhistoria.com/api/perks/use/2', {
            method: 'POST',
            headers: {
                // 'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: token,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error("ошибка:", error);
            });
    }, [])

    return(
        <div style={{height: '100vh', paddingTop: '10rem'}}>
        </div>
    )
}