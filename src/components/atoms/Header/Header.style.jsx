import styled from 'styled-components';

const StyledHeader = styled.div`
  ${(props) => props.sizestyle}

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--header-width, 100%);
  height: var(--header-height, 60px);
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`;

export default StyledHeader;
