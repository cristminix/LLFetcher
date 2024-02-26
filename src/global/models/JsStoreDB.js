import { Connection } from "jsstore"
import workerInjector from "jsstore/dist/worker_injector"

class JsStoreDB {
  pk = "id"
  dbName = "llfetcher"
  //   table = null
  //   columns = null
  connection = null
  connected = false
  constructor() {}
  async connect() {
    this.connection = new Connection()
    this.connection.addPlugin(workerInjector)
  }
  calculateOffset(pageNumber, limit) {
    const offset = (pageNumber - 1) * limit
    return offset
  }

  calculateTotalPages(recordCount, limit) {
    return Math.ceil(recordCount / limit)
  }

  async getCount() {
    const results = await this.connection.count({
      from: this.table,
      // where: {
      //     column1: some_value,
      //     column2: some_another_value
      // }
    })
    return results
  }
  async getList(limit = 5, page = 1, orderBy = "id", orderDir = "asc") {
    const total_records = await this.getCount()

    const total_pages = this.calculateTotalPages(total_records, limit)
    const offset = this.calculateOffset(page, limit)

    // const skip = (page - 1) * limit
    const records = await this.connection.select({
      from: this.table,
      limit,
      skip: offset,
      order: {
        by: orderBy,
        type: orderDir,
      },
    })
    return {
      limit,
      page,
      orderBy,
      orderDir,
      total_pages,
      total_records,
      records,
    }
  }
  async get(pk) {
    let where = {}
    where[this.pk] = pk
    const results = await this.connection.select({
      from: this.table,
      where,
    })
    return results.length > 0 ? results[0] : null
  }
  async delete(pk) {}
  async insert(row) {
    const insertedRow = await this.connection.insert({
      into: this.table,
      values: [row],
    })
    return insertedRow
  }
  async update(pk, row) {
    let updatedRow = 0
    let existingRow = await this.get(pk)
    if (existingRow) {
      const uKeys = Object.keys(row)
      for (const key of uKeys) {
        existingRow[key] = row[key]
      }
      updatedRow = await this.connection.insert({
        into: this.table,
        upsert: true,
        values: [existingRow],
      })
    }
    return updatedRow
  }
  async getByKey(key, value) {
    const results = await this.connection.select({
      from: this.table,
      where: {
        [key]: value,
      },
    })
    return results.length > 0 ? results[0] : null
  }
  async insertOrUpdate(row, key = "slug") {
    const existingRow = await this.getByKey(key, row[key])
    let inupcount = 0
    if (!existingRow) {
      inupcount = await this.insert(row)
      //   console.log(insertedRow)
    } else {
      inupcount = await this.update(existingRow[this.pk], row)
      //   console.log(existingRow)
    }
    return inupcount
  }
}

export default JsStoreDB
