import {RECEIVED_GRAPH} from '../../../client/actions'

import receivedGraph from '../../../client/reducers/received-graph'

test('receivedGraph returns True on RECEIVED_GRAPH', () => {
  const initialState = false
  const action = {type: RECEIVED_GRAPH}
  const newState = receivedGraph(initialState, action)
  expect(newState).toBe(true)
})
