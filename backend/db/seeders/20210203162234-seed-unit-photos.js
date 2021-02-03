"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "UnitPhotos",
      [
        {
          photo:
            "data:image/jpeg;base64,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",
          createdAt: new Date(),
          updatedAt: new Date(),
          unitId: 1
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('UnitPhotos', null, {});
  },
};
