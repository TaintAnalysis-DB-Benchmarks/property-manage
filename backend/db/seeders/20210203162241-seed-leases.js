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
      "Leases",
      [
        {
          unitId: 1,
          propertyId: 1,
          tenantId: 1,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 1,
          propertyId: 1,
          tenantId: 2,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 2,
          propertyId: 1,
          tenantId: 3,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 2,
          propertyId: 1,
          tenantId: 4,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 3,
          propertyId: 1,
          tenantId: 5,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 4,
          propertyId: 1,
          tenantId: 5,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 1,
          propertyId: 2,
          tenantId: 6,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          unitId: 2,
          propertyId: 2,
          tenantId: 7,
          startDate: new Date(),
          endDate: new Date,
          createdAt: new Date(),
          updatedAt: new Date(),
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
   return queryInterface.bulkDelete('Leases', null, {});
  },
};
