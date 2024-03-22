import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    color: #444444;
  }
`;

// Estilos para los enlaces
export const Link = styled.a`
  text-decoration: none;
  color: #ffb03b;

  &:hover {
    color: #ffc56e;
    text-decoration: none;
  }
`;

// Estilos para los encabezados h1-h6
export const Heading = styled.h1`
  font-family: "Satisfy", sans-serif;
`;

export const BackToTopButton = styled.button`
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: #ffb03b;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;

  &:hover {
    background: #ffc064;
    color: #fff;
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;

export const Icon = styled.i`
  font-size: 28px;
  color: #fff;
  line-height: 0;
`;

export const SecondaryIcon = styled.i`
  color: #ffb03b;
  line-height: 0;

  span {
    color: #fff;
    font-style: normal;
    padding-left: 5px;
  }
`;

export const Topbar = styled.div`
  padding: 0;
  font-size: 15px;
  height: 50px;
  transition: all 0.5s;
  background: rgba(26, 24, 22, 0.8);
  z-index: 996;
  color: rgba(255, 255, 255, 0.7);

  &.topbar-transparent {
    background: transparent;
  }

  &.topbar-scrolled {
    top: -50px;
  }
`;
export const Header = styled.div`
  top: 50px;
  height: 70px;
  z-index: 997;
  transition: all 0.5s;
  padding: 10px 0;
  background: rgba(26, 24, 22, 0.85);

  &.header-transparent {
    background: transparent;
  }

  &.header-scrolled {
    top: 0;
    background: rgba(26, 24, 22, 0.85);
  }
`;

export const Logo = styled.div`
  h1 {
    font-size: 28px;
    margin: 0;
    line-height: 1;
    font-weight: 400;
    letter-spacing: 3px;

    a,
    a:hover {
      color: #fff;
      text-decoration: none;
    }
  }

  img {
    padding: 0;
    margin: 0;
    max-height: 40px;
  }
`;

export const BookTableButton = styled.button`
  background: #ffb03b;
  color: #fff;
  border-radius: 50px;
  margin: 0 0 0 20px;
  padding: 10px 25px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    background: #ffa012;
    color: #fff;
  }

  @media (max-width: 992px) {
    margin: 0 15px 0 0;
    padding: 8px 20px;
    letter-spacing: 1px;
  }
`;

export const Navbar = styled.nav`
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
  }

  li {
    position: relative;
  }

  a,
  a:focus {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 10px 24px;
    font-size: 15px;
    font-weight: 500;
    color: white;
    white-space: nowrap;
    transition: 0.3s;

    i,
    &:focus i {
      font-size: 12px;
      line-height: 0;
      margin-left: 5px;
    }
  }

  a:hover,
  .active,
  .active:focus,
  li:hover > a {
    color: #ffb03b;
  }

  .dropdown ul {
    display: block;
    position: absolute;
    left: 24px;
    top: calc(100% + 30px);
    margin: 0;
    padding: 10px 0;
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
    border-radius: 4px;
    min-width: 200px;

    a {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 400;
      color: #433f39;

      i {
        font-size: 12px;
      }
    }

    a:hover,
    .active:hover,
    li:hover > a {
      color: #ffb03b;
    }
  }

  .dropdown:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
  }

  .dropdown .dropdown ul {
    top: 0;
    left: calc(100% - 30px);
    visibility: hidden;
  }

  .dropdown .dropdown:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
    visibility: visible;
  }

  @media (max-width: 1366px) {
    .dropdown .dropdown ul {
      left: -90%;
    }

    .dropdown .dropdown:hover > ul {
      left: -100%;
    }
  }
`;

// Estilos para el botón de alternar navegación móvil
export const MobileNavToggle = styled.div`
  color: #fff;
  font-size: 28px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;

  @media (max-width: 991px) {
    display: block;
  }
`;

// Estilos para la barra de navegación móvil
export const NavbarMobile = styled.nav`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(39, 37, 34, 0.9);
  transition: 0.3s;
  z-index: 0;

  .mobile-nav-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  ul {
    display: block;
    position: absolute;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    padding: 10px 0;
    border-radius: 8px;
    background-color: #fff;
    overflow-y: auto;
    transition: 0.3s;

    a,
    a:focus {
      padding: 10px 20px;
      font-size: 15px;
      color: #433f39;
    }

    a:hover,
    .active,
    li:hover > a {
      color: #ffb03b;
    }
  }

  .getstarted,
  .getstarted:focus {
    margin: 15px;
  }

  .dropdown ul {
    position: static;
    display: none;
    margin: 10px 20px;
    padding: 10px 0;
    z-index: 99;
    opacity: 1;
    visibility: visible;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  }

  .dropdown ul li {
    min-width: 200px;
  }

  .dropdown ul a {
    padding: 10px 20px;
  }

  .dropdown ul a i {
    font-size: 12px;
  }

  .dropdown ul a:hover,
  .dropdown ul .active:hover,
  .dropdown ul li:hover > a {
    color: #ffb03b;
  }

  .dropdown > .dropdown-active {
    display: block;
  }
`;

// Estilos para la sección de héroe
export const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(39, 37, 34, 0.8);
  overflow: hidden;
  padding: 0;

  .carousel-item {
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &::before {
      content: "";
      background-color: rgba(12, 11, 10, 0.5);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
  }

  .carousel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;

    .carousel-content {
      text-align: center;

      h2 {
        color: #fff;
        margin-bottom: 30px;
        font-size: 48px;
        font-weight: 700;

        span {
          color: #ffb03b;
        }
      }

      p {
        width: 80%;
        animation-delay: 0.4s;
        margin: 0 auto 30px auto;
        color: #fff;
      }
    }
  }

  .carousel-inner .carousel-item {
    transition-property: opacity;
    background-position: center top;
  }

  .carousel-inner .carousel-item,
  .carousel-inner .active.carousel-item-start,
  .carousel-inner .active.carousel-item-end {
    opacity: 0;
  }

  .carousel-inner .active,
  .carousel-inner .carousel-item-next.carousel-item-start,
  .carousel-inner .carousel-item-prev.carousel-item-end {
    opacity: 1;
    transition: 0.5s;
  }

  .carousel-inner .carousel-item-next,
  .carousel-inner .carousel-item-prev,
  .carousel-inner .active.carousel-item-start,
  .carousel-inner .active.carousel-item-end {
    left: 0;
    transform: translate3d(0, 0, 0);
  }

  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background: none;
    font-size: 30px;
    line-height: 0;
    width: auto;
    height: auto;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.5);
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .carousel-indicators li {
    cursor: pointer;
    list-style-type: none;
  }

  .btn-menu,
  .btn-book {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    transition: 0.5s;
    line-height: 1;
    margin: 0 10px;
    animation-delay: 0.8s;
    color: #fff;
    border: 2px solid #ffb03b;

    &:hover {
      background: #ffb03b;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 28px;
    }
  }

  @media (min-width: 1024px) {
    p {
      width: 50%;
    }

    .carousel-control-prev,
    .carousel-control-next {
      width: 5%;
    }
  }
