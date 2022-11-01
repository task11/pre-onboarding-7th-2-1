import styled from 'styled-components';

const StyledImage = styled.img`
  ${(props) => props.sizestyle}

  width: var(--image-width, 152px);
  height: var(--image-height, 80px);
`;

export default StyledImage;
