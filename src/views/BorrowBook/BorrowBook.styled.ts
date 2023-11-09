import tw from 'twin.macro';
import styled from 'styled-components';

export const SBorrowBook = styled.div`
  ${tw`w-full h-[100vh] flex justify-center items-center `}
`;

export const SBorrowBookWrapper = styled.div`
  ${tw`h-[100vh] flex justify-between items-center `}
  background-color: ${(props) => props.theme.colors.primary};
`;
