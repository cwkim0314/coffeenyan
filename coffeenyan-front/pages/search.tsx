import React, { useState } from 'react'
import { Button, TextInput, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>(' ')
  const form = useForm({
    initialValues: {
      searchValue: '',
    },
  })
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_EMBED_MAPS_API_KEY
  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          setSearchValue(values.searchValue)
        })}
      >
        <TextInput
          label="Search"
          placeholder="Search"
          {...form.getInputProps('searchValue')}
        />
        <Button type="submit" color="dark.9" radius="xs">
          検索
        </Button>
      </form>
      <iframe
        width={'80%'}
        height={'450'}
        style={{ border: '0' }}
        loading="lazy"
        allowFullScreen
        src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${searchValue}&region=KR&language=ja`}
      />
    </>
  )
}
export default Search
