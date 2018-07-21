import React from 'react';
import {Menu, Button, Icon} from 'semantic-ui-react';

const OrderOnline = ({width}) => {
    return (
    <Menu.Item>
        <Icon size='large' name='food' color='green'></Icon>
        {width > 839 ? <span>Order Online</span> : ''}
    </Menu.Item>
    )
} 

const CallNow = ({width}) => {
    return (
        <Menu.Item>
            <a href='tel:555-555-5555'>
                <Icon size='large' name='call square'/>
                {width > 839 ? <span className='call-slogan'>(555) 555-5555</span> : ''}
            </a>
        </Menu.Item>
    )
}

const Location = ({width}) => (
        width > 400 ?
        <Menu.Item>
            <Icon size='large' name='location arrow' color='blue'></Icon>
            {width > 839 ? <span>Location</span> : ''}
        </Menu.Item>
        :''
)

const SignIn = ({width}) => {
    return (
        <Menu.Item>
            {width > 600 ? 
                <Button primary size='mini'>Sign in to Order</Button> :
                <Icon size='large' name='user'/>
            }
        </Menu.Item>
    )
}

const Cart = ({width}) => (
    width > 300 ?
    <Menu.Item>
        {/*<Icon size='large' name='shopping cart' color='grey'></Icon>*/}
        <img src='http://getdrawings.com/images/chinese-food-drawing-5.png' width='80' height='auto' />
    </Menu.Item> 
    : ''
)

const HamburgerMenu = () => (
    <Menu.Item>
        <Icon name='bars' size='large'/>            
    </Menu.Item>
)

const ExpandedNavigation = ({width}) => (
    <Menu.Menu>
        <OrderOnline width={width}/>
        <CallNow width={width}/>
        <SignIn width={width}/> 
        <Cart width={width}/>
    </Menu.Menu>
)

const CollapsedNavigation = ({width}) => (
    <Menu.Menu>
        <CallNow width = {width} />
        <Location width={width}/>
        <Cart width={width} />
        <HamburgerMenu />
    </Menu.Menu>
    
)

const Navigation = ({width}) => (
    width > 500 ? <ExpandedNavigation width={width} /> : <CollapsedNavigation width={width} />
)

const styles = {  display: 'flex', justifyContent: 'center'}

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {width: document.documentElement.clientWidth};
        this.updateWidth = this.updateWidth.bind(this);
    }

    updateWidth() {
        const width = document.documentElement.clientWidth;
        this.setState({width});
    }

    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }


    render() {
        const {width} = this.state;

        return (
            <div style={width > 330 ? styles : {}}>
            <Menu className='nav' style={width <= 420 ? {...styles, justifyContent: 'space-evenly'} : {}}>
                <Menu.Item header >
                    <Icon size='large' name='chess queen' color='yellow'></Icon>
                    <span>{width > 375 ? 'Golden Crown' : 'GC'}</span>
                </Menu.Item>
                <Navigation width={width} />

            </Menu>
            </div>
        )
    }
    
}

export default NavBar;