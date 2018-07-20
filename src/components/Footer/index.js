import React from 'react';
import Link from './Link/index';
import List from './List/index';

function Footer () {
    return (
        <List>
            <Link text="Linkedin" href="https://www.linkedin.com/in/laurent-chean-b045465b/" />
            <Link text="Github" href="https://github.com/lchean" />
            <Link text="Instagram (NSFW)" href="https://www.instagram.com/cacaclubmaster/" />
        </List>
    );
}

export default Footer;