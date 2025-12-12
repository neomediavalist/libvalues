const ideologies = {
  // libright
  'Hoppeanism': {
    a: 40,
    b: 58,
    c: 0,
    d: 0,
    e: 8,
    f: 50,
    g: 70,
    h: 0
  },
  'Libertarian-Monarchism': {
    a: 70,
    b: 80,
    c: 0,
    d: 0,
    e: 5,
    f: 50,
    g: 60,
    h: 40
  },
  'Minarchism': {
    a: 64,
    b: 76,
    c: 10,
    d: 10,
    e: 75,
    f: 50,
    g: 50,
    h: 45
  },
  'Paleolibertarianism': {
    a: 60,
    b: 65,
    c: 0,
    d: 0,
    e: 3,
    f: 50,
    g: 70,
    h: 0
  },
  'Anarcho-Capitalism': {
    a: 10,
    b: 20,
    c: 0,
    d: 10,
    e: 85,
    f: 40,
    g: 10,
    h: 10
  },
  'Avaritionism': {
    a: 0,
    b: 35,
    c: 0,
    d: 0,
    e: 20,
    f: 20,
    g: 50,
    h: 60
  },
  'Bleeding-Heart': {
    a: 57,
    b: 54,
    c: 17,
    d: 24,
    e: 90,
    f: 60,
    g: 30,
    h: 20
  },
  'NRx': {
    a: 50,
    b: 100,
    c: 0,
    d: 20,
    e: 0,
    f: 0,
    g: 100,
    h: 65
  },
  'Hayekism': {
    a: 50,
    b: 40,
    c: 30,
    d: 30,
    e: 80,
    f: 35,
    g: 40,
    h: 40
  },
  'ClassLib': {
    a: 30,
    b: 40,
    c: 20,
    d: 20,
    e: 70,
    f: 40,
    g: 55,
    h: 30
  },
  'NeoClassLib': {
    a: 35,
    b: 45,
    c: 22,
    d: 30,
    e: 70,
    f: 30,
    g: 50,
    h: 55
  },
  'Neolibertarianism': {
    a: 45,
    b: 50,
    c: 35,
    d: 35,
    e: 30,
    f: 30,
    g: 65,
    h: 100
  },
  'Fusionism': {
    a: 55,
    b: 50,
    c: 35,
    d: 35,
    e: 50,
    f: 30,
    g: 75,
    h: 80
  },
  'Neoliberalism': {
    a: 50,
    b: 50,
    c: 40,
    d: 40,
    e: 40,
    f: 30,
    g: 30,
    h: 70
  },
  'Paleoconservatism': {
    a: 65,
    b: 70,
    c: 30,
    d: 30,
    e: 10,
    f: 50,
    g: 90,
    h: 0
  },
  'Ordoliberalism': {
    a: 50,
    b: 50,
    c: 50,
    d: 50,
    e: 50,
    f: 40,
    g: 50,
    h: 50
  },
  'Agorism': {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 100,
    f: 30,
    g: 30,
    h: 0
  },
  'Alt-Right': {
    a: 80,
    b: 100,
    c: 40,
    d: 50,
    e: 0,
    f: 50,
    g: 80,
    h: 80
  },
  // libleft
  'Anarcho-Communism': {
    a: 0,
    b: 0,
    c: 80,
    d: 90,
    e: 50,
    f: 60,
    g: 0,
    h: 0
  },
  'Autonomism': {
    a: 0,
    b: 10,
    c: 50,
    d: 80,
    e: 50,
    f: 50,
    g: 0,
    h: 10
  },
  'Democratic-Confederalism': {
    a: 0,
    b: 15,
    c: 40,
    d: 70,
    e: 70,
    f: 60,
    g: 20,
    h: 80
  },
  'Ego-Communism': {
    a: 0,
    b: 20,
    c: 70,
    d: 40,
    e: 70,
    f: 40,
    g: 10,
    h: 0
  },
  'Anarcho-Mutualism': {
    a: 0,
    b: 0,
    c: 15,
    d: 60,
    e: 50,
    f: 50,
    g: 20,
    h: 0
  },
  'Minarcho-Mutualism': {
    a: 70,
    b: 10,
    c: 20,
    d: 75,
    e: 50,
    f: 40,
    g: 30,
    h: 50
  },
  'Minarcho-Socialism': {
    a: 50,
    b: 20,
    c: 60,
    d: 80,
    e: 30,
    f: 30,
    g: 20,
    h: 30
  },
  'Platformism': {
    a: 0,
    b: 70,
    c: 80,
    d: 90,
    e: 60,
    f: 50,
    g: 35,
    h: 0
  },
  'LeftRoth': {
    a: 0,
    b: 40,
    c: 0,
    d: 40,
    e: 100,
    f: 45,
    g: 40,
    h: 0
  },
  'Geolibertarianism': {
    a: 30,
    b: 30,
    c: 30,
    d: 40,
    e: 70,
    f: 65,
    g: 40,
    h: 40
  },
  'Green-Libertarianism': {
    a: 50,
    b: 20,
    c: 30,
    d: 50,
    e: 80,
    f: 90,
    g: 20,
    h: 0
  },
  'Anarcho-Primitivism': {
    a: 0,
    b: 0,
    c: 80,
    d: 60,
    e: 80,
    f: 100,
    g: 35,
    h: 0
  },
  'Guild-Socialism': {
    a: 40,
    b: 30,
    c: 70,
    d: 80,
    e: 50,
    f: 50,
    g: 35,
    h: 20
  },
  'Green-Anarchism': {
    a: 0,
    b: 0,
    c: 80,
    d: 60,
    e: 80,
    f: 90,
    g: 10,
    h: 0
  },
  // central
  'Anarcho-Egoism': {
    a: 0,
    b: 0,
    c: 30,
    d: 0,
    e: 100,
    f: 50,
    g: 0,
    h: 0
  },
  'Religious-Anarchism': {
    a: 0,
    b: 30,
    c: 50,
    d: 60,
    e: 80,
    f: 70,
    g: 100,
    h: 0
  }
}
