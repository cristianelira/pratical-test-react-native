import React from 'react'

import { Container, ColorCategory, NameCategory } from './styles'

interface Props {
  name: string
  onPress: () => void;
}

export function CategoryCard({ name, onPress }: Props) {
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
    return `#${randomColor}`
  }

  return (
    <Container onPress={onPress}>
      <ColorCategory
        style={{ backgroundColor: generateColor() }}
      ></ColorCategory>
      <NameCategory>{name}</NameCategory>
    </Container>
  )
}
