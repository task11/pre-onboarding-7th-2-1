import styled from 'styled-components';

const StyledListHeaderLayout = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor.accent};
  padding: 20px;
`;

export default StyledListHeaderLayout;
