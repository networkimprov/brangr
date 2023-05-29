// Test config - Brangr v0.x

export default  {
   test: true,

   title: 'Demo',
   notes: 'A Brangr demo by its author. It calls public GraphQL services for \
           SpaceX info, the Star Wars API ("swapi"), and countries of the world. \
           Sadly, the whole "countries" site schema doesn\'t load, \
           because that site limits the size of queries. (I\'m hopeful that could change \
           for schema queries if someone asks github.com/trevorblades nicely :)',
   url: 'https://github.com/networkimprov/brangr',

   targets: {
      spacex: 'https://spacex-production.up.railway.app/',
      swapi: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
      countries: 'https://countries.trevorblades.com/graphql',
      invalid: 'nowhere',
   },

   show: 'file',
   run: 'file',

   qs: [{
      name: 'test',
      text: 
'query testQ { \n\
   top(_layout: {type: stack, maxh: "40vh"}) { \n\
      tfield(_layout: {type: stack}) { ...tfrag ...tembed } \n\
   } \n\
} \n\
fragment tfrag on TField { \n\
   tsubfield(_layout: {type: SERIES, rows: [2, 1]}) { \n\
      ts1 ts2 ts3(_layout: {type: list, delim: " + "}) \n\
   } \n\
} \n\
fragment tembed on TField { tsub ...tfrag2 } \n\
fragment tfrag2 on TField { \n\
   tsub2(_layout: {type: cell, cols:2}) { x y } \n\
}',
      result: { top: [
         { tfield: {tsubfield: { ts1: 'hello', ts2: 'how\'re', ts3: ['you','me'] },
                    tsub: 99,
                    tsub2: [{x: 1, y: 2}, {x:3, y:4}, {x:0, y:0}] } },
         { tfield: {tsubfield: { ts1: 'love', ts2: 'strikes', ts3: ['again','here'] },
                    tsub: 86,
                    tsub2: [{x: 5, y: 6}, {x:7, y:8}] } },
      ]},
   },{
      name: 'SpaceX',
      site: 'spacex',
      url:  './q-spacex.txt',
   },{
      name: 'countries',
      site: 'countries',
      text: '{ __schema {\n  queryType {\n    fields(_layout:{type:table}) {\n\
      name\n      args(_layout:{type:cell}) { name }\n    }\n  }\n}}',
   },{
      name: 'file',
      site: 'swapi',
      url:  './q-swapi.txt',
   }],

   schemaQ: '{ __schema {\
   ##description\n\
     queryType { name }\
     mutationType { name }\
     subscriptionType { name }\
     types {\
       name kind description\
   ##  specifiedByURL\n\
       fields {\
         name description\
         args {\
           name description defaultValue\
           type { ...typeFields }\
         }\
         type { ...typeFields }\
       }\
       interfaces { name }\
       possibleTypes { name }\
       enumValues { name description }\
       inputFields {\
         name description defaultValue\
         type { ...typeFields }\
       }\
     }\
     directives {\
       name description locations\
   ##  isRepeatable\n\
       args {\
         name description defaultValue\
         type { ...typeFields }\
       }\
     }\
   }}\
   fragment typeFields on __Type {\
     name kind\
     ofType {\
       name kind\
       ofType {\
         name kind\
         ofType { name } # may need: name kind ofType { name }\n\
       }\
     }\
   }',

};