`;

export const Section = styled.section`
  padding: 60px 0;
`;

export const SectionBackground = styled.div`
  background-color: white;
`;

export const SectionTitle = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    margin: 15px 0 0 0;
    font-size: 32px;
    font-weight: 700;
    color: #5f5950;

    span {
      color: #ffb03b;
    }
  }

  p {
    margin: 15px auto 0 auto;
    font-weight: 300;
  }

  @media (min-width: 1024px) {
    p {
      width: 50%;
    }
  }
`;

export const Breadcrumbs = styled.div`
  padding: 20px 0;
  background-color: #f2f1ef;
  min-height: 40px;
  margin-top: 120px;

  @media (max-width: 992px) {
    margin-top: 70px;
  }

  h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;

    @media (max-width: 992px) {
      margin: 0 0 10px 0;
    }
  }

  ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 14px;

    li + li {
      padding-left: 10px;
    }

    li + li::before {
      display: inline-block;
      padding-right: 10px;
      color: #6c757d;
      content: "/";
    }
  }

  @media (max-width: 768px) {
    .d-flex {
      display: block !important;
    }

    ol {
      display: block;
    }

    li {
      display: inline-block;
    }
  }
`;

export const AboutSection = styled.div`
  background: #fffaf3;
`;

export const AboutContent = styled.div`
  padding: 0 80px;

  h3 {
    font-weight: 400;
    font-size: 34px;
    color: #5f5950;
  }

  h4 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
  }

  p {
    font-size: 15px;
    color: #848484;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul li + li {
    margin-top: 15px;
  }

  ul li {
    position: relative;
    padding-left: 26px;
  }

  ul i {
    font-size: 20px;
    color: #ffb03b;
    position: absolute;
    left: 0;
    top: 2px;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const VideoBox = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 400px;
  position: relative;
`;

