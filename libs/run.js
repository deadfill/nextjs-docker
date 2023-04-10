// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { MongoClient } = require('mongodb');
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const Typesense = require('typesense');

async function listDatabases(client) {
  // eslint-disable-next-line no-undef
  databasesList = await client.db().admin().listDatabases();

  // eslint-disable-next-line no-undef
  console.log('Databases:');
  // eslint-disable-next-line no-undef
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

function closeChangeStream(timeInMs = 600000, changeStream) {
  return new Promise(resolve => {
    // eslint-disable-next-line no-undef
    setTimeout(() => {
      // eslint-disable-next-line no-undef
      console.log('Closing the change stream');
      changeStream.close();
      resolve();
    }, timeInMs);
  });
}

async function index(next, typesense) {
  // eslint-disable-next-line no-undef
  console.log(next);
  if (next.operationType == 'delete') {
    await typesense.collections('products').documents(next.documentKey._id).delete();
    // eslint-disable-next-line no-undef
    console.log(next.documentKey._id);
  } else if (next.operationType == 'update') {
    let data = JSON.stringify(next.updateDescription.updatedFields);
    await typesense.collections('products').documents(next.documentKey._id).update(data);
    // eslint-disable-next-line no-undef
    console.log(data);
  } else {
    next.fullDocument.id = next.fullDocument['_id'];
    delete next.fullDocument._id;
    let data = JSON.stringify(next.fullDocument);
    await typesense.collections('products').documents().upsert(data);
    // eslint-disable-next-line no-undef
    console.log(data);
  }
}

async function monitorListingsUsingEventEmitter(client, typesense, timeInMs = 60000) {
  const collection = client.db('test').collection('products');
  const changeStream = collection.watch();
  changeStream.on('change', next => {
    index(next, typesense);
  });
  await closeChangeStream(timeInMs, changeStream);
}

async function createSchema(schema, typesense) {
  const collectionsList = await typesense.collections().retrieve();
  var toCreate = collectionsList.find((value, index, array) => {
    return value['name'] == schema['name'];
  });

  if (!toCreate) {
    await typesense.collections().create(schema);
  }
}

async function main() {
  const typesense = new Typesense.Client({
    nodes: [
      {
        host: 'typesense',
        port: '8108',
        protocol: 'http',
      },
    ],
    apiKey: 'xyz',
    connectionTimeoutSeconds: 2,
  });
  let schema = {
    name: 'products',
    fields: [
      {
        name: 'id',
        type: 'string',
        facet: false,
      },
      {
        name: 'name',
        type: 'string',
        facet: false,
      },
      {
        name: 'count',
        type: 'string',
        facet: false,
      },
      {
        name: 'price',
        type: 'int32',
        facet: false,
      },
      {
        name: 'country',
        type: 'string',
        facet: false,
      },
      {
        name: 'descriptions',
        type: 'string',
        facet: false,
      },
      {
        name: 'category',
        type: 'string',
        facet: false,
      },
    ],
    default_sorting_field: 'price',
  };
  createSchema(schema, typesense);
  const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const uri = 'mongodb://mongodb1:27017,mongodb2:27017,mongodb3:27017/?replicaSet=rsmongo';
  const client = new MongoClient(uri, mongodbOptions);
  try {
    await client.connect();
    await listDatabases(client);
    await monitorListingsUsingEventEmitter(client, typesense);
  } catch (e) {
    // eslint-disable-next-line no-undef
    console.error(e);
  } finally {
    await client.close();
  }
}

// eslint-disable-next-line no-undef
main().catch(console.error);