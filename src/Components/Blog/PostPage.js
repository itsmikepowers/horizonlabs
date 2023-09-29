// src/components/PostPage.js
import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import { Flex, Box } from '@chakra-ui/react';

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
          publishedAt,
          author->{name, image}
        }`,
        { slug }
      )
      .then(data => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div style={{ textAlign: 'center', color: 'black' }}>Loading...</div>;

  // Format the date
  const formattedDate = new Date(postData?.publishedAt).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Flex maxWidth="1200px" margin="auto" marginTop="20px">
      <Box width="750px" marginRight="100px" color="black">
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', lineHeight: '1.2' }}>{postData.title}</h1>
        <div style={{ marginBottom: '15px', marginTop: '15px' }}>
          {postData.author && (
            <Flex align="center">
              {postData.author.image && (
                <img
                  src={urlFor(postData.author.image).url()}
                  alt={postData.author.name}
                  style={{ width: '32px', height: '32px', borderRadius: '50%', marginRight: '10px' }}
                />
              )}
              <h4 style={{ fontWeight: 'normal', display: 'flex', alignItems: 'center' }}>
                {postData.author.name}
                <span style={{ marginLeft: '10px', fontSize: '1em' }}>&#8226;</span>
                <span style={{ marginLeft: '10px' }}>Updated {formattedDate}</span>
              </h4>
            </Flex>
          )}
        </div>
        {postData.mainImage && (
          <img
            src={urlFor(postData.mainImage).url()}
            alt={postData.title}
            style={{ maxWidth: '400px', width: '100%' }}
          />
        )}
        <p>{postData.excerpt}</p>
        <BlockContent blocks={postData.body} />
      </Box>
      <Box width="350px" backgroundColor="gray.200" padding="20px" color="black">
        {/* You can put any content you want in the gray box here */}
      </Box>
    </Flex>
  );
};

export default PostPage;
