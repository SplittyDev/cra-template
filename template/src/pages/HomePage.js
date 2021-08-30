import styled from 'styled-components'

import Page from 'components/Page'

const HomePage = ({ className }) => {
  return (
    <Page injectClassName={className}>
      <p>You can find the routing setup at `src/App.js`.</p>
      <p>Pages are in `src/pages`, components are in `src/components`.</p>
    </Page>
  )
}

export default styled(HomePage)`

`
