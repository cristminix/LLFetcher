const DLExerciseFile = ({exerciseFile})=> {
	const downloadExerciseFile = () =>{
		console.log(exerciseFile)
	}
	// console.log(exerciseFile)
	return(<div className="exercise-file-cnt text-center">
		{exerciseFile.url ? (<div>
			<label className="form-label">Exercise File: </label>
			<a onClick={ e=>downloadExerciseFile() }  href="#">{exerciseFile.name}</a>
		</div>):""
		}
	</div>)
}
export default DLExerciseFile