import { schema } from 'normalizr';

const meterSchema = new schema.Entity(
  'meters',
  {},
  {
    idAttribute: 'logicalDeviceName',
  }
);
const meterListSchema = new schema.Array(meterSchema);

const subscriberSchema = new schema.Entity(
  'subscribers',
  {},
  {
    idAttribute: 'nationalId',
  }
);
const subscriberListSchema = new schema.Array(subscriberSchema);

const orderSchema = new schema.Entity(
  'orders',
  {},
  {
    idAttribute: '_id',
  }
);
const orderListSchema = new schema.Array(orderSchema);

export {
  meterSchema,
  meterListSchema,
  orderSchema,
  orderListSchema,
  subscriberSchema,
  subscriberListSchema,
};
