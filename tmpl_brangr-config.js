/* Local configuration - Brangr v0.x
   Brangr is open source, published at https://github.com/networkimprov/brangr

   Edit this file as appropriate for your Brangr instance, and rename it brangr-config.js
*/

export default  {
   // Info for this GraphQL site; appears on Docs page
   title: 'SiteName',
   notes: '',
   url: '',

   // One or more URLs to GraphQL endpoints; can be a string, array, or object
   targets: 'url',
// targets: ['url', 'url2'],
// targets: {one: 'url', two: 'url2'}, // provides CSS classes .site-one & .site-two

   // Name of a query page to display when Brangr loads
// show: 'PageName',

   // Name of a query page to display and run when Brangr loads (supersedes .show)
// run: 'PageName',

   // Set of query pages available when Brangr loads, with fields:
   //   name - title of the query page
   //   site - name of a .targets field (only relevant if .targets is an object)
   //   text - text of the query, or...
   //   url  - text of the query is online at this address (supersedes .text)
   qs: [{
      name: 'PageName',
//    site: 'one',
      text: '{ ... }',
// },{
//    name: 'PageName2',
//    site: 'two',
//    url:  './file.txt',
   }],

   // Query that loads the GraphQL schema for any of the .targets URLs
   // If needed, revise the fragment 'typeFields' to support longer ofType chains.
   // Lines tagged with ## are included in the query. For older GraphQL services
   // that don't support these fields, exclude them by changing the tag to #_.
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
