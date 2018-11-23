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
                              style={{height: "80px"}}
                            />
                              <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Riders</label>
                            </div>  
                          </div>
                        </div>
                        <div className="six wide computer eight wide tablet eight wide mobile column">
                          <p className="member-name" style={{color: 'rgb(0, 178, 79)'}}>{this.props.params.code	}</p> 
                            <div className="section-title mt-2">
                              <h1><div className="title-name">{this.props.params.code	}</div></h1>
                            </div>
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                        </div>
                        <div className="eight wide computer eight wide tablet eight wide mobile column">
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
		)
	}
}

export default BenefitView;