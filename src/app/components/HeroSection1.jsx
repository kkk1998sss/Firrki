

"use client";

import Image from 'next/image';

const HeroSection1 = () => {
  const imageWrapperStyle = {
    position: 'relative',
    height: '16rem', // Adjust the height as needed
    width: '100%',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  };

  const largeImageStyle = {
    position: 'relative',
    height: '7rem', // Adjust the height as needed
    width: '100%',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
  };

  const imageStyle = {
    transition: 'transform 0.3s ease',
  };

  const hoverStyle = {
    transform: 'scale(1.1)',
  };

  const secondRowImages = ['/master10.jpeg', '/master11.jpeg', '/master12.jpeg', '/master13.jpeg'];
  const thirdRowImages = ['/master14.jpeg', '/master15.jpeg', '/master5.jpeg', '/master6.jpeg'];

  return (
    <>
      <div className="bg-gray-100 p-4">
        <div className="grid gap-4">
          {/* First row with one large image */}
          <div style={largeImageStyle}>
            <Image
              src="/master9.png"
              alt="Main Image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-md"
              style={imageStyle}
            />
          </div>
          
          {/* Second row with four images */}
          <div className="grid grid-cols-4 gap-4">
            {secondRowImages.map((src, index) => (
              <div
                key={index}
                style={imageWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = hoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'none')}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  style={imageStyle}
                />
              </div>
            ))}
          </div>

          {/* Third row with four images */}
          <div className="grid grid-cols-4 gap-4">
            {thirdRowImages.map((src, index) => (
              <div
                key={index + 4}
                style={imageWrapperStyle}
                onMouseEnter={(e) => (e.currentTarget.firstChild.style.transform = hoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.firstChild.style.transform = 'none')}
              >
                <Image
                  src={src}
                  alt={`Image ${index + 5}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  style={imageStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection1;

