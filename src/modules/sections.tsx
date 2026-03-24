import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

import IMG from '../components/img.ts';
import '../scss/bloc/_sections.scss';

export const Intro = function() {
    useGSAP(() => {
        gsap.from('.intro__inner', {
            scrollTrigger: {
                trigger: '.intro__title',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 3,
            ease: 'power2.inOut',
        });
    });

    const $logos = [
        {id: 1, img: IMG.sponsoreLogo_1, href: '#'},
        {id: 2, img: IMG.sponsoreLogo_2, href: '#'},
        {id: 3, img: IMG.sponsoreLogo_3, href: '#'},
        {id: 4, img: IMG.sponsoreLogo_4, href: '#'},
    ]

    return (
        <section className="intro">
            <div className="container">
                <div className="intro__wrapper">
                    <div className="intro__inner">
                        <div className="intro__text">
                            <h1 className="intro__title"><abbr className='title__abbr-1'>Scale Fintech</abbr> Safe And Secure</h1>
                            <p className="intro__description">Ship your fintech products to your customers with fast and reliable processes. Secure and highly customizable. Rise Finance is the best partner for you if you want to scale your finance products worldwide.</p>
                            <a className="btn" href="#btn">CONSULTATION</a>
                        </div>
                        <div className='intro__hero-box'></div>
                    </div>
                    <div className='intro__sponsore__block'>
                        {$logos.map(logotips => (
                            <div className='' key={logotips.id}>
                                <a className='logotips' href={logotips.href}>
                                    <img src={logotips.img} alt=''/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Consulting = function() {
    useGSAP(() => {
        gsap.from('.consulting', {
        scrollTrigger: {
            trigger: '.consulting__title',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 20,
        duration: 2,
        ease: 'power2.inOut',
    })

    gsap.from('.consulting__hero', {
        scrollTrigger: {
            trigger: '.consulting__hero',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 20,
        duration: 5,
        ease: 'power2.inOut',
    })
    })

    return (
        <section className="consulting">
            <div className='container'>
                <div className='consulting__wrapper'>
                    <div className='consulting__inner'>
                        <div className='consulting__text'>
                            <h2 className='consulting__title'>Consulting For Startups In Fintech</h2>
                            <p className='consulting__description'>Our Team consists of proven experts from finance, tech and science. This mix makes it possible for our team to deliver the best results to all our clients.</p>
                        </div>
                    </div>
                    <div className='consulting__hero'></div>
                </div>
            </div>
        </section>
    )
}

export const Production = function() {
    const sectionCard = [
        {id: 1, img: IMG.analyticsIcon,  name: 'Analysis', num: '1'},
        {id: 2, img: IMG.arrowAnalys,  name: 'Growth Phase', num: '2'},
        {id: 3, img: IMG.moneAnalys,  name: 'Profit', num: '3'},
    ]

    useGSAP(() => {
        gsap.from('.production__title', {
        scrollTrigger: {
            trigger: '.production__title',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 50,
        duration: 2,
        ease: 'power2.inOut',
    })
    
        gsap.from('.card', {
        scrollTrigger: {
            trigger: '.card',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 0,
        duration: 4,
        ease: 'power2.inOut',
    })

    gsap.from('.production__text-2', {
        scrollTrigger: {
            trigger: '.production__text-2',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        x: -50,
        duration: 6,
        ease: 'power2.inOut',
    })

    })

    return (
        <section className='production'>
            <div className='container'>
                <div className='production__text'>
                        <h2 className='production__title'>Delivering Value In Every Step Of Production</h2>
                        <p className='production__description'></p>
                    </div>
                <div className='production__wrapper'>
                    <div className='production__inner'></div>
                    <div className='production__process'>
                        <div className='production__process__block'>
                            <div className='card'>
                                <div className='card__text'>
                                    <p className='card__subtitle'>Meta Info</p>
                                    <h4 className='card__title'>This is the body title 1,000 Value</h4>
                                    <p className='card__description'>This is a subtitle</p>
                                </div>
                                <div className='card__analitics'>
                                    <div className='cad__hero'>
                                        <img src={IMG.analyth} alt='' className='hero_card_circle'/>
                                    </div>
                                    <div className='card__item'>
                                        <div className='items'>
                                            <span className='eclipse-varriant-1'></span><li className='text'>Item</li>
                                        </div>
                                        <div className='items'>
                                            <span className='eclipse-varriant-2'></span><li className='text'>Item</li>
                                        </div>
                                        <div className='items'>
                                            <span className='eclipse-varriant-3'></span><li className='text'>Item</li>
                                        </div>
                                        <div className='items'>
                                            <span className='eclipse-varriant-4'></span><li className='text'>Item</li>
                                        </div>
                                        <div className='items'>
                                            <span className='eclipse-varriant-5'></span><li className='text'>Item</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='card__text-2'>
                                    <p className='card__subtitle'>Meta Info</p>
                                    <h4 className='card__title'>This is the body title</h4>
                                    <p className='card__description'>This is a subtitle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='production__block-2'>
                        <div className='production__container'>
                            <div className='production__text-2'>
                                <h2 className='production__title-2'>The process</h2>
                                <p className='production__description-2'>Strategic phrases we run through with every client make it possible to implement highly efficinet processes, even in high pace startups that like to scale as fast as possible.</p>
                            </div>
                            <div className='analysis'>
                                {sectionCard.map(cardsPructsInner => (
                                    <div className='analysis__block' key={cardsPructsInner.id}>
                                        <div className='analysis__box'>
                                            <img className='analysis__hero' src={cardsPructsInner.img} alt='icon'/>
                                        <p className='analysis__subtitle'>{cardsPructsInner.name}</p>
                                        </div>
                                        <h2 className='analysis__number'>{cardsPructsInner.num}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Case = function() {
    useGSAP(() => {
        gsap.from('.case__title', {
        scrollTrigger: {
            trigger: '.case__title',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 50,
        duration: 2,
        ease: 'power2.inOut',
    })

    gsap.from('.case__description', {
        scrollTrigger: {
            trigger: '.case__description',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 0,
        duration: 4,
        ease: 'power2.inOut',
    })

    gsap.from('.case__block__text', {
        scrollTrigger: {
            trigger: '.case__block__text',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        x: 40,
        duration: 4,
        ease: 'power2.inOut',
    })

    gsap.from('.case__block__btn', {
        scrollTrigger: {
            trigger: '.case__block__btn',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 20,
        duration: 4,
        ease: 'power2.inOut',
    })

    gsap.from('.mobile__pnone__container', {
        scrollTrigger: {
            trigger: '.mobile__pnone__container',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }, opacity: 0,
        y: 100,
        duration: 2,
        ease: 'power2.inOut',
    })
    })

    return (
        <section className='case'>
            <div className='container'>
                <div className='case__text'>
                    <h3 className='case__title'>Case Study</h3>
                    <p className='case__description'>Some results from our clients</p>
                </div>
                <div className='case__wrapper'>
                    <div className='case__inner'>
                        <div className='case__block-1'>
                        <div className='case__container'>
                            <div className='case__block__text'>
                                <h4 className='case__block__title'>Coruma Finance</h4>
                                <p className='case__block__description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                                <a className='case__block__btn' href='#btn'>Read More About This Client</a>
                            </div>
                        </div>
                    </div>
                    <div className='case__block-2'>
                        <div className='case__container-2'>
                            <div className='mobile__pnone__container'></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export const Coruma = function() {
    return (
        <section className='coruma'>
            <div className='container'>
                <div className='coruma__wrapper'>
                    <div className='coruma__text'>
                        <h2 className='coruma__title'>Coruma Finance</h2>
                        <p className='coruma__description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                    <div className='coruma__inner'>
                        <div className='coruma__intro__block'>
                            <div className='coruma__text__block-1'>
                                <p className='coruma__subtitle__text'>Accquired 8 long time customers</p>
                            </div>
                            <div className='coruma__text__block-2'>
                                <p className='coruma__subtitle__text'>300% Growth in first year</p>
                            </div>
                            <div className='coruma__text__block-3'>
                                <p className='coruma__subtitle__text'>hired 24 talented developers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}