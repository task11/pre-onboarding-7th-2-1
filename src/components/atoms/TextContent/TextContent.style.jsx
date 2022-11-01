import styled from 'styled-components';

const StyledTextContent = styled.span`
  ${(props) => props.sizestyle}
  ${(props) => props.variantStyle}

  font-weight: var(--textContent-font-weight, 700);
  font-size: var(--textContent-font-size, 14px);
  color: var(--textContent-color, ${(props) => props.theme.textColor.default});
`;

export default StyledTextContent;
