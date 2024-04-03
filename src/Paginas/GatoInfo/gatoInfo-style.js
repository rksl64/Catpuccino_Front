import styled from "styled-components";

const Background = styled.main`
    margin: 0;
    background-color: #FAF9F6;
`;

const TopBanner = styled.section`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 13rem;
    width: auto;
    color: #fff;

    h1{
        font-weight: bold;
        text-align: center;
        font-size: 3.8em;
    }
`;

const Main = styled.main`
    background-color: #FAF9F6;

    .border-irregular1{
        border-radius: 155px 45px 225px 75px/15px 125px 15px 155px;
        background-color: #ecc8af;
        padding: 1.8rem;
    }

    .border-irregular2{ 
        border-radius: 75px 125px 45px 155px/155px 15px 155px 15px;
    }
    
    .img-fluid{
        max-width: 100%;
        height: 'auto';
        margin-right: 1rem;
    }

    .icon-name{
        display: flex;
        align-items: center; 
        margin-bottom: 2rem;
        
        img {
            height: 4rem;
            width: 'auto',
        }
    }
    
    .cat-name{
      text-transform: uppercase;
    }

    .cat-data{
        width: 28rem
    }

    .cat-li{
        padding: .3rem;
    }

    .short-description{

    }

    .heartPaw{
        height: 1.5rem;
        width: 'auto';
        margin-right: 0.5rem;
    }

    .about-cat{
      color: #808080;

      h3{
        font-size: 2.3rem;
        letter-spacing: -1px;
      }

      .cat-list{
        margin: 1.5rem 0;
        font-weight: bold;
      }

      .rules{
        background-color: #c18c5d;
        padding: 1rem;
        color: #fff;
        border-radius: 1rem;
        
        h6{
          font-size: 1.4em;
          margin-bottom: 1rem;
        }
      }

      .back-button{
        border-radius: 355px 45px 225px 75px/15px 225px 15px 255px;
        background-color: #ce796b;
        border: none;
        padding: 0.7rem 2.5rem;
        margin-top: 1rem;
        color: white;

        i{
          margin-right: .6rem;
        }
      }

    }



    .like-button {


      border: none;
      background-color: #ce796b;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.25);
      color: #fff;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
      position: relative;
      overflow: hidden;

      border-radius: 355px 45px 225px 75px/15px 225px 15px 255px;
      border: none;
      padding: 0.3rem 2.5rem;
      margin-top: 1rem;
      color: white;
      width: auto !important;

      p{
        margin-left: 3rem;
        margin-top: 1rem;
        font-family: 'Quicksand', sans-serif;
      }
    }
    
    .like-button:before {
      content: "\\2764"; /* Heart Icon */
      font-size: 50px;
      color: #fff;
      position: absolute;
      top: 50%;
      left: 20%;
      transform: translate(-50%, -50%) scale(0);
      transition: transform 0.3s ease-in-out;
    }
    
    .like-button:hover {
      animation: heartBeat 0.6s infinite;
    }
    
    .like-button:hover:before {
      transform: translate(-50%, -50%) scale(1);
    }
    
    .like-button:active:after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    
    @keyframes heartBeat {
      from {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      to {
        transform: scale(1);
      }
        
        
    }







      

`;
      
export { Background, TopBanner, Main };