export const FILTER_TOP_DATA = 'FILTER_TOP_DATA'

export const filterMainTopFive = (filters) => {
  return {
    type: FILTER_TOP_DATA,
    filters
  }
}
