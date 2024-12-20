'use client'

import React, { useMemo } from 'react'
import styles from './GetStarted.module.scss'
import PostInfo from './PostInfo/PostInfo'
import Founder from './Founder/Founder'
import Categories from './Categories/Categories'
import Posts from './Posts/Posts'
import SimpleInput from '@/components/UI/SimpleInput/SimpleInput'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import { useSectionData } from '@/composable/useSectionData'
import ImageMy from '@/components/Image/ImageMy'
import Link from 'next/link'
import Markdown from 'react-markdown'
import Divider from '@/components/Divider/Divider'
import Comments from '@/views/HomePage/screens/Comments/Comments'

export interface StandardComponentProps {
    data?: any,
    article?: any,
    dataArticleLast? : any,
    comments? : any
}

const GetStarted = ({data, article, dataArticleLast,comments} : StandardComponentProps) => {
    const searchBlog = useSectionData(data, 'searchBlog')
    const searchBlogplaceholder = useSectionData(data, 'searchBlogplaceholder')
    const recentPostsTitle = useSectionData(data, 'recentPostsTitle')
    const categoriesTitle = useSectionData(data, 'categoriesTitle')
    const listOfCategories = useSectionData(data, 'listOfCategories')
    const creationDateIcon = useSectionData(data, 'creationDateIcon')
    const familiarizationTimeImg = useSectionData(data, 'familiarizationTimeImg')
    const articleData = article?.data[0].attributes
    const [text, setText] = useState('')

    const {register} = useForm()
    const newDate = useMemo(() => {
        if(!articleData.createdAt) {return}
        const dateMy = new Date(articleData.createdAt);
        const options : any = { year: 'numeric', month: 'short', day: 'numeric' };
        const formattedDate = dateMy.toLocaleDateString('en-US', options);
        return formattedDate
      },[article])
    // const infos = [
    //     ['calendar', '06 April, 2021'],
    //     ['briefcase', 'Announcements'],
    //     ['chat-smile', '24 comments'],
    //     ['oclock', '5 mins']
    // ]

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
                    <Divider position={'lefr bottom'} noAnim={true} opacityNo={true} horizontal={true}/>
                    {
                        articleData?.title &&
                        <p className={styles.title}>{articleData?.title}</p>
                    }
                    <div className={styles.infos}>
                        {/* {infos.map((el) => (
                            <PostInfo key={el[0]} label={el[0]} text={el[1]}></PostInfo>
                        ))} */}
                        <PostInfo  label={creationDateIcon?.data.attributes.url} text={newDate}></PostInfo>
                        <PostInfo  label={familiarizationTimeImg?.data.attributes.url} text={articleData.familiarizationTime}></PostInfo>
                    </div>
                    {
                        articleData?.img &&
                        <ImageMy src={articleData?.img.data.attributes.url} height={468} width={1068} alt='' poster={articleData?.poster?.data?.attributes.url}/>
                    }
                    <div className={styles.text}>
                        { articleData?.description &&
                           <Markdown>{articleData?.description}</Markdown>
                        }
                        </div>
                    <Founder name={articleData?.nameAndAchievements} avatar={articleData?.avatar.data.attributes.url} title={articleData?.additionalComment}></Founder>
                </div>
                <div className={styles.footer}>
                    {
                        articleData?.link &&
                        articleData?.link.map((_:any, i : number) => (
                            <Link key={i} href={_.href || '/'}  className={styles.block}><ImageMy src={_.icon.data.attributes.url} width={20} height={20} alt = ''/><p>{_.name}</p></Link>
                        ))
                    }
                </div> 
                <div className={styles.wrapperComments}>
                    {
                        comments && 
                        <Comments data={comments}></Comments>
                    }
                </div>
                <div className={styles.right}>
                    <div className={styles.search}>
                        {
                            searchBlog && 
                            <p>{searchBlog}</p>
                        }
                        <div>
                            <SimpleInput register={register} name='search-ii' onChange={(e) => setText(e.target.value)} isContacts={true} value='' placeholder={searchBlogplaceholder || 'Search'} icon='search-icon'></SimpleInput>
                        </div>
                    </div>
                    <Categories data={listOfCategories} title={categoriesTitle || 'Categories'}></Categories>
                    <Posts dataArticleLast={dataArticleLast} title={recentPostsTitle}></Posts>
                </div>
            </div>
            {/* <div className={styles.footer}>
              
                {
                        articleData?.link &&
                        articleData?.link.map((_:any, i : number) => (
                            <Link key={i + 909} href={_.href}  className={styles.block}><ImageMy src={_.icon.data.attributes.url} width={20} height={20} alt = ''/><p>{_.name}</p></Link>
                        ))
                    }
            </div> */}
        </div>
    )
}

export default GetStarted;