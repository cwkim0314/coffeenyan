import React, { useEffect, useState } from 'react'
import { Flex, Button, TextInput, Rating } from '@mantine/core'
import { useForm } from '@mantine/form'
import RatingFlavor from 'components/Rating/RatingFlavor'

const AddCafeInfo: React.FC = ({}) => {
  type CoffeeInfoSchema = {
    menuName: string
  }
  type AddInfoSchema = {
    cafeName: string
    cafeAddress: string
    coffee: CoffeeInfoSchema
  }
  type Flavor = {
    acidity: number
    body: number
    aftertastes: number
    balance: number
    sweetness: number
    bitterness: number
    aroma: number
  }
  const [flavor, setFlavor] = useState<Flavor | undefined>({
    acidity: 0,
    body: 0,
    aftertastes: 0,
    balance: 0,
    sweetness: 0,
    bitterness: 0,
    aroma: 0,
  })

  const getFlavor = (f: React.SetStateAction<Flavor | undefined>) => {
    setFlavor(f)
  }

  const form = useForm<AddInfoSchema>({
    initialValues: {
      cafeName: '',
      cafeAddress: '',
      coffee: {
        menuName: '',
      },
    },
  })

  const onSubmit = form.onSubmit((v) => {
    const submitInfo = {
      cafeName: v.cafeName,
      cafeAddress: v.cafeAddress,
      coffee: {
        menuName: v.coffee.menuName,
        acidity: flavor!.acidity,
        body: flavor!.body,
        aftertastes: flavor!.aftertastes,
        balance: flavor!.balance,
        sweetness: flavor!.sweetness,
        bitterness: flavor!.bitterness,
        aroma: flavor!.aroma,
      },
    }
    console.log(submitInfo)
    // setSubmitInfo(submitInfo)
  })

  return (
    <>
      <form onSubmit={onSubmit}>
        <TextInput
          placeholder="カフェ名を入力してください"
          label="カフェ名"
          size="sm"
          styles={{
            label: { fontSize: '24px', paddingBottom: '10px' },
            input: { borderColor: '#000' },
          }}
          withAsterisk
          w="400px"
          pb="25px"
          {...form.getInputProps('cafeName')}
        />
        <TextInput
          placeholder="カフェの住所を入力してください"
          label="カフェの住所"
          size="sm"
          styles={{
            label: { fontSize: '24px', paddingBottom: '10px' },
            input: { borderColor: '#000' },
          }}
          withAsterisk
          w="400px"
          pb="25px"
          {...form.getInputProps('cafeAddress')}
        />
        <TextInput
          placeholder="メニュー名を入力してください"
          label="メニュー名"
          size="sm"
          styles={{
            label: { fontSize: '24px', paddingBottom: '10px' },
            input: { borderColor: '#000' },
          }}
          withAsterisk
          w="400px"
          pb="25px"
          {...form.getInputProps('coffee.menuName')}
        />
        <RatingFlavor getFlavor={getFlavor} />
        <Flex w="100%" justify={'flex-end'} mt="30px" mb="100px">
          <Button w="20%" size="sm" radius="xs" color="dark.9" type="submit">
            登録
          </Button>
        </Flex>
      </form>
    </>
  )
}

AddCafeInfo.displayName = 'AddCafeInfo'
export default AddCafeInfo
