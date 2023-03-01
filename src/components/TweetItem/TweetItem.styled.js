import styled from "@emotion/styled";
import frame from "../../static_images/frame.png";
import logo from "../../static_images/logo.png";
import decor_top from "../../static_images/dekor_top_card.png";

export const CardTweet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background: url("${logo}"), url("${decor_top}"),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-size: auto, auto, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: top 20px left 20px, top 28px left 36px, center;
`;
export const WrapperContent = styled.div`
  padding-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 26px;
  height: 238px;
  > div p:not(:last-child) {
    margin-bottom: 16px;
  }
`;
export const Line = styled.div`
  position: absolute;
  top: 210px;
  left: 0;
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const FrameImg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #5736a3;
  border-radius: 50%;
  background-image: url("${frame}");
  background-size: 112%;
  background-repeat: no-repeat;
  background-position: top;
`;
export const Avatar = styled.img`
  height: 64px;
  border-radius: 50%;
`;
export const Description = styled.p`
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
  text-align: center;
`;
export const BtnFollow = styled.button`
  min-width: 196px;
  padding: 14px 0;
  background-color: ${(props) =>
    props.follow === true ? "#5CD3A8" : "#EBD8FF"};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-color: transparent;
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  text-align: center;
  color: #373737;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    cursor: pointer;
    background-color: #fba8f2;
    transform: scale(1.1);
  }
`;
