import styled from 'styled-components';

const StyledListHeader = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor.accent};
`;

export default StyledListHeader;
