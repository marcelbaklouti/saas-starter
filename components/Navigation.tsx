// create a navigation using next-ui and session from next-auth

import { useSession, signIn, signOut } from "next-auth/react"
import { useTheme as useNextTheme } from "next-themes";
import {
  Navbar,
  Button,
  Avatar,
  Link,
  Text,
  Switch,
  Popover,
  useTheme,
} from '@nextui-org/react'
import { UserQuickmenu } from "./user/Quickmenu";

export default function Navigation() {
  const { data: session } = useSession()
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar shouldHideOnScroll isCompact isBordered variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          Logo
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link href="#">Customers</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content hideIn="xs">
      </Navbar.Content>
      {session ? (
        <Navbar.Content>
          <Popover
            isBordered
            placement="bottom"
          >
            <Popover.Trigger>
              <Avatar
                text={session.user?.image ? undefined : session.user?.email?.substring(0, 2).toUpperCase()}
                size="sm"
                css={{ cursor: "pointer" }}
                color={session.user?.image ? undefined : "gradient"}
                textColor="white"
                src={session.user?.image ? session.user?.image : undefined}
              /> 
            </Popover.Trigger>
            <Popover.Content css={{ maxW: "min-content" }}>
              <UserQuickmenu />
            </Popover.Content>
          </Popover>
        </Navbar.Content>
      ) : (
      <Navbar.Content>
        <Switch
        bordered
        size="xs"
        shadow
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
        <Navbar.Link color="inherit" href="#" onClick={() => signIn()}>
            Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={Link} href="#">
            Sign Up
           </Button>
        </Navbar.Item>
      </Navbar.Content>
      )}
    </Navbar>
  )
}