import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${RFValue(24)}px;
  margin-top: ${RFValue(16)}px;
`

export const Book = styled.View`
  width: ${RFValue(104)}px;
  margin-left: ${RFValue(16)}px;
`

export const ImgBook = styled.Image`
  width: ${RFValue(104)}px;
  height: ${RFValue(160)}px;
  border-radius: 4px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
`

export const Autor = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
`

export const Stars = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(4)}px;
`

export const Star = styled(Ionicons)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary};
`
