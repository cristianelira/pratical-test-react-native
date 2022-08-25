import React from 'react'
import { BookCard } from '../../components/BookCard'
import { BackButton } from '../../components/BackButton'
import { useNavigation } from '@react-navigation/native'
import { Container, Header, CategoryName, Books } from './styles'

export function Category() {
  const navigation = useNavigation<any>()

  function handleBook() {
    navigation.navigate('Book')
  }
  function handleBack() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleBack()} />
        <CategoryName>Biografia</CategoryName>
      </Header>
      <Books>
        <BookCard onPress={() => handleBook()} />
        <BookCard onPress={() => handleBook()} />
      </Books>
    </Container>
  )
}
