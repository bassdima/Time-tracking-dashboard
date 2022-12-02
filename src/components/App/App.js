import { GeneralCard } from '../GeneralCard';
import { TimeTrackingCard } from '../TimeTrackingCard';
import { useState } from 'react';
import { NAVBAR_TEXT } from '../../constans';
import data from '../../data.json';
import './app.css';

export function App() {
  const [selectedNavbarItem, setSelectedNavbarItem] = useState(NAVBAR_TEXT[1]);

  return (
    <div className="wrapper">
      <GeneralCard
        onNavbarClick={setSelectedNavbarItem}
        selectedItem={selectedNavbarItem}
      />
      <TimeTrackingCard
        selectedItem={selectedNavbarItem}
        timeTrackingData={data}
      />
    </div>
  );
}
