import styled from 'styled-components';

const StyledButton = styled.button`
  ${(props) => props.sizeStyle}
  ${(props) => props.variantStyle}
  ${(props) => props.isActive && 'cursor: pointer'};
  margin: 0;
  border: none;
  font-weight: 700;
  font-size: var(--button-font-size, 1.4rem);
  padding: var(--button-padding, 5px 18px);
  border-radius: var(--button-radius, 64px);
  color: var(--button-color, #000000);
  background: var(--button-bg-color, #D9D9D9);
  
  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #D9D9D9);
  }
`;

export default StyledButton;
