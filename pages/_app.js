import "../styles/globals.css";
// any styles here will apply to all pages of the app
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
