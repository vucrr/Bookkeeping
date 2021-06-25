import { add, decrease } from '../../services/home/home'

const Home = {
  namespace: 'home',
  state: {
    a: 10
  },
  effects: {
    *add({ payload }, { call, put }) {
      const addResult = yield call(add, payload)
      if (addResult) {
        yield put({
          type: 'showAdd',
          payload: addResult
        })
      }
    },
    *decrease({ payload }, { call, put }) {
      const decreaseResult = yield call(decrease, payload)
      if (decreaseResult) {
        yield put({
          type: 'showDecrease',
          payload: decreaseResult
        })
      }
    }
  },
  reducers: {
    'showAdd'(state, { payload }) {
      return {
        ...state,
        a: state.a + payload
      }
    },
    'showDecrease'(state, { payload }) {
      return {
        ...state,
        a: state.a - payload
      }
    }
  }

}

export default Home