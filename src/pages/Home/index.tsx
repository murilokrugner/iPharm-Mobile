import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Container, BoxSearch, Search, InputSearch, Welcome, Name, Message, Promotions, TitlePromo, Promo} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';

const Home: React.FC = () => {
  const [items, setItems] = useState(
    [
      {
          title:"Item 1",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      },
    ]
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <BoxSearch>
          <Search>
            <InputSearch
              placeholder="Pesquisar..."
              onChangeText={() => {}}
              placeholderTextColor={'#000'}
            />
          </Search>
          <Icon
            style={{  }}
            onPress={() => {}}
            name="bell"
            color="#003F75"
            size={32}
          />
        </BoxSearch>
        <Welcome>
          <Name>Olá, Murilo</Name>
          <Message>O que você vai pedir hoje?</Message>
        </Welcome>
        <TitlePromo>Promoções do dia</TitlePromo>
        <Promotions>
          <Carousel
            layout={"default"}
            data={items}
          />
        </Promotions>
      </Container>
    </SafeAreaView>
  );
}

export default Home;
