import React from 'react'
import { BookCard } from '../../components/BookCard'
import { CategoryCard } from '../../components/CategoryCard'
import { useNavigation } from '@react-navigation/native'

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
  CategoryName,
  Categorys,
  MostRead,
  ViewNavigation,
  HomeIcon,
  BookIcon,
  HeartIcon,
  MicIcon
} from './styles'

export function Home() {
  const navigation = useNavigation<any>()

  function handleBook() {
    navigation.navigate('Book')
  }

  function handleCategory() {
    navigation.navigate('Category')
  }

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
          <BookCard onPress={() => handleBook()} />
        </ForYou>
        <Categorys>
          <CategoryName>Categorias</CategoryName>
          <CategoryCard name="Biografia" onPress={() => handleCategory()} />
        </Categorys>
        <MostRead>
          <CategoryName>Os mais lidos da semana</CategoryName>
          <BookCard onPress={() => handleBook()} />
        </MostRead>
      </ScrollBooks>

      <ViewNavigation>
        <HomeIcon name="home" />
        <BookIcon name="book-open" />
        <HeartIcon name="heart" />
        <MicIcon name="mic" />
      </ViewNavigation>
    </Container>
  )
}
