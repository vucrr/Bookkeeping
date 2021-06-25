import React, { useState } from 'react'
// import withRouter from 'umi/withRouter';
import { connect } from 'dva'
import { Button, List, InputItem } from 'antd-mobile'


const Home = props => {
  const { home, dispatch } = props
  const [count, setCount] = useState(5)

  const countChange = (e) => {
    setCount(Number(e))
  }


  return (
    <div style={{ fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px' }}>
      <Button
        style={{ marginRight: '10px' }}
        type="primary" inline size="large"
        onClick={() => {
          dispatch({
            type: 'home/add',
            payload: count
          })
        }}>add</Button>
      <span>{home.a}</span>

      <List style={{ width: 60 }}>
        <InputItem
          value={count}
          onChange={countChange}
          type='number'
        />
      </List>
      <Button
        inline
        type='warning'
        onClick={() => {
          dispatch({
            type: 'home/decrease',
            payload: count
          })
        }}>decrease</Button>
    </div>
  )


}

export default connect(global => ({
  home: global.home
}))(Home)