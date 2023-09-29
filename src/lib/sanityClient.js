// src/lib/sanityClient.js
import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '0wla9abw', // you can find this in sanity.json
  dataset: 'production', // or the name of your dataset
  useCdn: true // `false` if you want to ensure fresh data
});
