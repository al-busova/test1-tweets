import styled from "@emotion/styled";

export const FooterStyled = styled.footer`
  padding: 20px 0;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: #e2a8ff;
  p {
    margin-bottom: 8px;
  }
  svg {
    color: #e2a8ff;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  svg:hover,
  svg:focus {
    transform: scale(1.1);
    color: #471ca9;
  }
`;
export const LinksContact = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
