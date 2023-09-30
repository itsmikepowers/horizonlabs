import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import { Link, useLocation } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import { Box, Grid, Image, Text, Heading } from '@chakra-ui/react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
  return builder.image(source);
}

const RelatedPost = ({ category }) => {
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && categories[]._ref match *[_type == "category" && title == $category]._id] { title, slug, mainImage, excerpt, categories[]->{title} }[0...4]`,
        { category }
      )
      .then(data => {
        setPosts(data);
      })
      .catch(console.error);
  }, [category]);

  return (
    <Box pt="30px" mt="30px" pb="60px" bg="#f7f7f7" px={{ base: "20px", md: "30px", lg: "40px" }}>
      <Heading textAlign='center' m='20px 0' color='black' fontSize='2em' fontWeight='bold'>
        Related Articles
      </Heading>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap='20px'
        margin='auto'
        maxWidth='1200px'
        paddingTop='20px'
        paddingBottom='20px'
      >
        {posts.map(post => (
          <Box
            as={Link}
            to={`/${post.slug.current}`}
            key={post.slug.current}
            width='100%'
            textDecoration='none'
            color='black'
            backgroundColor='white'
            borderRadius='10px'
            overflow='hidden'
            boxShadow='0 4px 8px rgba(34, 139, 245, 0.1)'
          >
            {post.mainImage && (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                width='100%'
                objectFit='cover'
              />
            )}
            <Box p='24px'>
              <Text color='#228bf5' textAlign='left'>
                {post.categories && post.categories.map((category, index, array) => (
                  <span key={category.title}>
                    <Link to={`/blog/${category.title.toLowerCase()}`} color='#228bf5' textTransform='uppercase' fontSize='0.8em'>
                      {category.title}
                    </Link>
                    {index !== array.length - 1 && <span color='black'>, </span>}
                  </span>
                ))}
              </Text>
              <Heading textAlign='left' fontSize='1.5em' fontWeight='500' mt='5px' mb='5px'>
                {post.title}
              </Heading>
              <Text>{post.excerpt}</Text>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default RelatedPost;
