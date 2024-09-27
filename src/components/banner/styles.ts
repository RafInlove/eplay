import styled from 'styled-components';
import { cores } from '../../styles';
import { TagContainer } from '../tag/styles';

export const Img = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 340px;
  margin-top: 10px;
  color: ${cores.branca};

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: -320px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weigth: bold;
  max-width: 450px;
  text-shadow: 2px 1px 0px black;
`;

export const StyledP = styled.p`
  font-weight: bold;
  font-size: 24px;
  margin-top: 24px;
  text-shadow: 2px 1px 0px black;

  span {
    text-decoration: line-throught;
  }
`;
