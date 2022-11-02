import styled from 'styled-components';

const StyledCardItemLayout = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: ${(props) => props.theme.border.default};
  cursor: pointer;
`;

export default StyledCardItemLayout;
