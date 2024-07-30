import './Navbar.css';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <div id='logo_div'>
                    <p>Workflow</p>
                    <img src='../img/workflow_icon.png' alt='workflow'/>
                </div>
                <div id='list_div'>
                    <li>Home</li>
                    <li>Notes</li>
                    <li>Tasks</li>
                    <li>Spreadsheets</li>
                </div>
            </ul>
        </nav>
    )
}