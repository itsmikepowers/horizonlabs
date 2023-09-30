import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import { Link } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        '*[_type == "post"] { title, slug, mainImage, excerpt, body, categories[]->{title} }'
      )
      .then(data => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);

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
            backgroundColor: 'white', // Changed from grey to white
            borderRadius: '15px', 
            overflow: 'hidden', 
            boxShadow: '0 8px 15px rgba(34, 139, 245, 0.1)' 
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
          <div style={{ padding: '24px' }}>
            <div style={{ color: '#228bf5', textAlign: 'left' }}>
              {post.categories && post.categories.map((category, index, array) => (
                <span key={category.title}>
                  <Link to={`/blog/${category.title.toLowerCase()}`}
                  style={{ 
                      color: '#228bf5', 
                      textTransform: 'uppercase', // Add this line
                      fontSize: '0.8em'  // And this line
                    }}>{category.title}
                  </Link>
                  {index !== array.length - 1 && <span style={{ color: 'black' }}>, </span>}
                </span>
              ))}
            </div>
            <h2 style={{ textAlign: 'left', fontSize: '1.5em', fontWeight: '500', marginTop: '15px', marginBottom:'15px' }}>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPosts;
