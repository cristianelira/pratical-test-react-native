import React from 'react'

import { Container, Book, ImgBook, Title, Autor, Stars, Star } from './styles'

interface Props {
  onPress: () => void;
}

export function BookCard({onPress}:Props) {
  return (
    <Container onPress={onPress}>
      <Book>
        <ImgBook source={require('../../global/images/book.png')} />
        <Title numberOfLines={2}>
          Wonder Women: 25 Mulheres Inovadoras, Inventoras e Pioneiras que
          Fizeram a Diferença
        </Title>
        <Autor numberOfLines={1}>Sam Maggs</Autor>
        <Stars>
          <Star name="star" />
          <Star name="star" />
          <Star name="star" />
          <Star name="star" />
          <Star name="star" />
        </Stars>
      </Book>
    </Container>
  )
}
