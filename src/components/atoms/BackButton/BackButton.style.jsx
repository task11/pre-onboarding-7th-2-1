import styled from 'styled-components';

import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';

const StyledBackButton = styled(IoMdArrowBack)`
  ${(props) => props.sizestyle}

  position: absolute;
  margin: 0;
  border: none;
  top: 18px;
  left: 20px;
  font-size: var(--backButton-font-size, 24px);
  cursor: pointer;
`;

export default StyledBackButton;
