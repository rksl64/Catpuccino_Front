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
        font-family: 'Quicksand', sans-serif;
        font-weight: bold;
        text-align: center;
        font-size: 3.8em;
    }
`;

const Main = styled.main`

    width: 85%;
    background-color: #FAF9F6;


    h2, h3, button{
        font-family: 'Quicksand', sans-serif;
    }

    p, li{
        font-family: "Manrope", sans-serif;
    }
    

    .introduccion{
        text-align: center;

        max-width: 50%;
        margin-left: auto;
        margin-right: auto;

        h2{
            font-size: 2.5em;
            color: #808080;
            padding-bottom: 2rem;
        }

        p{
            color: #808080;
        }
    }



    .row{
        display: flex;
        flex-wrap: wrap;
        padding: 0;

        .adopt-card{
            transition: all 0.3s ease-in-out;
            padding: 0 0.8rem 4.5rem 0.8rem;
        }

        .adopt-card:hover{
            margin-top: -20px;
        }

        .card{
            border-radius: 155px 45px 225px 75px/15px 125px 15px 155px;
            background-color: #ecc8af;
            padding: 2.2rem;
            border: 0;

            .border-irregular1{
                border-radius: 155px 45px 225px 75px/15px 125px 15px 155px;
            }

            .img-fluid{
                max-width: 100%;
                height: 'auto';
            }


            .card-info{
                h3{
                    font-size: 1.8rem;
                    font-weight: bold;
                    margin: 1.6rem 1.8rem;
                    color: #675444
                }

                li{
                    color: #808080;
                    font-size: 0.9rem;
                }

            }

            button{
                border-radius: 355px 45px 225px 75px/15px 225px 15px 255px;
                background-color: #ce796b;
                border: none;
                padding: 0.7rem 2.5rem;
                margin-top: 1rem;
                color: white;
            }
        }


    }
`;


export { Background, TopBanner, Main };
