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

// Define custom serializers
const serializers = {
  types: {
    block: (props) => {
      // Check the style of the block content
      switch (props.node.style) {
        case 'h1':
          return <h1 style={{ fontSize: '2em', margin: '15px 0' }}>{props.children}</h1>;
        case 'h2':
          return <h2 style={{ fontSize: '1.6em', margin: '15px 0' }}>{props.children}</h2>;
        case 'h3':
          return <h3 style={{ fontSize: '1.6em', margin: '15px 0', color: '#228bf5'  }}>{props.children}</h3>;
      case 'normal':
          return <p style={{ fontSize: '1.2em', margin: '15px 0', lineHeight: '1.8' }}>{props.children}</p>;
        default:
          return BlockContent.defaultSerializers.types.block(props);
      }
    },
  },
};

const PostPage = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state
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
      .then((data) => {
        setPostData(data[0]);
        setLoading(false); // Set loading to false after fetching the data
      })
      .catch(console.error);
  }, [slug]);

  // If loading and no postData, return null
  if (loading && !postData) return null;

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
            style={{ width: '100%' }}
          />
        )}
        <p>{postData.excerpt}</p>
        <BlockContent blocks={postData.body} serializers={serializers} style={{ lineHeight: '2' }} />
      </Box>
      <Box width="350px" backgroundColor="gray.200" padding="20px" color="black">
        {/* You can put any content you want in the gray box here */}
      </Box>
    </Flex>
  );
};

export default PostPage;
