import ChromeStorageDB from "./ChromeStorageDB"
export function convertToMySQLDatetime(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const mysqlDatetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

  return mysqlDatetime;
}

class DB {
	db = null
	database = 'learning'
	type = 'collection'


	static instance = null
	static instances = []
	static configSet = null
	static connection = null
	
	constructor(){
		if(!DB.connection){
			DB.connection = new ChromeStorageDB(this.database, 'local')
			DB.connection.setInitiator(this.constructor.name)
		}
		this.db = DB.connection
	}
	
	async getCount(){

	}

	async initTable(){
		// console.log(`${this.constructor.name}.initTable()`)

		if(!this.table){
			// console.error(`${this.constructor.name}.initTable() empty table`)

			return
		}
		if(!this.db.tableExists(this.table)){
			this.db.createTable(this.table, this.fields)
			await this.db.commit()
		}
	}	
	async initDB(){
		await this.db.init()
		if(this instanceof DB){
			await this.initTable()
		}else{
			console.error(`${this.constructor.name}.initTable() not implemented`)
		}

		
	}

	singleResult(results){
		if(results.length>0){
			return results[0]
		}
		return null
	}
	singleQuery(params){
		if(!this.table){
			console.error(`${this.constructor.name}.singleQuery() table is not specified`)
			return null
		}
		const results = this.db.queryAll(this.table,params)
        return this.singleResult(results)
	}
	query(params){
		if(!this.table){
			console.error(`${this.constructor.name}.query() table is not specified`)
			return []
		}
		return this.db.queryAll(this.table,params)
	}
	getList(){
        const results =  this.db.queryAll(this.table);
        return results
    }
	getAll(){
        const results =  this.db.queryAll(this.table);
        return results
    }
	/**
	 * get singleton instance */
	static async getInstance(){
		if(this.instance instanceof this){
		}else{
			this.instance = this.factory()
			await this.instance.initDB()

			DB.instances.push(this.instance)
		}	

		return this.instance;
	}
	static gotInstance(){
		if(this.instance instanceof this){
		}else{
			this.instance = this.factory()
			DB.instances.push(this.instance)
		}	

		return this.instance;
	}
	/**
	 * singleton factory*/
	static factory(){
		return new this()
	}
	// legacy Store.prepareAppStorage()
	static async prepare(){
        // logServer.log(`Store.prepareAppStorage()`,494);
        // Store.init(()=>{
        //     logServer.log(`After Store.init()`,498);

        //     App.init('',fn);
        // });
    }

	async sync(){
		this.db.reload()
	}

	async drop(){

		if(this instanceof DB){
			await this.db.drop()

			for(let i in DB.instances){
				const instance = DB.instances[i]
				await instance.initDB()
				if(instance.table === 'app'){
					await instance.init()
				}
			}
		}else{
			console.error(`${this.constructor.name}.drop() only implemented for DB instaces`)
		}
        // Store.db().setFresh(true);

    }
    async dropTable(){

		this.db.dropTable(this.table)
		await this.db.commit()
		for(let i in DB.instances){
			const instance = DB.instances[i]
			await instance.initDB()
			if(instance.table === 'app'){
				await instance.init()
			}
		}
	}

	async truncate(){
		this.db.deleteRows(this.table)
		await this.db.commit()
	}
    static async isFresh(){
        // chrome.storage.local.get('db_learning',(db)=>{
        //     console.log(db);
        //     let isFreshInstall = true;
        //     if(typeof db.db_learning == 'object'){
        //         if(typeof db.db_learning.tables == 'object'){
        //             if(typeof db.db_learning.tables.app == 'object'){
        //                 isFreshInstall = false;
        //             }
        //         }
        //     }
        //     fn(isFreshInstall,db);
        // });
    }
/**/
}

export default DB