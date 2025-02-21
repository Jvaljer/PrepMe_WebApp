import { openDB } from 'idb';

const DB_NAME = 'PrepMeDB';
const DB_VERSION = 1;
const STORE_NAME = 'stretches';

async function initDB()
{
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db)
        {
            if (!db.objectStoreNames.contains(STORE_NAME))
                db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
        }
    });
}

export async function addStretches(sport, session, stretches)
{
    const db = await initDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);

    await store.put({ id: `${sport}-${session}`, sport, session, stretches });
    await tx.done;
}

export async function getStretches(sport, session)
{
    const db = await initDB();
    return await db.get(STORE_NAME, `${sport}-${session}`);
}

export async function clearDB()
{
    const db = await initDB();
    await db.clear(STORE_NAME);
}