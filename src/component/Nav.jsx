import React, { useEffect } from 'react';

const Nav = () => {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 100)
                document.getElementById("navbar").style.backgroundColor = "#000";
            else
                document.getElementById("navbar").style.backgroundColor = "transparent";
        })
    }, [])


    return (
        <div className='nav' id='navbar'>
            <div className='nav-container'>
                <div className='nav-left'>
                    <img src='./image/Netflix-Logo.png' alt='logo' />
                </div>
                <div className='nav-right'>
                    <img src='./image/Netflix-avatar.png' alt='avatar' />
                </div>
            </div>
        </div>
    )
}

export default Nav;