import React, { useState, useEffect } from 'react';
import sanityClient from '../../lib/sanityClient';
import BlockContent from '@sanity/block-content-to-react';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import { Flex, Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { JsonLd } from 'react-schemaorg';
import { FaYoutube, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import RelatedPost from './RelatedPost';




const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const PostPage = () => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
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
          categories[]->{title},  // Add this line to fetch categories
          publishedAt,
          author->{
            name, 
            image, 
            bio,
            youtube,
            linkedin,
            instagram,
            x
          }
        }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
        setLoading(false);
      })
      .catch(console.error);
  }, [slug]);

  if (loading && !postData) return null;

  const headings = postData?.body
    ?.filter(block => ['h1', 'h2', 'h3'].includes(block.style))
    ?.map((block) => {
      return { text: block.children[0].text, style: block.style };
    }) || [];

  const handleHeadingClick = index => {
    const searchText = headings[index].text;
    const elements = document.querySelectorAll('h1, h2, h3');
    let elementToScrollTo;

    elements.forEach(element => {
      if (element.textContent === searchText) {
        elementToScrollTo = element;
      }
    });

    if (elementToScrollTo) {
      elementToScrollTo.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const formattedDate = new Date(postData?.publishedAt).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const socials = [
    { icon: FaYoutube, link: postData.author.youtube },
    { icon: FaLinkedin, link: postData.author.linkedin },
    { icon: FaInstagram, link: postData.author.instagram },
    { icon: FaTwitter, link: postData.author.x },
  ];

  return (
    <>
    <Flex maxWidth="1260px" margin="auto" marginTop="20px" px={{ base: "20px", md: "30px", lg: "40px" }}>
      <Helmet>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Helmet>
      <JsonLd
        item={{
          "@context": "http://schema.org",
          "@type": "Article",
          name: postData.title,
          author: {
            "@type": "Person",
            name: postData.author.name,
          },
          datePublished: new Date(postData.publishedAt),
          image: urlFor(postData.mainImage).url(),
        }}
      />
      <Box width="750px" marginRight={{ base: "0", md: "100px" }} color="black">
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', lineHeight: '1.2' }}>{postData.title}</h1>
        <div style={{ marginBottom: '15px', marginTop: '15px' }}>
          {postData.author && (
            <Flex align="center">
              {postData.author.image && (
                <img
                  src={urlFor(postData.author.image).url()}
                  alt={`Author ${postData.author.name}`}
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
            alt={`Post titled ${postData.title}`}
            style={{ width: '100%' }}
          />
        )}
        <p>{postData.excerpt}</p>
        {postData.body.map((block, index) => (
          <div key={index} id={`heading-${index}`}>
            <BlockContent 
              blocks={[block]} 
              serializers={{
                types: {
                  block: (props) => {
                    switch (props.node.style) {
                      case 'h1':
                        return <h1 style={{ fontSize: '2em', margin: '15px 0' }}>{props.children}</h1>;
                      case 'h2':
                        return <h2 style={{ fontSize: '1.6em', margin: '15px 0' }}>{props.children}</h2>;
                      case 'h3':
                        return <h3 style={{ fontSize: '1.6em', margin: '15px 0', color: '#228bf5' }}>{props.children}</h3>;
                      case 'normal':
                        return <p style={{ fontSize: '1.2em', margin: '15px 0', lineHeight: '1.8' }}>{props.children}</p>;
                      default:
                        return BlockContent.defaultSerializers.types.block(props);
                    }
                  }
                }
              }}
            />
          </div>
        ))}
        {/* Categories Section */}
        <div style={{ marginTop: '30px', marginBottom: '15px' }}>
          {postData.categories && postData.categories.map((category, index, array) => (
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

        {/* Added Footer section */}
        <footer style={{ 
            marginBottom: '30px',
            fontSize: '1em', 
            borderTop: '2px solid #a8a8a8', // Added border-top
            paddingTop: '15px', // Added padding-top
            color: '#a8a8a8' // Changed text color to gray
          }}>
            <p>
              Last Updated on {formattedDate} by{' '}
              {postData.author?.name || 'Unknown Author'}
            </p>
        </footer>
          {/* Author Bio Section */}
          {postData.author && (
            <Box 
              backgroundColor="white" 
              padding="20px" 
              borderRadius="10px" 
              boxShadow="0px 0px 15px rgba(0, 0, 0, 0.1)" // Added shadow
              marginTop="30px" // Added margin-top
              marginBottom="30px" // Added margin-bottom
            >
              <Flex       
                align={{ base: 'center', md: 'start' }} 
                direction={{ base: 'column', md: 'row' }} 
              >
                {postData.author.image && (
                  <img 
                    src={urlFor(postData.author.image).url()} 
                    alt={`Author ${postData.author.name}`}
                    style={{ 
                      width: '120px',
                      height: '120px',
                      marginRight: '30px', 
                      alignSelf: 'flex-start', 
                      borderRadius: '5px',
                      marginBottom: '10px',
                    }}
                  />
                )}
                <div>
                  <h2 style={{ marginBottom: '10px', fontWeight: 'bold', fontSize: '1.23em' }}>{postData.author.name}</h2>
                  <div style={{ lineHeight: '1.8' }}>
                    <BlockContent blocks={postData.author.bio} />
                  </div>
                  <div style={{ marginTop: '10px', display: 'flex' }}>
                    {socials.map((social, index) => (
                      social.link && (
                        <div 
                          key={index}
                          style={{
                            backgroundColor: '#228bf5',
                            padding: '5px',
                            borderRadius: '5px',
                            marginRight: '5px',
                          }}
                        >
                          <a href={social.link} target="_blank" rel="noopener noreferrer">
                            <social.icon size={20} color="white" /> 
                          </a>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              </Flex>
            </Box>
          )}
      </Box>
      <Box 
        width="350px" 
        backgroundColor="#fcfcfc"
        padding="20px" 
        color="black" 
        position="sticky" 
        top="20px" 
        height="fit-content"
        alignSelf="flex-start"
        borderRadius="15px"
        border="1px solid #d3d3d3"
        display={{ base: 'none', md: 'block' }} 
      >
        <div style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '10px', fontSize: '0.8em'  }}>Table of Contents</div>
        {headings.map((heading, index) => (
          <div 
            key={index} 
            style={{ 
              marginBottom: '10px', 
              fontSize: '0.8em', 
              cursor: 'pointer', 
              marginLeft: heading.style === 'h3' ? '20px' : '0px' 
            }} 
            onClick={() => handleHeadingClick(index)}
          >
            - {heading.text}
          </div>
        ))}
      </Box>
    </Flex>
     {postData.categories && <RelatedPost category={postData.categories[0].title} />}
     </>
  );
};

export default PostPage;
