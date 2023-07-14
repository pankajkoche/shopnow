import React, { useState } from 'react';
import styled from 'styled-components';
import { RiArrowLeftSFill, RiArrowRightSFill } from 'react-icons/ri';
import { slideData } from '../../../staticData';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex((slideIndex) => (slideIndex > 0 ? slideIndex - 1 : 2));
    } else {
      setSlideIndex((slideIndex) => (slideIndex < 2 ? slideIndex + 1 : 0));
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <RiArrowLeftSFill />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map((item) => (
          <Slide key={item.title} bg={item.bg}>
            <ImgContainer>
              <Image src={item.Img} alt={item.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <button className='className="bg-transparent border border-solid border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white py-2 px-4 rounded"'>
                Shop Now
              </button> 
                
              
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <RiArrowRightSFill />
      </Arrow>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: #00ff7f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.direction === 'left' ? '10px' : null)};
  right: ${(props) => (props.direction === 'right' ? '10px' : null)};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 90px;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h2`
  font-size: 60px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 16px;
  }
`;

const Image = styled.img`
  height: 80%;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: ${(props) => props.theme.secondaryColor};
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
