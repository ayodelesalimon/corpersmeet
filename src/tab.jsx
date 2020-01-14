import React from 'react'
import { Tab } from 'semantic-ui-react'
import GridExampleCelledInternally from './PrivacyPage/Tabs/Terms/Terms';
import Overview from './PrivacyPage/Tabs/Overview/Overview';

const panes = [
  {
    menuItem: 'Overview', render: () => <Tab.Pane><Overview/></Tab.Pane>,},
  { menuItem: 'Privacy Policy', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Terms of Service', render: () => <Tab.Pane><GridExampleCelledInternally/></Tab.Pane> },
  { menuItem: 'Data Usage Policy', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },

]

const PrivacyHome = () => 
<div className="contact">
    <div className="contact-div">
        <h1 className="contact-header">Privacy & Terms</h1>
    </div>


<Tab panes={panes} />
</div>
export default PrivacyHome
