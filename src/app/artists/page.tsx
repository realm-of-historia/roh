// "use client"

// import React from 'react'
// import Header from '@/components/Header/Header'
// import Digest from '@/components/Digest/Digest'
// import Artist from '@/views/ArtistPage/ArtistPage'

// export default function Artists() {

//     const artists = [
//         ['LILIT eGHIAZARYAN ', 'Transforming Art with Innovation', ['Born in Yerevan, Armenia, Lilit Eghiazaryan is a dedicated artist who continually explores new avenues for her artistic expression. Her art thrives on metamorphosis, where paradoxical forms find harmony. Her sculptures showcase a modern approach, transforming simple metal into art. Lilit*s art is an ever-evolving exploration, a journey that defies convention and seeks the extraordinary in the ordinary.']]
//     ]

//     return(
//         <div>
//             <Header></Header>
//             {artists.map((element: any, index: number) => (
//                 <Artist key={index} name={element[0]} spec={element[1]} text={element[2]}></Artist>
//             ))}
//             <Digest></Digest>
//         </div>
//     )
// }