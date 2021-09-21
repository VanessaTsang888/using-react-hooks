/* 

Higher order components that gets included in every incoming request processed through any file like our index.js and our pages folder.
Since our Next.js has built-in support for importing CSS files, import the bootstrap.css and site.css with site specific classes in.

*/

import '../public/static/bootstrap.css';
import '../public/static/site.css';

// As its a higher order component, its going to take in component as one of its receving props.
// Just using this component a way to incl. our CSS classes.

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
