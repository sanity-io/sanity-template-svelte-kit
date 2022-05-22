// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import photographer from './documents/photographer'
import album from './documents/album'
import photo from './documents/photo'
import content from './documents/content'

// Object types
import photographerReference from './objects/photographerReference'
import albumReference from './objects/albumReference'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    photo,
    album,
    photographer,
    content,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    photographerReference,
    albumReference
  ])
})
