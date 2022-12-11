export function formatBytes(bytes: number): string
export function findItems(searchTerm: string, source : any[]): Object[]
export function findDS(k:string,v:string,src:any,props:any,list?:boolean) :any
export function getFmt(url:string) : string
export function makeTitle(slug:string) : string
export function makeSlug(source:string) : string
export function sendMessageSaveDataCodesToLS() : void
export function contentConsoleLog(data : any) : void
export function attachListener(fn:Function) : void
export function sendMessageBg(data:Object):void
declare class LogServer{
	constructor(clientName?:string)
	log(data:any,lineInfo?:string)
	logWeb(data:any,lineInfo?:string)
}
export interface MyLogServer{
	logContent(data:any,lineInfo?:string)
	logWeb(data:any,lineInfo?:string)
}
export function myLogServer() : MyLogServer
export function getLineInfo() : string