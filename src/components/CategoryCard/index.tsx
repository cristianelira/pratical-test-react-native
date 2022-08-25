import React from 'react'

import { Container, ColorCategory, NameCategory } from './styles'

interface CategoryCardProps {
  display_name: string
  list_name_encoded: string
  
}

interface Props {
  data: CategoryCardProps
  onPress: () => void;
}

export function CategoryCard({ data, onPress }: Props) {
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
      <NameCategory>{data.display_name}</NameCategory>
    </Container>
  )
}
