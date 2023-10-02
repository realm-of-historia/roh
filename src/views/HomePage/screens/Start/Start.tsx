import React from 'react'
import styles from './Start.module.scss'
import Comment from '../../../../components/Comment/Comment'
import Divider from '@/components/Divider/Divider'
import Link from 'next/link'


const Start = () => {

    const firstComment = [
        ['First art real world asset based NFT.', 'How to get started tutorial.'],
        'Welcome to the next frontier in the NFT space. As we transition from v4 to v5, we are thrilled to introduce «Carahunge Chronicles: Whispers of the Stones» — the first real-world asset-based NFT collection, which digitally embodies the historic grandeur of the Carahunge archaeological site.',
        'userImage2',
        'JANE MILLER',
        'APR 27, 2021'
    ]

    const secondComment = [
        ['Armenian stonehenge. Donation processl.'],
        'We’ve been focused on making the from v4 to v5 a but we’ve also not been afraid to step away.',
        'userImage1',
        'cris morgan',
        'mar 14, 2021'
    ]

    const thirdComment = [
        ['Ho we can help artists — How To Get Started Tutorial. Create best applications'],
        'We’ve been focused on making the from v4 to v5 a but we’ve also not been afraid to step away.',
        'userImage3',
        'cris Morgan',
        'mar 14, 2021'
    ]

    const fourthComment = [
        ['How to get started?'],
        'In our relentless pursuit of innovation and unique user experiences, we are excited to announce our latest project — the «Carahunge Chronicles: Whispers of the Stones» NFT collection. A digital echo of the past, this collection captures the deep-seated mysteries and intriguing legends of the enigmatic Armenian Stonehenge, Carahunge.',
        'userImage2',
        'JANE MILLER',
        'APR 27, 2021'
    ]


  return (
    <div className={styles.start}>
        <Divider position={"top"}></Divider>
        <Divider position={"bottom"} horizontal={true}></Divider>
        <div className={styles.left}>
            <video className={styles.player} muted autoPlay playsInline loop>
            <source src="/testVideo.mp4" type="video/mp4" />
            </video>
            {/* <img className={styles.player} src='player.png' alt='' width={960} height={540}/> */}
            <div className={styles.commentsSection}>
                <Link href='/blog/1'><Comment isDivider={true} isNews={false} title={fourthComment[0]} comment={fourthComment[1]} avatar={fourthComment[2]} name={fourthComment[3]} date={fourthComment[4]}></Comment></Link>
            </div>
        </div>
        <div className={styles.right}>
            {/* <div className={styles.firstDivider}></div>
            <div className={styles.secondDivider}></div>
            <div className={styles.thirdDivider}></div> */}
            {/* <Divider position={"bottom left"} horizontal={true}></Divider> */}
            <div className={styles.commentsSection}>
                <Link href='/blog/2'><Comment isDivider={true} isNews={false} title={firstComment[0]} comment={firstComment[1]} avatar={firstComment[2]} name={firstComment[3]} date={firstComment[4]}></Comment></Link>
                <Link href='/blog/3'><Comment isDivider={true} isNews={false} title={secondComment[0]} comment={secondComment[1]} avatar={secondComment[2]} name={secondComment[3]} date={secondComment[4]}></Comment></Link>
                <Link href='/blog/4'><Comment isDivider={true} isNews={false} title={thirdComment[0]} comment={thirdComment[1]} avatar={thirdComment[2]} name={thirdComment[3]} date={thirdComment[4]}></Comment></Link>
            </div>
        </div>
    </div>
  )
}

export default Start