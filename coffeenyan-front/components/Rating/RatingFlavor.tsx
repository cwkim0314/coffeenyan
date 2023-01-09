import React, { useEffect, useMemo, useState } from 'react'
import { Box, Flex, Rating, Text, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconMug } from '@tabler/icons'

type Props = {
  // value: any[]
  getFlavor: (value: any) => void
  // setValue: React.Dispatch<React.SetStateAction<[]>>
}

const RatingFlavor: React.FC<Props> = ({ getFlavor }) => {
  const [acidity, setAcidity] = useState(0)
  const [body, setBody] = useState(0)
  const [aftertastes, setAftertastes] = useState(0)
  const [balance, setBalance] = useState(0)
  const [sweetness, setSweetness] = useState(0)
  const [bitterness, setBitterness] = useState(0)
  const [aroma, setAroma] = useState(0)

  useEffect(() => {
    getFlavor({
      acidity: acidity,
      body: body,
      aftertastes: aftertastes,
      balance: balance,
      sweetness: sweetness,
      bitterness: bitterness,
      aroma: aroma,
    })
  }, [acidity, body, aftertastes, balance, sweetness, bitterness, aroma])

  const iconMugStyleProps: Record<string, any> = {
    size: '28px',
    color: '#AF9176',
    strokeWidth: '1.7px',
  }
  const iconMugFilledStyleProps: Record<string, any> = {
    size: '28px',
    color: '#000',
    fill: '#805B39',
  }

  return (
    <>
      <Text pb="10px" fz="24px" fw="500">
        Flavor（味）
      </Text>
      <Box
        w="400px"
        style={{ borderLeft: '2.5px solid #000', paddingLeft: '35px' }}
      >
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Acidity | 酸味</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={acidity}
            onChange={setAcidity}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Body | 質感</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={body}
            onChange={setBody}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Aftertastes | 後味</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={aftertastes}
            onChange={setAftertastes}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Balance | バランス</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={balance}
            onChange={setBalance}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Sweetness | 甘味</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={sweetness}
            onChange={setSweetness}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Bitterness | 苦味</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={bitterness}
            onChange={setBitterness}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
        <Flex w="100%" justify="space-between" gap="lg" pb="10px">
          <Text fz="20px">Aroma | 香味</Text>
          <Rating
            defaultValue={0}
            size="lg"
            value={aroma}
            onChange={setAroma}
            emptySymbol={<IconMug {...iconMugStyleProps} />}
            fullSymbol={<IconMug {...iconMugFilledStyleProps} />}
          />
        </Flex>
      </Box>
    </>
  )
}

RatingFlavor.displayName = 'RatingFlavor'
export default RatingFlavor
