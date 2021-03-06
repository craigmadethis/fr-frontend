import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import {ApolloClient, InMemoryCache, gql} from '@apollo/client'

export default function Home(bands) {
    console.log(bands)
    return (
        <div className='bg-zinc-900  min-h-screen font-body '>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='flex-col'>
                <h1 className='pt-4 pb-10 px-6 font-display text-zinc-50 font-bold text-2xl'>FORTH ROAD</h1>
                <section className='border-y-2 border-y-indigo-700'>
                    <h2 className='font-display w-5/6 mx-auto py-12 text-zinc-50 font-bold text-6xl text-justify'>HOME OF THE SCOTTISH MUSIC SCENE</h2>
                </section>
            </header>
            <main className=''>
                <section className=''>

                </section>
            </main>
	    
            <footer className='w-full flex justify-center text-zinc-400  font-bold text-l'>
                <a
                    href="http://craigshewry.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className='text-zinc-50 hover:text-zinc-600'>
                        @craigmadethis
                    </span>
                </a>
            </footer>
        </div>
    )
}

export async function getStaticProps() {
    const client = new ApolloClient({
        uri: 'http://localhost:1337/graphql/',
        cache: new InMemoryCache(),
    });
    const {data} = await client.query({
        query: gql`
            query GetBands {
                bands {
                    data {
                        attributes {
                            name
                            socials {
                                facebook
                                instagram
                                tiktok
                            }
                        }
                    }
                }
            }`
    })
    return {
        props: {
            bands: data.bands
        }
    }
}
