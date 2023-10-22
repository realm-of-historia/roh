"use client"

import React from 'react'
import Header from '@/components/Header/Header'
import Digest from '@/components/Digest/Digest'
import Artist from './ArtistPage/ArtistPage'
import Layout from '@/components/Layout/Layout'

export default function ArtistView({ data }: { data: any }) {


    const itemsCardFirst = [
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/chestNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/chestNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
    ]


    const itemsCardSecond = [
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/chestNFT'
        ],
        [
            '25 Products Mega Bundle with 50% off discount',
            '$ 28.00',
            '/rockHoleNFT'
        ],
    ]

    const artists = [
        ['LILIT eGHIAZARYAN ', 'Transforming Art with Innovation', ['Born in Yerevan, Armenia, Lilit Eghiazaryan is a dedicated artist who continually explores new avenues for her artistic expression. Her art thrives on metamorphosis, where paradoxical forms find harmony. Her sculptures showcase a modern approach, transforming simple metal into art. Lilit*s art is an ever-evolving exploration, a journey that defies convention and seeks the extraordinary in the ordinary.'], itemsCardFirst],
        ['eLSA eGHIAZARYAN(ILSe)', 'A Journey into Artistic Harmony', [`Elsa's artworks resonate with the language of freedom, a harmonious dance with the world where liberation becomes the bridge between the artist and her craft. Her canvases serve as vessels of her emotional nature, a conduit for her deep-seated emotions and unwavering love for art. Art, for her, is the precise path she traverses to reach equilibrium. Through her works, she invites us to share in her emotional landscapes and to witness the ever-evolving dance between her inner self and the world that surrounds her.`], itemsCardSecond],
        ['MARY BADALIAN', 'A Journey of Artistic Discovery', [`Armenian residing in Yerevan, Mary Badalian stands as an accomplished contemporary visual artist, whose journey through art is as distinctive as her creations. Her style and technique bear the mark of her grandmother —an accomplished embroiderer. Mary's art blends traditionally feminine crafts with fine art, intricately weaving together past and present. A graduate of the Institute of Contemporary Art in Moscow, Mary's commitment to artistic growth and refinement is unwavering. Her art transcends local boundaries, finding resonance in international exhibitions and galleries. In the heart of Yerevan, Mary stands as a testament to the transformative power of art.`], itemsCardFirst],
        ['GOHAR SARGSYAN', 'A Creative Journey', [`Born into a family of artists in Gyumri, Gohar Sargsyan's artistic journey has evolved over three decades, ultimately finding its true expression in painting. From textile design to video art, her creativity knows no bounds. Drawing inspiration from everyday life, human connections, and the universe, her art strives to understand the complexities of existence. Gohar's journey with the Yerevan Biennial Art Foundation challenges her to work publicly, bringing insight into audience reactions. She advocates for support for Armenian artists and believes in leading by example.`], itemsCardSecond],
        ['ARMeN HAKOBJANYAN', 'From Architecture to Artistry', [`Armen Hakobjanyan, a skilled architect and painter, hails from Sisian, Armenia. After graduating in architecture, Armen's urban landscapes ignited a new perspective in his painting. His iconic mountainous landscapes embody the essence of transformations. Rather than pondering "what" to paint, Armen focuses on "how" to paint. His art questions the need to recreate nature's perfection. Armen's story is a testament to the interplay between architecture and art, emphasizing the transformative power of dedication and perseverance.`], itemsCardFirst],
        ['GAReGGIN HARUTYUNYAN', 'A Visionary Artist at the Intersection of Tradition and Modernity', [`Garegin Harutyunyan's art is a captivating blend of classical painting and contemporary influences, merging pop art with archaic stylistics. His work carries elements of surrealism, adding an enchanting historical dimension to his creations. Gareggin's canvas extends to the world of street art, a genre rooted in ancient times, which he modernizes with expertise. His portrait of Jim Morrison, for instance, brilliantly fuses graffiti, antique portraiture, pop art, and street art into a cohesive narrative of modern painting. As an artist, Gareggin's mastery shines through in his ability to seamlessly navigate various genres while maintaining his unique artistic identity. `, `Garegin Harutyunyan is not just an artist; he is a visionary whose creativity has been a lifelong passion, shaping his distinctive perspective on art and life.`], itemsCardFirst],
        ['BARON SCANCeLLI', 'Exploring Imperfection: The Artistic Journey of Baron Scancelli', [`Baron is a versatile artist whose creative journey began with a passion for photography, followed by a foray into film and video. He's also a prolific writer with a focus on finance and relationships.`, `His art draws inspiration from Impressionism and 20th-century visionaries like Pollock, Picasso, and Warhol. Beyond art, Baron's life revolves around construction, innovation, technology, and sustainability.`, `His mixed media artworks celebrate imperfection and blur the lines between "Art" and "Artist" under the pseudonym "Scancelli." Baron's philosophy emphasizes resourcefulness and using art to explore human emotions and life's complexities. Success, he believes, is an ongoing journey that requires daily dedication.`], itemsCardFirst],
        ['SVeTA GAS', '', '', itemsCardSecond]
    ]


    return (
        <div>
            <Layout>
                {data?.data.map((element: any, index: number) => (
                    <Artist
                        item={element.attributes.work}
                        key={index + 831}
                        avatar={element.attributes.avatar?.data.attributes.url}
                        name={element.attributes.name}
                        spec={element.attributes.class}
                        text={element.attributes.description}/>
                ))}
            </Layout>
        </div>
    )
}