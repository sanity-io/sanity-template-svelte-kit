// import {client} from '$lib/sanityClient'

// Gets a specific blog post from its slug.current value
export async function get({params: {pack}}) {
  let name = ''
  let previewImageOne = ''
  let previewImageTwo = ''
  let quote = ''
  let cost = ''
  let blurb = ''
  let features = []
  let addons = []
  if (pack === 'family') {
    name = 'Family'
    previewImageOne = '/temp/family.jpeg'
    previewImageTwo = '/temp/family.jpeg'
    quote = 'Where life begins and love nver ends'
    cost = '$250'
    features = [
      '1 hour session in a local area.',
      '1 outfit, additional extra.',
      '15 edited digital images.'
    ]
    addons = [
      'Additional family member - $25',
      'Additional location - $75',
      'Additional time - $75/30min',
      'Additional images - $8/image',
      'All images (edited & non-edited) - $150',
      'Prints - Pricing variable',
      'Travel - Based on cost of gas & distance.'
    ]
    blurb =
      'All sessions are customizable to fit your unique requirements! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper neque a odio consequat pharetra. Feel free to ask any questions you may have.'
  }

  if (pack === 'pets') {
    name = 'Pets'
    previewImageOne = '/temp/family-dog.jpeg'
    previewImageTwo = '/temp/family-dog.jpeg'
    quote = 'Pets understand humans better than humans do.'
    cost = '$200'
    features = [
      '1 hour session in a local area.',
      '1 outfit, additional extra.',
      '15 edited digital images.'
    ]
  }

  if (pack === 'couples') {
    name = 'Couples'
    previewImageOne = '/temp/family.jpeg'
    previewImageTwo = '/temp/family.jpeg'
    quote = "You stole my heart, but I'll let you keep it."
    cost = '$200'
    features = [
      '1 hour session in a local area.',
      '1 outfit, additional extra.',
      '15 edited digital images.'
    ]
    addons = [
      'Additional family member - $25',
      'Additional location - $75',
      'Additional time - $75/30min',
      'Additional images - $8/image',
      'All images (edited & non-edited) - $150',
      'Prints - Pricing variable',
      'Travel - Based on cost of gas & distance.'
    ]
    blurb =
      'All sessions are customizable to fit your unique requirements! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper neque a odio consequat pharetra. Feel free to ask any questions you may have.'
  }

  if (pack === 'artistic') {
    name = 'Artistic'
    previewImageOne = '/temp/wine.jpeg'
    previewImageTwo = '/temp/lake.jpeg'
    quote =
      "The whole point of taking pictures is so that you don't have to explain things with words."
    cost = '$150'
    features = [
      '1 hour session in a local area.',
      '1 outfit, additional extra.',
      '15 edited digital images.'
    ]
    blurb =
      'All sessions are customizable to fit your unique requirements! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper neque a odio consequat pharetra. Feel free to ask any questions you may have.'
  }

  // if (post) {
  return {
    status: 200,
    body: {
      pack: {
        name,
        quote,
        cost,
        blurb,
        previewImageOne,
        previewImageTwo,
        features,
        addons
      }
    }
  }
  // }

  // return {
  //   status: 500,
  //   body: new Error('Internal Server Error')
  // }
}
