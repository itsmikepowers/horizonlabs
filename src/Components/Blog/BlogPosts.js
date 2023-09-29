// src/components/BlogPosts.js
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
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', margin: 'auto', maxWidth: '800px' }}>
      {posts.map(post => (
        <Link 
          to={`/${post.slug.current}`}
          key={post.slug.current}
          style={{ 
            width: '100%', 
            margin: '10px', 
            textDecoration: 'none', 
            color: 'black', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '10px', 
            overflow: 'hidden' 
          }}
        >
          <div style={{ width: '100%', overflow: 'hidden' }}> {/* Container for the image */}
            {post.mainImage && (
              <img 
                src={urlFor(post.mainImage).url()} 
                alt={post.title} 
                style={{ width: '100%', objectFit: 'cover' }} 
              />
            )}
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ color: '#6772f5', textAlign: 'left', fontWeight: 'bold' }}>
              {post.categories && post.categories.map(category => (
                <p key={category.title}>{category.title}</p>
              ))}
            </div>
            <h2 style={{ textAlign: 'left', fontSize: '1.5em' }}>{post.title}</h2>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogPosts;
