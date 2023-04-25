const DLExerciseFile = ({exerciseFile, downloadFile})=> {
	const dlFile = async(e,kind)=>{
		e.preventDefault()
		await downloadFile(kind)
	}
	// console.log(exerciseFile)
	return(<div className="exercise-file-cnt text-center">
		{exerciseFile.url ? (<div>
			<label className="form-label">Exercise File: </label>
			<a onClick={ e=>dlFile(e,'exercise_file') }  href="#">{exerciseFile.name}</a>
		</div>):""
		}
	</div>)
}
export default DLExerciseFile