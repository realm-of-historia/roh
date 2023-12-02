"use client"

import Divider from '@/components/Divider/Divider'
import stules from './Heritage.module.scss'
import WrapperTexture from '@/components/WrapperTexture/WrapperTexture'
import Text from '@/components/Text/Text'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/store'
import Link from 'next/link'
import { handleAuth } from '@/components/Header/Header'

const HeritageDefault = () => {
    const joinUses: any = useAuthStore((state: any) => (state.joinUses))
    const signedIn = useAuthStore((state: any) => (state.isSignedIn))
    const [data, setData]: any = useState(null)
    useEffect(() => {
        if (!joinUses) return
        setData(joinUses)
    }, [joinUses])
    const signedInFunction = (e : any) => {
        handleAuth()
        e.preventDefault();
    }
    return (
        <>
            {
                data ?
                    <div className={`${stules.wrapper} ${stules.bg}`}>
                        <div className={`${stules.wrapperInfoText}`}>
                            <div className={stules.containerText}>
                                <Text>
                                    <h2>{data?.joinUs.name}</h2>
                                </Text>
                                <Text>
                                    <p>{data?.joinUs.description}</p>
                                </Text>
                                {
                                    data?.joinUs.button &&
                                    <Text>
                                        <Link href={data?.href} onClick={(e) => signedIn ? null : signedInFunction(e)} className={stules.button}>{data?.joinUs.button}</Link>
                                    </Text>

                                }
                            </div>
                        </div>
                        <div className={stules.wpapperCircle}>
                            <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle opacity="0.5" cx="400" cy="400" r="399.5" stroke="#887961" />
                            </svg>
                            <svg width="378" height="377" viewBox="0 0 378 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M372.805 144.421C375.085 153.914 376.645 163.686 377.424 173.676L376.926 173.715C377.306 178.594 377.5 183.524 377.5 188.5C377.5 193.476 377.306 198.406 376.926 203.285L377.424 203.324C376.645 213.314 375.085 223.086 372.805 232.579L372.318 232.462C369.995 242.135 366.921 251.518 363.163 260.545L363.625 260.737C359.805 269.912 355.279 278.722 350.115 287.097L349.689 286.835C344.502 295.248 338.67 303.223 332.26 310.69L332.64 311.016C326.202 318.517 319.183 325.508 311.653 331.92L311.329 331.539C303.839 337.917 295.843 343.719 287.408 348.879L287.669 349.305C279.278 354.438 270.454 358.935 261.265 362.73L261.074 362.268C252.039 366 242.649 369.052 232.969 371.358L233.085 371.845C223.59 374.107 213.816 375.656 203.824 376.429L203.785 375.93C198.907 376.308 193.976 376.5 189 376.5C184.024 376.5 179.093 376.308 174.215 375.93L174.176 376.429C164.184 375.656 154.41 374.107 144.915 371.845L145.031 371.358C135.351 369.052 125.961 366 116.926 362.268L116.735 362.73C107.546 358.935 98.7222 354.438 90.3313 349.305L90.5922 348.879C82.1573 343.719 74.1607 337.917 66.671 331.539L66.3468 331.92C58.817 325.508 51.7983 318.517 45.3601 311.016L45.7395 310.69C39.3301 303.223 33.4976 295.248 28.3107 286.835L27.8851 287.097C22.7211 278.722 18.1953 269.912 14.3753 260.737L14.8369 260.545C11.0785 251.518 8.00518 242.135 5.68159 232.462L5.19541 232.579C2.91519 223.086 1.35505 213.314 0.575822 203.324L1.07431 203.285C0.693813 198.406 0.5 193.476 0.5 188.5C0.5 183.524 0.693813 178.594 1.07431 173.715L0.575822 173.676C1.35505 163.686 2.91518 153.914 5.19541 144.421L5.68158 144.538C8.00517 134.865 11.0785 125.482 14.8369 116.455L14.3753 116.263C18.1953 107.088 22.7211 98.2785 27.8851 89.9026L28.3107 90.165C33.4976 81.752 39.3301 73.7774 45.7395 66.3097L45.3601 65.984C51.7983 58.4827 58.817 51.4916 66.3468 45.08L66.6709 45.4607C74.1607 39.0832 82.1573 33.2806 90.5922 28.1214L90.3313 27.6949C98.7222 22.5625 107.546 18.0651 116.735 14.2698L116.926 14.7319C125.961 10.9999 135.351 7.94842 145.031 5.64171L144.915 5.15533C154.41 2.89251 164.184 1.34443 174.176 0.571276L174.215 1.06979C179.093 0.692281 184.024 0.5 189 0.5C193.976 0.5 198.907 0.69228 203.785 1.06978L203.824 0.571274C213.816 1.34443 223.59 2.89251 233.085 5.15532L232.969 5.6417C242.649 7.94842 252.039 10.9998 261.074 14.7319L261.265 14.2698C270.454 18.0651 279.278 22.5625 287.669 27.6948L287.408 28.1214C295.843 33.2806 303.839 39.0832 311.329 45.4607L311.653 45.08C319.183 51.4916 326.202 58.4827 332.64 65.984L332.26 66.3097C338.67 73.7774 344.502 81.752 349.689 90.165L350.115 89.9026C355.279 98.2785 359.805 107.088 363.625 116.263L363.163 116.455C366.921 125.482 369.995 134.865 372.318 144.538L372.805 144.421Z" stroke="#887961" strokeDasharray="32 32" />
                            </svg>
                            <svg width="378" height="377" viewBox="0 0 378 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M372.805 144.421C375.085 153.914 376.645 163.686 377.424 173.676L376.926 173.715C377.306 178.594 377.5 183.524 377.5 188.5C377.5 193.476 377.306 198.406 376.926 203.285L377.424 203.324C376.645 213.314 375.085 223.086 372.805 232.579L372.318 232.462C369.995 242.135 366.921 251.518 363.163 260.545L363.625 260.737C359.805 269.912 355.279 278.722 350.115 287.097L349.689 286.835C344.502 295.248 338.67 303.223 332.26 310.69L332.64 311.016C326.202 318.517 319.183 325.508 311.653 331.92L311.329 331.539C303.839 337.917 295.843 343.719 287.408 348.879L287.669 349.305C279.278 354.438 270.454 358.935 261.265 362.73L261.074 362.268C252.039 366 242.649 369.052 232.969 371.358L233.085 371.845C223.59 374.107 213.816 375.656 203.824 376.429L203.785 375.93C198.907 376.308 193.976 376.5 189 376.5C184.024 376.5 179.093 376.308 174.215 375.93L174.176 376.429C164.184 375.656 154.41 374.107 144.915 371.845L145.031 371.358C135.351 369.052 125.961 366 116.926 362.268L116.735 362.73C107.546 358.935 98.7222 354.438 90.3313 349.305L90.5922 348.879C82.1573 343.719 74.1607 337.917 66.671 331.539L66.3468 331.92C58.817 325.508 51.7983 318.517 45.3601 311.016L45.7395 310.69C39.3301 303.223 33.4976 295.248 28.3107 286.835L27.8851 287.097C22.7211 278.722 18.1953 269.912 14.3753 260.737L14.8369 260.545C11.0785 251.518 8.00518 242.135 5.68159 232.462L5.19541 232.579C2.91519 223.086 1.35505 213.314 0.575822 203.324L1.07431 203.285C0.693813 198.406 0.5 193.476 0.5 188.5C0.5 183.524 0.693813 178.594 1.07431 173.715L0.575822 173.676C1.35505 163.686 2.91518 153.914 5.19541 144.421L5.68158 144.538C8.00517 134.865 11.0785 125.482 14.8369 116.455L14.3753 116.263C18.1953 107.088 22.7211 98.2785 27.8851 89.9026L28.3107 90.165C33.4976 81.752 39.3301 73.7774 45.7395 66.3097L45.3601 65.984C51.7983 58.4827 58.817 51.4916 66.3468 45.08L66.6709 45.4607C74.1607 39.0832 82.1573 33.2806 90.5922 28.1214L90.3313 27.6949C98.7222 22.5625 107.546 18.0651 116.735 14.2698L116.926 14.7319C125.961 10.9999 135.351 7.94842 145.031 5.64171L144.915 5.15533C154.41 2.89251 164.184 1.34443 174.176 0.571276L174.215 1.06979C179.093 0.692281 184.024 0.5 189 0.5C193.976 0.5 198.907 0.69228 203.785 1.06978L203.824 0.571274C213.816 1.34443 223.59 2.89251 233.085 5.15532L232.969 5.6417C242.649 7.94842 252.039 10.9998 261.074 14.7319L261.265 14.2698C270.454 18.0651 279.278 22.5625 287.669 27.6948L287.408 28.1214C295.843 33.2806 303.839 39.0832 311.329 45.4607L311.653 45.08C319.183 51.4916 326.202 58.4827 332.64 65.984L332.26 66.3097C338.67 73.7774 344.502 81.752 349.689 90.165L350.115 89.9026C355.279 98.2785 359.805 107.088 363.625 116.263L363.163 116.455C366.921 125.482 369.995 134.865 372.318 144.538L372.805 144.421Z" stroke="#887961" strokeDasharray="32 32" />
                            </svg>
                            <svg width="378" height="377" viewBox="0 0 378 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M372.805 144.421C375.085 153.914 376.645 163.686 377.424 173.676L376.926 173.715C377.306 178.594 377.5 183.524 377.5 188.5C377.5 193.476 377.306 198.406 376.926 203.285L377.424 203.324C376.645 213.314 375.085 223.086 372.805 232.579L372.318 232.462C369.995 242.135 366.921 251.518 363.163 260.545L363.625 260.737C359.805 269.912 355.279 278.722 350.115 287.097L349.689 286.835C344.502 295.248 338.67 303.223 332.26 310.69L332.64 311.016C326.202 318.517 319.183 325.508 311.653 331.92L311.329 331.539C303.839 337.917 295.843 343.719 287.408 348.879L287.669 349.305C279.278 354.438 270.454 358.935 261.265 362.73L261.074 362.268C252.039 366 242.649 369.052 232.969 371.358L233.085 371.845C223.59 374.107 213.816 375.656 203.824 376.429L203.785 375.93C198.907 376.308 193.976 376.5 189 376.5C184.024 376.5 179.093 376.308 174.215 375.93L174.176 376.429C164.184 375.656 154.41 374.107 144.915 371.845L145.031 371.358C135.351 369.052 125.961 366 116.926 362.268L116.735 362.73C107.546 358.935 98.7222 354.438 90.3313 349.305L90.5922 348.879C82.1573 343.719 74.1607 337.917 66.671 331.539L66.3468 331.92C58.817 325.508 51.7983 318.517 45.3601 311.016L45.7395 310.69C39.3301 303.223 33.4976 295.248 28.3107 286.835L27.8851 287.097C22.7211 278.722 18.1953 269.912 14.3753 260.737L14.8369 260.545C11.0785 251.518 8.00518 242.135 5.68159 232.462L5.19541 232.579C2.91519 223.086 1.35505 213.314 0.575822 203.324L1.07431 203.285C0.693813 198.406 0.5 193.476 0.5 188.5C0.5 183.524 0.693813 178.594 1.07431 173.715L0.575822 173.676C1.35505 163.686 2.91518 153.914 5.19541 144.421L5.68158 144.538C8.00517 134.865 11.0785 125.482 14.8369 116.455L14.3753 116.263C18.1953 107.088 22.7211 98.2785 27.8851 89.9026L28.3107 90.165C33.4976 81.752 39.3301 73.7774 45.7395 66.3097L45.3601 65.984C51.7983 58.4827 58.817 51.4916 66.3468 45.08L66.6709 45.4607C74.1607 39.0832 82.1573 33.2806 90.5922 28.1214L90.3313 27.6949C98.7222 22.5625 107.546 18.0651 116.735 14.2698L116.926 14.7319C125.961 10.9999 135.351 7.94842 145.031 5.64171L144.915 5.15533C154.41 2.89251 164.184 1.34443 174.176 0.571276L174.215 1.06979C179.093 0.692281 184.024 0.5 189 0.5C193.976 0.5 198.907 0.69228 203.785 1.06978L203.824 0.571274C213.816 1.34443 223.59 2.89251 233.085 5.15532L232.969 5.6417C242.649 7.94842 252.039 10.9998 261.074 14.7319L261.265 14.2698C270.454 18.0651 279.278 22.5625 287.669 27.6948L287.408 28.1214C295.843 33.2806 303.839 39.0832 311.329 45.4607L311.653 45.08C319.183 51.4916 326.202 58.4827 332.64 65.984L332.26 66.3097C338.67 73.7774 344.502 81.752 349.689 90.165L350.115 89.9026C355.279 98.2785 359.805 107.088 363.625 116.263L363.163 116.455C366.921 125.482 369.995 134.865 372.318 144.538L372.805 144.421Z" stroke="#887961" strokeDasharray="32 32" />
                            </svg>
                            <svg width="378" height="377" viewBox="0 0 378 377" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.5" d="M372.805 144.421C375.085 153.914 376.645 163.686 377.424 173.676L376.926 173.715C377.306 178.594 377.5 183.524 377.5 188.5C377.5 193.476 377.306 198.406 376.926 203.285L377.424 203.324C376.645 213.314 375.085 223.086 372.805 232.579L372.318 232.462C369.995 242.135 366.921 251.518 363.163 260.545L363.625 260.737C359.805 269.912 355.279 278.722 350.115 287.097L349.689 286.835C344.502 295.248 338.67 303.223 332.26 310.69L332.64 311.016C326.202 318.517 319.183 325.508 311.653 331.92L311.329 331.539C303.839 337.917 295.843 343.719 287.408 348.879L287.669 349.305C279.278 354.438 270.454 358.935 261.265 362.73L261.074 362.268C252.039 366 242.649 369.052 232.969 371.358L233.085 371.845C223.59 374.107 213.816 375.656 203.824 376.429L203.785 375.93C198.907 376.308 193.976 376.5 189 376.5C184.024 376.5 179.093 376.308 174.215 375.93L174.176 376.429C164.184 375.656 154.41 374.107 144.915 371.845L145.031 371.358C135.351 369.052 125.961 366 116.926 362.268L116.735 362.73C107.546 358.935 98.7222 354.438 90.3313 349.305L90.5922 348.879C82.1573 343.719 74.1607 337.917 66.671 331.539L66.3468 331.92C58.817 325.508 51.7983 318.517 45.3601 311.016L45.7395 310.69C39.3301 303.223 33.4976 295.248 28.3107 286.835L27.8851 287.097C22.7211 278.722 18.1953 269.912 14.3753 260.737L14.8369 260.545C11.0785 251.518 8.00518 242.135 5.68159 232.462L5.19541 232.579C2.91519 223.086 1.35505 213.314 0.575822 203.324L1.07431 203.285C0.693813 198.406 0.5 193.476 0.5 188.5C0.5 183.524 0.693813 178.594 1.07431 173.715L0.575822 173.676C1.35505 163.686 2.91518 153.914 5.19541 144.421L5.68158 144.538C8.00517 134.865 11.0785 125.482 14.8369 116.455L14.3753 116.263C18.1953 107.088 22.7211 98.2785 27.8851 89.9026L28.3107 90.165C33.4976 81.752 39.3301 73.7774 45.7395 66.3097L45.3601 65.984C51.7983 58.4827 58.817 51.4916 66.3468 45.08L66.6709 45.4607C74.1607 39.0832 82.1573 33.2806 90.5922 28.1214L90.3313 27.6949C98.7222 22.5625 107.546 18.0651 116.735 14.2698L116.926 14.7319C125.961 10.9999 135.351 7.94842 145.031 5.64171L144.915 5.15533C154.41 2.89251 164.184 1.34443 174.176 0.571276L174.215 1.06979C179.093 0.692281 184.024 0.5 189 0.5C193.976 0.5 198.907 0.69228 203.785 1.06978L203.824 0.571274C213.816 1.34443 223.59 2.89251 233.085 5.15532L232.969 5.6417C242.649 7.94842 252.039 10.9998 261.074 14.7319L261.265 14.2698C270.454 18.0651 279.278 22.5625 287.669 27.6948L287.408 28.1214C295.843 33.2806 303.839 39.0832 311.329 45.4607L311.653 45.08C319.183 51.4916 326.202 58.4827 332.64 65.984L332.26 66.3097C338.67 73.7774 344.502 81.752 349.689 90.165L350.115 89.9026C355.279 98.2785 359.805 107.088 363.625 116.263L363.163 116.455C366.921 125.482 369.995 134.865 372.318 144.538L372.805 144.421Z" stroke="#887961" strokeDasharray="32 32" />
                            </svg>

                        </div>
                    </div>
                    :
                    <></>
            }
        </>

    )
}

export default HeritageDefault