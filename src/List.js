import React from 'react'
class List extends React.Component {
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.items.map((item, index) => {
                    return <>

                        <div className='container inline-block'>
                            <p className='font-weight-bold font-italic'>{item.user}</p>
                            <li className="list-group-item" key={index}>
                                {`${item.text}`}
                            </li>

                        </div>

                    </>
                })}
            </ul>
        )
    }
}
export default List