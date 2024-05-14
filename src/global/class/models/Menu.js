import JsStoreDB from "./JsStoreDB"

class Menu extends JsStoreDB {
  table = "menu"

  columns = {
    id: { primaryKey: true, autoIncrement: true },
    title: { notNull: true, dataType: "string" },
    slug: { notNull: true, dataType: "string", unique: true },
    path: { notNull: true, dataType: "string" },
    iconCls: { notNull: false, dataType: "string" },
    order: { notNull: false, dataType: "number", default: 0 },
    hasChild: { notNull: false, dataType: "boolean", default: false },

    level: { notNull: false, dataType: "number", default: 0 },
    parent: { notNull: false, dataType: "number", default: -1 },
    hidden: { notNull: false, dataType: "boolean", default: false },
    dev: { notNull: false, dataType: "boolean", default: false },

    useModel: { notNull: false, dataType: "boolean", default: false },
    model: { notNull: false, dataType: "string", default: "" },
    modelListMethod: { notNull: false, dataType: "string", default: "" },
    slugField: { notNull: false, dataType: "string", default: "" },
    displayField: { notNull: false, dataType: "string", default: "" },
    childRoutePath: { notNull: false, dataType: "string", default: "" },
    childIconCls: { notNull: false, dataType: "string", default: "" },
  }
  constructor() {
    super()
    this.connect()
    this.initTable()
  }
  static instance = null
  static getInstance() {
    if (Menu.instance instanceof Menu) {
      return Menu.instance
    } else {
      Menu.instance = new Menu()
      return Menu.instance
    }
  }
  static arrayToTreeData(array) {
    const treeData = []
    const height = 50
    for (const item of array) {
      const treeItem = {
        data: item,
        height,
      }
      treeData.push(treeItem)
    }
    return treeData
  }
  async getList(parent = -1, limit = 5, page = 1, orderBy = "order", orderDir = "asc") {
    const total_records = await this.getCount(parent)

    const total_pages = this.calculateTotalPages(total_records, limit)
    const offset = this.calculateOffset(page, limit)

    // const skip = (page - 1) * limit
    const records = await this.connection.select({
      from: this.table,
      limit,
      skip: offset,
      where: {
        parent,
      },
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
  async insertOrUpdate(row, key = "slug") {
    let record = null
    const existingRow = await this.getByKey(key, row[key])
    let inupcount = 0
    if (!existingRow) {
      inupcount = await this.insert(row)
      // console.log(`i:${inupcount}`)
      record = await this.getByKey(key, row[key])
    } else {
      record = existingRow
      inupcount = await this.update(existingRow[this.pk], row)
      // console.log(`u:${inupcount}`)
    }
    return record
  }
  async getMaxOrder(parent = -1) {
    const results = await this.connection.select({
      from: this.table,
      where: {
        ["parent"]: parent,
      },
      aggregate: {
        max: "order",
      },
    })
    if (results.length > 0) {
      return results[0]["max(order)"]
    }
    return 0
  }
  async initTable() {
    const db = {
      name: this.dbName,
      tables: [
        {
          name: this.table,
          columns: this.columns,
        },
      ],
    }
    const isDbCreated = await this.connection.initDb(db)
    if (isDbCreated) {
      this.connected = true
      console.log("Db Created & connection is opened")
    } else {
      console.log("Connection is opened")
    }
  }
  async fixOrder(parent = -1) {
    const records = await this.connection.select({
      from: this.table,
      order: {
        by: "order",
        type: "asc",
      },
      where: {
        parent,
      },
    })
    const pkOrders = []
    const orders = []
    let newOrder = 0
    for (const row of records) {
      pkOrders.push(row[this.pk])
      orders.push(row.order)

      if (row.order !== newOrder) {
        row.order = newOrder
        await this.update(row[this.pk], row)
      }
      newOrder += 1
    }
    console.log(orders, pkOrders)
  }
  async getPrevRecord(parent, currentOrder) {
    const records = await this.connection.select({
      from: this.table,
      order: {
        by: "order",
        type: "asc",
      },
      where: {
        parent,
        order: currentOrder - 1,
      },
    })
    return records.length > 0 ? records[0] : null
  }
  async getNextRecord(parent, currentOrder) {
    const records = await this.connection.select({
      from: this.table,
      order: {
        by: "order",
        type: "asc",
      },
      where: {
        parent,
        order: currentOrder + 1,
      },
    })
    return records.length > 0 ? records[0] : null
  }
  async moveUp(pk) {
    let ok = false
    let currentRow = await this.get(pk)

    await this.fixOrder(currentRow.parent)
    currentRow = await this.get(pk)
    const currentOrder = currentRow.order
    const prevRecord = await this.getPrevRecord(currentRow.parent, currentOrder)

    if (prevRecord) {
      currentRow.order = prevRecord.order
      prevRecord.order = currentOrder
      await this.update(prevRecord[this.pk], prevRecord)
      await this.update(currentRow[this.pk], currentRow)
      ok = true
    } else {
      console.log("nothing to move up")
    }

    console.log(currentOrder, prevRecord)
    return ok
  }
  async moveDown(pk) {
    let ok = false
    let currentRow = await this.get(pk)

    await this.fixOrder(currentRow.parent)
    currentRow = await this.get(pk)
    const currentOrder = currentRow.order
    const nextRecord = await this.getNextRecord(currentRow.parent, currentOrder)

    if (nextRecord) {
      currentRow.order = nextRecord.order
      nextRecord.order = currentOrder
      await this.update(nextRecord[this.pk], nextRecord)
      await this.update(currentRow[this.pk], currentRow)
      ok = true
    } else {
      console.log("nothing to move down")
    }

    console.log(currentOrder, nextRecord)
    return ok
  }
  async getMenuList(maxRow = 100, createTreeData = false, exportMode = false) {
    const lists = await this.getList(-1, maxRow)
    const menus = !createTreeData ? lists.records : Menu.arrayToTreeData(lists.records)
    for (const menu of menus) {
      const subLists = await this.getList(!createTreeData ? menu.id : menu.data.id, maxRow)
      const childMenus = !createTreeData ? subLists.records : Menu.arrayToTreeData(subLists.records)
      menu.children = childMenus
    }
    return menus
  }
  async import(menus) {
    for (const menu of menus) {
      delete menu.id
      console.log(menu)
      const record = await this.insertOrUpdate(menu, "slug")
      for (const child of menu.children) {
        delete child.id
        child.parent = record.id
        const childRecord = await this.insertOrUpdate(child, "slug")
        console.log(childRecord)
      }
    }
  }
}

export default Menu
