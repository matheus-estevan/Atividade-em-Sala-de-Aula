import React from 'react'
import Head from '../components/Header'

import { Link } from "react-router-dom"

import Chihiro from '/chiriro.jpg'

export default function Spirted() {
  return (
    <div>
        <header>
            <Head />
        </header>

          <main>
            <div className='b-3 bg-sky-500'>

            </div>
            <nav>
              <ul>
                <li>
                  <Link to={"/"} className='text-sky-500 text-5xl font-semibold uppercase'>Matheus</Link>
                </li>
              </ul>
            </nav>
              <div className='flex justify-center items-center mb-4 gap-4'>
                <div className='w-80 border border-sky-500 bg-sky-500 p-12 rounded'>
                  <img src={Chihiro} className='mb-2' alt="banner do filme Spirited Away" />
                  <p className='font-semibold'>Lorennnnn</p>

                </div>

                <div className='w-80 border border-sky-500 bg-sky-500 p-12 rounded'>
                  <p className='font-semibold'>Oi</p>
                </div>

                <div className='w-80 border border-sky-500 bg-sky-500 p-12 rounded'>
                  <p className='font-semibold'>Oi</p>
                </div>
              </div>
          </main>
    </div>
  )
}
