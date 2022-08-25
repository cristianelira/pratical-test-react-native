import React from 'react'

import { Container, Book, ImgBook, Title, Autor, Stars, Star } from './styles'

export function BookCard() {
  return (
    <Container>
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
