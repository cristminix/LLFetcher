import fr from "fetch-retry"
import { useEffect } from "react"
import { devApiUrl } from "./fn"
import { Connection } from "jsstore"
import workerInjector from "jsstore/dist/worker_injector"
const fetchr = fr(fetch)
// console.log(workerInjector)

const JsStoreApp = ({ config, store }) => {
  const tblInsert = async (connection) => {
    //   var value = {
    //     column1: value1,
    //     column2: value2,
    //     column3: value3,
    //     ...
    //     columnN: valueN
    // };
    // var noOfRowsInserted = await connection.insert({
    //     into: "TABLE_NAME",
    //     values: [Value], //you can insert multiple values at a time
    // });
    // if (noOfRowsInserted > 0) {
    //     alert('Successfully Added');
    // }
  }
  const tblAlter = async (connection) => {
    const tblProduct = {
      name: "Product",
      columns: {
        id: { primaryKey: true, autoIncrement: true },
        count: {
          dataType: "number",
        },
      },
      alter: {
        // 2 is database version to target
        2: {
          modify: {
            id: {
              notNull: true,
            },
          },
          add: {
            name: {
              dataType: "string",
            },
          },
          drop: {
            count: {},
          },
        },
      },
    }
  }
  const tblOper = async (connection) => {
    const tblProduct = {
      name: "Product",
      columns: {
        // Here "Id" is name of column
        Id: { primaryKey: true, autoIncrement: true },
        ItemName: { notNull: true, dataType: "string" },
        Price: { notNull: true, dataType: "number" },
        Quantity: { notNull: true, dataType: "number" },
      },
    }

    const tblOrder = {
      name: "Order",
      columns: {
        // Here "OrderId" is name of column
        OrderId: { primaryKey: true, autoIncrement: true },
      },
    }

    const db = {
      name: "llfetcher",
      tables: [tblProduct, tblOrder],
    }
    // step 2
    const isDbCreated = await connection.initDb(db)
    // isDbCreated will be true when database will be initiated for first time

    if (isDbCreated) {
      console.log("Db Created & connection is opened")
    } else {
      console.log("Connection is opened")
    }
  }
  const main = () => {
    const connection = new Connection()
    connection.addPlugin(workerInjector)
    console.log(connection)
    tblOper(connection)
  }
  useEffect((f) => {
    main()
  }, [])

  return (
    <>
      <h4 className="font-bold">JsStore</h4>
    </>
  )
}

export default JsStoreApp
