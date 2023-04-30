const StateTbl = ({logBarData, 
					enableDl,loadingDl,
					qPercentage,
					cPercentage,
					percentage, 
					iconCls, 
					dlText, 
					enableResetFlag,loadingResetFlag,
					enableResetQueue,loadingResetQueue,
					rfIconCls,
					rqIconCls,
					cInProgress,
					cSuccessCount,cInteruptCount,downloads,queueStarted,dlstate}) => {
	return (<div className="state-tbl">
		<table className="table table-bordered">
			<thead>
				<tr>
					<th>Key</th><th>Value</th>
					<th>Key</th><th>Value</th>
					<th>Key</th><th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>qPercentage</td><td>{qPercentage}</td>
					<td>cPercentage</td><td>{cPercentage}</td>
					<td>percentage</td><td>{percentage}</td>
				</tr>
				<tr>
					<td>iconCls</td><td><i className={`fa ${iconCls}`}/> {iconCls}</td>
					<td>rfIconCls</td><td><i className={`fa ${rfIconCls}`}/> {rfIconCls}</td>
					<td>rqIconCls</td><td><i className={`fa ${rqIconCls}`}/> {rqIconCls}</td>
				</tr>
				<tr>
					<td>loadingDl</td><td>{loadingDl?'Y':'N'}</td>
					<td>loadingResetFlag</td><td>{loadingResetFlag?'Y':'N'}</td>
					<td>loadingResetQueue</td><td>{loadingResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td>enableDl</td><td>{enableDl?'Y':'N'}</td>
					<td>enableResetFlag</td><td>{enableResetFlag?'Y':'N'}</td>
					<td>enableResetQueue</td><td>{enableResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td>cInProgress</td><td>{cInProgress?'Y':'N'}</td>
					<td>queueStarted</td><td>{queueStarted?'Y':'N'}</td>
					<td></td><td>{''}</td>
				</tr>
				<tr>
					<td>Total</td><td>{downloads.length}</td>
					<td>Success</td><td>{cSuccessCount}</td>
					<td>Fails</td><td>{cInteruptCount}</td>
					
				</tr>
				<tr>
					<td>dlstate</td><td>{JSON.stringify(dlstate)}</td>
					<td></td><td>{''}</td>
					<td></td><td>{''}</td>
					
				</tr>
			</tbody>
		</table>
	</div>)
}

export default StateTbl