import { Title, Box } from '@mantine/core'
import AddCafeInfo from 'components/Review/AddCafeInfo'

const AddReview: React.FC = () => {
  return (
    <>
      <Box mx="80px">
        <Box py="50px">
          <Title order={1}>Add Your Review</Title>
        </Box>
        <AddCafeInfo />
      </Box>
    </>
  )
}

export default AddReview
