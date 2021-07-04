import React from 'react'
import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
            <h2 className="rightbarHead">Friends</h2>
            <hr className="rightbarHr"/>
            <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">SK</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarFriendImgContainer">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">CC PK Chal</span>
                        <span className="onlineFriendStatus"></span>
                        </div>
                       
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Democracy Hai Bhai</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Which Is</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Ab Now</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">SK</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">CC PK Chal</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Democracy Hai Bhai</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Which Is</span>
                    </li>
                    <li className="rightbarFriend">
                        <img className="rightbarFriendImg" src="http://c.files.bbci.co.uk/17B2C/production/_117586079_avatar_getty.jpg" alt="" />
                        <span className="rightbarFriendName">Ab Now</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}