// CategoryPosts.js
import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import { useParams, Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

// Function to convert a string to title case
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  let { category } = useParams(); // get category from URL
  category = toTitleCase(category); // convert category to title case
  console.log("Category from URL:", category);

  useEffect(() => {
    // Start with a simple query to fetch all posts
    let query = `*[_type == "post"] { title, slug, mainImage, excerpt, body, categories[]->{title} }`;
    console.log("Query:", query); // Debugging Line
    sanityClient
      .fetch(query)
      .then(data => {
        console.log("Fetched Data:", data); // Debugging Line

        // Then filter the posts in JavaScript
        const filteredPosts = data.filter(post => 
          post.categories.some(cat => cat.title === category)
        );
        setPosts(filteredPosts);
      })
      .catch(console.error);
  }, [category]);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', margin: 'auto', maxWidth: '800px', paddingTop: '20px', paddingBottom: '20px' }}>
      {posts.map(post => (
        <Link 
          to={`/${post.slug.current}`}
          key={post.slug.current}
          style={{ 
            width: '100%', 
            textDecoration: 'none', 
            color: 'black', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '15px', 
            overflow: 'hidden' 
          }}
        >
          <div style={{ width: '100%', overflow: 'hidden' }}>
            {post.mainImage && (
              <img 
                src={urlFor(post.mainImage).url()} 
                alt={post.title} 
                style={{ width: '100%', objectFit: 'cover' }} 
              />
            )}
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ color: '#228bf5', textAlign: 'left' }}>
              {post.categories && post.categories.map((category, index, array) => (
                <span key={category.title}>
                  <Link to={`/blog/${category.title}`} style={{ color: '#228bf5' }}>{category.title}</Link>
                  {index !== array.length - 1 && <span style={{ color: 'black' }}>, </span>}
                </span>
              ))}
            </div>
            <h2 style={{ textAlign: 'left', fontSize: '1.5em', fontWeight: '500' }}>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPosts;