export const PlayButton = styled.div`
  width: 94px;
  height: 94px;
  background: radial-gradient(#ffb03b 50%, rgba(255, 176, 59, 0.4) 52%);
  border-radius: 50%;
  display: block;
  position: absolute;
  left: calc(50% - 47px);
  top: calc(50% - 47px);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 100;
    transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  &::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    animation-delay: 0s;
    animation: ${pulsate} 2s;
    animation-direction: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: steps;
    opacity: 1;
    border-radius: 50%;
    border: 5px solid rgba(255, 176, 59, 0.7);
    top: -15%;
    left: -15%;
    background: rgba(198, 16, 0, 0);
  }

  &:hover::after {
    border-left: 15px solid #ffb03b;
    transform: scale(20);
  }

  &:hover::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-40%) translateY(-50%);
    width: 0;
    height: 0;
    border: none;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    z-index: 200;
    animation: none;
    border-radius: 0;
  }
`;

const pulsate = keyframes`
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
`;

export const AccordionList = styled.div`
  @media (max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ResponsiveContent = styled.div`
  @media (max-width: 992px) {
    padding-top: 30px;
  }
`;

export const ResponsiveAccordionList = styled.div`
  @media (max-width: 992px) {
    padding-bottom: 30px;
  }
`;

export const WhyUsBox = styled.div`
  padding: 50px 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  height: 100%;

  &:hover {
    background: #ffb03b;
    padding: 30px 30px 70px 30px;
    box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
  }
`;

export const BoxSpan = styled.span`
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: ${({ hover }) => (hover ? "#fff" : "#ffcf88")};
`;

export const BoxTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  padding: 0;
  margin: 20px 0;
  color: ${({ hover }) => (hover ? "#fff" : "#6c665c")};
`;

export const BoxText = styled.p`
  color: ${({ hover }) => (hover ? "#fff" : "#aaaaaa")};
  font-size: 15px;
  margin: 0;
  padding: 0;
`;

