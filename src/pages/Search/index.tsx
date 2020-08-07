import React from 'react';
import {SafeAreaView} from 'react-native';

import {Container, BoxSearch, ContainsSearch, InputSearch, BoxFilters, Filters} from './styles';

import Icon from 'react-native-vector-icons/Feather';

const Search: React.FC = () => {
  return(
    <SafeAreaView>
      <Container>
        <BoxSearch>
          <ContainsSearch>
            <InputSearch
              placeholder="Pesquisar..."
              onChangeText={() => {}}
              placeholderTextColor={'#000'}
            />
          </ContainsSearch>
          <Icon
              style={{  }}
              onPress={() => {}}
              name="search"
              color="#003F75"
              size={32}
            />
        </BoxSearch>
        <BoxFilters>
          <Filters>Filtros</Filters>
        </BoxFilters>
      </Container>
    </SafeAreaView>
  )
}

export default Search;
