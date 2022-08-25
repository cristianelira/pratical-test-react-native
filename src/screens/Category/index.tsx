import React from 'react'
import { BookCard } from '../../components/BookCard'
import { BackButton } from '../../components/BackButton'

import { Container, Header, CategoryName, Books } from './styles'

export function Category() {
  return (
    <Container>
      <Header>
        <BackButton />
        <CategoryName>Biografia</CategoryName>
      </Header>
      <Books>
        <BookCard />
        <BookCard />
      </Books>
    </Container>
  )
}
