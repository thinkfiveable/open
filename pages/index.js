import { useEffect } from 'react'
import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  useEffect(() => {
    console.log('Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me')
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      The perfect Next.js Theme. Contains everything. Check README for more information.
    </div>
  )
}
