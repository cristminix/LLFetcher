import {Component} from "react"
const DLAux = ({course,fmt, downloadFile}) =>{
	return(<div className="dl-aux text-center">
		{
			fmt ?(<>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Playlist : </label>
				  <a onClick={e=>downloadFile('playlist')}  href="#">{course.slug}-{fmt}.m3u</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Bash : </label>
				  <a onClick={e=>downloadFile('shell_script')}  href="#">{course.slug}-{fmt}-helper.sh</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Cmd : </label>
				  <a onClick={e=>downloadFile('batch_script')} href="#">{course.slug}-{fmt}-helper.bat</a>
				</div>
			</>):""
		}
		
		{
			course.sourceCodeRepository?(<div className="exercise-file-cnt">
			<div><label className="form-label">Source Repository : </label> 
				<a target="_blank" href={course.sourceCodeRepository}>{course.sourceCodeRepository}</a></div>
		  </div>):""
		}
				
	</div>)
}
export default DLAux