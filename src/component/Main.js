import React, {Component} from 'react';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);


    }
    

    createSign(event) {

        event.preventDefault();
        const Social = {
          firstName: this.firstName.value,
          lastName: this.lastName.value,
          email: this.email.value,
          phoneNo: this.phoneNo.value,
          jobTitle: this.jobTitle.value,
          department: this.department.value,
          companyName: this.companyName.value,
          website: this.website.value,
          officeFaxNo: this.officeFaxNo.value,
          officePhoneNo: this.officePhoneNo.value,
          address1: this.address1.value,
          address2: this.address2.value,
          avatar: this.avatar.value
        }
        this.props.addSign(Social);
      }

      handleChange(e) {
        const Sign = this.props.Social;
        const updatedSign = {
          ...Sign,
          [e.target.name]: e.target.value
        }
        this.props.updateSign(updatedSign);
      }
    render() {
        return (
            <form ref={(input) => this.SignForm = input} onSubmit={(e) => this.createSign(e)} >
                <div className="form-row">
                <div className="col-lg-12 form-group">
                        <label htmlFor="avatar">LOGO</label>
                        <select className="form-control" type="text" ref={(input) => this.avatar  = input} onChange={(e) => this.handleChange(e)} name="avatar" placeholder="www.example.com/img.jpg"  >
                        <option value="">- select logo -</option>
                        <option value="https://drive.google.com/uc?id=1d5lUK65BS6a3jDQADrxFFC0Y6n7yYVDe">Sindica Logo - Black</option>
                    </select>
                    </div>   
                    <div className="col-lg-6 form-group">
                        <label htmlFor="lastName">First Name</label>
                        <input className="form-control" type="text" ref={(input) => this.lastName  = input} onChange={(e) => this.handleChange(e)} name="lastName" placeholder="Joe"  />
                    </div>  
                    <div className="col-lg-6 form-group">
                        <label htmlFor="firstName">Last Name</label>
                        <input className="form-control" type="text" ref={(input) => this.firstName = input} name="firstName" onChange={(e) => this.handleChange(e)} placeholder="Smith"  />
                    </div>              
                    <div className="col-lg-6 form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input className="form-control" type="text" ref={(input) => this.jobTitle  = input} onChange={(e) => this.handleChange(e)} name="jobTitle" placeholder="IT Manager"  />
                    </div>
                    {/*<div className="col-lg-6 form-group">
                        <label htmlFor="department">Department</label>
                        <input className="form-control" type="text" ref={(input) => this.department  = input} onChange={(e) => this.handleChange(e)} name="department" placeholder="
                        Department"  />
                    </div>
                    <div className="col-lg-6 form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input className="form-control" type="text" ref={(input) => this.companyName  = input} onChange={(e) => this.handleChange(e)} name="companyName" placeholder="Company Name"  />
                    </div>*/}
                    <div className="col-lg-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control" type="email" ref={(input) => this.email  = input} onChange={(e) => this.handleChange(e)} name="email" placeholder="you@domin.com"  />
                    </div>
                    <div className="col-lg-6 form-group">
                        <label htmlFor="phoneNo">Phone No</label>
                        <input className="form-control" type="text" ref={(input) => this.phoneNo  = input} onChange={(e) => this.handleChange(e)} name="phoneNo" placeholder="555-555-1234"  />
                    </div>
                    {/*<div className="col-lg-6 form-group">
                        <label htmlFor="officePhoneNo">Office Phone No</label>
                        <input className="form-control" type="tel" ref={(input) => this.officePhoneNo  = input} onChange={(e) => this.handleChange(e)} name="officePhoneNo" placeholder="Office Phone No"  />
                    </div>
                    <div className="col-lg-6 form-group">
                    <label htmlFor="officeFaxNo">Office Fax No</label>
                        <input className="form-control" type="tel" ref={(input) => this.officeFaxNo  = input} onChange={(e) => this.handleChange(e)} name="officeFaxNo" placeholder="
                        Office Fax No"  />
                    </div>*/}
                    <div className="col-lg-6 form-group">
                        <label htmlFor="website">Website</label>
                        <input className="form-control" type="text" ref={(input) => this.website  = input} onChange={(e) => this.handleChange(e)} name="website" placeholder="www.domain.com"  />
                    </div>                    
                    {/*<div className="col-lg-12 form-group">
                        <label htmlFor="address1">ADDRESS 1</label>
                        <input className="form-control" type="text" ref={(input) => this.address1  = input} onChange={(e) => this.handleChange(e)} name="address1" placeholder="
                        address1"  />
                    </div>
                    <div className="col-lg-12 form-group">
                        <label htmlFor="address2">ADDRESS 2</label>
                        <input className="form-control" type="text" ref={(input) => this.address2  = input} onChange={(e) => this.handleChange(e)} name="address2" placeholder="address 2"  />
                    </div>*/}
                                     
                </div>
                {/*<div className="text-justify">
                <button type="reset" className="btn btn-md btn-danger"><i className="icon fa fa-sync-alt"></i> Reset Form input</button>
                </div>*/}
            </form>
        );
    }
}