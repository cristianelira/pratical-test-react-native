import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: ${RFValue(74)}px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-right: ${RFValue(12)}px;
  margin-left: ${RFValue(16)}px;
  margin-top: ${RFValue(16)}px;
`
export const ColorCategory = styled.View`
  width: ${RFValue(74)}px;
  height: ${RFValue(74)}px;
  border-radius: 4px;
`

export const NameCategory = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(4)}px;
`
