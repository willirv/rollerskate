
//Import raise button from google material ui 
import RaiseButton from '@material-ui/core/AppBar';
//Import AppBar from material ui 
import AppBar from '@material-ui/core/AppBar';
// Import text field from material Ui
import TextField from '@material-ui/core/TextField';
// Import Linear Progression bar from material ui
import LinearProgress from '@material-ui/core/LinearProgress';


// Create login component
class Login extends Component{
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}
}

// Render Component - Login component
render(){
	return(
		<div>
		   <MultiThemeProvider>
		     <div>
		     // Import app bar from google material ui
             <AppBar
                 title="Login"
             />
             // Prompts user to enter their Username 
             <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event, newValue) => this.setState({username:newvalue})}
                />
             <br>
             <TextField
                hintText="Enter your password"
                floatingLabelText="Username"
                onChange = {(event, newvalue)}
		);
}

export default Login;