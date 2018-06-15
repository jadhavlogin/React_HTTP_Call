import React, { Component } from 'react';

class DataTable extends Component{
    render(){
        if(this.props.data.length > 0){
            var listItems = this.props.data.map(function(item) {
                return (
                  <tr>
                      <td>{ item.name }</td>
                      <td>{ item.phone }</td>
                      <td>{ item.email }</td>
                      <td>{ item.website }</td>
                  </tr>
                );
              });
          
              return (
                  <table>
                     <thead>
                         <tr>
                             <td>Name</td>
                             <td>Phone</td>
                             <td>Email</td>
                             <td>Website</td>
                         </tr>
                     </thead>
                     <tbody>
                        {listItems}
                     </tbody>    
                  </table>
              );
        }else{
            return (
            <div>
                <p>No data available...</p>
            </div>
            )
        }
    }
}

export default DataTable