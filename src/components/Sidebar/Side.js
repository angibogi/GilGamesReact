import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { GlobalOutlined, AppstoreOutlined, SketchOutlined} from '@ant-design/icons'
import React  from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./Sidebar.css"


const { SubMenu } = Menu




const Side = () => {

    const { user , isAuthenticated,} = useAuth0();

    return (

        <div className="container_side_menu">
            <div className="sidebar">
                <div className ="container text-center my-5">
                    { isAuthenticated ? (
                        <h3>Hi {user.name}!</h3>
                    ):(
                        <h3>Guess</h3>
                    )

                    }
                </div>
                <div className="mt-5">
                <Menu defaultOpenKeys={['sub1']} className={'side-menu'} mode="inline">
                    <Menu.Item key={'topMenuItem1'} icon={<GlobalOutlined />}>
                        <Link to={"/game"} style={{textDecoration: "none"}}> All FreetoPlay </Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<SketchOutlined />} title="Genre">
                        <Menu.Item key="1">
                            <Link to={`/games/fantasy`} style={{textDecoration: "none"}}> Fantasy </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`/games/shooter`} style={{textDecoration: "none"}}>Shooter</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={`/games/mmorpg`} style={{textDecoration: "none"}}>Mmorpg</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to={`/games/survival`} style={{textDecoration: "none"}}>Survival</Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to={`/games/fighting`} style={{textDecoration: "none"}}>Fighting</Link>
                        </Menu.Item>
                        <Menu.Item key="6">
                            <Link to={`/games/racing`} style={{textDecoration: "none"}}>Racing</Link>
                        </Menu.Item>
                        <Menu.Item key="7">
                            <Link to={`/games/sports`} style={{textDecoration: "none"}}>Sports</Link>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Link to={`/games/card`} style={{textDecoration: "none"}}>Card</Link>
                        </Menu.Item>
                        <Menu.Item key="9">
                            <Link to={`/games/horror`} style={{textDecoration: "none"}}>Horror</Link>
                        </Menu.Item>
                        <Menu.Item key="10">
                            <Link to={`/games/anime`} style={{textDecoration: "none"}}>Anime</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Platform">
                        <Menu.Item key="1">
                            <Link to={`/platform/pc`} style={{textDecoration: "none"}}> PC </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`/platform/browser`} style={{textDecoration: "none"}}>Browser Web</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                </div>
</div>

</div>
    );
};

export default Side;


