import React from "react"
import GridItems from "./GridItems"
import GridHeaders from "./GridHeaders"
import _ from "underscore"
import { niceScrollbarCls } from "../ux/cls"
class GridTable extends React.Component {
  constructor(props) {
    super(props)
    // this.state= {
    // 	records : this.props.records
    // }
  }

  async componentWillReceiveProps(props) {
    const records = props.records
    this.setState({ records: [] }, (f) => {
      this.setState({ records })
    })
  }
  /*
	static getDerivedStateFromProps(props, state) {
		if (!_.isEqual(props.records,state.records)) {
			return {
			//   isScrollingDown: props.currentRow > state.lastRow,
			  records: props.records,
			}
		  }
	  
		  // Return null to indicate no change to state.
		  return null
	}*/

  render() {
    const { page, limit, options, context } = this.props
    const { records } = this.props
    const tableCls = "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
    // const tableCls = "w-full"
    const theadCls = "border-b sticky top-0 bg-gray-100 dark:bg-gray-800"

    const emptyRecords = records ? (records.length > 0 ? false : true) : false
    return (
      <div className="block h-screen">
        <table className={tableCls}>
          <thead className={theadCls}>
            <GridHeaders options={options} />
          </thead>
          <tbody className={` overflow-y-auto ${niceScrollbarCls}`}>
            <GridItems empty={emptyRecords} context={context} records={records} page={page} limit={limit} options={options} />
          </tbody>
        </table>
      </div>
    )
  }
}

export default GridTable
