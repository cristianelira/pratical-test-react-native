import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather, Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(80)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(12)}px;
`

export const HomeName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(22)}px;
  margin-left: ${RFValue(24)}px;
`

export const Photo = styled.Image`
  height: ${RFValue(32)}px;
  width: ${RFValue(32)}px;
  margin-right: ${RFValue(12)}px;
  border-radius: 999px;
`
export const SearchView = styled.View`
  height: ${RFValue(56)}px;
  border: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray_light};
  margin-horizontal: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
`

export const IconSearch = styled(Ionicons)`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.gray};
  margin: ${RFValue(19)}px;
`

export const Search = styled.TextInput`
  padding: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const SearchButton = styled.TouchableOpacity``

export const ScrollBooks = styled.ScrollView``
export const ForYou = styled.View`
  margin-top: ${RFValue(24)}px;
`

export const CategoryName = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(16)}px;
  margin-left: ${RFValue(16)}px;
`

export const Categorys = styled.View``

export const MostRead = styled.View``

export const ViewNavigation = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: ${RFValue(58)}px;
`

export const HomeIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary};
`
export const BookIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary_light};
`
export const HeartIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary_light};
`
export const MicIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary_light};
`
