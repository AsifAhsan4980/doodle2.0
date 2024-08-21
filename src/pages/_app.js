import "@/styles/globals.css";
import { Poppins } from '@next/font/google';
const poppins = Poppins({
  subsets: ['latin'], // Define the subsets you need
  weight: ['400', '500', '600', '700'], // Define the weights you need
});

export default function App({ Component, pageProps }) {
  return (
      <div className={poppins.className}>
        <Component {...pageProps} />;
      </div>
  )
}
