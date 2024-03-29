import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import styled from 'styled-components'
import {sliderItems} from "../data"
import { mobile } from '../responsive'
const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   position: relative;
   overflow: hidden;
   ${mobile({
      display: "none"
     })}
   

`
const Arrow= styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50px;
   display:flex;
   align-items:center;
   justify-content:center;
   position: absolute;
   top:0;
   bottom:0;
   left: ${props=>props.direction === "left" && "10px"};
   right: ${props=>props.direction === "right" && "10px"};
   cursor:pointer;
   margin:auto;
   opacity:0.5;
   z-index:2;




`
const Wrapper = styled.div`
   height: 100%;
   display:flex;
   transition: all 1.5s ease;
   transform: translateX(${props=>props.slideIndex * -100}vw)


`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items:center;
  background-color: #${props=>props.bg}



`
const ImgContainer = styled.div`
   height:100%;
   flex: 1;


`

const Image = styled.img`
  height:80%;


`
const InfoContainer = styled.div`
  flex:1;
  padding: 50px;


`

const Title= styled.h1``
const Desc= styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;


`
const Button= styled.button`
   padding:10px;
   font-size:20px;
   background-color:transparent;
   cursor: pointer;
   transition: all 0.5s ease;
   &:hover{
      // background-color: #e9f5f5;
      transform: scale(1.3);
      
      cursor:pointer;
     }
  


`

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   const handleClick =(direction)=>{
      if(direction === "left"){
         setSlideIndex(slideIndex > 0? slideIndex -1 : 2)
      }else{
         setSlideIndex(slideIndex < 2? slideIndex + 1: 0)
      }

   }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
             <ArrowLeftOutlined />
           

        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map(item=>(
             <Slide bg={item.bg} key={item.id}>
             <ImgContainer>
                <Image src={item.img}/>
                {/* <Image src="https://img.freepik.com/free-photo/young-african-american-woman-shopping-with-colorful-packs-blue-background-attractive-female-model_155003-41700.jpg?size=626&ext=jpg&ga=GA1.1.1897073815.1690739084&semt=ais"/> */}
                {/* <Image src="https://img.freepik.com/free-photo/young-woman-shopping-clothes_23-2149187291.jpg?size=626&ext=jpg&ga=GA1.1.1897073815.1690739084&semt=ais"/> */}
             
             </ImgContainer>
             <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                 <Button>SHOP NOW</Button>
             </InfoContainer>
             </Slide>
             

          ))}
          
            
        </Wrapper>
        <Arrow  direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
        </Arrow>
      
    </Container>
  )
}

export default Slider
