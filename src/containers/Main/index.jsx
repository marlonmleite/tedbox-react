import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Loading from 'components/Loading'
import routes from '../../routes'

const Main = () => (
  <Suspense fallback={<Loading />}>
    <Grid container justify="center" alignItems="center">
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </Switch>
    </Grid>
  </Suspense>
)

export default Main
