import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { ThemeModes_Enum } from '@src/providers/ThemeProvider/ThemeContext';

export const SMain = styled.div`
  ${tw`h-[100vh] flex justify-between items-center pl-48`}
  background-color: ${(props) => props.theme.colors.primary};
`;

export const SMainLeft = styled.div`
  ${tw` flex-col justify-center items-center shadow-2xl p-24 rounded-lg`}

  ${(props) => {
    if (props.theme.mode === ThemeModes_Enum.DARK) {
      return css`
        border: solid 1px white;
        border-radius: 12px;
      `;
    }
  }}
`;

export const SImg = styled.img`
  ${tw`w-[100%] pr-12`}
`;
