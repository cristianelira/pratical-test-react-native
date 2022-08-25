import React from 'react'
import { Linking } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { BookDTO } from '../../dtos/BookDTO'

import {
  Container,
  Header,
  RightIcon,
  FavIcon,
  ShareIcon,
  BookDetails,
  ImgBook,
  RightDetails,
  Title,
  Autor,
  Stars,
  Star,
  Reviews,
  Categorys,
  Category,
  About,
  AboutTitle,
  AboutText,
  ReadNow,
  TextButtom
} from './styles'

interface Params {
  book: BookDTO
}

export function Book() {
  const navigation = useNavigation<any>()
  const route = useRoute()
  const { book } = route.params as Params

  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleBack()} />
        <RightIcon>
          <FavIcon name="heart" />
          <ShareIcon name="share-2" />
        </RightIcon>
      </Header>

      <BookDetails>
        <ImgBook source={{ uri: book.book_image }} />
        <RightDetails>
          <Title>{book.title}</Title>
          <Autor>{book.author}</Autor>
          <Stars>
            <Star name="star" />
            <Star name="star" />
            <Star name="star" />
            <Star name="star" />
            <Star name="star" />
            <Reviews>36 avaliações</Reviews>
          </Stars>
          <Categorys>
            <Category>Não Ficção</Category>

            <Category>Literatura estrangeira</Category>
          </Categorys>
        </RightDetails>
      </BookDetails>
      <About>
        <AboutTitle>Sobre esse livro</AboutTitle>
        <AboutText>{book.description}</AboutText>
      </About>
      <ReadNow
        onPress={() => {
          Linking.openURL(book.amazon_product_url)
        }}
      >
        <TextButtom>Ler agora</TextButtom>
      </ReadNow>
    </Container>
  )
}
