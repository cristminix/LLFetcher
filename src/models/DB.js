import ChromeStorageDB from "./ChromeStorageDB"




class DB {
	db = null
	database = 'learning'
	type = 'collection'

	static instance = null
	static configSet = null
	
	constructor(){
		this.db = new ChromeStorageDB(this.database, 'local')
	}

	async getCount(){

	}

	async initTable(){
		console.log(`${this.constructor.name}.initTable()`)
		if(!this.db.tableExists(this.table)){
			this.db.createTable(this.table, this.fields)
			await this.db.commit()
		}
	}	
	async initDB(){
		await this.db.init()
		await this.initTable()

		
	}

	/**
	 * get singleton instance */
	static async getInstance(){
		if(this.instance instanceof this){
		}else{
			this.instance = this.factory();
			await this.instance.initDB()
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

	static async drop(){
        // chrome.storage.local.remove('db_learning');
        // Store.db().setFresh(true);

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