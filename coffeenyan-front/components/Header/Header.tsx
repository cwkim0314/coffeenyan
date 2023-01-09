import React, { useState } from 'react'
import { Box, Flex, Anchor, Button } from '@mantine/core'

const Header: React.FC = () => {
  return (
    <>
      <Box
        bg="dark.9"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '999',
          width: '100vw',
          height: '50px',
          padding: '10px',
          boxShadow: '0px 0.5px 5px #CED4DA',
        }}
      >
        <Flex justify="space-between" ml="50px" mr="50px">
          <Flex align={'flex-end'} gap="xl">
            <Anchor c="white" size={'lg'} underline={false}>
              CoffeeNyan
            </Anchor>
            <Anchor c="white" size={'md'} underline={false}>
              Flavor
            </Anchor>
            <Anchor c="white" size={'md'} underline={false}>
              Location
            </Anchor>
          </Flex>
          <Flex align={'flex-end'} gap="sm">
            <Button
              h="30px"
              variant="filled"
              fw="lighter"
              color="dark.9"
              mx="0px"
              px="9px"
            >
              Sign in
            </Button>
            <Button
              h="30px"
              variant="outline"
              fw="lighter"
              radius="md"
              color="gray.0"
              style={{ borderWidth: '0.5px' }}
            >
              Sign up
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

Header.displayName = 'Header'
export default Header
