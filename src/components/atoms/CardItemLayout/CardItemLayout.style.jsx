import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledCardItemLayout = styled(Link)`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
  padding: 20px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    scale: calc(1.05);
  }
`;

export default StyledCardItemLayout;
