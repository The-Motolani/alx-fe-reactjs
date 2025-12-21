import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';


export default function Profile() {
    let {path, url} = useRouteMatch();
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li><Link to={`${url}/profile`}>Profile</Link></li>
        <li><Link to={`${url}/settings`}>Settings</Link></li>
      </ul>
      <Switch>
        <Route exact path={path}>
            <h3>Please select a sub-page.</h3>
        </Route>
        <Route path={`${path}/profile`}>
        <ProfilePage />
        </Route>
        <Route path={`${path}/settings`}>
        <ProfileSettingsPage />
        </Route>

      </Switch>
    </div>
  )
}