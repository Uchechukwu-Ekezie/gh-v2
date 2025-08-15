import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MetaTags = () => {
  const location = useLocation();

  useEffect(() => {
    // Define meta data for different routes
    const metaData = {
      '/': {
        title: 'GH - The IELTS Cheat Code Webinar',
        description: 'Smash Band 8 in IELTS without stress — practice just 1 hour per day. Join the live webinar now!',
        image: 'https://res-console.cloudinary.com/dazur1hks/thumbnails/v1/image/upload/v1755286763/V2hhdHNBcHBfSW1hZ2VfMjAyNS0wOC0xNV9hdF8xNi4wMS4zM18xNzY2MjQ3MF9pNGF2anc=/drilldown'
      },
      '/replay': {
        title: 'GH - The IELTS Cheat Code',
        description: 'How to Smash Band 8 Once by Just Practicing for 1 hour per day',
        image: 'https://res-console.cloudinary.com/dazur1hks/thumbnails/v1/image/upload/v1755286763/V2hhdHNBcHBfSW1hZ2VfMjAyNS0wOC0xNV9hdF8xNi4wMS4zM18xNzY2MjQ3MF9pNGF2anc=/drilldown'
      },
      '/pp': {
        title: 'GH - The No Stress Band 8 IELTS Program',
        description: 'A Coaching Program designed for busy professionals who want to pass IELTS once without Stress.',
        image: 'https://res-console.cloudinary.com/dazur1hks/thumbnails/v1/image/upload/v1755286763/Ym9va195eHB3cjc=/drilldown'
      }
    };

    // Get current route data or default
    const currentMeta = metaData[location.pathname] || metaData['/'];
    const baseUrl = 'https://ghv2.vercel.app/';

    // Update document title
    document.title = currentMeta.title;

    // Function to update or create meta tag
    const updateMetaTag = (property, content, isName = false) => {
      const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`;
      let metaTag = document.querySelector(selector);
      
      if (metaTag) {
        metaTag.setAttribute('content', content);
      } else {
        metaTag = document.createElement('meta');
        if (isName) {
          metaTag.setAttribute('name', property);
        } else {
          metaTag.setAttribute('property', property);
        }
        metaTag.setAttribute('content', content);
        document.head.appendChild(metaTag);
      }
    };

    // Update Open Graph tags
    updateMetaTag('og:title', currentMeta.title);
    updateMetaTag('og:description', currentMeta.description);
    updateMetaTag('og:image', currentMeta.image);
    updateMetaTag('og:url', `${baseUrl}${location.pathname}`);
    updateMetaTag('og:type', 'website');
    updateMetaTag('og:site_name', 'GH - IELTS Tutorials');
    updateMetaTag('og:image:width', '1200');
    updateMetaTag('og:image:height', '630');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:title', currentMeta.title, true);
    updateMetaTag('twitter:description', currentMeta.description, true);
    updateMetaTag('twitter:image', currentMeta.image, true);

    // Update standard meta tags
    updateMetaTag('description', currentMeta.description, true);

  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default MetaTags;
