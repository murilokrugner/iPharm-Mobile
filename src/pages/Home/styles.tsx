import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const BoxSearch = styled.View`
  flex-direction: row;
  width: 100%;
  height: 36px;
  justify-content: space-around;

`;

export const Search = styled.View`
  width: 250px;
  height: 36px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  border: 1px;
  border-color: #003F75;
  flex-direction: row;
  align-items: center;
`;

export const InputSearch = styled.TextInput`

`;

export const Welcome = styled.View`
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;


`;

export const Name = styled.Text`
  flex-direction: row;
  justify-content: center;

  font-size: 25px;
`;

export const Message = styled.Text`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  font-size: 18px;
`;

export const Promotions = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitlePromo = styled.Text`
  font-size: 18px;
  margin-top: 40px;
  margin-left: 20px;
`;

export const Promo = styled.View`
  width: 380px;
  height: 322px;

  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  border: 4px;
  border-color: #003F75;

`;
