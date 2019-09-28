import * as React from 'react';
import { observer } from 'mobx-react-lite';
import { IStore } from "../stores";
import { StoreContext } from './context';
import { Slot } from './slot';
import { Condition } from './condition';
import { Title } from './title';
import { Summary } from './summary';

const App = observer<{ store: IStore }>(({ store }) => {
  return store.loading ? null : (
    <StoreContext.Provider value={store}>
      <div className="app">
        <div className="app_inner">
          <Condition />
          {store.condition.job !== undefined && (
            <div className="gears">
              {store.schema.slots.map(slot => (
                <Slot key={slot.slot} slot={slot} />
              ))}
            </div>
          )}
          <div className="sidebar">
            <div className="sidebar_inner">
              <Title />
              {store.condition.job !== undefined && <Summary />}
            </div>
          </div>
          <div id="popper" />
        </div>
      </div>
    </StoreContext.Provider>
  );
});

export { App };
