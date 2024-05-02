import React from 'react'
import Head from '../components/Header'

import { Link } from "react-router-dom"

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

          </main>
    </div>
  )
}
