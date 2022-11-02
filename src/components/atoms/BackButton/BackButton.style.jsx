import styled from 'styled-components';

import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';
import { Link } from 'react-router-dom';

export const StyledBackButton = styled(IoMdArrowBack)`
  ${(props) => props.sizestyle}

  position: absolute;
  margin: 0;
  border: none;
  top: 18px;
  left: 20px;
  font-size: var(--backButton-font-size, 24px);
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  &:visited {
    color: ${(props) => props.theme.textColor.default};
  }
`;
