import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  flex-direction: row;

  align-items: center;
  margin-top: ${RFValue(12)}px;
`

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(22)}px;
`
export const Books = styled.View`
  margin-top: ${RFValue(24)}px;
  flex: 1;
`