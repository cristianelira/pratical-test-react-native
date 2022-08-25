import React from 'react'

import { Container, BackIcon } from './styles'

interface Props{
  onPress: () => void;
}

export function BackButton({onPress}: Props) {
  return (
    <Container onPress={onPress}>
      <BackIcon name="arrow-back" />
    </Container>
  )
}
