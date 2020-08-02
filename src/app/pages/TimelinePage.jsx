import React from 'react';
import {Timeline, useStoreContext} from '@technote-space/ga-framework';

export default function TimelinePage() {
  const {store: {histories}} = useStoreContext();

  return <Timeline data={histories}/>;
}
