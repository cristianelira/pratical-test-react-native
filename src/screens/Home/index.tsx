import React, { useEffect, useState } from 'react'
import { BookCard } from '../../components/BookCard'
import { CategoryCard } from '../../components/CategoryCard'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../services/api'
import { BookDTO } from '../../dtos/BookDTO'
import { CategoryDTO } from '../../dtos/CategoryDTO'
import { Load } from '../../components/Load'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

import {
  Container,
  Header,
  HomeName,
  Photo,
  SearchView,
  IconSearch,
  Search,
  SearchButton,
  ScrollBooks,
  ForYou,
  ForYouList,
  CategoryName,
  Categorys,
  CategoryList,
  MostRead,
  MostReadList,
  ViewNavigation,
  HomeIcon,
  BookIcon,
  HeartIcon,
  MicIcon
} from './styles'

export function Home() {
  const navigation = useNavigation<any>()
  const [books, setBooks] = useState<BookDTO[]>([])
  const [categorys, setCategorys] = useState<CategoryDTO[]>([])
  const [loading, setLoading] = useState(true)
  const showToast = () => {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'Não foi possivel carregar, tente novamente'
    })
  }

  function handleBook(book: BookDTO) {
    navigation.navigate('Book', {book})
  }

  function handleCategory(category: CategoryDTO) {
    navigation.navigate('Category', {category})
  }

  async function fetchBooks() {
    try {
      const response = await api.get(
        '/svc/books/v3/lists/overview.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      )
      setBooks(response.data.results.lists[0].books)
    } catch (error) {
      showToast()
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchBooks()
  }, [])

  async function fetchCategorys() {
    try {
      const response = await api.get(
        '/svc/books/v3/lists/names.json?api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR'
      )
      setCategorys(response.data.results.slice(5, 15))
    } catch (error) {
      {
        showToast()
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategorys()
  }, [])

  return (
    <Container>
      <Header>
        <HomeName>Bookshelf</HomeName>
        <Photo
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFl-Qan5E4I_w/profile-displayphoto-shrink_800_800/0/1516950189867?e=1666828800&v=beta&t=WcZ_4j_VFV2Zvw5Ij0DMfEonemRMJ8Gcg32lOAfbbxM'
          }}
        />
      </Header>
      {loading ? (
        <Load />
      ) : (
        <ScrollBooks>
          <SearchView>
            <Search
              placeholder="Qual livro você gostaria de ler hoje?"
              placeholderTextColor="#828282"
            />
            <SearchButton>
              <IconSearch name="search" />
            </SearchButton>
          </SearchView>

          <ForYou>
            <CategoryName>Para você</CategoryName>
            <ForYouList
              data={books}
              keyExtractor={item => item.title}
              renderItem={({ item }) => (
                <BookCard data={item} onPress={() => handleBook(item)} />
              )}
              />
          </ForYou>
          <Categorys>
            <CategoryName>Categorias</CategoryName>
            <CategoryList
              data={categorys}
              keyExtractor={item => item.list_name_encoded}
              renderItem={({ item }) => (
                <CategoryCard
                  data={item}
                  onPress={() => handleCategory(item)}/>
                  )}
            />
          </Categorys>
          <MostRead>
            <CategoryName>Os mais lidos da semana</CategoryName>
            <MostReadList
              data={books}
              keyExtractor={item => item.title}
              renderItem={({ item }) => (
                <BookCard data={item} onPress={() => handleBook(item)} />
              )}
            />
          </MostRead>
        </ScrollBooks>
      )}

      <ViewNavigation>
        <HomeIcon name="home" />
        <BookIcon name="book-open" />
        <HeartIcon name="heart" />
        <MicIcon name="mic" />
      </ViewNavigation>
    </Container>
  )
}
