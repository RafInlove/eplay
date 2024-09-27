import Water from '../../assets/water.jpg';
import { Tag } from '../tag';
import { Card, Description, Title, Infos } from './styles';

type Props = {
  infos: string[];
  title: string;
};

export const Product = ({ infos, title }: Props) => (
  <Card>
    <img src={Water} width="222px" />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Title>{title}</Title>
    <Tag>Delicious</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
      consequuntur necessitatibus nobis ea exercitationem distinctio explicabo,
      sit similique dolores? Officia reiciendis, voluptates quisquam eligendi
      ipsa voluptate saepe consectetur numquam amet.
    </Description>
  </Card>
);
