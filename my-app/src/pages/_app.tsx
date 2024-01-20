// import PublicLayout from '@/Layout/PublicLayout'
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'



// export default function App({ Component, pageProps }: AppProps) {


//   return (
//     <>
//     <PublicLayout />
//     </>
//   )
// }

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
