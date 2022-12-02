
First, we need to convert the file to TypeScript. We can do this by changing the file extension from .js to .tsx.

```
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { object, string, number } from 'yup'
import Widget from '../../widget'
import Counter from '../../counter'
import { basicAuthHeader } from '../../../lib/auth'

const schema = object().shape({
  url: string().url().required(),
  index: string().required(),
  query: string().required(),
  interval: number(),
  title: string()
})

interface Props {
  url: string;
  index: string;
  query: string;
  interval?: number;
  title?: string;
  authKey?: string;
}

interface State {
  count: number;
  error: boolean;
  loading: boolean;
}

export default class ElasticsearchHitCount extends Component<Props, State> {
  static defaultProps = {
    interval: 1000 * 60 * 5,
    title: 'Elasticsearch Hit Count'
  }

  state = {
    count: 0,
    error: false,
    loading: true
  }

  componentDidMount () {
    schema.validate(this.props)
      .then(() => this.fetchInformation())
      .catch((err) => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
        this.setState({ error: true, loading: false })
      })
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  async fetchInformation () {
    const { authKey, index, query, url } = this.props
    const opts = authKey ? { headers: basicAuthHeader(authKey) } : {}

    try {
      const res = await fetch(`${url}/${index}/_search?q=${query}`, opts)
      const json = await res.json()

      this.setState({ count: json.hits.total, error: false, loading: false })
    } catch (error) {
      this.setState({ error: true, loading: false })
    } finally {
      this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
    }
  }

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
```

Next, we need to add type annotations to the code. We can do this by adding type annotations to the props and state objects, as well as to the function parameters.

```
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { object, string, number } from 'yup'
import Widget from '../../widget'
import Counter from '../../counter'
import { basicAuthHeader } from '../../../lib/auth'

const schema = object().shape({
  url: string().url().required(),
  index: string().required(),
  query: string().required(),
  interval: number(),
  title: string()
})

interface Props {
  url: string;
  index: string;
  query: string;
  interval?: number;
  title?: string;
  authKey?: string;
}

interface State {
  count: number;
  error: boolean;
  loading: boolean;
}

export default class ElasticsearchHitCount extends Component<Props, State> {
  static defaultProps: Props = {
    interval: 1000 * 60 * 5,
    title: 'Elasticsearch Hit Count'
  }

  state: State = {
    count: 0,
    error: false,
    loading: true
  }

  componentDidMount () {
    schema.validate(this.props)
      .then(() => this.fetchInformation())
      .catch((err: any) => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
        this.setState({ error: true, loading: false })
      })
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  async fetchInformation () {
    const { authKey, index, query, url } = this.props
    const opts = authKey ? { headers: basicAuthHeader(authKey) } : {}

    try {
      const res = await fetch(`${url}/${index}/_search?q=${query}`, opts)
      const json = await res.json()

      this.setState({ count: json.hits.total, error: false, loading: false })
    } catch (error: any) {
      this.setState({ error: true, loading: false })
    } finally {
      this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
    }
  }

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
```

Finally, we need to add type definitions for the React components. We can do this by adding type definitions to the React components.

```
import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { object, string, number } from 'yup'
import Widget from '../../widget'
import Counter from '../../counter'
import { basicAuthHeader } from '../../../lib/auth'

const schema = object().shape({
  url: string().url().required(),
  index: string().required(),
  query: string().required(),
  interval: number(),
  title: string()
})

interface Props {
  url: string;
  index: string;
  query: string;
  interval?: number;
  title?: string;
  authKey?: string;
}

interface State {
  count: number;
  error: boolean;
  loading: boolean;
}

export default class ElasticsearchHitCount extends Component<Props, State> {
  static defaultProps: Props = {
    interval: 1000 * 60 * 5,
    title: 'Elasticsearch Hit Count'
  }

  state: State = {
    count: 0,
    error: false,
    loading: true
  }

  componentDidMount () {
    schema.validate(this.props)
      .then(() => this.fetchInformation())
      .catch((err: any) => {
        console.error(`${err.name} @ ${this.constructor.name}`, err.errors)
        this.setState({ error: true, loading: false })
      })
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  async fetchInformation () {
    const { authKey, index, query, url } = this.props
    const opts = authKey ? { headers: basicAuthHeader(authKey) } : {}

    try {
      const res = await fetch(`${url}/${index}/_search?q=${query}`, opts)
      const json = await res.json()

      this.setState({ count: json.hits.total, error: false, loading: false })
    } catch (error: any) {
      this.setState({ error: true, loading: false })
    } finally {
      this.timeout = setTimeout(() => this.fetchInformation(), this.props.interval)
    }
  }

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
```

And that's it! We've successfully converted the file to TypeScript.