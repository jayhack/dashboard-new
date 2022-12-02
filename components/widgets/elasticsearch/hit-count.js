
1. First, we need to add the TypeScript type definitions for the imports. We can do this by adding the type definitions for React, isomorphic-unfetch, yup, and our own components.

import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { object, string, number } from 'yup'
import Widget, { WidgetProps } from '../../widget'
import Counter, { CounterProps } from '../../counter'
import { basicAuthHeader } from '../../../lib/auth'

2. Next, we need to define the type of the schema object. We can do this by adding the type definitions for the shape of the object.

const schema: yup.ObjectSchema<{
  url: string;
  index: string;
  query: string;
  interval: number;
  title: string;
}> = object().shape({
  url: string().url().required(),
  index: string().required(),
  query: string().required(),
  interval: number(),
  title: string()
})

3. Now, we need to define the type of the component. We can do this by adding the type definitions for the props and state.

export default class ElasticsearchHitCount extends Component<{
  url: string;
  index: string;
  query: string;
  interval: number;
  title: string;
  authKey?: string;
}, {
  count: number;
  error: boolean;
  loading: boolean;
}> {

4. Finally, we need to add the type definitions for the render method. We can do this by adding the type definitions for the props and state.

render () {
    const { count, error, loading } = this.state
    const { title } = this.props
    return (
      <Widget title={title} loading={loading} error={error}>
        <Counter value={count} />
      </Widget>
    )
  }
}