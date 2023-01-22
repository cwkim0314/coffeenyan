import React, { FC } from 'react'
import type { AppProps } from 'next/app'
import { Box, MantineProvider } from '@mantine/core'
import { QueryClientProvider, QueryClient } from 'react-query'
import Header from 'components/Header/Header'

const queryClient = new QueryClient()

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{
            globalStyles: () => ({
              body: { backgroundColor: '#FFFEF2' },
            }),
            fontFamily: '"M PLUS 1p", sans-serif',
          }}
          withNormalizeCSS
          withGlobalStyles
        >
          <Header />
          <Box mt="50px">
            <Component {...pageProps} />
          </Box>
        </MantineProvider>
      </QueryClientProvider>
    </>
  )
}
export default MyApp
