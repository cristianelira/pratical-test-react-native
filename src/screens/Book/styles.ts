import styled from 'styled-components/native';
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

export const BackIcon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  margin-left: ${RFValue(16)}px;
`
export const RightIcon = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: ${RFValue(16)}px;
`
export const FavIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  margin-right: ${RFValue(16)}px;
`

export const ShareIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
`

export const BookDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const ImgBook = styled.Image`
  width: ${RFValue(164)}px;
  height: ${RFValue(253)}px;
  margin-horizontal: ${RFValue(16)}px;
`

export const RightDetails = styled.View`
  flex: 1;
  margin-right: ${RFValue(15)}px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(13)}px;
`

export const Autor = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(8)}px;
`
export const Stars = styled.View`
  flex-direction: row;
  margin-top: ${RFValue(16)}px;
`

export const Star = styled(Ionicons)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary};
`

export const Reviews = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  margin-left: ${RFValue(8)}px;
  margin-bottom: ${RFValue(16)}px;
`
export const Categorys = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`

export const Category = styled.Text`
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  padding: 5px 8px;
  margin-bottom: ${RFValue(4)}px;
`

export const About = styled.View`
  margin-horizontal: ${RFValue(16)}px;
`

export const AboutTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.black};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(32)}px;
  margin-bottom: ${RFValue(16)}px;
`

export const AboutText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: justify;
  margin-bottom: ${RFValue(32)}px;
`

export const ReadNow = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(40)}px;
  border-radius: 4px;
  margin-horizontal: ${RFValue(16)}px;
  align-items: center;
`
export const TextButtom = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.black};
  margin-top: ${RFValue(12)}px;
  margin-bottom: ${RFValue(12)}px;
`