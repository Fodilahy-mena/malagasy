
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyComponent from './MyComponent';


storiesOf('MyComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Faritany', () => <MyComponent label= {'Antananarivo, Antsiranana, Fianarantsoa, Mahajanga, Toamasina, Toliara'}/>)
  .add('Foko', () => <MyComponent label= {'Antakarana, Antandroy, Betsimisaraka,Ny Tsimihety,Foko ao atsinanana,Ny Antambahoaka, Antefasy, Antemoro, Antesaka, Bezanozano, Tanala, Ny Zafisoro,Foko ao atsimo,Antanosy,Mahafaly ,Foko ao andrefana,Sakalava,Makoa,Masikoro,Mikea,Vezo,Foko ao afovoantany,Merina,Sihanaka,Betsileo,Zafimaniry,Bara'} />)
  .add('Teny', () => <MyComponent label= {'Malagasy, Francais'} />);
