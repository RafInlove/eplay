import { Product } from "../Product"
import { Container, List } from './styles'

type Props = {
  title: string;
  background: 'gray' | 'black'
}

export const ProductsList = ({ background, title }: Props) => (
  <Container>
    <div className="container">
    <h2>{title}</h2>
    <List>
      <Product title='Fresh Bath Water' infos={['-10%','$999.99']}/>
      <Product title='Spicy Bath Water' infos={['-20%','$999.99']}/>
    </List>
    </div>
  </Container>
)
