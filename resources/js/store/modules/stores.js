import isObject from 'lodash/isObject'
import omitBy from 'lodash/omitBy'
import makeRestStore, {
  makeModule
} from '../utils/makeRestStore'
import pick from 'lodash/pick'
import { buildApi } from '@freshinup/core-ui/src/store/utils/makeRestStore'

export const SORTABLES = [
  { value: '-created_at', text: 'Newest' },
  { value: 'created_at', text: 'Oldest' },
  { value: 'name', text: 'Name (A - Z)' },
  { value: '-name', text: 'Name (Z - A)' }
]

export default ({ items, item }) => {
  const storesApi = buildApi('foodfleet/stores', { items, item })
  const store = makeModule(storesApi.getStore(), 'stores')

  const FILLABLES = [
    'name',
    'square_id',
    'status_id',
    'type_id',
    'supplier_uuid',
    'address_uuid',
    'website',
    'contact_phone',
    'size',
    'image',
    'created_at',
    'updated_at',
    'deleted_at',
    'owner_uuid',
    'phone',
    'state_of_incorporation',
    'facebook',
    'twitter',
    'instagram',
    'staff_notes',
    'tags'
  ]

  // Initial State
  store.state = {
    ...store.state,
    sortables: SORTABLES
  }

  const _createItem = store.actions.createItem
  const _updateItem = store.actions.updateItem
  const process = (payload) => {
    const data = pick(payload.data, FILLABLES)
    if (data.tags) {
      data.tags = data.tags.map(tag => {
        return isObject(tag) ? tag.uuid : tag
      })
    }
    return Object.assign({}, payload, { data })
  }
  store.actions = {
    ...store.actions,
    createItem (context, payload) {
      const processedPayload = process(payload)
      processedPayload.data = omitBy(processedPayload.data, (value) => {
        return String(value).length === 0
      })
      return _createItem(context, processedPayload)
    },
    updateItem (context, payload) {
      const processedPayload = process(payload)
      return _updateItem(context, processedPayload)
    }
  }

  return {
    namespaced: true,
    ...store,
    modules: {
      summary: makeRestStore(
        'summary',
        { item },
        {
          itemPath: ({ id }) => `/foodfleet/store-summary/${id}`
        }
      ),
      serviceSummary: makeRestStore(
        'serviceSummary',
        { item },
        {
          itemPath: ({ id }) => `/foodfleet/store-service-summary/${id}`
        }
      ),
      events: makeRestStore(
        'events',
        { item },
        {
          itemsPath: ({ id }) => `/foodfleet/stores/${id}/events`,
          itemPath: ({ id, eventId }) => `/foodfleet/stores/${id}/events/${eventId}`
        }
      ),
      stats: makeRestStore(
        'stats',
        { item },
        {
          itemsPath: () => `/foodfleet/stores/stats`
        }
      ),
      squareLocations: makeRestStore(
        'squareLocations',
        { items, item },
        {
          itemsPath: ({ id }) => `/foodfleet/stores/${id}/square-locations`
        }
      )
    }
  }
}
