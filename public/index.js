// import web3 from 'web3';


class App extends React.Component{
constructor(props){
  super(props);
  this.state = {
    'org' : '',
    'pmonth': '',
    'pyear': '',
    'pdate': '',
    'empee_no': '',
    'empee_name': '',
    'pps_no': '',
    'pagp' : '',
    'cgp' : '',
    'cagp' : '',
    'patd' : '',
    'ctd' : '',
    'catd' : '',
    'patc' : '',
    'ctc' : '',
    'catc' : '',
    'paus' : '',
    'cus' : '',
    'caus' : '',
    'papr' : '',
    'cpr' : '',
    'capr' : '',
    'panp' : '',
    'cnp' : '',
    'canp' : '',
    'date' : '',

  }
}

//To Get Information from database

async componentDidMount(){
  // const result = await axios.get('/get_total_amount');
  // // console.log(result.data["0"].total_amount);
  // this.setState({total_amount: result.data["0"].total_amount});
}

onSubmit = async (event) => {
  // event.preventDefault();
  // const accounts = await web3.eth.getAccounts();
  // this.setState({message: 'Waiting on transaction success....'});
  // await lottery.methods.Approve().send({from: accounts[0]});


//Correct Codes//
/*********************************************/

const response = await axios.post('/post_info',{
  org : this.state.org,
  pmonth: this.state.pmonth,
  pyear: this.state.pyear,
  pdate: this.state.pdate,
  empee_no: this.state.empee_no,
  empee_name: this.state.empee_name,
  pps_no: this.state.pps_no,
  pagp : this.state.pagp,
  cgp : this.state.cgp,
  patd : this.state.patd,
  ctd : this.state.ctd,
  patc : this.state.patc,
  ctc : this.state.ctc,
  paus : this.state.patd,
  cus : this.state.ctd,
  papr : this.state.patd,
  cpr : this.state.ctd,
  panp : this.state.panp,
  cnp : this.state.cnp,
  date : this.state.date

/********************************/


});

console.log(response);
}
render(){
  return(

    <div class="Heading">
      <h1> PROLL System </h1>
      <input placeholder='Enter Business Name' value= {this.state.org} onChange = {event=> this.setState({org : event.target.value})}/> <br/><br/><hr/><hr/>
      <form onSubmit={this.onSubmit}>
      <h1>PAYSLIP</h1>
      <h1><input placeholder='Payrol Month' value= {this.state.pmonth} onChange = {event=> this.setState({pmonth : event.target.value})}/><input placeholder='Enter Year' value= {this.state.pyear} onChange = {event=> this.setState({pyear : event.target.value})}/></h1>
      <div>
      <table width='100%' >
      <tr>
      <td align="left"><p> Pay/Payment Date <input type='Date(dd,mm,yyyy)' placeholder='Enter Pay Date' value= {this.state.pdate} onChange = {event=> this.setState({pdate : event.target.value})}/></p></td>
      <td></td><td></td>
      <td align="right"><p> Employee No. <input type="text" name="" placeholder='Enter Enter Employee No.' value= {this.state.empee_no} onChange = {event=> this.setState({empee_no : event.target.value})} /></p></td>
      </tr>
      <tr>
      <td align="left"><p>Employee Name <input type="text" name="" placeholder="Enter Employee Name" value= {this.state.empee_name}
      onChange = {event=> this.setState({empee_name : event.target.value})} /></p></td>
      <td></td><td></td>
      <td align="right"><p>Employee PPR <input type="text" name="" placeholder="Enter PPS Number" value= {this.state.pps_no}
      onChange = {event=> this.setState({pps_no : event.target.value})} /></p></td>
      </tr>
      <td></td> <td align = "right"><hr/><hr/></td><td align = "center"><hr/><hr/></td>

      <tr><td></td><td align = "right"><h2> Pay / Allowances</h2></td><td  align = "left"><h2>/Deductions </h2></td></tr>
      <tr>
        <td>Pay Allowances and Deductions</td>
        <td>Accumulated Balance (Perious)</td>
        <td>Current Peiord</td>
        <td>Accumulated Balance (Current)</td>
      </tr><br/>
      <tr>
        <td align="left">Gross Pay</td>
        <td><input type="number" name="a" placeholder="Previous Balance" value= {this.state.pagp}
        onChange = {event=> this.setState({pagp : event.target.value})} /></td>
        <td><input type="number" name="b" placeholder="Current Period" value= {this.state.cgp}
        onChange = {event=> this.setState({cgp : event.target.value})} /></td>
        <td><input type="number" name="b" placeholder="Accumulated Balance" value= {this.state.cagp}
        onChange = {event=> this.setState({cagp : event.target.value})} /></td>
      </tr>
      <tr>
        <td align="left">Taxable Deductions</td>
        <td><input type="number" name="" placeholder="Previous Balance" value= {this.state.patd}
        onChange = {event=> this.setState({patd : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Current Period" value= {this.state.ctd}
        onChange = {event=> this.setState({ctd : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Accumulated Balance" value= {this.state.catd}
        onChange = {event=> this.setState({catd : event.target.value})} /></td>
      </tr>
      <tr>
        <td align="left">Tax Credits</td>
        <td><input type="number" name="" placeholder="Previous Balance" value= {this.state.patc}
        onChange = {event=> this.setState({patc : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Current Period" value= {this.state.ctc}
        onChange = {event=> this.setState({ctc : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Accumulated Balance" value= {this.state.catc}
        onChange = {event=> this.setState({catc : event.target.value})} /></td>
      </tr>
      <tr>
        <td align="left">USC</td>
        <td><input type="number" name="" placeholder="Previous Balance" value= {this.state.paus}
        onChange = {event=> this.setState({paus : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Current Period" value= {this.state.csc}
        onChange = {event=> this.setState({csc : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Accumulated Balance" value= {this.state.casc}
        onChange = {event=> this.setState({casc : event.target.value})}/></td>
      </tr>
      <tr>
        <td align="left">PRSI</td>
        <td><input type="number" name="" placeholder="Previous Balance" value= {this.state.papr}
        onChange = {event=> this.setState({papr : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Current Period" value= {this.state.cpr}
        onChange = {event=> this.setState({cpr : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Accumulated Balance" value= {this.state.capr}
        onChange = {event=> this.setState({capr : event.target.value})} /></td>

      </tr>
      <tr>
        <td align="left">Net Pay</td>
        <td><input type="number" name="" placeholder="Previous Balance" value= {this.state.panp}
        onChange = {event=> this.setState({panp : event.target.value})} /></td>
        <td><input type="number" name="" placeholder="Current Period"  value = {this.state.cnp}
        onChange = {event=> this.setState({cnp : event.target.value})}/></td>
        <td><input type="number" name="" placeholder="Accumulated Balance"  value = {this.state.canp}
        onChange = {event=> this.setState({canp : event.target.value})}/></td>
      </tr>
      <tr>
        <td></td><td><br/><hr/><hr/></td><td><br/><hr/><hr/></td> <td></td></tr>
      <tr>
        <td id = "mop" align="left">Mode of Payment</td>
        <td><input id="bt" type="radio"/> Bank Transfer</td>
        <td><input id="che" type="radio"/>Cheque</td>
        <td><input id="cash" type="radio"/>Cash</td>
      </tr>
      </table>
      <h1> Approved and Processed By</h1>
      <input type="Date()" value = {this.state.date}
      onChange = {event=> this.setState({date : event.target.value})}/><br/><br/>
      <button id="exe" type="submit" name="button" onclick="window.print()">Approved</button>
      </div>
      </form>
            <br/><hr/><hr/>
      <p align= "center">Copyright MJH Financial Management @ 2020</p>
      <hr/><hr/>
    </div>
  )
}
};


ReactDOM.render(
  <div>
  <App />
  </div>
  , document.getElementById('reactBinding')
);
