import { Container } from "../commonStyles/Container.styled";
import { FooterStyled, LinksContact } from "./Footer.styled";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <p>Developer: Alona Busova</p>
        <LinksContact>
          <li>
            <a href="mailto:alona.busova@gmail.com">
              <HiOutlineMail />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/al-busova"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alona-busova-6331b9172"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </LinksContact>
      </Container>
    </FooterStyled>
  );
};
