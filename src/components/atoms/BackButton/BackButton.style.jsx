import styled from 'styled-components';

import { IoMdArrowBack } from '@react-icons/all-files/io/IoMdArrowBack';

const StyledBackButton = styled(IoMdArrowBack)`
  ${(props) => props.sizestyle}

  margin: 0;
  border: none;
  font-size: var(--backButton-font-size, 24px);
`;

export default StyledBackButton;
