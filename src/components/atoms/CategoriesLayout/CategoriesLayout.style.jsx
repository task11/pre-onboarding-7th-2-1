import styled from 'styled-components';

const StyledCategoriesLayout = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  height: 40px;
  gap: 8px;
  padding: 6px 12px;
  border-bottom: 1px solid ${(props) => props.theme.border.default};

  overflow: auto;
  white-space: nowrap;
`;

export default StyledCategoriesLayout;
