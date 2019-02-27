import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardImageCard = () => (
  <Card>
    <Image src='https://docs.tasktop.com/tasktop/files/47157911/47157912/1/1540232115525/integration-network.png' />
    <Card.Content>
      <Card.Header>Tasktop Technologies</Card.Header>
      <Card.Meta>My first co-op work term!</Card.Meta>
      <Card.Description>A (lengthy) overview to my experience as a Junior Software Engineer at Tasktop.</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card>
);

export default CardImageCard;