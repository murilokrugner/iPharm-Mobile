import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 30px;
`;

export const BoxTitle = styled.View`
  flex-direction: row;
  width: 100%;
  height: 36px;
  justify-content: space-around;

`;

export const Name = styled.Text`
  flex-direction: row;
  justify-content: center;

  font-size: 25px;
`;

export const BoxMenu = styled.View`
  height: 100px;
  width: 100%;
  flex-direction: row;
  margin-top: 40px;
  justify-content: center;


`;

export const Menu = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
  margin-left: 20px;

  border-radius: 20px;
  border-color: #fff;
  border: 0;
  width: 140px;
  height: 50px;
  border: 0.18px;

`;

export const TextMenu = styled.Text`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const BoxCompany = styled.View`
  height: 550px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

`;

export const Company = styled.View`
  flex-direction: row;
  border-radius: 10px;
  width: 360px;
  height: 125px;
  background-color: #ffff;
  justify-content: space-around;
  align-items: center;
  border: 0.18px;
  margin-bottom: 30px;
`
;

export const BoxText = styled.View`
  flex-direction: column;
  height: 80px;
  align-items: center;
  justify-content: space-around;
`;

export const TextName = styled.Text`
  font-size: 18px;
  font-family: 'Roboto-Bold';
`;

export const TextDescription = styled.Text`
  font-size: 14px;

  font-family: 'Roboto-Regular';
`;
