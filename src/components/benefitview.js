import React, { Component } from 'react';

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
                        <a href="/web/benefits/"> {this.props.params.code	} </a>
                        <i className="right angle icon divider"></i>
                        <div className="active section dim thin">Benefit
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
                        <div className="two wide computer sixteen wide mobile column" style={{textAlign: 'right', fontSize: '2rem', paddingTop: '1rem'}}><div tabindex="0" className="ui dropdown"><i className="ellipsis vertical icon"></i> <div tabindex="-1" className="menu"><div className="item"><i className="edit outline icon"></i>
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
                          
                        </div></div> <div className="three fields"><div className="field dim">
                          UPDATED BY
                        </div> <div className="field"></div> <div className="field">
                          
                        </div></div> <div className="three fields"><div className="field dim">
                          COVERAGE
                        </div> <div className="field"></div> <div className="field"><div>
                            Dental
                          </div></div></div> <div className="three fields"><div className="field dim">
                          CATEGORY
                        </div> <div className="field"></div> <div className="field">
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

                        <div class="sixteen wide computer column ui divider"></div>
                        <h3>CDT</h3>
                    </div>
                  </div>
                </div>
              </div>
            </main>
		)
	}
}

export default BenefitView;