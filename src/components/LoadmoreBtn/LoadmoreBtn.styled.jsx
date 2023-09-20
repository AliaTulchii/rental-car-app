import { styled } from 'styled-components';
import { theme } from '../../styles/theme';



export const Loadmore = styled.button`
  width: 200px;
  padding: 12px 0;
  color: #fff;
  font-size: ${theme.fontSizes[16]};
  font-weight: ${theme.fontWeight.medium};
  line-height: 24px;
  border-radius: 12px;
  background: ${theme.colors.blue};
  border: none;
  cursor: pointer;
  margin-top: 28px;
  margin-bottom: 20px;
  transition: ${theme.transition.duration};

  &:hover {
    background: ${theme.colors.blueDark};
  }
`;