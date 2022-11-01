import styled from 'styled-components';

const StyledButton = styled.button`
  ${(props) => props.sizestyle}
  ${(props) => props.variantStyle}
  ${(props) => props.isActive && 'cursor: pointer'};
  margin: 0;
  border: none;
  font-weight: 700;
  font-size: var(--button-font-size, 14px);
  padding: var(--button-padding, 5px 18px);
  border-radius: var(--button-radius, 64px);
  color: var(--button-color, ${(props) => props.theme.textColor.default});
  background: var(--button-bg-color, ${(props) => props.theme.btnColor.default});

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, ${(props) => props.theme.btnColor.default});
  }
`;

export default StyledButton;
