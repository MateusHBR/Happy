import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false , cardStyle: { backgroundColor: '#f2f3f5'}}}>
        <Screen 
          name="OrphanagesMap"
          component={OrphanagesMap}
        ></Screen>

        <Screen
          name="OrphanagesDetails"
          component={OrphanagesDetails}
          options={{ headerShown: true, header: () => <Header showCancel={false} title="Orfanato" /> }}
        ></Screen>

        <Screen
          options={{ headerShown: true, header: () => <Header title="Dados do orfanato" /> }}
          name="OrphanageData"
          component={OrphanageData}
        ></Screen>

        <Screen
          options={{ headerShown: true, header: () => <Header title="Selecione no mapa" />}}
          name="SelectMapPosition"
          component={SelectMapPosition}
        ></Screen>
      </Navigator>
    </NavigationContainer>
  );
}