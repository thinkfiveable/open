import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import {useTheme} from 'next-themes'
import { useEffect } from 'react'

const {setTheme} = useTheme()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light')
    }
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
      const newColorScheme = e.matches ? "light" : "dark";
      if (newColorScheme === "dark") {
        setTheme('dark')
      } else if (newColorScheme === "light") {
        setTheme('light')
      }
    });
    console.log('Made by Sarthak Mohanty. All Rights Reserved. Want to hire me? https://srtk.me')
  });
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp