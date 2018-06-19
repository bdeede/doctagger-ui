import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";


import CheckIcon from 'mdi-react/CheckIcon';
import {Button, ButtonGroup} from 'reactstrap';
import Moment from 'react-moment';

// import StarIcon from 'mdi-react/StarIcon';

export default class DocumentListItem extends PureComponent {

  render() {
    return (
      <tr key={this.props.eTag} className='inbox__email-list-item'>
        <td>
          <label
            className='checkbox-btn inbox__email-list-item-checkbox'>
            <input className='checkbox-btn__checkbox' type='checkbox'/>
            <span className='checkbox-btn__checkbox-custom'>
            <CheckIcon/>
          </span>
          </label>
        </td>
        <td>{this.props.isFolder ? <span className='lnr lnr-enter'/> : <span className='lnr lnr-file-empty'/>} {this.props.dockey}</td>
    <td>{this.props.isFolder ? '--' : <Moment format="YYYY/MM/DD hh:mm:sss">{this.props.lastModified}</Moment> }</td>
        <td>{this.props.isFolder ? '--' : this.props.size}</td>
        <td><ButtonGroup className='btn-group--icons'>
              <Button onClick={this.props.handleDelete} color='danger' outline size='sm'><span className='lnr lnr-trash'/></Button>
            </ButtonGroup></td>
        <td>{this.props.isFolder ? '' : <ButtonGroup className='btn-group--icons'>
              <Button outline size='sm'>
              <Link to={`/documentmetadata/${this.props.eTag}`} style={{display: 'block', height: '100%'}}>
                <span className='lnr lnr-tag'/>
              </Link>
              </Button>
            </ButtonGroup>}
        </td>


      </tr>
    )
  }
}
