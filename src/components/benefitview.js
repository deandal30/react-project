import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import BenefitDatatable from './benefit_datatable'

class BenefitView extends Component {
	render() {
		return(
            <main>
            <div className="page-title" style={{marginLeft: '150px'}} >
                <div className="ui clearing segment">
                  <div className="ui container" style={{marginTop: '80px'}}>
                    <h1 className="ui left floated header" style={{marginLeft: '-5%'}}>
                      </h1><h2>View Benefit</h2>
                      <div className="clearfix"></div>
                      <div className="ui breadcrumb">
                        <a href="/benefits"> Dashboard  </a>
                        <i className="right angle icon divider"></i>
                        <a href="/benefits"> Benefits  </a>
                        <i className="right angle icon divider"></i>
                        <div className="active section dim thin">{this.props.params.code	}
                        </div>
                      </div>
                  </div>
                </div>
              </div>

              <div className="ui container" style={{paddingLeft: '150px'}}> 
                <div className="content-section white-bg">
                  <div className="ui grid">
                    <div className="row">
                        <div className="two wide computer sixteen wide mobile column"> 
                          <div className="mb-2 center aligned">
                            <div className="mr-2">
                            <img 
                              src={process.env.PUBLIC_URL + '/images/tooth.png'}
                              style={{height: "82px", width: "82px"}}
                            />
                            </div>  
                            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riders</label>
                            
                          </div>
                        </div>
                        <div className="six wide computer eight wide tablet eight wide mobile column">
                          <p className="member-name" style={{color: 'rgb(0, 178, 79)'}}>{this.props.params.code	}</p> 
                            <div className="section-title mt-2">
                              <h1><div className="title-name">{this.props.params.code	}</div></h1>
                            </div>
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                        <div className="two wide computer sixteen wide mobile column" style={{textAlign: 'right', fontSize: '2rem', paddingTop: '1rem'}}><div className="ui dropdown"><i className="ellipsis vertical icon"></i> <div className="menu"><div className="item"><i className="edit outline icon"></i>
                            Edit
                          </div> <div className="item"><i className="clone outline icon"></i>
                            Versions
                          </div> <div className="item"><i className="icon-product icon"></i>
                            View plans
                          </div> <div className="divider"></div> <div className="item"><i className="trash alternate icon"></i>
                            Discontinue
                          </div> <div className="item"><i className="trash alternate icon"></i>
                            Delete
                          </div></div></div></div>
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                          <div className="ui grid"><div className="nine wide column"><div style={{height: '9px'}}></div> <div className="ui form"><div className="three fields"><div className="field dim">
                          LAST UPDATE
                        </div> <div className="field"></div> <div className="field">
                          11/23/2018
                        </div></div> <div className="three fields"><div className="field dim">
                          UPDATED BY
                        </div> <div className="field"></div> <div className="field">
                          masteradmin
                        </div></div> <div className="three fields"><div className="field dim">
                          COVERAGE
                        </div> <div className="field"></div> <div className="field"><div>
                          Dental
                        </div></div></div> <div className="three fields"><div className="field dim">
                          CATEGORY
                        </div> <div className="field"></div> <div className="field">
                          Test  
                        </div></div> <div className="three fields"><div className="field dim">
                          LIMIT TYPE
                        </div> <div className="field"></div> <div className="field"><div><div>
                              Peso
                            </div></div></div></div> <div><div><div className="three fields"><div className="field dim">
                              LIMIT
                            </div> <div className="field"></div> <div className="field"><div>
                                100000
                              </div></div></div></div></div> <div className="three fields"><div className="field dim">
                          FREQUENCY
                        </div> <div className="field"></div> <div className="field"><div>N/A</div></div></div></div></div></div>
                        </div>

                        <div className="sixteen wide computer column ui divider"></div>
                        <h3>CDT</h3>
                        <BenefitDatatable data={this.dataSet}> 
                        </BenefitDatatable>
                    </div>
                  </div>
                </div>
              </div>
            </main>
		);
  }
  
  dataSet = [
    ["CDT01", "CDT01"],
    ["CDT02", "CDT02"],
    ["CDT03", "CDT03"],
    ["CDT04", "CDT04"],
    ["CDT05", "CDT05"],
    ["CDT06", "CDT06"],
    ["CDT07", "CDT07"],
    ["CDT08", "CDT08"],
    ["CDT09", "CDT09"],
    ["CDT10", "CDT10"],
    ["CDT11", "CDT11"],
    ["CDT12", "CDT12"],
    ["CDT13", "CDT13"],
    ["CDT14", "CDT14"],
    ["CDT15", "CDT15"],
    ["CDT16", "CDT16"],
    ["CDT17", "CDT17"],
    ["CDT18", "CDT18"],
    ["CDT19", "CDT19"],
    ["CDT20", "CDT20"],
    ["CDT21", "CDT21"],
    ["CDT22", "CDT22"]
  ]
}

export default BenefitView;