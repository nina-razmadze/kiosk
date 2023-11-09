import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import { ThemeModes_Enum } from '@src/providers/ThemeProvider/ThemeContext';

export const SWizard = styled.div`
  border: solid 1px white;
  border-radius: 12px;
  ${tw`w-[60vw] h-[70vh] shadow-2xl rounded p-6 flex flex-col`}

  background-color:${(props) => props.theme.colors.primary}
  ${(props) => {
    if (props.theme.mode === ThemeModes_Enum.DARK) {
      return css`
        border: solid 1px white;
        border-radius: 12px;
      `;
    }
  }}
`;

export const SWizardBorder = styled.div`
  background-color: rgb(220, 220, 220);
  ${tw`w-full h-[1px] my-3 `}
`;

export const SWizardContent = styled.div`
  ${tw`w-full h-full mt-3 flex justify-center items-center`}
`;
