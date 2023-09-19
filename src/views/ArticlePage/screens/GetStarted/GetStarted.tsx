import React from 'react'
import styles from './GetStarted.module.scss'
import PostInfo from './PostInfo/PostInfo'
import Founder from './Founder/Founder'
import Categories from './Categories/Categories'
import Posts from './Posts/Posts'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'


const GetStarted = () => {

    const infos = [
        ['calendar', '06 April, 2021'],
        ['briefcase', 'Announcements'],
        ['chat-smile', '24 comments'],
        ['oclock', '5 mins']
    ]

    const categories = [
        'Categories',
        ['Saas Solutions', 'Company News', 'Events & Activities', 'Support Related', 'Innovations', 'Product Updates'],
        ['24', '152', '52', '305', '70', '585']
    ]

    const posts = [
        ['About Bootstrap Admin', 'A yellow sofa', 'Our Camra Mega Set', 'Time to cook and eat?'],
        ['We’ve been a focused on making a the sky.', 'We’ve been a focused on making a the sky.', 'We’ve been a focused on making a the sky.', 'We’ve been a focused on making a the sky.']
    ]

    return (
        <div className={styles.getStarted}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.dividerLeft}></div>
                    <div className={styles.dividerRight}></div>
                    <p className={styles.title}>Admin Panel — How to get started tutorial. Create a customizable SaaS Based applications and solutions </p>
                    <div className={styles.infos}>
                        {infos.map((el) => (
                            <PostInfo key={el[0]} label={el[0]} text={el[1]}></PostInfo>
                        ))}
                    </div>
                    <img className={styles.talking} src='talking.png' height={468} width={1068} alt=''/>
                    <div className={styles.text}>
                        <p>
                            First, a disclaimer — the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp. From the seed of the idea to finally hitting «Publish», you might spend several days or maybe even a week «writing» a blog post, but it’s important to spend those vital hours planning your post and even thinking about Your Post.
                        </p>
                        <p>
                            There’s an old maxim that states, «No fun for the writer, no fun for the reader». No matter what industry you’re working in, as a blogger, you should live and die by this statement.
                        </p>
                        <p>
                            Before you do any of the following steps, be sure to pick a topic that actually interests you. Nothing — and I mean NOTHING — will kill a blog post more effectively than a lack of enthusiasm from the writer. You can tell when a writer is bored by their subject, and it’s so cringe-worthy it’s a little embarrassing.
                        </p>
                        <p>
                            I can hear your objections already. «But Dan, I have to blog for a cardboard box manufacturing company.» I feel your pain, I really do. During the course of my career, I’ve written content for dozens of clients in some less-than-thrilling industries (such as financial regulatory compliance and corporate housing), but the hallmark of a professional blogger is the ability to write well about any topic, no matter how dry it may be. Blogging is a lot easier, however, if you can muster at least a little enthusiasm for the topic at hand.
                        </p>
                    </div>
                    <Founder name='JANE JOHNSON' rank='CO-FOUNDER' avatar="devImage" title={'First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words per minute and your writing skills are sharp writing a blog post often takes more than a couple.'}></Founder>
                </div> 
                <div className={styles.right}>
                    <div className={styles.search}>
                        <p>Search Blog</p>
                        <div>
                            <SimpleInput placeholder='Search' icon='search-icon'></SimpleInput>
                        </div>
                    </div>
                    <Categories text={categories[1]} numbers={categories[2]} title={categories[0]}></Categories>
                    <Posts text={posts[0]} secondText={posts[1]}></Posts>
                </div>
            </div>
            <div className={styles.footer}>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>GitHub</p>
                <p>Behance</p>
                <p>Pinterest</p>
                <p>Twitter</p>
                <p>Dribbble</p>
            </div>
        </div>
    )
}

export default GetStarted;