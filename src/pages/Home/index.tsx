import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Image, Text} from 'react-native';
import Medicine from '../../assets/icons/medicine.png';
import Gym from '../../assets/icons/gym.png';
import Drogal from '../../assets/icons/drogal.png';
import Profile from '../../assets/eu.png';

import {Container, BoxTitle, Name, BoxMenu, Menu, TextMenu, BoxCompany, BoxText, Company, TextName, TextDescription} from './styles';
import Icon from 'react-native-vector-icons/Feather';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <BoxTitle>
          <Name>Olá, Murilo</Name>
          <Image source={Profile} style={{width: 40, height: 40, borderRadius: 50}}/>
        </BoxTitle>
        <BoxMenu>
          <ScrollView style={{flex: 1 }} horizontal={true}
            showsHorizontalScrollIndicator={false}>
            <Menu>
              <TextMenu>Todos</TextMenu>
            </Menu>
            <Menu>
              <Image source={Medicine} style={{}}/>
              <TextMenu>Remédios</TextMenu>
            </Menu>
            <Menu>
              <Image source={Gym} style={{}}/>
              <TextMenu>Suplementos</TextMenu>
            </Menu>
            <Menu>
              <TextMenu>Outros</TextMenu>
            </Menu>
            <Menu>
              <TextMenu>Todos</TextMenu>
            </Menu>
            <Menu>
              <TextMenu>Todos</TextMenu>
            </Menu>
            <Menu>
              <TextMenu>Todos</TextMenu>
            </Menu>
          </ScrollView>
        </BoxMenu>
        <BoxCompany>
            <ScrollView style={{flex: 1 }} showsVerticalScrollIndicator={false}>
              <SafeAreaView>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
                <Company>
                  <Image source={Drogal} style={{height: 90, width: 90, borderRadius: 40, marginLeft: 20}} />
                  <BoxText>
                    <TextName>Drogaria Drogal</TextName>
                    <TextDescription>Remédios e mais</TextDescription>
                  </BoxText>
                </Company>
            </SafeAreaView>
            </ScrollView>
        </BoxCompany>
      </Container>
    </SafeAreaView>
  );
}

export default Home;
