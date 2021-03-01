"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        hostId: 1,
        name: "Lucy's Little Dog House",
        description:
          "Your pup is sure to feel welcome at my quaint 1 bedroom dog house.",
        streetAddress: "800 S Congress Ave",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        price: 40,
        img:
          "https://images.squarespace-cdn.com/content/v1/59c967729f7456ec37985037/1595364131033-JCN9NXP3LS587DU9A7W1/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/%231+-+DIY+Modern+Dog+House.JPG?format=2500w",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        name: "Zoe's Fabulous Doggie Gettaway",
        description:
          "Your pup is sure to love my brand new modern-chic dog house! Equipped with the most plush dog bed your dog has ever slept on!",
        streetAddress: "1300 Crossing Pl",
        city: "Austin",
        state: "TX",
        zipCode: 78741,
        price: 80,
        img:
          "https://img.sunset02.com/sunsetm/wp-content-uploads/2019-03-28UTC09/woof-ranch-doghouse-pd-workshop-pr-0718.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        name: "Harry's Doggie Wonderland",
        description:
          "Your pup is going to have the best time and my amazin dog house - it even has a pool! What better way to cool off from the TX heat.",
        streetAddress: "907 Dartmoor Dr",
        city: "Austin",
        state: "TX",
        zipCode: 78746,
        price: 45,
        img:
          "https://cdn.vox-cdn.com/thumbor/qI3d4NO7Rw7Te465gqbYtJafT5E=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19310555/Accomplice.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        name: "Mozzie's Modern Doghouse",
        description:
          "Ideal for the smaller pups, my air-conditioned dog house is perfect for keeping your dog cool in the summer.",
        streetAddress: "7903 Valburn Dr",
        city: "Austin",
        state: "TX",
        zipCode: 78731,
        price: 60,
        img:
          "https://usenaturalstone.org/wp-content/uploads/2017/10/Barkitecture.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        name: "Joe's Rustic Dog House",
        description:
          "Your dog will love my spacious 2-bedrom dog house. The large fenced in patio is perfect for squirrel-watching!",
        streetAddress: "8005 Colony Loop Dr",
        city: "Austin",
        state: "TX",
        zipCode: 78724,
        price: 100,
        img:
          "https://i.pinimg.com/originals/ef/f9/c2/eff9c2504cef8073630c451c3b87661f.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        name: "Mollie's Doggie Mansion",
        description:
          "Great for dogs of all sizes! My newly built dog 'mansion' can accomodate all of your pups at once!",
        streetAddress: "9024 Northgate Blvd",
        city: "Austin",
        state: "TX",
        zipCode: 78758,
        price: 35,
        img:
          "https://i.pinimg.com/originals/a9/a9/8f/a9a98f5a83c4ade4aac1daed4eb776f2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        name: "Carrie's Modern Dog House",
        description:
          "Perfect for the sun-bathers - my dog house has an grass-covered roof for your pup to relax on.",
        streetAddress: "6302 Tupelo Dr",
        city: "Austin",
        state: "TX",
        zipCode: 78744,
        price: 55,
        img:
          "https://cdn.homedit.com/wp-content/uploads/2019/02/Green-dog-cool-house-design.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        name: "A Dog House for Every Size!",
        description:
          "No matter what size your pup is, I'm sure to have a dog house to accomadate them nicely!",
        streetAddress: "506 W 37th St",
        city: "Austin",
        state: "TX",
        zipCode: 78705,
        price: 75,
        img:
          "https://img.sunset02.com/sunsetm/wp-content-uploads/2019-03-22UTC04/avant-doghouse-kelly-wearstler-pr-0718-900x506.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        name: "Ollies Open-Air Dog House",
        description:
          "My spacious and breezy dog house is perfect for the dog who loves to roam!",
        streetAddress: "4900 E Oltorf St",
        city: "Austin",
        state: "TX",
        zipCode: 78741,
        price: 70,
        img:
          "https://www.wavy.com/wp-content/uploads/sites/3/2019/06/Norfolk-Barkitecture.jpg?w=826",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        name: "Leah's Zilker Retreat.",
        description:
          "Walking distance to Zilker Park, your dog is sure to have the best time with me!",
        streetAddress: "4604 S Lamar Blvd",
        city: "Austin",
        state: "TX",
        zipCode: 78745,
        price: 65,
        img:
          "https://blog.springtimeinc.com/wp-content/uploads/2018/02/dog-mansion.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
