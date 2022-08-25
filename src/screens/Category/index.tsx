import React, { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { BookCard } from '../../components/BookCard'
import { BackButton } from '../../components/BackButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CategoryDTO } from '../../dtos/CategoryDTO'
import { BookDTO } from '../../dtos/BookDTO'
import { Toast } from 'react-native-toast-message/lib/src/Toast'
import { Load } from '../../components/Load'
import { Container, Header, CategoryName, Books, ListBooks } from './styles'

interface Params {
  category: CategoryDTO
}

export function Category() {
  const navigation = useNavigation<any>()
  const [books, setBooks] = useState<BookDTO[]>([])
  const [loading, setLoading] = useState(true)
  const route = useRoute()
  const { category } = route.params as Params
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'Não foi possivel conectar'
    })
  }

  function handleBook(book: BookDTO) {
    navigation.navigate('Book', { book })
  }
  function handleBack() {
    navigation.goBack()
  }

  async function fetchBooks() {
    try {
      const response = await api.get(
        `/svc/books/v3/lists/${category.list_name_encoded}.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR`
      )
      setBooks(response.data.results.books)
    } catch (error) {
      showToast()
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={() => handleBack()} />
        <CategoryName>{category.display_name}</CategoryName>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <Books>
          <ListBooks
            data={books}
            numColumns={3}
            keyExtractor={item => item.title}
            renderItem={({ item }) => (
              <BookCard data={item} onPress={() => handleBook(item)} />
            )}
          />
        </Books>
      )}
    </Container>
  )
}
