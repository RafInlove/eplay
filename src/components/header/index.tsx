import { HeaderBar, Links, LinkItem, LinkCart } from './styles'
import logo from '../../assets/take-a-bath-svgrepo-com.svg'
import cart from '../../assets/cart.png'

export const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} width="50px" />

      <nav>
        <Links>
          <LinkItem>
            <a href="">Buy</a>
          </LinkItem>
          <LinkItem>
            <a href="">Info</a>
          </LinkItem>
          <LinkItem>
            <a href="">It is healthy?</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="">
      0 - produto(s)
      <img src={cart} />
    </LinkCart>
  </HeaderBar>
)
