import { useEffect } from 'react'
import HeadObject from '../components/head'

export default function Home() {
  useEffect(() => {
    console.log('Made by Sarthak Mohanty. Use this template at https://srtk.me/gh/perfect')
  })

  return (
    <div className="">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      The perfect Next.js Theme. Contains everything. Check README for more information.
    </div>
  )
}
