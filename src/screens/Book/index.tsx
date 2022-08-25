import React from 'react'
import { Linking } from 'react-native'
import { BackButton } from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native'

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

export function Book() {
  const navigation = useNavigation<any>()

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
        <ImgBook source={require('../../global/images/book.png')} />
        <RightDetails>
          <Title>
            Wonder Women: 25 Mulheres Inovadoras, Inventoras e Pioneiras que
            Fizeram a Diferença
          </Title>
          <Autor>Sam Maggs</Autor>
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
        <AboutText>
          Agora pense no quão especial alguém deve ser para conseguir os mesmos
          resultados quando nada ao redor conspira a seu favor. Em “Wonder
          Women”, o leitor conhecerá mulheres além de seu tempo. Pessoas
          brilhantes, que se recusaram a se acomodar no papel de coadjuvantes e
          foram à luta, tornando-se protagonistas de sua própria vida.
          Cientistas, engenheiras, matemáticas, aventureiras e inventoras cujos
          feitos mudaram os rumos da história.
        </AboutText>
      </About>
      <ReadNow
        onPress={() => {
          Linking.openURL(
            'https://www.amazon.com.br/Mulheres-Inovadoras-Inventoras-Pioneiras-Diferen%C3%A7a/dp/8555780403'
          )
        }}
      >
        <TextButtom>Ler agora</TextButtom>
      </ReadNow>
    </Container>
  )
}
