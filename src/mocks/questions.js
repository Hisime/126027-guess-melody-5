const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [{
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: 1,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `blues`,
      id: 2,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `jazz`,
      id: 3,
    }, {
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
      genre: `rock`,
      id: 4,
    }]
  }, {
    type: `artist`,
    song: {
      artist: `Matthew Bellamy`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [{
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Brian Molko`,
      id: 1,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Serj Tankian`,
      id: 2,
    }, {
      picture: `${AVATAR_URL}/${Math.random()}`,
      artist: `Matthew Bellamy`,
      id: 3,
    }],
  }
];
