import { RatingParams } from 'types/rating'
import { useOptimisticMutation } from './useApi'
import axios from 'axios'

const ratingRepository = {
  postRating: async (
    params: RatingParams,
  ): Promise<RatingParams | undefined> => {
    const res = await axios.post<RatingParams>('/coffee', {
      ...params,
    })
    if (res.data) {
      return res.data
    } else {
      return undefined
    }
  },
}

export const useRatingApi = () => {
  const usePostRating = () =>
    useOptimisticMutation<RatingParams, RatingParams, RatingParams>(
      // 第一引数QueryKey
      'rating',
      // 第二引数データ取得用の関数
      async (params) => ratingRepository.postRating({ ...params }),
      // 第三引数仮更新(楽観的更新)用の関数
      (oldData) => {
        return {
          ...oldData,
        }
      },
    )
  return usePostRating
}
