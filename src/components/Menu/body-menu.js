import React, {useState} from 'react';
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'

// Icons
import {
  Home,
  GolfCourse,
  ContactMail
} from '@mui/icons-material';

const BodyMenu = () => {

  const [isActivit, setIsActivit] = useState(false)

  const handleChange = () => {
    setIsActivit(!isActivit);
  }

  return (
    <Tabs
      value={isActivit}
      onChange={handleChange}
      aria-label="disabled tabs example"
      variant="scrollable"
      scrollButtons={false}
      aria-label="scrollable prevent tabs example"
    >
      <Tab label="Home" icon={<Home />} disabled={isActivit} />
      <Tab label="Cursos" icon={<GolfCourse />} disabled={isActivit} />
      <Tab label="Contato" icon={<ContactMail />} disabled={isActivit} />
    </Tabs>
  )
}

export default BodyMenu;