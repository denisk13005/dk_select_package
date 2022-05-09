import React from 'react'
import { storiesOf } from '@storybook/react'
import {SelectDk} from '../components/SelectDk'

const stories = storiesOf('App test', module)

stories.add('App', () => {
  let test = [{name:'test', label:"test"}, {name:'test2', label:"test2"}]
  return(
    <form>
      <SelectDk listBoxStyle={{width:'30%', color:'white'}} datas={test} child={"test"}/>
    </form>
  )
})

