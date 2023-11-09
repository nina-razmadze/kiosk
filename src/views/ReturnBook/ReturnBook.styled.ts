import tw from 'twin.macro';
import styled from 'styled-components';

export const SReturnBook = styled.div`
  ${tw`w-full h-[100vh] flex justify-center items-center`}
`;

export const SReturnBookWrapper = styled.div`
  ${tw`h-[100vh] flex justify-between items-center `}
  background-color: ${(props) => props.theme.colors.primary};
`;
