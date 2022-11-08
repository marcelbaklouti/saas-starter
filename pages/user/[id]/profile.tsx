import Navigation from '../../../components/Navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
// nextUi
import { Container, Row, Col, Text,Input, Switch, Card, Avatar, Grid, Spacer, Button} from "@nextui-org/react";

async function fetchUser() {
  const res = await fetch('/api/user')
  return await res.json()
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}

export default function Profile() {
  const { data: user, error } = useSWR('/api/user', fetchUser)
  
  return (
    <>
      <Navigation />
      <Container>
        <Row>
          <Col>
            <Text h1>Profile</Text>
          </Col>
        </Row>
      </Container>
      <Spacer y={3} />
    </>
  )
}
