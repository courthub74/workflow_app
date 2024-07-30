import React from 'react'
import './Page.css'

export default function Page() {
    
    // Get name of logged in User
    let account_name = `${"Courtney Jacobs"}`

    // Print the account user
    let logged_in = `${account_name}`

    // Determine what list name
        // Render the task lists

    // Get task list names
    let list_freelance = `${"In Freelance"}`
    let list_deliverables = `${"In Deliverables"}`
    let list_projects = `${"In Projects"}`
    // program HERE the added todo lists

    // if 'Freelance' then grab list_freelance

    // Print the list names 
        // function that determines the names
    // function get_list() {
    //     if (list_freelance) {
    //         let list_name = `${list_freelance}`
    //     }
    // }
    // let list_name = `${list_freelance}`

    // Get the actual tasks
    let freelance_task = `${"MPS Website"}` 
    let deliverables_task = `${"Social media share buttons"}`
    let projects_task = `${"Skills Project"}`
    // Print the actual tasks

  return (
    <main>
      <div id='home_page'>
        {/* Title takes logged in name */}
        <title>
            <p id='title_words'>{logged_in} you are logged into the <br></br> Workflow App</p>
        </title>
        <article>
            <div className='recents_'>
                <p className='recents_text'>Check out recent activity</p>
            </div>
            <div className='notifys_'>
                <ol>
                    <li className='notify_one'>{freelance_task}-{list_freelance}</li>
                    <li className='notify_two'>{deliverables_task}-{list_deliverables}</li>
                    <li className='notify_three'>{projects_task}-{list_projects}</li>
                </ol>
            </div>
        </article>
      </div>
    </main>
  )
}
