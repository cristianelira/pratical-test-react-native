import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import { Container, Book, ImgBook, Title, Autor, Stars, Star } from './styles'

export interface BookCardProps {
  
  publisher: string,
  author: string,
  title: string,
  description: string,
  price: string,
  book_image: string,
}

interface Props extends RectButtonProps{
  data: BookCardProps
}

export function BookCard({data, ...rest}:Props) {
  return (
    <Container {...rest}>
      <Book>
        <ImgBook source={{uri: data.book_image}} />
        <Title numberOfLines={2}>
        {data.title}
        </Title>
        <Autor numberOfLines={1}>{data.author}</Autor>
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
