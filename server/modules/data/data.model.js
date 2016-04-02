'use strict';

const Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity: 'bus_geocoded',
  connection: 'myLocalPostgres',
  attributes: {
    entityId: 'string',
    entityName: 'string',
    principalAddress1: 'string',
    principalAddress2: 'string',
    principalCity: 'string',
    principalState: 'string',
    principalZipCode: 'string',
    principalCountry: 'string',
    mailingAddress1: 'string',
    mailingAddress2: 'string',
    mailingCity: 'string',
    mailingState: 'string',
    mailingZipCode: 'string',
    mailingCountry: 'string',
    entityStatus: 'string',
    jurisdictonOfFormation: 'string',
    entityTypeVerbatim: 'string',
    entityType: 'string',
    agentFirstName: 'string',
    agentMiddleName: 'string',
    agentLastName: 'string',
    agentSuffix: 'string',
    agentOrganizationName: 'string',
    agentPrincipalAddress1: 'string',
    agentPrincipalAddress2: 'string',
    agentPrincipalCity: 'string',
    agentPrincipalState: 'string',
    agentPrincipalZipCode: 'string',
    agentPrincipalCountry: 'string',
    agentMailingAddress1: 'string',
    agentMailingAddress2: 'string',
    agentMailingCity: 'string',
    agentMailingState: 'string',
    agentMailingZipCode: 'string',
    agentMailingCountry: 'string',
    entityFormDate: 'string',
    'Location': 'string'
    // savedGames: {
    //   collection: 'saved_game',
    //   via: 'player',
    //   dominant: true
    // }
  }
});
