export const actions = {
  Phillips_Lampe: ['an', 'aus', 'dimmen', 'farbe'],
};

export const typeActions = {
  Lampe: ['an', 'aus', 'dimmen', 'farbe'],
  Kühlschrank: ['an', 'aus', 'temperator'],
  Waschmaschine: ['an', 'aus', 'Standard Programm'],
  Steckdose: ['an', 'aus'],
  Schalter: ['an', 'aus'],
  Knöpfe: ['an', 'aus'],
  Thermostat: ['an', 'aus'],
  Stromzähler: [],
  Bewegungsmelder: ['an', 'aus'],
  Kameras: [
    'an',
    'aus',
    'Aufzeichnung Beenden',
    'Aufzeichnung start',
    'Screenshot',
  ],
  Schließkontakte: ['an', 'aus'],
  Fernseher: ['an', 'aus'],
  Türklingel: ['an', 'aus'],
  Steuerungseinheiten: ['an', 'aus'],
  Bewässerung: ['an', 'aus'],
  Sonstiges: ['an', 'aus'],
};
const defaultEvents = [
  'OnlineGegangen',
  'GerätKannFunktionenNichtMehrAusführen',
  'GerätKannFunktionenWiederAusführen',
];
export const typeEvents = {
  Lampe: [...defaultEvents],
  Kühlschrank: [...defaultEvents],
  Waschmaschine: [...defaultEvents],
  Steckdose: [...defaultEvents],
  Schalter: [...defaultEvents],
  Knöpfe: [
    ...defaultEvents,
    'EinmalGedrück',
    'ZweimalGedrück',
    'EinmalLangeGedrückt',
  ],
  Thermostat: [...defaultEvents],
  Stromzähler: [...defaultEvents],
  Bewegungsmelder: [...defaultEvents],
  Kameras: [...defaultEvents],
  Schließkontakte: [...defaultEvents],
  Fernseher: [...defaultEvents],
  Türklingel: [...defaultEvents],
  Steuerungseinheiten: [...defaultEvents],
  Bewässerung: [...defaultEvents],
  Sonstiges: [...defaultEvents],
};

const defaultAttributes = ['OnlineStatus', 'FunktionsStatus'];
export const typeAttributes = {
  Lampe: [...defaultAttributes],
  Kühlschrank: [...defaultAttributes],
  Waschmaschine: [...defaultAttributes],
  Steckdose: [...defaultAttributes],
  Schalter: [...defaultAttributes],
  Knöpfe: [...defaultAttributes],
  Thermostat: [...defaultAttributes],
  Stromzähler: [...defaultAttributes],
  Bewegungsmelder: [...defaultAttributes],
  Kameras: [...defaultAttributes],
  Schließkontakte: [...defaultAttributes],
  Fernseher: [...defaultAttributes],
  Türklingel: [...defaultAttributes],
  Steuerungseinheiten: [...defaultAttributes],
  Bewässerung: [...defaultAttributes],
  Sonstiges: [...defaultAttributes],
};
