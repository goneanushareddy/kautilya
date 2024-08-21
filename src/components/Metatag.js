import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import kautilya from '../kautilya';
import { useLocation } from 'react-router-dom';

const Metatag = () => {
  const [title, setTitleData] = useState({}); // Initialize with null
  const location=useLocation();
  //console.log(location.pathname)
 
  useEffect(()=>{
  const getTitle=async()=>{   
    if(location.pathname=="/") var tt="/kautilya";else var tt=(location.pathname).replace('/blog', '');
    const response = await kautilya.get('/title' +tt);
    if(response!=null && response!=undefined)  setTitleData(response.data.data); 
  }
  getTitle();
},[location.pathname]);

   

  return (
    <Helmet>
      <title>{title.title}</title>
      <meta name="description" content={title.description} />
      <meta name="keywords" content={title.keywords} />
      <link rel="canonical" href={"https://kautilya.org.in/" + title.url} />
      
      <meta property="og:site_name" content={title.title} />
      <meta property="og:title" content={title.title} />
      <meta property="og:description" content={title.description} />
      <meta property="og:url" content={"https://kautilya.org.in/" + title.url} />

 
      <meta name="twitter:title" content={title.title} />
      <meta name="twitter:description" content={title.description} />
      <link rel="alternate" type="application/rss+xml" title={title.title} href="https://kautilya.org.in/feed/" />
      <link rel="alternate" type="application/rss+xml" title={title.title} href="https://kautilya.org.in/comments/feed/" />
      <link rel="alternate" type="text/calendar" title={title.title} href="https://kautilya.org.in/events/?ical=1" />
    </Helmet>
  );
};

export default Metatag;