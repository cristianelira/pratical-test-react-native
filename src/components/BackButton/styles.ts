import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Ionicons } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)``

export const BackIcon = styled(Ionicons)`
  font-size: ${RFValue(24)}px;
  margin-horizontal: ${RFValue(16)}px;
`
