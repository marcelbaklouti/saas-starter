import { Row, Col, Text, Button, Spacer, Switch, Grid, useTheme } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useTheme as useNextTheme } from "next-themes";
import Link from "next/link";
import useSWR from 'swr'

async function fetchUser() {
  const res = await fetch('/api/user')
  return await res.json()
} 

export const UserQuickmenu = () => {
  const { data: session } = useSession()
  const { data: user, error } = useSWR('/api/user', fetchUser)
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();


  return (
    <Grid.Container gap={1.5} css={{ padding: "0.5rem" }}>
      <Grid xs={12}>
        <Row>
          <Col>
            <Text>
              {user?.email}
            </Text>
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row css={{ textAlign: "center" }}>
          <Col>
            <hr />
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row>
          <Col css={{ display: "flex", alignItems: "center" }}>
            <Text css={{ textAlign: "center" }} b>Theme</Text>
          </Col>
          <Col css={{ textAlign: "center" }}>
            <Switch
              checked={isDark}
              shadow
              size="xs"
              onChange={() => setTheme(isDark ? "light" : "dark")}
            />
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row>
          <Col>
            <Link href={`/user/${user?.id}/profile`}>
                Profile
            </Link>
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row>
          <Col>
            <hr />
          </Col>
        </Row>
      </Grid>
      <Grid xs={12}>
        <Row>
          <Col>
            <Button css={{ width: "100%" }} auto shadow size="xs" color="error" onClick={() => signOut()}>
              Sign out
            </Button>
          </Col>
        </Row>
      </Grid>
    </Grid.Container>
  )
}