export const MenuFilters = styled.ul`
  padding: 0;
  margin: 0 auto 0 auto;
  list-style: none;
  text-align: center;
  border-radius: 50px;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  display: inline-block;
  padding: 8px 16px 10px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ active }) => (active ? "#fff" : "#444444")};
  margin: 0 3px 10px 3px;
  transition: all ease-in-out 0.3s;
  background: ${({ active }) => (active ? "#ffb03b" : "#fff")};
  border: 2px solid #ffb03b;
  border-radius: 50px;

  &:hover {
    color: #fff;
    background: #ffb03b;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const MenuContent = styled.div`
  margin-top: 30px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: relative;

  &::after {
    content: "......................................................................"
      "...................................................................."
      "....................................................................";
    position: absolute;
    left: 20px;
    right: 0;
    top: -4px;
    z-index: 1;
    color: #dad8d4;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
`;

export const MenuLink = styled.a`
  padding-right: 10px;
  background: #fff;
  position: relative;
  z-index: 3;
  font-weight: 700;
  color: #ff9b08;
`;

export const MenuSpan = styled.span`
  background: #fff;
  position: relative;
  z-index: 3;
  padding: 0 10px;
  font-weight: 600;
`;

export const MenuIngredients = styled.p`
  font-style: italic;
  font-size: 14px;
  font-family: "Comic Neue", sans-serif;
  color: #948c81;
`;

export const SpecialsTabs = styled.nav`
  border: 0;
`;

export const SpecialsTabLink = styled.a`
  border: 0;
  padding: 12px 15px 12px 0;
  transition: 0.3s;
  color: #433f39;
  border-radius: 0;
  border-right: 2px solid #e8e7e4;
  font-weight: 600;
  font-size: 15px;

  &:hover {
    color: #ffb03b;
  }

  &.active {
    color: #ffb03b;
    border-color: #ffb03b;
  }
`;

export const SpecialsTabPane = styled.div`
  &.active {
    animation: fadeIn 0.5s ease-out;
  }
`;

export const SpecialsDetailsTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #433f39;
`;

export const SpecialsDetailsText = styled.p`
  color: #777777;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const EventsSection = styled.div`
  background: url("../../assets/img/events-bg.jpg") center center no-repeat;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    background-color: rgba(12, 11, 10, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .section-title h2 {
    color: #fff;
  }

  .container {
    position: relative;
  }

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }
`;

export const EventsCarousel = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 30px;
`;

export const EventItem = styled.div`
  color: #fff;

  h3 {
    font-weight: 600;
    font-size: 26px;
    color: #ffb03b;
  }

  .price {
    font-size: 26px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin-bottom: 15px;

    span {
      border-bottom: 2px solid #ffb03b;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      padding-bottom: 10px;

      i {
        font-size: 20px;
        padding-right: 4px;
        color: #ffb03b;
      }
    }
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const SwiperPagination = styled.div`
  margin-top: 20px;
  position: relative;

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: rgba(255, 255, 255, 0.5);
    opacity: 1;

    &-active {
      background-color: #ffb03b;
    }
  }
`;

export const BookATableForm = styled.div`
  width: 100%;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
  padding: 30px;
  background: #fff;

  .form-group {
    padding-bottom: 8px;
  }

  .validate {
    display: none;
    color: red;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
  }

  .error-message {
    display: none;
    color: #fff;
    background: #ed3c0d;
    text-align: left;
    padding: 15px;
    font-weight: 600;

    br + br {
      margin-top: 25px;
    }
  }

  .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;

    &:before {
      content: "";
      display: inline-block;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin: 0 10px -6px 0;
      border: 3px solid #18d26e;
      border-top-color: #eee;
      animation: animate-loading 1s linear infinite;
    }
  }

  input,
  textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  input {
    height: 44px;
  }

  textarea {
    padding: 10px 12px;
  }

  button[type="submit"] {
    background: #ffb03b;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;

    &:hover {
      background: #ffa012;
    }
  }
`;

export const GallerySection = styled.div`
  padding-bottom: 0;

  .gallery-item {
    overflow: hidden;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;

    img {
      transition: all ease-in-out 0.4s;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }
`;

export const ChefsSection = styled.div`
  background: url("../../assets/img/chefs-bg.jpg") center center no-repeat;
  background-size: cover;
  padding: 60px 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 9;
  }

  .container {
    position: relative;
    z-index: 10;
  }

  .member {
    text-align: center;
    margin-bottom: 80px;
    position: relative;
  }

  .member .pic {
    overflow: hidden;
  }

  .member .member-info {
    position: absolute;
    bottom: -80px;
    left: 20px;
    right: 20px;
    background: #fff;
    padding: 20px 0;
    color: #433f39;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: max-height 0.5s ease-in-out;
  }

  .member h4 {
    font-weight: 500;
    margin-bottom: 10px;
    font-size: 16px;
    color: #6c665c;
    position: relative;
    padding-bottom: 10px;
    font-family: "Poppins", sans-serif;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 50px;
      height: 1px;
      background: #ffcf88;
      bottom: 0;
      left: calc(50% - 25px);
    }
  }

  .member span {
    font-style: italic;
    display: block;
    font-size: 13px;
  }

  .member .social {
    margin-top: 15px;
  }

  .member .social a {
    transition: color 0.3s;
    color: #7a7368;

    &:hover {
      color: #ffb03b;
    }
  }

  .member .social i {
    font-size: 16px;
    margin: 0 2px;
  }

  @media (max-width: 992px) {
    .member {
      margin-bottom: 110px;
    }
  }

  @media (min-width: 1024px) {
    background-attachment: fixed;
  }
