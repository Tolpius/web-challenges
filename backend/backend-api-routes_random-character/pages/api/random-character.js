import Chance from "chance";

export default function handler(req, res) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitter: chance.twitter(),
    geohash: chance.geohash(),
    age: chance.age(),
    profession: chance.profession(),
    company: chance.company(),
    address: chance.address(),
  };

  res.status(200).json(character);
}
