import { Img, Title, StyledP } from './styles'
import bannerImg from '../../assets/bestqualitycut.jpg'
import { Tag } from '../tag'
import { Button } from '../button'

export const Banner = () => (
  <Img style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">New offers!</Tag>
      <div>
        <Title>Belle Delphine's Bath Water</Title>
        <StyledP>
          Get it now! <span>She knows you want it :P</span>
        </StyledP>
      </div>
      <Button type="link" to="/produto" title="Click get descount">
        Get Offer
      </Button>
    </div>
  </Img>
)
