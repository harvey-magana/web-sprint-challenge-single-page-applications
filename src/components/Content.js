import React from "react";
import styled from 'styled-components';
import mcdonalds from '../images/sepet-wqyanQ8ibTE-unsplash.jpg';
import sweetgreen from '../images/aubrey-odom-oD9apEToXAY-unsplash.jpg';
import starbucks from '../images/charles-koh-FuV0TOMzySc-unsplash.jpg';

const ContentContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  flex-basis: calc(33.333% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;

const ContentTitle = styled.h2`
    max-width: 1010px;
    width: 100%;
    margin: 0 auto;
`;

const ThumbContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ThumbFigure = styled.figure`
    & mcdonalds {
        flex: 1.0;
    }
    & sweetgreen {
        flex: 1.0;
    }
    & starbucks {
        flex: 1.0;
    }
`;

const ThumbnailImg = styled.img`
    width: 100%;
    height: auto;
    vertical-align: middle;
`;

const ThumbFigureCaption = styled.figcaption``;

const CalloutTime = styled.div``;

const CalloutPrice = styled.div``;

const Content = () => {
  return (
    <ContentContainer>
        <ContentTitle>Food Delivery in Gotham</ContentTitle>
        <ThumbContainer>
            <ThumbFigure>
                <ThumbnailImg src={mcdonalds}  className="mcdonalds" />
                <ThumbFigureCaption>
                    Mc Donald's
                    <CalloutTime>20-30 min</CalloutTime>
                    <CalloutPrice>$5.99 Delivery Fee</CalloutPrice>
                </ThumbFigureCaption>
            </ThumbFigure>
            <ThumbFigure>
                <ThumbnailImg src={sweetgreen} className="sweetgreen" />
                <ThumbFigureCaption>
                    Sweetgreen
                    <CalloutTime>30-45 min</CalloutTime>
                    <CalloutPrice>$4.99 Delivery Fee</CalloutPrice>
                </ThumbFigureCaption>
            </ThumbFigure>
            <ThumbFigure>
                <ThumbnailImg src={starbucks} className="starbucks" />
                <ThumbFigureCaption>
                    Starbucks
                    <CalloutTime>10-20 min</CalloutTime>
                    <CalloutPrice>$3.99 Delivery Fee</CalloutPrice>
                </ThumbFigureCaption>
            </ThumbFigure>
        </ThumbContainer>
    </ContentContainer>
  );
};
export default Content;