import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { ThemeModes_Enum } from '@src/providers/ThemeProvider/ThemeContext';
import { Button, Form, Select, Space } from 'antd';

export const SCategories = styled.div`
  ${tw`flex flex-col w-full h-full items-end`}
`;

export const SFormItem = styled(Form.Item)`
  border: 1px solid white;
  border-radius: 5px;
  color: white;
`;

export const SCustomSelect = styled(Select)`
  ${(props) => {
    if (props.theme.mode === ThemeModes_Enum.DARK) {
      return css`
        &::placeholder {
          color: white;
        }
      `;
    }
  }}
`;
