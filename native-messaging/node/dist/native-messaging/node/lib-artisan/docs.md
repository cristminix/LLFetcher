```
./artisan sideMenu list --json_path=src/
components/side_menu.json

./artisan sideMenu add puppeteerx PuppeteerX test/puppeterrx 'fa fa-hand-right' --json_path=src/components/side_menu.json

./artisan sideMenu remove  puppeteerx --json_path=src/
components/side_menu.json


./artisan createModelEntity cms_user custom  --schema=src/api/data-source/config.json --out-model-dir=src/api/models --out-entity-dir=src/api/entities

/artisan createModuleAction createSchemaDef table_name,pk,columns,types,nullables,lengths,validations ./lib-artisan/actions.json 


./artisan createSchemaDef cms_setup id [already_setup,theme,create_date,last_updated] [varchar,varchar,datetime,datetime] [create_date,last_updated] [null,null,null,null] [[required,min=8],null,null] --schema=src/api/data-source/config.json 

./artisan html2React -draft contact.html

./artisan extractPrelineExample ~/websites/preline_co/preline.co/examples/navigations-navbars.html navigations_navbars -draft


```