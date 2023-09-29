// src/components/Post.js
import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';

// Function to build the image URL
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const PostPage = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] {
          title,
          slug,
          mainImage,
          excerpt,
          body,
          author->{name, image}
        }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div style={{ textAlign: 'center', color: 'black' }}>Loading...</div>;

  return (
    <div style={{ textAlign: 'center', color: 'black' }}>
      <h2>{postData.title}</h2>
      <div>
        {postData.author && (
          <>
            <h4>{postData.author.name}</h4>
            {postData.author.image && (
              <img src={urlFor(postData.author.image).url()} alt={postData.author.name} />
            )}
          </>
        )}
      </div>
      {postData.mainImage && (
        <img src={urlFor(postData.mainImage).url()} alt={postData.title} />
      )}
      <p>{postData.excerpt}</p>
      <BlockContent blocks={postData.body} />
    </div>
  );
};

export default PostPage;