`;

export const TestimonialsSection = styled.div`
  padding: 80px 0;
  background: url("../../assets/img/testimonials-bg.jpg") no-repeat;
  background-position: center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(12, 11, 10, 0.7);
  }

  .section-header {
    margin-bottom: 40px;
  }

  .testimonials-carousel,
  .testimonials-slider {
    overflow: hidden;
  }

  .testimonial-item {
    text-align: center;
    color: #fff;
  }

  .testimonial-item .testimonial-img {
    width: 100px;
    border-radius: 50%;
    border: 6px solid rgba(255, 255, 255, 0.15);
    margin: 0 auto;
  }

  .testimonial-item h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #fff;
    font-family: "Poppins", sans-serif;
  }

  .testimonial-item h4 {
    font-size: 14px;
    color: #ddd;
    margin: 0 0 15px 0;
    font-family: "Comic Neue", sans-serif;
  }

  .testimonial-item .stars {
    color: #ffb03b;
    margin-bottom: 10px;
  }

  .testimonial-item .quote-icon-left,
  .testimonial-item .quote-icon-right {
    color: rgba(255, 255, 255, 0.4);
    font-size: 26px;
  }

  .testimonial-item .quote-icon-left {
    display: inline-block;
    left: -5px;
    position: relative;
  }

  .testimonial-item .quote-icon-right {
    display: inline-block;
    right: -5px;
    position: relative;
    top: 10px;
  }

  .testimonial-item p {
    font-style: italic;
    margin: 0 auto 15px auto;
    color: #eee;
  }

  .swiper-pagination {
    margin-top: 20px;
    position: relative;

    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background-color: #ffb03b;
    }
  }

  @media (min-width: 992px) {
    .testimonial-item p {
      width: 80%;
    }
  }
`;

export const ContactSection = styled.div`
  .info-wrap {
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }

  .info {
    background: #fff;
  }

  .info i {
    font-size: 20px;
    color: #ffb03b;
    float: left;
    width: 44px;
    height: 44px;
    background: #fff6e8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
  }

  .info h4 {
    padding: 0 0 0 60px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
    color: #433f39;
    font-family: "Poppins", sans-serif;
  }

  .info p {
    padding: 0 0 0 60px;
    margin-bottom: 0;
    font-size: 14px;
    color: #7a7368;
  }

  .info:hover i {
    background: #ffb03b;
    color: #fff;
  }

  .php-email-form {
    width: 100%;
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.12);
    padding: 30px;
    background: #fff;
  }

  .php-email-form .form-group {
    padding-bottom: 8px;
  }

  .php-email-form .error-message,
  .php-email-form .sent-message {
    display: none;
    color: #fff;
    text-align: center;
    padding: 15px;
    font-weight: 600;
  }

  .php-email-form .error-message {
    background: #ed3c0d;
  }

  .php-email-form .sent-message {
    background: #18d26e;
  }

  .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
  }

  .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    animation: animate-loading 1s linear infinite;
  }

  .php-email-form input,
  .php-email-form textarea {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
  }

  .php-email-form input {
    height: 44px;
  }

  .php-email-form textarea {
    padding: 10px 12px;
  }

  .php-email-form button[type="submit"] {
    background: #ffb03b;
    border: 0;
    padding: 10px 24px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
  }

  .php-email-form button[type="submit"]:hover {
    background: #ffa012;
  }

  @keyframes animate-loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const FooterContainer = styled.footer`
  background: #35322d;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
`;

export const FooterTitle = styled.h3`
  font-size: 36px;
  font-weight: 700;
  color: #ffb03b;
  position: relative;
  padding: 0;
  margin: 0 0 15px 0;
`;

export const FooterParagraph = styled.p`
  font-size: 15;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
`;

export const SocialLinks = styled.div`
  margin: 0 0 40px 0;
`;

export const SocialLink = styled.a`
  font-size: 18px;
  display: inline-block;
  background: #46423b;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;

  &:hover {
    background: #ffb03b;
  }
`;

export const Copyright = styled.div`
  margin: 0 0 5px 0;
`;

export const Credits = styled.div`
  font-size: 13px;
`;