import { FIXTURE_STORE_TYPES } from './storeTypes'

export const FIXTURE_STORES = [
  {
    id: 1,
    uuid: 'abc111',
    name: 'Da Lobster',
    type_id: 1,
    status_id: 1,
    radius: 41,
    tags: [
      {
        uuid: 'a111',
        name: 'ASIAN'
      },
      {
        uuid: 'a222',
        name: 'VEGAN'
      }
    ],
    square_id: 'abc1',
    square_access_token: '125a3116-9616-32e4-9ba3-6102cc45d25b',
    square_refresh_token: '5cce8c0a-897c-3c5f-a541-2e9232e08d3a',
    size: 200,
    owner_uuid: 'o111',
    owner: {
      uuid: 'o111',
      name: 'Josh Smith',
      company: {
        name: 'Restaurant Inc'
      }
    },
    contact_phone: '938 374822',
    state_of_incorporation: 'California',
    website: 'www.restaurantinc.com',
    twitter: 'www.twitter.com/restaurantinc',
    facebook: 'www.facebook.com/restaurantinc',
    instagram: 'www.instagram.com/restaurantinc',
    staff_notes: 'Only visible for Food Fleet Staff',
    has_expired_licences_docs: false,
    event_stores: [
      {
        uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b9877',
        event_uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b9877',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      },
      {
        uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533',
        event_uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533e',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      }
    ],
    store_tags: [
      {
        uuid: '1',
        name: 'minus'
      },
      {
        uuid: '2',
        name: 'hic'
      }
    ],
    location_uuid: 'c4fd0928-b7eb-43ee-871e-e63bfbd0ae7a',
    location: {
      uuid: 'c4fd0928-b7eb-43ee-871e-e63bfbd0ae7a',
      name: 'Port Gerald'
    }
  },
  {
    id: 2,
    uuid: 'abc222',
    name: 'Rekindler',
    type_id: 2,
    status_id: 2,
    radius: 96,
    tags: [
      {
        uuid: 'a111',
        name: 'VEGAN'
      }
    ],
    square_id: 'abc1',
    square_access_token: '24080d4e-e9b5-3789-a80e-095209fc48e3',
    square_refresh_token: '178b810b-0271-3543-afa9-faa80fc9f245',
    size: 150,
    owner_uuid: 'o222',
    owner: {
      uuid: 'o222',
      name: 'Josh Smith',
      company: {
        name: 'Dibitery Inc'
      }
    },
    contact_phone: '938 374822',
    state_of_incorporation: 'New York',
    website: 'www.restaurantinc.com',
    twitter: 'www.twitter.com/restaurantinc',
    facebook: 'www.facebook.com/restaurantinc',
    instagram: 'www.instagram.com/restaurantinc',
    staff_notes: 'Only visible for Food Fleet Staff',
    has_expired_licences_docs: false,
    event_stores: [],
    store_tags: [
      {
        uuid: '1',
        name: 'minus'
      },
      {
        uuid: '2',
        name: 'sit'
      },
      {
        uuid: '3',
        name: 'hicsdfsdf'
      }
    ],
    location_uuid: '00aabd70-aa77-42de-87fd-96449bbd5439',
    location: {
      uuid: '00aabd70-aa77-42de-87fd-96449bbd5439',
      name: 'Carminestad'
    }
  },
  {
    id: 3,
    uuid: 'abc333',
    name: 'Fiora',
    type_id: 2,
    status_id: 2,
    radius: 37,
    tags: [{
      uuid: 'a111',
      name: 'ASIAN'
    }],
    square_id: 'abc1',
    square_access_token: 'e5bb3383-7f8d-37b1-acd6-f7964588c784',
    square_refresh_token: 'ded50e01-c5cd-33d2-a93e-20ca2cd6ec23',
    size: 340,
    owner_uuid: 'o333',
    owner: {
      uuid: 'o333',
      name: 'Josh Smith',
      company: {
        name: 'Dibitery Inc'
      }
    },
    contact_phone: '938 374822',
    state_of_incorporation: 'California',
    website: 'www.restaurantinc.com',
    twitter: 'www.twitter.com/restaurantinc',
    facebook: 'www.facebook.com/restaurantinc',
    instagram: 'www.instagram.com/restaurantinc',
    staff_notes: 'Only visible for Food Fleet Staff',
    has_expired_licences_docs: true,
    event_stores: [],
    store_tags: [
      {
        uuid: '1',
        name: 'minus'
      },
      {
        uuid: '2',
        name: 'hic'
      },
      {
        uuid: '3',
        name: 'acsfdd'
      },
      {
        uuid: '4',
        name: 'fsdf'
      }
    ],
    location_uuid: 'dfb4bd02-c298-4dd4-ab49-2c3f156f2894',
    location: {
      uuid: 'dfb4bd02-c298-4dd4-ab49-2c3f156f2894',
      name: 'New Charlenebury'
    }
  },
  {
    id: 4,
    uuid: 'abc444',
    name: 'Trundle',
    type_id: 2,
    status_id: 3,
    radius: 14,
    tags: [{
      uuid: 'a111',
      name: 'ASIAN'
    }, {
      uuid: 'v111',
      name: 'VEGAN'
    }],
    square_id: 'abc1',
    square_access_token: '8c8ffcd5-02b5-3b57-a417-18b048fddc02',
    square_refresh_token: '2815523a-a6f2-3fa4-aa65-641a69f9bea1',
    size: 123,
    owner_uuid: 'o444',
    owner: {
      uuid: 'o444',
      name: 'Josh Smith',
      company: {
        name: 'Restaurant Inc'
      }
    },
    contact_phone: '938 374822',
    state_of_incorporation: 'California',
    website: 'www.restaurantinc.com',
    twitter: 'www.twitter.com/restaurantinc',
    facebook: 'www.facebook.com/restaurantinc',
    instagram: 'www.instagram.com/restaurantinc',
    staff_notes: 'Only visible for Food Fleet Staff',
    has_expired_licences_docs: false,
    event_stores: [
      {
        uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b987',
        event_uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b9877',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      },
      {
        uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533e',
        event_uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533e',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      }
    ],
    store_tags: [
      {
        uuid: '2',
        name: 'hic'
      },
      {
        uuid: '4',
        name: 'fsdf'
      }
    ],
    location_uuid: 'f4dad0c7-4fe7-3fa3-a387-c9c3ac90a9b3',
    location: {
      uuid: 'f4dad0c7-4fe7-3fa3-a387-c9c3ac90a9b3',
      name: 'Vivienberg'
    }
  },
  {
    id: 5,
    uuid: 'abc555',
    name: 'La fourchette',
    type_id: 2,
    status_id: 4,
    radius: 32,
    tags: [
      {
        uuid: 't1',
        name: 'VEGAN'
      }
    ],
    square_id: 'abc1',
    square_access_token: 'a66c22b0-f98d-3dd7-bfce-cc2a1502ede1',
    square_refresh_token: '96edcfad-d6b3-3ee1-812a-502082cf5cb1',
    size: '',
    owner_uuid: 'o555',
    owner: {
      uuid: 'o555',
      name: 'Josh Smith',
      company: {
        name: 'Restaurant Inc'
      }
    },
    contact_phone: '938 374822',
    state_of_incorporation: 'California',
    website: 'www.restaurantinc.com',
    twitter: 'www.twitter.com/restaurantinc',
    facebook: 'www.facebook.com/restaurantinc',
    instagram: 'www.instagram.com/restaurantinc',
    staff_notes: 'Only visible for Food Fleet Staff',
    has_expired_licences_docs: false,
    event_stores: [
      {
        uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b9877',
        event_uuid: 'efe8189b-b8d0-36a7-bc96-6a53436b9877',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      },
      {
        uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533e',
        event_uuid: '1da1b683-8ce3-31f1-ab9f-a8eefe64533e',
        store_uuid: '06928f72-23b6-48f0-b853-f4c46aa44c31',
        commission_rate: null,
        commission_type: null
      }
    ],
    location_uuid: 'af7eb46a-7bc1-3b00-8d56-e22a23d1fe23',
    location: {
      uuid: 'af7eb46a-7bc1-3b00-8d56-e22a23d1fe23',
      name: 'O\'Konborough'
    },
    store_tags: [
      { uuid: '4', name: 'Tag 4' }
    ]
  }
].map(store => {
  return {
    ...store,
    type: FIXTURE_STORE_TYPES.find(type => type.id === store.type_id)
  }
})

export const FIXTURE_STORE = FIXTURE_STORES[0]
