export interface RatingParams {
  CafeName: string
  CafeAddress: string
  Coffee: {
    MenuName: string
    Acidity: number
    Aftertastes: number
    Body: number
    Balance: number
    Bitterness: number
    Sweetness: number
    Aroma: number
    CafeId: number
  }
}
